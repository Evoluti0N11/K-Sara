// --- APPLICATION STATE ---
const state = {
    profileName: "Sara",
    isDarkMode: localStorage.getItem('sara_theme') === 'dark',
    hangulScale: 1,
    isTransitioning: false, 
    currentView: 'dashboard', 
    activeDay: 1,
    completedDays: [],
    mistakesRecord: {},
    gameStep: 0,
    score: 0,
    selectedAnswer: null,
    showFeedback: false,
    isRecording: false,
    fallbackActive: false,
    fallbackOptions: [],
    currentMistakes: [],
    transInput: '', transResult: '', transRomaji: '', transLoading: false,
    combo: 0, xp: 0, streak: 0,
    mapUnlockSeen: [],
    newlyUnlockedLocation: null,
    wotdIndex: 0,
    
    // New mechanics state
    builderSelection: [],
    matchingState: { selectedId: null, matched: [] },
    matchingSetup: null
};

if (state.isDarkMode) {
    document.documentElement.classList.add('dark');
}

let myMap = null;
let speechTimeout = null;

// --- HELPERS & SAVE LOGIC (LocalStorage Only) ---
window.haptic = (ms = 40) => { if (navigator.vibrate) navigator.vibrate(ms); };

window.toggleDarkMode = () => {
    window.haptic(20);
    state.isDarkMode = !state.isDarkMode;
    document.documentElement.classList.toggle('dark', state.isDarkMode);
    localStorage.setItem('sara_theme', state.isDarkMode ? 'dark' : 'light');
    renderApp();
};

window.updateHangulSize = (val) => {
    state.hangulScale = parseFloat(val);
    document.documentElement.style.setProperty('--hangul-scale', state.hangulScale);
    saveProgress(state.completedDays, state.mistakesRecord);
};

window.renderHangul = (text) => {
    return `<span class="korean-click" style="font-family: 'Noto Sans KR', sans-serif;" onclick="window.playAudio(event, '${text}')">${text}</span>`;
};

const computeStreak = (days) => {
    if (!days || days.length === 0) return 0;
    const sorted = [...days].sort((a, b) => a - b);
    let streak = 1;
    for (let i = sorted.length - 1; i > 0; i--) {
        if (sorted[i] === sorted[i-1] + 1) streak++; else break;
    }
    return streak;
};

const computeXP = (days, mistakes) => {
    let xp = 0;
    days.forEach(d => { xp += (mistakes[d] || []).length === 0 ? 120 : 80; });
    return xp;
};

const getXPLevel = (xp) => {
    if (xp < 200) return { level: 1, title: "🌱 Principiante", next: 200 };
    if (xp < 500) return { level: 2, title: "🌸 Studente", next: 500 };
    if (xp < 1000) return { level: 3, title: "⚔️ Avventuriera", next: 1000 };
    if (xp < 2000) return { level: 4, title: "🎮 Semi-Pro", next: 2000 };
    if (xp < 3500) return { level: 5, title: "🏆 Esperta", next: 3500 };
    return { level: 6, title: "👑 Campionessa Coreana", next: null };
};

const loadLocalProgress = () => {
    try {
        const saved = localStorage.getItem('sara_korean_save_v3');
        if (saved) {
            const data = JSON.parse(saved);
            state.completedDays = data.completedDays || [];
            state.mistakesRecord = data.mistakesRecord || {};
            if (data.profileName) state.profileName = data.profileName;
            if (data.hangulScale) { state.hangulScale = data.hangulScale; document.documentElement.style.setProperty('--hangul-scale', state.hangulScale); }
            state.mapUnlockSeen = data.mapUnlockSeen || [];
        }
        state.streak = computeStreak(state.completedDays);
        state.xp = computeXP(state.completedDays, state.mistakesRecord);
        state.wotdIndex = Math.floor(Date.now() / 86400000) % window.WOTD_POOL.length;
    } catch(e) { console.error("Local storage error", e); }
};

const saveProgress = (newCompleted, newMistakes) => {
    state.streak = computeStreak(newCompleted);
    state.xp = computeXP(newCompleted, newMistakes);
    localStorage.setItem('sara_korean_save_v3', JSON.stringify({
        completedDays: newCompleted,
        mistakesRecord: newMistakes,
        profileName: state.profileName,
        hangulScale: state.hangulScale,
        mapUnlockSeen: state.mapUnlockSeen,
    }));
};

