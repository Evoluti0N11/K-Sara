window._s_k_d = Array.from({length: 46}, (_, i) => "SR" + (i * 13 + 7) + "K");

// --- DAY 1 TO 5: THE CORE FOUNDATION (Unchanged from your original logic) ---
const DETAILED_LESSONS = [
    // ... [PASTE YOUR EXACT ORIGINAL DETAILED_LESSONS ARRAY FOR DAYS 1 TO 5 HERE] ...
];

const ADVANCED_TOPICS = [
    // ... [PASTE YOUR EXACT ORIGINAL ADVANCED_TOPICS ARRAY FOR DAYS 6 TO 45 HERE] ...
];

const MAP_REGIONS = [
    // ... [PASTE YOUR EXACT ORIGINAL MAP_REGIONS ARRAY HERE] ...
];

const LIBRARY_DATA = [
    // ... [PASTE YOUR EXACT ORIGINAL LIBRARY_DATA ARRAY HERE] ...
];

const WOTD_POOL = [
    // ... [PASTE YOUR EXACT ORIGINAL WOTD_POOL ARRAY HERE] ...
];

// --- PROCEDURAL GENERATOR WITH NEW EXERCISE TYPES ---
const generateFullMonth = () => {
    // Note: We need completedDays from local storage to know which map regions to inject
    let savedData = { completedDays: [] };
    try { savedData = JSON.parse(localStorage.getItem('sara_korean_save_v3')) || savedData; } catch(e) {}
    const unlockedDays = savedData.completedDays || [];

    const fullCourse = [...DETAILED_LESSONS];

    for (let i = 6; i <= 45; i++) {
        const t = ADVANCED_TOPICS[i - 6];
        const clueWord = t.clue.split('=')[0].trim().replace(/[()]/g, '');
        const clueEng = t.clue.split('=')[1] ? t.clue.split('=')[1].trim() : t.clue;

        let dailyExercises = [];

        // 1. Standard Concept Intro
        dailyExercises.push({
            type: 'multiple_choice',
            question: `Situazione: ${t.scenario}. Cosa significa "${t.romaji}"?`,
            options: [t.eng, "Non capisco bene", "Dov'è il bagno?"],
            optionsHangul: [t.hangul, "몰라요", "화장실이 어디예요"],
            answer: 0,
            conceptTag: "Vocabolario Nuovo",
            tip: `Ricorda: ${t.clue}`
        });

        // 2. NEW: Sentence Builder (Tap-to-build for mobile)
        const words = t.hangul.split(' ');
        if (words.length > 1) {
            const distractors = ["요", "는", "가", "입니다", "안녕"].sort(() => 0.5 - Math.random()).slice(0, 2);
            const options = [...words, ...distractors].sort(() => 0.5 - Math.random());
            dailyExercises.push({
                type: 'sentence_builder',
                question: `Costruisci la frase: "${t.eng}"`,
                expected: words,
                options: options,
                conceptTag: "Costruzione Frase",
                tip: "Tocca le parole nell'ordine corretto per formare la frase."
            });
        } else {
             // Fallback to listening if it's a single word
             dailyExercises.push({
                type: 'listen',
                question: "Ascolta l'audio e seleziona la traduzione:",
                audioHangul: t.hangul,
                options: [t.eng, "Vado in Palestra", "Quanto costa?"],
                answer: 0,
                conceptTag: "Ascolto Nuovo",
                tip: "Ascolta attentamente la pronuncia."
            });
        }

        // 3. NEW: Map Contextualization Review
        const availableMapRegions = MAP_REGIONS.filter(r => r.unlocksAtDay < i && unlockedDays.includes(r.unlocksAtDay));
        if (availableMapRegions.length > 0) {
            const randomRegion = availableMapRegions[Math.floor(Math.random() * availableMapRegions.length)];
            const randomPhrase = randomRegion.phrases[Math.floor(Math.random() * randomRegion.phrases.length)];
            dailyExercises.push({
                type: 'multiple_choice',
                question: `[Korea Tour Review] Ti trovi a ${randomRegion.name}. Come dici: "${randomPhrase.eng}"?`,
                options: [randomPhrase.romaji, "Mollayo", "Gwaenchanayo"],
                optionsHangul: [randomPhrase.hangul, "몰라요", "괜찮아요"],
                answer: 0,
                conceptTag: `Tour: ${randomRegion.name}`,
                tip: `Hai sbloccato questa frase al Giorno ${randomRegion.unlocksAtDay}!`
            });
        }

        // 4. NEW: Matching Pairs (Vocabulary recall)
        // Grab 2 random previously learned items to match alongside the new one
        const previousTopics = ADVANCED_TOPICS.slice(0, Math.max(1, i - 6)).sort(() => 0.5 - Math.random()).slice(0, 2);
        const matchPairs = [
            {ko: t.hangul, it: t.eng},
            ...previousTopics.map(pt => ({ko: pt.hangul, it: pt.eng}))
        ];
        dailyExercises.push({
            type: 'matching',
            question: "Abbina i concetti Coreani alla traduzione Italiana:",
            pairs: matchPairs,
            conceptTag: "Ripasso Vocaboli",
            tip: "Tocca un blocco coreano e poi la sua traduzione."
        });

        // 5. Speech Practice
        dailyExercises.push({
            type: 'speak',
            question: `Pronuncia ad alta voce: '${t.eng}'`,
            expectedRomaji: [t.romaji.toLowerCase().replace(/[^a-z]/g, '')],
            expectedHangul: [t.hangul],
            conceptTag: "Pronuncia",
            feedback_incorrect: `Prova a dire '${t.romaji}' ad alta voce in modo chiaro.`,
            tip: "Non avere paura di sbagliare l'accento."
        });

        fullCourse.push({
            day: i,
            title: `Giorno ${i}: ${t.name}`,
            topic: "Conversazione Intermedia",
            theory: {
                intro: `Benvenuta al Giorno ${i}, Sara! Oggi affrontiamo uno scenario per te essenziale: "${t.name}". Impareremo una frase nuova e faremo tanto ripasso attivo.`,
                concept: `Studia bene la frase chiave. Negli esercizi troverai domande ripetitive e sfide di costruzione frasi!`,
                builderRule: `🔗 Chain link: Prova a concatenare mentalmente ${t.hangul} con una presentazione o un saluto.`,
                buildingBlocks: `💡 Mattoncini: <strong>${clueWord}</strong> = <em>${clueEng}</em>.`,
                examples: [{ hangul: t.hangul, romaji: t.romaji, eng: t.eng, context: "Frase Focus del Giorno ✨" }],
                culture: t.clue
            },
            exercises: dailyExercises
        });
    }
    return fullCourse;
};

window.COURSE_DATA = generateFullMonth();
window.MAP_REGIONS = MAP_REGIONS;
window.LIBRARY_DATA = LIBRARY_DATA;
window.WOTD_POOL = WOTD_POOL;