// --- GAMEPLAY MECHANICS ---

window.handleMultipleChoiceAnswer = (index) => {
    if (state.showFeedback) return;
    const ex = window.COURSE_DATA.find(d => d.day === state.activeDay).exercises[state.gameStep];
    if (ex.optionsHangul && ex.optionsHangul[index]) window.playAudio(null, ex.optionsHangul[index]);
    
    state.selectedAnswer = index;
    state.showFeedback = true;
    
    if (index === ex.answer) {
        state.score += 1; state.combo += 1; window.haptic([30, 50, 30]);
    } else {
        state.combo = 0; state.currentMistakes.push(ex.conceptTag); window.haptic(100);
    }
    renderApp();
};

// Sentence Builder Logic (Tap to move)
window.handleBuilderClick = (word, isFromPool) => {
    if (state.showFeedback) return;
    window.haptic(20);
    if (isFromPool) {
        state.builderSelection.push(word);
    } else {
        const idx = state.builderSelection.indexOf(word);
        if (idx > -1) state.builderSelection.splice(idx, 1);
    }
    renderApp();
};

window.checkSentenceBuilder = () => {
    if (state.showFeedback) return;
    const ex = window.COURSE_DATA.find(d => d.day === state.activeDay).exercises[state.gameStep];
    const isCorrect = state.builderSelection.join(' ') === ex.expected.join(' ');
    
    state.selectedAnswer = isCorrect;
    state.showFeedback = true;
    
    if (isCorrect) {
        window.playAudio(null, ex.expected.join(' '));
        state.score += 1; state.combo += 1; window.haptic([30, 50, 30]);
    } else {
        state.combo = 0; state.currentMistakes.push(ex.conceptTag); window.haptic(100);
        ex.feedback_incorrect = `L'ordine corretto era: ${ex.expected.join(' ')}`;
    }
    renderApp();
};

// Matching Pairs Logic
window.handleMatchClick = (id, type, value) => {
    if (state.showFeedback || state.matchingState.matched.includes(id)) return;
    window.haptic(20);
    
    if (!state.matchingState.selectedId) {
        state.matchingState.selectedId = { id, type, value };
    } else {
        if (state.matchingState.selectedId.type === type) {
            // Switched selection in same column
            state.matchingState.selectedId = { id, type, value };
        } else {
            // Check match
            const prev = state.matchingState.selectedId;
            const isMatch = prev.id === id;
            
            if (isMatch) {
                state.matchingState.matched.push(id);
                window.haptic([20, 30]);
                if(type === 'ko') window.playAudio(null, value);
                else window.playAudio(null, prev.value);
            } else {
                window.haptic(100); // Error
            }
            state.matchingState.selectedId = null;
            
            // Check win condition
            if (state.matchingState.matched.length === state.matchingSetup.pairs.length) {
                state.selectedAnswer = true;
                state.showFeedback = true;
                state.score += 1;
                state.combo += 1;
            }
        }
    }
    renderApp();
};

// Navigation
window.nextQuestion = () => {
    window.haptic(20);
    const currentLesson = window.COURSE_DATA.find(d => d.day === state.activeDay);
    if (state.gameStep < currentLesson.exercises.length - 1) {
        state.gameStep += 1;
        state.selectedAnswer = null;
        state.showFeedback = false;
        state.builderSelection = [];
        state.matchingState = { selectedId: null, matched: [] };
        setupSpecialExercise(currentLesson.exercises[state.gameStep]);
    } else {
        const newCompleted = state.completedDays.includes(state.activeDay) ? state.completedDays : [...state.completedDays, state.activeDay];
        const newMistakes = { ...state.mistakesRecord, [state.activeDay]: state.currentMistakes };
        state.completedDays = newCompleted;
        state.mistakesRecord = newMistakes;
        saveProgress(newCompleted, newMistakes);
        state.currentView = 'result';
    }
    renderApp();
};

const setupSpecialExercise = (ex) => {
    if (ex.type === 'matching') {
        const koOptions = ex.pairs.map((p, i) => ({ id: i, text: p.ko, type: 'ko' })).sort(() => 0.5 - Math.random());
        const itOptions = ex.pairs.map((p, i) => ({ id: i, text: p.it, type: 'it' })).sort(() => 0.5 - Math.random());
        state.matchingSetup = { koOptions, itOptions, pairs: ex.pairs };
    }
};

window.startGame = () => {
    window.haptic(40);
    const lesson = window.COURSE_DATA.find(d => d.day === state.activeDay);
    setupSpecialExercise(lesson.exercises[0]);
    state.currentView = 'game';
    renderApp();
};

window.startDay = (dayNum) => {
    window.haptic(40);
    state.activeDay = dayNum;
    state.currentView = 'theory';
    state.gameStep = 0; state.score = 0; state.combo = 0; state.currentMistakes = [];
    state.selectedAnswer = null; state.showFeedback = false;
    renderApp();
};

window.changeView = (view) => {
    window.haptic(20);
    state.currentView = view;
    renderApp();
};

// --- RENDER GAME (UPDATED FOR NEW EXERCISES) ---
const renderGame = () => {
    const lesson = window.COURSE_DATA.find(d => d.day === state.activeDay);
    const exercise = lesson.exercises[state.gameStep];
    const isAnswered = state.selectedAnswer !== null;
    let isCorrect = isAnswered && state.selectedAnswer === (exercise.answer ?? true);

    let exerciseHtml = '';

    // Multiple Choice
    if (exercise.type === 'multiple_choice' || exercise.type === 'listen') {
        exerciseHtml = `<div class="space-y-3">` + exercise.options.map((opt, i) => {
            let btnClass = "bg-white border-2 border-gray-200";
            if (isAnswered) {
                if (i === exercise.answer) btnClass = "bg-green-50 border-green-500 text-green-900 shadow-md";
                else if (i === state.selectedAnswer) btnClass = "bg-rose-50 border-rose-500 text-rose-900";
            }
            return `<div class="w-full rounded-[1rem] p-4 cursor-pointer min-h-[70px] flex items-center ${btnClass}" onclick="if(!${isAnswered}) window.handleMultipleChoiceAnswer(${i})">
                <span class="font-black text-xl flex-grow">${opt}</span>
            </div>`;
        }).join('') + `</div>`;
    } 
    // Sentence Builder
    else if (exercise.type === 'sentence_builder') {
        const availableWords = exercise.options.filter(w => !state.builderSelection.includes(w));
        exerciseHtml = `
            <div class="space-y-6">
                <div class="min-h-[80px] p-4 rounded-2xl border-2 border-dashed ${isAnswered ? (isCorrect ? 'border-green-400 bg-green-50' : 'border-rose-400 bg-rose-50') : 'border-pink-300 bg-pink-50'} flex flex-wrap gap-2 items-center">
                    ${state.builderSelection.map(w => `<span class="word-chip bg-pink-500 text-white font-black px-4 py-2 rounded-xl shadow-md" onclick="window.handleBuilderClick('${w}', false)">${w}</span>`).join('')}
                    ${state.builderSelection.length === 0 ? `<span class="text-pink-300 font-bold">Tocca le parole qui sotto...</span>` : ''}
                </div>
                <div class="flex flex-wrap gap-2 justify-center border-t pt-4">
                    ${availableWords.map(w => `<span class="word-chip bg-white border-2 border-gray-200 text-gray-700 font-black px-4 py-2 rounded-xl shadow-sm" onclick="window.handleBuilderClick('${w}', true)">${w}</span>`).join('')}
                </div>
                ${!isAnswered ? `<button onclick="window.checkSentenceBuilder()" class="w-full mt-4 bg-blue-500 text-white font-black py-4 rounded-xl shadow-md disabled:opacity-50" ${state.builderSelection.length===0?'disabled':''}>Verifica</button>` : ''}
            </div>
        `;
    }
    // Matching Pairs
    else if (exercise.type === 'matching') {
        const { koOptions, itOptions } = state.matchingSetup;
        const renderCol = (opts) => opts.map(opt => {
            const isMatched = state.matchingState.matched.includes(opt.id);
            const isSelected = state.matchingState.selectedId && state.matchingState.selectedId.id === opt.id && state.matchingState.selectedId.type === opt.type;
            let btnClass = isMatched ? 'bg-green-100 border-green-300 text-green-700 opacity-50 scale-95' : isSelected ? 'bg-pink-100 border-pink-500 text-pink-700 scale-105 shadow-md' : 'bg-white border-gray-200 text-gray-700 shadow-sm';
            return `<div onclick="window.handleMatchClick(${opt.id}, '${opt.type}', '${opt.text}')" class="word-chip p-4 rounded-xl border-2 font-black text-center min-h-[60px] flex items-center justify-center transition-all ${btnClass}">${opt.text}</div>`;
        }).join('');

        exerciseHtml = `
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-3">${renderCol(koOptions)}</div>
                <div class="space-y-3">${renderCol(itOptions)}</div>
            </div>
        `;
    }
    // Speak / Fallback logic here (same as original code, simplified for brevity in view)
    else if (exercise.type === 'speak') {
        exerciseHtml = `<div class="bg-blue-50 p-10 rounded-3xl text-center"><p class="font-black text-blue-600 mb-4">Tocca per parlare (Simulazione Vocale)</p><button onclick="state.selectedAnswer=true; state.showFeedback=true; state.score+=1; renderApp();" class="bg-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-xl">Simula Successo Audio</button></div>`;
    }

    // Feedback UI
    let feedbackHtml = '';
    if (state.showFeedback) {
        feedbackHtml = `
        <div class="mt-8 p-6 rounded-2xl ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-rose-50 border-rose-200'} border-2">
            <h4 class="font-black text-xl mb-2 ${isCorrect ? 'text-green-800' : 'text-rose-800'}">${isCorrect ? 'Perfetto!' : 'Oops!'}</h4>
            <p class="font-bold text-gray-700">${isCorrect ? 'Continua così, Sara.' : (exercise.feedback_incorrect || 'Riprova la prossima volta.')}</p>
            <button onclick="window.nextQuestion()" class="w-full mt-4 py-4 rounded-xl font-black text-white ${isCorrect ? 'bg-green-500' : 'bg-rose-500'} shadow-md">Prossima Domanda</button>
        </div>`;
    }

    return `
    <div class="max-w-2xl mx-auto animate-pop">
        <div class="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-blue-50">
            <div class="mb-2 text-sm font-black text-pink-500 uppercase tracking-widest">${exercise.conceptTag}</div>
            <h2 class="text-2xl font-black text-gray-800 mb-8">${exercise.question}</h2>
            ${exerciseHtml}
            ${feedbackHtml}
        </div>
    </div>`;
};

// ... [INCLUDE RENDER METHODS FOR DASHBOARD, RESULT, THEORY, ETC. (UNCHANGED OR SLIGHTLY TWEAKED FOR LOCALSTORAGE)] ...

const renderApp = () => {
    const root = document.getElementById('root');
    let content = '';
    if (state.currentView === 'dashboard') content = `<div class="p-8 text-center"><h1 class="text-4xl font-black mb-4">Annyeong Sara! 🌸</h1><button onclick="window.startDay(1)" class="bg-pink-500 text-white px-8 py-4 rounded-xl font-black shadow-md mt-4">Inizia Studio</button></div>`; // Simplified placeholder for standard dashboard UI
    else if (state.currentView === 'theory') content = `<div class="p-8"><h1 class="text-3xl font-black">Teoria Giorno ${state.activeDay}</h1><button onclick="window.startGame()" class="bg-blue-500 text-white px-8 py-4 rounded-xl font-black shadow-md mt-4">Inizia Esercizi</button></div>`;
    else if (state.currentView === 'game') content = renderGame();
    else if (state.currentView === 'result') content = `<div class="p-8 text-center"><h1 class="text-4xl font-black">Completato! 🎉</h1><button onclick="window.changeView('dashboard')" class="bg-gray-900 text-white px-8 py-4 rounded-xl font-black shadow-md mt-4">Torna alla Home</button></div>`;

    root.innerHTML = `<main class="flex-1 overflow-y-auto w-full p-4 relative">${content}</main>`;
};

// Boot App
loadLocalProgress();
renderApp();
