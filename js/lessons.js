/* ===== lessons.js — Lezioni del corso per Sara Korean App =====
 *
 * 📝 GUIDA PER MODIFICARE LE LEZIONI (anche senza saper programmare):
 *
 * Ogni lezione è un blocco { day, title, topic, theory, exercises }
 *
 * PER CAMBIARE UNA FRASE NELL'ESEMPIO:
 *   Cerca hangul: 안녕하세요  →  cambia il valore tra virgolette
 *   Cambia anche romaji (come si pronuncia) e eng (traduzione)
 *
 * PER CAMBIARE UNA DOMANDA:
 *   Cerca question: ...  →  cambia il testo della domanda
 *
 * PER CAMBIARE LE OPZIONI DI UN ESERCIZIO A SCELTA MULTIPLA:
 *   Cerca options: [...]  →  cambia i 3 valori in romaji
 *   Cerca optionsHangul: [...]  →  cambia i 3 valori in Hangul
 *   answer: 0 significa la PRIMA opzione è corretta (0=prima, 1=seconda, 2=terza)
 *
 * TIPI DI ESERCIZIO DISPONIBILI:
 *   multiple_choice  — scelta multipla con romaji
 *   listen           — ascolta l'audio e scegli
 *   speak            — pronuncia con il microfono
 *   conversation     — dialogo con Hangul nelle opzioni
 *   fill_blank       — completa la parola mancante
 *   sentence_builder — trascina le parole nell'ordine giusto
 *   dialogue         — costruisci un dialogo completo (giorni 35-45)
 *   text_fill        — completa un testo con più spazi (giorni 40-45)
 *
 * ⚠️ NON MODIFICARE i nomi dei campi (day, title, type, ecc.)
 *    Modifica SOLO i valori tra virgolette ...
 * ===== */

window.COURSE_DATA = [
  {
    "day": 1,
    "title": "Annyeong Seoul! Sopravvivenza Base 🇰🇷",
    "topic": "Saluti & Prime Parole",
    "theory": {
      "intro": "Benvenuta in questo viaggio, Sara! Oggi impariamo le basi assolute. In Corea non si inizia MAI una conversazione senza salutare. Il saluto apre ogni porta: in palestra, al PC Bang per LoL, al negozio di cosplay, o davanti al tuo drama preferito.",
      "concept": "I coreani hanno due modi di salutare: FORMALE (con persone che non conosci o più grandi) e INFORMALE (con amici vicini). Per i tuoi primi giorni a Seoul: usa SEMPRE il formale. Non puoi sbagliare!",
      "builderRule": "🔗 Chain link: Il segreto dei K-drama è la sequenza. 안녕하세요 (saluto) → 저는 사라예요 (Io sono Sara) → 반갑습니다 (Piacere)! Impara questa combo di 3 frasi: è la tua prima presentazione completa in coreano!",
      "examples": [
        {
          "hangul": "안녕하세요",
          "romaji": "Annyeonghaseyo",
          "eng": "Ciao (Formale)",
          "context": "La parola che userai di più. In palestra, al supermercato, con il tassista. Impararla bene è il 50% del lavoro! 🙏"
        },
        {
          "hangul": "안녕",
          "romaji": "Annyeong",
          "eng": "Ciao (Informale)",
          "context": "Solo con amici coreani della tua età. Come i protagonisti di 2521! 💕"
        },
        {
          "hangul": "감사합니다",
          "romaji": "Gamsahamnida",
          "eng": "Grazie (Formale)",
          "context": "Per ringraziare il barista, il negoziante, il tuo support su LoL. Pronuncia: GAM-SA-HAM-NI-DA. 🙌"
        },
        {
          "hangul": "죄송합니다",
          "romaji": "Joesonghamnida",
          "eng": "Mi scusi / Scusa (Formale)",
          "context": "Indispensabile per muoversi nella folla coreana senza offendere nessuno. 🙇‍♀️"
        },
        {
          "hangul": "안녕히 계세요",
          "romaji": "Annyeonghi gyeseyo",
          "eng": "Arrivederci (tu vai, lei resta)",
          "context": "Dillo al negoziante quando esci dall'Animate Store dopo aver comprato costumi! 🎭"
        },
        {
          "hangul": "안녕히 가세요",
          "romaji": "Annyeonghi gaseyo",
          "eng": "Arrivederci (lei va, tu resti)",
          "context": "Quando è qualcun altro ad andarsene. Complicato all'inizio, ma ci prenderai la mano! 🌸"
        },
        {
          "hangul": "화이팅",
          "romaji": "Hwaiting",
          "eng": "Forza! / Dai!",
          "context": "Il 'Fighting' usato nei K-drama, in palestra o per caricarsi su LoL! 💪"
        },
        {
          "hangul": "반갑습니다",
          "romaji": "Bangapseumnida",
          "eng": "Piacere di conoscerti (Formale)",
          "context": "Indispensabile dopo esserti presentata! Completa ogni auto-presentazione. 🤝"
        }
      ],
      "culture": "Fai attenzione: 'Gyeseyo' significa 'restare (in pace)', 'Gaseyo' significa 'andare (in pace)'. Sbagliarli è il classico errore degli stranieri. Curiosità: l'Hangul si legge da sinistra a destra e dall'alto verso il basso all'interno di ogni blocco sillabico."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Entri in una palestra (Gym) a Seoul e incroci il personal trainer. Cosa dici per prima cosa?",
        "options": [
          "Joesonghamnida",
          "Annyeonghaseyo",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "죄송합니다",
          "안녕하세요",
          "감사합니다"
        ],
        "answer": 1,
        "conceptTag": "Saluti Palestra",
        "feedback_incorrect": "Hai scelto male. Quando incontri qualcuno, usa sempre 'Annyeonghaseyo'.",
        "tip": "'Annyeonghaseyo' letteralmente significa 'Sei in pace?' — perfetto per la palestra.",
        "optionsRomaji": [
          "",
          "",
          "Gamsahamnida"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta l'audio. Cosa significa questa frase usatissima nei drama come 2521?",
        "audioHangul": "감사합니다",
        "options": [
          "Grazie",
          "Ciao",
          "Forza!"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "La risposta giusta era 'Grazie'.",
        "tip": "Ascolta il suono 'Gamsa'. Gamsahamnida è il grazie universale.",
        "audioRomaji": "Gamsahamnida"
      },
      {
        "type": "speak",
        "question": "Tocca il microfono e dì 'Ciao' in coreano (Formale).",
        "expectedRomaji": [
          "annyeonghaseyo",
          "annyeong"
        ],
        "expectedHangul": [
          "안녕하세요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Prova ad articolare bene: An-nyeong-ha-se-yo.",
        "tip": "Sei all'inizio, prenditi il tuo tempo per ogni sillaba."
      },
      {
        "type": "conversation",
        "context": "Scenario: Stai passeggiando per Seoul e urti per sbaglio una persona. Alza lo sguardo: è Nam Joo-hyuk! 😱",
        "question": "Qual è la reazione immediata più educata (prima di svenire)?",
        "options": [
          "Annyeonghi gaseyo",
          "Joesonghamnida",
          "Hwaiting"
        ],
        "optionsHangul": [
          "안녕히 가세요",
          "죄송합니다",
          "화이팅"
        ],
        "answer": 1,
        "conceptTag": "Scuse",
        "feedback_incorrect": "Dovevi chiedere scusa! Non incoraggiarlo a caso.",
        "tip": "'Joesonghamnida' è perfetto. Un cenno del capo aiuta sempre.",
        "optionsRomaji": [
          "",
          "",
          "Hwaiting"
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Hai appena pagato all'Animate Store e stai uscendo. Il commesso resta dentro. Cosa gli dici?",
        "options": [
          "Annyeonghi gyeseyo",
          "Annyeonghi gaseyo",
          "Joesonghamnida"
        ],
        "optionsHangul": [
          "안녕히 계세요",
          "안녕히 가세요",
          "죄송합니다"
        ],
        "answer": 0,
        "conceptTag": "Arrivederci (a chi resta)",
        "feedback_incorrect": "Attenzione a chi va e chi resta!",
        "tip": "Tu te ne vai, lui RESTA. Quindi gli auguri di *restare* in pace: Gye-se-yo.",
        "optionsRomaji": [
          "Annyeonghi gyeseyo",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Cosa sta dicendo la tua amica che esce dalla camera mentre tu resti a preparare il cosplay?",
        "audioHangul": "안녕히 계세요",
        "options": [
          "Arrivederci (a te che resti)",
          "Grazie per l'ospitalità",
          "Arrivederci (a te che vai)"
        ],
        "answer": 0,
        "conceptTag": "Ascolto Arrivederci",
        "feedback_incorrect": "Ha usato 'Gyeseyo'.",
        "tip": "Dato che tu resti, lei ti dice 'Annyeonghi gyeseyo'.",
        "audioRomaji": "Annyeonghi gyeseyo"
      },
      {
        "type": "speak",
        "question": "Il tuo Support su LoL ti ha appena curata. Dì 'Grazie' in modo formale.",
        "expectedRomaji": [
          "gamsahamnida",
          "kamsahamnida"
        ],
        "expectedHangul": [
          "감사합니다"
        ],
        "conceptTag": "Pronuncia LoL",
        "feedback_incorrect": "Non era chiaro.",
        "tip": "Pronuncia: Gam-sa-ham-ni-da."
      },
      {
        "type": "conversation",
        "context": "Il tuo compagno d'allenamento sta per alzare il suo record sulla panca piana. 🏋️",
        "question": "Come lo incoraggi in stile coreano?",
        "options": [
          "Annyeonghi gaseyo",
          "Hwaiting",
          "Joesonghamnida"
        ],
        "optionsHangul": [
          "안녕히 가세요",
          "화이팅",
          "죄송합니다"
        ],
        "answer": 1,
        "conceptTag": "Incoraggiamento",
        "feedback_incorrect": "Dovevi fare il tifo per lui!",
        "tip": "Usa 'Hwaiting!' alzando il pugno. Funziona sempre in palestra.",
        "optionsRomaji": [
          "",
          "Hwaiting",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa la frase: 'Arrivederci' quando SEI TU ad andartene: '안녕히 ___세요'",
        "options": [
          "계",
          "가",
          "해",
          "오"
        ],
        "answer": 1,
        "conceptTag": "Partenza",
        "feedback_incorrect": "Quando VAI, dici '가세요' (ga-seyo).",
        "tip": "'가다' significa 'andare'. Tu vai → ga-seyo.",
        "optionsHangul": [
          "계",
          "가",
          "해",
          "오"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "speak",
        "question": "Chiedi scusa in modo formale: 'Mi dispiace'.",
        "expectedRomaji": [
          "joesonghamnida",
          "choesonghamnida"
        ],
        "expectedHangul": [
          "죄송합니다"
        ],
        "conceptTag": "Fluidità",
        "feedback_incorrect": "Prova con: Joe-song-ham-ni-da.",
        "tip": "È una parola lunga, ma ti salverà in molte situazioni!"
      }
    ]
  },
  {
    "day": 2,
    "title": "Passioni, Anime & Palestra 🎭",
    "topic": "Presentazioni e Hobby",
    "theory": {
      "intro": "Oggi impariamo a presentarti in modo unico, Sara. I coreani amano sapere chi sei e le tue passioni (palestra, cosplay, gaming). Inoltre, continuiamo l'Hangul: la vocale va sempre a destra (es. ㅏ) o sotto (es. ㅗ) la consonante. Es: ㄹ+ㅗ+ㄹ = 롤 (LoL)!",
      "concept": "La particella '이에요 / 예요' (ieyo / yeyo) è il verbo 'essere' e va sempre alla FINE della frase. Usa 'yeyo' se il nome finisce in vocale (Sara-yeyo), 'ieyo' se finisce in consonante.",
      "builderRule": "🔗 Chain link: Non presentarti mai a freddo! Prima di dire 저는 사라예요 (Io sono Sara), usa sempre il saluto 안녕하세요 imparato ieri. Crea la tua prima combo!",
      "examples": [
        {
          "hangul": "저는 사라예요",
          "romaji": "Jeoneun Sara-yeyo",
          "eng": "Io sono Sara.",
          "context": "La tua introduzione chiave! ✨"
        },
        {
          "hangul": "로마에서 왔어요",
          "romaji": "Roma-eseo wasseoyo",
          "eng": "Vengo da Roma.",
          "context": "Più specifico di 'Sono italiana'. 🏛️"
        },
        {
          "hangul": "제 취미는 운동이에요",
          "romaji": "Je chwimineun undong-ieyo",
          "eng": "Il mio hobby è la palestra.",
          "context": "Per trovare compagni di workout in Corea. 🏋️‍♀️"
        },
        {
          "hangul": "제 취미는 코스프레예요",
          "romaji": "Je chwimineun koseupeure-yeyo",
          "eng": "Il mio hobby è il cosplay.",
          "context": "Per rompere il ghiaccio in fiera! 🎭"
        },
        {
          "hangul": "스타트업 봤어요?",
          "romaji": "Seutateueop bwasseoyo?",
          "eng": "Hai visto Start-Up?",
          "context": "Per trovare altri fan di Kdrama e Nam Joo-hyuk! 📺"
        }
      ],
      "culture": "In Corea, chiedere 'Quanti anni hai?' (몇 살이에요?) non è maleducato! Serve a capire la formalità della conversazione, come in Start-Up con il rispetto aziendale."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Come ti presenti a un nuovo compagno di Duo su LoL dicendo 'Io sono Sara'?",
        "options": [
          "Sara jeoneun-ieyo",
          "Jeoneun Sara-yeyo",
          "Yeyo Sara jeoneun"
        ],
        "optionsHangul": [
          "사라 저는이에요",
          "저는 사라예요",
          "예요 사라 저는"
        ],
        "answer": 1,
        "conceptTag": "Struttura frase",
        "feedback_incorrect": "Attenzione all'ordine (Soggetto + Nome + Verbo).",
        "tip": "La struttura SOV: [Jeoneun] (Io) + [Nome] + yeyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "speak",
        "question": "Pronuncia: 'Io sono Sara.'",
        "expectedRomaji": [
          "jeoneun sarayeyo",
          "sarayeyo"
        ],
        "expectedHangul": [
          "저는 사라예요",
          "사라예요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Riprova, scandisci il tuo nome con 'yeyo'.",
        "tip": "Dì 'Jeoneun Sara-yeyo'."
      },
      {
        "type": "conversation",
        "context": "🧑 Un cosplayer ad Hongdae ti chiede: 이름이 뭐예요? (Come ti chiami?)",
        "question": "Come rispondi?",
        "options": [
          "Roma-eseo wasseoyo",
          "Je chwimineun koseupeure-yeyo",
          "Jeoneun Sara-yeyo"
        ],
        "optionsHangul": [
          "로마에서 왔어요",
          "제 취미는 코스프레예요",
          "저는 사라예요"
        ],
        "answer": 2,
        "conceptTag": "Risposta intro",
        "feedback_incorrect": "Hai risposto qualcos'altro!",
        "tip": "Ti ha chiesto il nome. Rispondi con 'Jeoneun Sara-yeyo'.",
        "optionsRomaji": [
          "Roma-eseo wasseoyo",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questa frase per rompere il ghiaccio in palestra:",
        "audioHangul": "제 취미는 운동이에요",
        "options": [
          "Mi piacciono i cani",
          "Il mio hobby è l'allenamento",
          "Vengo dall'Italia"
        ],
        "answer": 1,
        "conceptTag": "Ascolto GYM",
        "feedback_incorrect": "Ascolta la parola 'Undong'.",
        "tip": "Undong = Allenamento/Palestra!",
        "audioRomaji": "Je chwimineun undong-ieyo"
      },
      {
        "type": "speak",
        "question": "Da dove vieni? 'Vengo da Roma'.",
        "expectedRomaji": [
          "romaeseo wasseoyo",
          "romaeseowasseoyo"
        ],
        "expectedHangul": [
          "로마에서 왔어요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Prova ancora.",
        "tip": "Ro-ma e-seo was-seo-yo."
      },
      {
        "type": "multiple_choice",
        "question": "Vedi qualcuno con la spilletta di Sandbox. Come chiedi 'Hai visto Start-Up?'",
        "options": [
          "Aenimeisyeon joahaeyo",
          "Seutateueop bwasseoyo?",
          "Jeoneun Start-Up yeyo"
        ],
        "optionsHangul": [
          "애니메이션 좋아해요",
          "스타트업 봤어요?",
          "저는 스타트업이에요"
        ],
        "answer": 1,
        "conceptTag": "Hobby Kdrama",
        "feedback_incorrect": "Usa il verbo 'guardare' al passato (bwasseoyo).",
        "tip": "Seutateueop + bwasseoyo? (hai visto?).",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "speak",
        "question": "Dì con orgoglio: 'Il mio hobby è il Cosplay'.",
        "expectedRomaji": [
          "je chwimineun koseupeureyeyo",
          "jechwimineunkoseupeureyeyo"
        ],
        "expectedHangul": [
          "제 취미는 코스프레예요"
        ],
        "conceptTag": "Parlato Cosplay",
        "feedback_incorrect": "Ricorda la pronuncia di Cosplay.",
        "tip": "Je chwi-mi-neun ko-seu-peu-re-ye-yo."
      },
      {
        "type": "fill_blank",
        "question": "Completa: 'Il mio hobby è ___'",
        "options": [
          "palestra",
          "film",
          "sonno",
          "studio"
        ],
        "answer": 0,
        "conceptTag": "Vocabolario Hobby",
        "feedback_incorrect": "Undong = palestra/allenamento!",
        "tip": "운동 (undong) = esercizio fisico, sport, palestra.",
        "optionsHangul": [
          "운동",
          "영화",
          "수면",
          "공부"
        ],
        "optionsRomaji": [
          "undong — allenamento",
          "yeonghwa — film",
          "sumyeon — sonno",
          "gongbu — studio"
        ]
      },
      {
        "type": "conversation",
        "context": "Stai chiacchierando col gruppo in sala pesi.",
        "question": "Qual è la sequenza perfetta per presentarti?",
        "options": [
          "Gamsahamnida. Sara-yeyo.",
          "Jeoneun Sara-yeyo. Roma-eseo wasseoyo. Bangapseumnida.",
          "Roma-eseo wasseoyo. Joesonghamnida."
        ],
        "optionsHangul": [
          "감사합니다. 사라예요.",
          "저는 사라예요. 로마에서 왔어요. 반갑습니다.",
          "로마에서 왔어요. 죄송합니다."
        ],
        "answer": 1,
        "conceptTag": "Intro completa",
        "feedback_incorrect": "L'ordine logico: nome, provenienza, piacere.",
        "tip": "Nome → Vengo da Roma → Piacere (Bangapseumnida).",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Da quale città viene questa persona?",
        "audioHangul": "로마에서 왔어요",
        "options": [
          "Parigi",
          "Milano",
          "Roma"
        ],
        "answer": 2,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Non era quello!",
        "tip": "Ha detto 'Roma-eseo wasseoyo'.",
        "audioRomaji": "Roma-eseo wasseoyo"
      }
    ]
  },
  {
    "day": 3,
    "title": "Dov'è il PC Bang?! 🗺️",
    "topic": "Direzioni e Sopravvivenza Urbana",
    "theory": {
      "intro": "Sara, immagina di dover correre in palestra per la 'Leg Day' e non sai dove sia, o di cercare disperatamente un PC Bang per LoL. Oggi risolviamo questo con la navigazione urbana coreana!",
      "concept": "La formula magica per trovare i luoghi: [Luogo] + 이/가 어디예요? (i/ga eodiyeyo?) = Dov'è il ___? 'Eodi' significa dove, 'yeyo' è il verbo essere.",
      "builderRule": "🔗 Chain link: È scortese fermare le persone urlando. Attira l'attenzione con 저기요 (Scusi!) e poi 죄송합니다 (Mi dispiace) prima di fare la domanda.",
      "examples": [
        {
          "hangul": "체육관이 어디예요?",
          "romaji": "Cheyukgwan-i eodiyeyo?",
          "eng": "Dov'è la palestra?",
          "context": "Cruciale per non perdere la routine di workout! 🏋️‍♀️"
        },
        {
          "hangul": "PC방이 어디예요?",
          "romaji": "PC-bang-i eodiyeyo?",
          "eng": "Dov'è il PC Bang?",
          "context": "Fondamentale per la dose giornaliera di LoL! 💻"
        },
        {
          "hangul": "애니메이트 어디예요?",
          "romaji": "Aenimeiteu eodiyeyo?",
          "eng": "Dov'è l'Animate?",
          "context": "Per acquisti Cosplay e Manga. 🎌"
        },
        {
          "hangul": "화장실이 어디예요?",
          "romaji": "Hwajangsil-i eodiyeyo?",
          "eng": "Dov'è il bagno?",
          "context": "Salva-vita assoluto nei grandi parchi. 🚽"
        },
        {
          "hangul": "직진 / 오른쪽 / 왼쪽",
          "romaji": "Jikjin / Oreunjjok / Oenjjok",
          "eng": "Dritto / Destra / Sinistra",
          "context": "Per capire le indicazioni che riceverai. ➡️"
        }
      ],
      "culture": "I PC Bang coreani sono incredibili: poltrone giganti, tastiere RGB, monitor a 240Hz... e puoi ordinare ramen e hot dog direttamente dal computer. Te lo portano alla postazione!"
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Cosa sta cercando questa persona per fare una classificata a LoL?",
        "audioHangul": "PC방이 어디예요?",
        "options": [
          "Il bagno",
          "La stazione",
          "Il PC Bang"
        ],
        "answer": 2,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Ascolta bene la prima parola.",
        "tip": "'PC-bang' significa sala gaming / Internet Cafe.",
        "audioRomaji": "PC-bang-i eodiyeyo?"
      },
      {
        "type": "speak",
        "question": "Non vuoi saltare il giorno di petto. Chiedi: 'Dov'è la palestra?'",
        "expectedRomaji": [
          "cheyukgwani eodiyeyo",
          "cheyukgwanieodiyeyo"
        ],
        "expectedHangul": [
          "체육관이 어디예요"
        ],
        "conceptTag": "Palestra",
        "feedback_incorrect": "Ripeti con calma: Che-yuk-gwan.",
        "tip": "Dì: 'Che-yuk-gwan-i eo-di-ye-yo?'"
      },
      {
        "type": "multiple_choice",
        "question": "Sei in cosplay e cerchi l'Animate store. Come lo chiedi?",
        "options": [
          "Aenimeiteu eodiyeyo?",
          "PC-bang-i eodiyeyo?",
          "Aenimeiteu hwajangsil?"
        ],
        "optionsHangul": [
          "애니메이트 어디예요?",
          "PC방이 어디예요?",
          "애니메이트 화장실?"
        ],
        "answer": 0,
        "conceptTag": "Store Anime",
        "feedback_incorrect": "Aenimeiteu (Animate) è il negozio.",
        "tip": "Luogo + eodiyeyo.",
        "optionsRomaji": [
          "",
          "PC-bang-i eodiyeyo?",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "🎮 Un gamer ti indica la direzione del PC Bang: 직진이에요. (Jikjin-ieyo)",
        "question": "In che direzione devi andare?",
        "options": [
          "Gira a Destra",
          "Gira a Sinistra",
          "Vai Dritto"
        ],
        "optionsHangul": [
          "오른쪽",
          "왼쪽",
          "직진"
        ],
        "answer": 2,
        "conceptTag": "Direzioni",
        "feedback_incorrect": "Attenzione ai vocaboli di direzione.",
        "tip": "Jikjin = dritto!",
        "optionsRomaji": [
          "Oreunjjok",
          "",
          ""
        ]
      },
      {
        "type": "speak",
        "question": "Attira l'attenzione di un passante (Scusi!)",
        "expectedRomaji": [
          "jeogiyo",
          "chogiyo"
        ],
        "expectedHangul": [
          "저기요"
        ],
        "conceptTag": "Parlato",
        "feedback_incorrect": "Non è stato riconosciuto.",
        "tip": "Dì 'Jeo-gi-yo!'"
      },
      {
        "type": "multiple_choice",
        "question": "Quale parola significa 'Sinistra'?",
        "options": [
          "Oenjjok",
          "Oreunjjok",
          "Jikjin"
        ],
        "optionsHangul": [
          "왼쪽",
          "오른쪽",
          "직진"
        ],
        "answer": 0,
        "conceptTag": "Direzioni",
        "feedback_incorrect": "Hai scelto la direzione sbagliata!",
        "tip": "Oenjjok = Sinistra. (Oreunjjok è Destra).",
        "optionsRomaji": [
          "",
          "Oreunjjok",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta la direzione data dall'anziana signora vicino all'Han River:",
        "audioHangul": "오른쪽",
        "options": [
          "Destra",
          "Sinistra",
          "Dritto"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "La parola era diversa.",
        "tip": "Oreunjjok significa Destra.",
        "audioRomaji": "Oreunjjok"
      },
      {
        "type": "fill_blank",
        "question": "Formula la domanda: 'Dov'è il bagno?'",
        "options": [
          "이",
          "가",
          "의",
          "을"
        ],
        "answer": 0,
        "conceptTag": "Particella",
        "feedback_incorrect": "Dopo consonante → usa '이'.",
        "tip": "화장실 finisce in consonante (ㄹ), quindi si usa la particella '이'.",
        "optionsHangul": [
          "이",
          "가",
          "의",
          "을"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "Devi chiedere dov'è il bagno durante una competizione di Cosplay.",
        "question": "Come formuli la frase?",
        "options": [
          "Hwajangsil-i eodiyeyo?",
          "Eodiyeyo hwajangsil-i?",
          "Hwajangsil-ieyo?"
        ],
        "optionsHangul": [
          "화장실이 어디예요?",
          "어디예요 화장실이?",
          "화장실리에요?"
        ],
        "answer": 0,
        "conceptTag": "Pratica",
        "feedback_incorrect": "Ricorda la regola base SOV.",
        "tip": "Hwajangsil + i (particella) + eodiyeyo (dov'è).",
        "optionsRomaji": [
          "Hwajangsil-i eodiyeyo?",
          "",
          ""
        ]
      },
      {
        "type": "speak",
        "question": "Dì 'Bagno' per farti capire al volo in emergenza.",
        "expectedRomaji": [
          "hwajangsil"
        ],
        "expectedHangul": [
          "화장실"
        ],
        "conceptTag": "Vocabolario",
        "feedback_incorrect": "La pronuncia è difficile, riprova!",
        "tip": "Hwa-jang-sil."
      }
    ]
  },
  {
    "day": 4,
    "title": "Sopravvivenza e Modestia Coreana 🆘",
    "topic": "Comunicazione Genuina",
    "theory": {
      "intro": "Arriverà il momento in cui ti faranno complimenti (per il cosplay, i muscoli, o come carry su LoL) e andrai in tilt. Questo è il tuo kit di sopravvivenza per mostrare la famosa modestia asiatica!",
      "concept": "Usa 'Mollayo' per 'non lo so'. Impara 'Gwaenchanayo' (va bene / sto bene). Quando ti sfidano, metti le mani avanti sminuendo le tue abilità: è la cultura della modestia coreana!",
      "builderRule": "🔗 Chain link: Se ti danno indicazioni velocissime (Giorno 3) e ti perdi, sorridi, usa 죄송합니다 e poi 천천히 말해 주세요 (Parla più piano).",
      "examples": [
        {
          "hangul": "괜찮아요",
          "romaji": "Gwaenchanayo",
          "eng": "Sto bene / Non grazie / Nessun problema",
          "context": "Il tuo coltellino svizzero. ✋"
        },
        {
          "hangul": "몰라요",
          "romaji": "Mollayo",
          "eng": "Non lo so / Non capisco",
          "context": "Quando la chat di LoL impazzisce. 🤷‍♀️"
        },
        {
          "hangul": "천천히 말해 주세요",
          "romaji": "Cheoncheonhi malhae juseyo",
          "eng": "Parla più piano, per favore.",
          "context": "Fondamentale per farli rallentare. 🐢"
        },
        {
          "hangul": "게임 잘 못해요",
          "romaji": "Geim jal mothaeyo",
          "eng": "Non sono brava ai videogiochi.",
          "context": "Perfetta falsa modestia prima di carryare! 🎮"
        },
        {
          "hangul": "운동 잘 못해요",
          "romaji": "Undong jal mothaeyo",
          "eng": "Non sono un'esperta di palestra.",
          "context": "Usalo anche se sollevi più di loro! 🏋️‍♀️"
        },
        {
          "hangul": "코스프레 제가 만들었어요",
          "romaji": "Koseupeure jega mandeureosseoyo",
          "eng": "Il cosplay l'ho fatto io.",
          "context": "Per vantarti con grazia del tuo duro lavoro! ✂️"
        }
      ],
      "culture": "Se offri qualcosa a un coreano, per pura modestia rifiuterà due o tre volte dicendo 'Gwaenchanayo' (Non è nulla) o 'Anieyo' (Non è vero), sminuendo le proprie abilità."
    },
    "exercises": [
      {
        "type": "conversation",
        "context": "🏪 Al CU minimarket il cassiere chiede: 봉투 필요하세요? (Vuole una busta a pagamento?)",
        "question": "Come dici educatamente 'No grazie, va bene così'?",
        "options": [
          "Aniyo, Mollayo",
          "Gwaenchanayo",
          "Ne"
        ],
        "optionsHangul": [
          "아니요 몰라요",
          "괜찮아요",
          "네"
        ],
        "answer": 1,
        "conceptTag": "Rifiutare Educatamente",
        "feedback_incorrect": "In Corea un 'No' diretto può sembrare duro.",
        "tip": "'Gwaenchanayo' è il modo standard e gentile per rifiutare.",
        "optionsRomaji": [
          "",
          "Gwaenchanayo",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Ti vedono vincere 1v9 con Jinx su LoL e ti lodano. Vuoi fare la modesta: 'Non sono brava ai giochi'.",
        "options": [
          "Ne, gamsahamnida",
          "Geim jal mothaeyo",
          "Mollayo"
        ],
        "optionsHangul": [
          "네, 감사합니다",
          "게임 잘 못해요",
          "몰라요"
        ],
        "answer": 1,
        "conceptTag": "Modestia LoL",
        "feedback_incorrect": "Ricorda la frase sulla modestia.",
        "tip": "'Geim' (Gioco) + 'jal mothaeyo' (non so fare bene).",
        "optionsRomaji": [
          "",
          "",
          "Mollayo"
        ]
      },
      {
        "type": "listen",
        "question": "In palestra ti fanno complimenti. Ascolta come rispondi con modestia:",
        "audioHangul": "운동 잘 못해요",
        "options": [
          "Non mi piace la palestra",
          "Non sono brava con la palestra",
          "Dov'è la palestra?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Modestia",
        "feedback_incorrect": "Undong + jal mothaeyo.",
        "tip": "Anche se sei bravissima, in Corea si usa la modestia!",
        "audioRomaji": "Undong jal mothaeyo"
      },
      {
        "type": "speak",
        "question": "Mostra le tue abilità artigianali: 'Il cosplay l'ho fatto io'.",
        "expectedRomaji": [
          "koseupeure jega mandeureosseoyo",
          "koseupeurejegamandeureosseoyo"
        ],
        "expectedHangul": [
          "코스프레 제가 만들었어요"
        ],
        "conceptTag": "Cosplay",
        "feedback_incorrect": "Prova 'Mandeureosseoyo'.",
        "tip": "Ko-seu-peu-re je-ga man-deu-reos-seo-yo."
      },
      {
        "type": "speak",
        "question": "Le indicazioni arrivano troppo veloci! 'Parla più piano, per favore'.",
        "expectedRomaji": [
          "cheoncheonhi malhae juseyo",
          "cheoncheonhimalhaejuseyo"
        ],
        "expectedHangul": [
          "천천히 말해 주세요",
          "천천히 말해주세요"
        ],
        "conceptTag": "Parlato",
        "feedback_incorrect": "Fai attenzione alla pronuncia.",
        "tip": "Cheon-cheon-hi mal-hae ju-se-yo."
      },
      {
        "type": "conversation",
        "context": "🧑 Il jungler nemico su LoL ti scrive in chat all'italiana (ti sta provocando).",
        "question": "Vuoi rispondergli sorridendo: 'Non capisco / Non lo so'.",
        "options": [
          "Hwajangsil-i eodiyeyo?",
          "Mollayo",
          "Gwaenchanayo"
        ],
        "optionsHangul": [
          "화장실이 어디예요?",
          "몰라요",
          "괜찮아요"
        ],
        "answer": 1,
        "conceptTag": "Ignorare",
        "feedback_incorrect": "Usa l'ignoranza tattica!",
        "tip": "'Mollayo' (non so/non capisco). Efficacissimo.",
        "optionsRomaji": [
          "Hwajangsil-i eodiyeyo?",
          "Mollayo",
          "Gwaenchanayo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "'Non sono brava a ___': usa 잘 못해요 (jal mothaeyo)",
        "options": [
          "palestra",
          "tosse",
          "sonno",
          "aria"
        ],
        "answer": 0,
        "conceptTag": "Struttura modestia",
        "feedback_incorrect": "Undong = allenamento!",
        "tip": "Undong jal mothaeyo = non sono brava in palestra.",
        "optionsHangul": [
          "운동",
          "기침",
          "수면",
          "공기"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Vedi qualcuno cadere in fiera. Lo aiuti. Dice 'Gamsahamnida'. Come rispondi?",
        "options": [
          "Ne",
          "Aniyo",
          "Gwaenchanayo"
        ],
        "optionsHangul": [
          "네",
          "아니요",
          "괜찮아요"
        ],
        "answer": 2,
        "conceptTag": "Risposta al Grazie",
        "feedback_incorrect": "Non si risponde 'Sì' al grazie.",
        "tip": "'Gwaenchanayo' (Va tutto bene) è ottima risposta informale.",
        "optionsRomaji": [
          "",
          "",
          "Gwaenchanayo"
        ]
      },
      {
        "type": "listen",
        "question": "Cosa sta dicendo questa persona se le chiedi consigli tattici per LoL?",
        "audioHangul": "몰라요",
        "options": [
          "Te lo dico io",
          "Non lo so",
          "Vai dritto"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Ha detto Mollayo.",
        "tip": "Mol-la-yo.",
        "audioRomaji": "Mollayo"
      },
      {
        "type": "speak",
        "question": "Rifiuta un altro drink con stile: 'Sto bene (Gwaenchanayo)'.",
        "expectedRomaji": [
          "gwaenchanayo",
          "gwenchanayo"
        ],
        "expectedHangul": [
          "괜찮아요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Gwaen-chan-a-yo.",
        "tip": "Gwaen-chan-a-yo."
      }
    ]
  },
  {
    "day": 5,
    "title": "Al Ristorante e Cibo Proteico 🌶️",
    "topic": "Ristoranti e Alimenti",
    "theory": {
      "intro": "Eccoci alla parte vitale: il cibo coreano! Dato che ti alleni tanto, dovrai saper chiedere proteine o pollo, ed evitare cibi troppo piccanti. Se hai fame post-partita, il PC bang ti salverà.",
      "concept": "La parola d'oro è '주세요' (Ju-se-yo) = 'per favore mi dia'. Indica quello che vuoi nel menù e dì 'Igeo juseyo' (Questo, per favore).",
      "builderRule": "🔗 Chain link: Al ristorante, combina il saluto del Giorno 1 + la tua ordinazione. 안녕하세요! + 이거 주세요 = Ciao + Questo per favore. Nessuno si aspetta di più da un turista!",
      "examples": [
        {
          "hangul": "이거 주세요",
          "romaji": "Igeo juseyo",
          "eng": "Questo, per favore.",
          "context": "La frase universale al ristorante. Punta il dito e funziona sempre! ☝️"
        },
        {
          "hangul": "닭가슴살 있어요?",
          "romaji": "Dak-gaseumssal isseoyo?",
          "eng": "Avete petto di pollo?",
          "context": "Per trovare la fonte proteica preferita! 🐔"
        },
        {
          "hangul": "얼마예요?",
          "romaji": "Eolmayeyo?",
          "eng": "Quanto costa?",
          "context": "Indispensabile ovunque. 💰"
        },
        {
          "hangul": "맵지 않게 해주세요",
          "romaji": "Maepji ange haejuseyo",
          "eng": "Non piccante, per favore.",
          "context": "Per proteggere lo stomaco in prep! 🌶️➡️❌"
        },
        {
          "hangul": "물 주세요",
          "romaji": "Mul juseyo",
          "eng": "Acqua, per favore.",
          "context": "Gratis nella maggior parte dei ristoranti coreani! 💧"
        },
        {
          "hangul": "맛있어요!",
          "romaji": "Masisseoyo!",
          "eng": "È buonissimo!",
          "context": "Il complimento che farà sorridere ogni cuoco coreano. 😋"
        }
      ],
      "culture": "In Corea si chiama il cameriere urlando '여기요!' (Yeogiyo!) o premendo un campanello al tavolo. Non è maleducato: è normale! Nei ristoranti di K-BBQ si cucina tutti insieme al centro del tavolo."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Sei in un pojangmacha (banchetto di strada) e punta il dito sul menù. Come ordini?",
        "options": [
          "Eolmayeyo?",
          "Igeo juseyo",
          "Mollayo"
        ],
        "optionsHangul": [
          "얼마예요?",
          "이거 주세요",
          "몰라요"
        ],
        "answer": 1,
        "conceptTag": "Ordinare",
        "feedback_incorrect": "La frase magica è 'Igeo juseyo'!",
        "tip": "Igeo = questo/quello. Juseyo = per favore mi dia.",
        "optionsRomaji": [
          "Eolmayeyo?",
          "Igeo juseyo",
          "Mollayo"
        ]
      },
      {
        "type": "speak",
        "question": "Chiedi il prezzo di un'action figure nell'Animate Store.",
        "expectedRomaji": [
          "eolmayeyo",
          "olmayeyo"
        ],
        "expectedHangul": [
          "얼마예요"
        ],
        "conceptTag": "Prezzo",
        "feedback_incorrect": "Prova: Eol-ma-ye-yo?",
        "tip": "Eolmayeyo? — Quanto costa?"
      },
      {
        "type": "conversation",
        "context": "🥩 Al K-BBQ restaurant il cameriere ti porta la carne. La assaggi e...",
        "question": "Come dici che è buonissimo?",
        "options": [
          "Maepji ange haejuseyo",
          "Masisseoyo!",
          "Mul juseyo"
        ],
        "optionsHangul": [
          "맵지 않게 해주세요",
          "맛있어요!",
          "물 주세요"
        ],
        "answer": 1,
        "conceptTag": "Reazione cibo",
        "feedback_incorrect": "Per dire che è buono usi Masisseoyo.",
        "tip": "Ma-sis-seo-yo! Con entusiasmo! 😋",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Cosa sta chiedendo questa atleta coreana:",
        "audioHangul": "닭가슴살 있어요?",
        "options": [
          "Avete gamberetti?",
          "Avete petto di pollo?",
          "Avete tofu?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Gym Food",
        "feedback_incorrect": "Dak-gaseumssal = Petto di pollo.",
        "tip": "Dak = pollo. Gaseumssal = petto. Isseoyo = avete/c'è?",
        "audioRomaji": "Dak-gaseumssal isseoyo?"
      },
      {
        "type": "speak",
        "question": "Post-WOD hai bisogno di idratazione: 'Acqua, per favore'.",
        "expectedRomaji": [
          "mul juseyo",
          "muljuseyo"
        ],
        "expectedHangul": [
          "물 주세요"
        ],
        "conceptTag": "Parlato",
        "feedback_incorrect": "Mul = acqua. Juseyo = per favore.",
        "tip": "Mul ju-se-yo."
      },
      {
        "type": "multiple_choice",
        "question": "Il cameriere urla qualcosa e non capisci. Poi ti porta il piatto piccantissimo. Cosa avresti dovuto dire?",
        "options": [
          "Masisseoyo!",
          "Maepji ange haejuseyo",
          "Igeo juseyo"
        ],
        "optionsHangul": [
          "맛있어요!",
          "맵지 않게 해주세요",
          "이거 주세요"
        ],
        "answer": 1,
        "conceptTag": "Non piccante",
        "feedback_incorrect": "Maepji ange haejuseyo = non piccante!",
        "tip": "Maepji = piccante. Ange = non. Haejuseyo = fate/preparate.",
        "optionsRomaji": [
          "",
          "",
          "Igeo juseyo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Come chiami il cameriere in Korea: '___요!'",
        "options": [
          "여기",
          "저기",
          "어디",
          "이거"
        ],
        "answer": 0,
        "conceptTag": "Chiamare cameriere",
        "feedback_incorrect": "Yeogiyo! = Qui! (=Scusi!)",
        "tip": "여기요 (Yeogiyo) = letteralmente 'qui!' — è normale urlarlo al tavolo.",
        "optionsHangul": [
          "여기",
          "저기",
          "어디",
          "이거"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "Vuoi calcolare le proteine. L'insalata di pollo costa 12,000 won. Il cameriere dice qualcosa.",
        "question": "Come chiedi il prezzo di nuovo con calma?",
        "options": [
          "Eolmayeyo?",
          "Maisseoyo?",
          "Juseyo!"
        ],
        "optionsHangul": [
          "얼마예요?",
          "맛있어요?",
          "주세요!"
        ],
        "answer": 0,
        "conceptTag": "Prezzo",
        "feedback_incorrect": "Eolma = quanto. Yeyo = è.",
        "tip": "Eolmayeyo? = Quanto costa?",
        "optionsRomaji": [
          "Eolmayeyo?",
          "",
          ""
        ]
      },
      {
        "type": "speak",
        "question": "Ordina il petto di pollo come una vera food athlete.",
        "expectedRomaji": [
          "dak gaseumssal isseoyo",
          "dakgaseumssalisseoyo"
        ],
        "expectedHangul": [
          "닭가슴살 있어요"
        ],
        "conceptTag": "Protein GYM",
        "feedback_incorrect": "Dak-ga-seum-ssal is-seo-yo?",
        "tip": "Chiedi: 'Avete petto di pollo?'"
      },
      {
        "type": "listen",
        "question": "Ascolta quanto paga questa persona per il cosplay acquistato:",
        "audioHangul": "얼마예요?",
        "options": [
          "Quanto costa?",
          "Dov'è la cassa?",
          "Ce l'avete?"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Eolmayeyo? = Quanto costa?",
        "tip": "Eol-ma-ye-yo?",
        "audioRomaji": "Eolmayeyo?"
      }
    ]
  },
  {
    "day": 6,
    "title": "Start-Up e Sogni Grandi 🚀",
    "topic": "K-Drama & Motivazione",
    "theory": {
      "intro": "Sara, oggi immergiamo nel tuo drama preferito: Start-Up! Le frasi di questo drama sono cariche di energia e sogni. La protagonista Nam Do-san dice frasi potentissime che puoi usare nella vita vera — anche in palestra quando ti sembra impossibile!",
      "concept": "'지도 없는 항해' (jido eomneun hanghae) significa letteralmente 'navigare senza mappa' — metafora perfetta per fare cose nuove. La particella '를/을' dopo un sostantivo indica l'oggetto diretto dell'azione (come 'il/la' in italiano).",
      "builderRule": "🔗 Chain link: Combina la motivazione con il saluto: 안녕하세요 → 화이팅! Ogni inizio difficile si affronta così!",
      "examples": [
        {
          "hangul": "지도 없는 항해를 떠나는 거예요",
          "romaji": "Jido eomneun hanghaereul tteonaneun geoyeyo",
          "eng": "Partiamo per un viaggio senza mappa",
          "context": "Frase iconica di Start-Up — perfetta per iniziare qualcosa di nuovo! 🚀"
        },
        {
          "hangul": "포기하지 마세요",
          "romaji": "Pogihaji maseyo",
          "eng": "Non arrenderti",
          "context": "Da urlare a te stessa in palestra all'ultima serie pesante! 💪"
        },
        {
          "hangul": "꿈을 꿔요",
          "romaji": "Kkumeul kkweoyo",
          "eng": "Sogna in grande",
          "context": "Il credo dei protagonisti di Start-Up e della tua vita! ✨"
        },
        {
          "hangul": "할 수 있어요!",
          "romaji": "Hal su isseoyo!",
          "eng": "Puoi farcela!",
          "context": "Incoraggiamento universale — in palestra, in game, ovunque! 🌟"
        },
        {
          "hangul": "최선을 다하세요",
          "romaji": "Choeseoneul dahaseyo",
          "eng": "Dai il massimo",
          "context": "Da dire a te stessa prima di ogni allenamento o ranked game. 🔥"
        }
      ],
      "culture": "Start-Up è ambientato nel mondo tech di Seoul. Il drama mostra quanto la cultura coreana valorizzi il sacrificio e la perseveranza — Balinese!"
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "La frase 'Jido eomneun hanghaereul tteonaneun geoyeyo' viene dal drama che ami. Cosa significa?",
        "options": [
          "Andiamo al PC Bang",
          "Partiamo per un viaggio senza mappa",
          "Ho fame di samgyeopsal"
        ],
        "optionsHangul": [
          "PC방 가요",
          "지도 없는 항해를 떠나는 거예요",
          "삼겹살 먹고 싶어요"
        ],
        "answer": 1,
        "conceptTag": "Start-Up Quote",
        "feedback_incorrect": "È la frase iconica di Start-Up!",
        "tip": "항해 (hanghae) = viaggio/navigazione",
        "optionsRomaji": [
          "",
          "",
          "Samgyeopsal meokgo sipeoyo"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questa parola motivazionale usata continuamente nei drama coreani:",
        "audioHangul": "화이팅",
        "options": [
          "Dai! / Forza!",
          "Grazie",
          "Mi dispiace"
        ],
        "answer": 0,
        "conceptTag": "Incoraggiamento",
        "feedback_incorrect": "Era 화이팅 (hwaiting) = Forza!",
        "tip": "화이팅 si usa in palestra, in gara, su LoL, ovunque!",
        "audioRomaji": "Hwaiting"
      },
      {
        "type": "speak",
        "question": "Incoraggia te stessa: 'Non arrenderti!' (Pogihaji maseyo)",
        "expectedRomaji": [
          "pogihaji maseyo",
          "pogihajimaseyo"
        ],
        "expectedHangul": [
          "포기하지 마세요"
        ],
        "conceptTag": "Pronuncia Motivazione",
        "feedback_incorrect": "Po-gi-ha-ji ma-se-yo",
        "tip": "포기하다 = arrendersi. -하지 마세요 = non fare!"
      },
      {
        "type": "conversation",
        "context": "La tua amica vuole smettere di allenarsi a metà corsa. Come la incoraggi in stile K-drama?",
        "question": "Quale frase scegli?",
        "options": [
          "Annyeonghi gaseyo",
          "Hal su isseoyo! Hwaiting!",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "안녕히 가세요",
          "할 수 있어요! 화이팅!",
          "감사합니다"
        ],
        "answer": 1,
        "conceptTag": "Motivazione Real Life",
        "feedback_incorrect": "Devi incoraggiarla, non salutarla o ringraziarla!",
        "tip": "할 수 있어요 = puoi farcela!",
        "optionsRomaji": [
          "",
          "",
          "Gamsahamnida"
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Come si dice 'Dai il massimo' in coreano?",
        "options": [
          "Bogo sipeoyo",
          "Choeseoneul dahaseyo",
          "Daebak"
        ],
        "optionsHangul": [
          "보고 싶어요",
          "최선을 다하세요",
          "대박"
        ],
        "answer": 1,
        "conceptTag": "Produzione Attiva",
        "feedback_incorrect": "최선을 다하다 = dare il massimo",
        "tip": "최선 (cheoson) = il meglio/massimo",
        "optionsRomaji": [
          "Bogo sipeoyo",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questa frase iconica e seleziona il significato:",
        "audioHangul": "꿈을 꿔요",
        "options": [
          "Lavoro in ufficio",
          "Sogna in grande",
          "Mangio molto"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Start-Up",
        "feedback_incorrect": "꿈 (kkum) = sogno!",
        "tip": "꿈을 꿔요 = sogna / sta sognando",
        "audioRomaji": "Kkumeul kkweoyo"
      },
      {
        "type": "speak",
        "question": "Di' con energia: 'Puoi farcela!' (Hal su isseoyo)",
        "expectedRomaji": [
          "hal su isseoyo",
          "halsuisseoyo"
        ],
        "expectedHangul": [
          "할 수 있어요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Hal su is-seo-yo!",
        "tip": "할 수 있어요 è una delle frasi più belle del coreano!"
      },
      {
        "type": "fill_blank",
        "question": "Completa la frase motivazionale: '포기하지 ___세요' (Non arrenderti)",
        "options": [
          "마",
          "가",
          "해",
          "봐"
        ],
        "answer": 0,
        "conceptTag": "Grammatica Negazione",
        "feedback_incorrect": "-하지 마세요 = non fare qualcosa",
        "tip": "마세요 nega il verbo precedente.",
        "optionsHangul": [
          "마",
          "가",
          "해",
          "봐"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "Sei in classifica su LoL, sei in vantaggio di 30 kill. Come celebri con i compagni?",
        "question": "Cosa urli in chat?",
        "options": [
          "Joesonghamnida",
          "Daebak! Hwaiting!",
          "Annyeonghaseyo"
        ],
        "optionsHangul": [
          "죄송합니다",
          "대박! 화이팅!",
          "안녕하세요"
        ],
        "answer": 1,
        "conceptTag": "Espressioni Gaming",
        "feedback_incorrect": "Non è il momento di scusarsi o salutare!",
        "tip": "대박 = incredibile! 화이팅 = dai!",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso] Come si dice 'Grazie' in modo formale?",
        "options": [
          "Annyeonghaseyo",
          "Gamsahamnida",
          "Hwaiting"
        ],
        "optionsHangul": [
          "안녕하세요",
          "감사합니다",
          "화이팅"
        ],
        "answer": 1,
        "conceptTag": "Ripasso Giorno 1",
        "feedback_incorrect": "Era il Giorno 1! Gam-sa-ham-ni-da.",
        "tip": "감사합니다 = grazie (formale). Sempre utile!",
        "optionsRomaji": [
          "",
          "Gamsahamnida",
          "Hwaiting"
        ]
      }
    ]
  },
  {
    "day": 7,
    "title": "Palestra Gangnam: Sblocca il Gym! 💪",
    "topic": "Fitness & Nutrizione",
    "theory": {
      "intro": "Oggi sblocchi la Palestra di Gangnam! Le palestre coreane sono di un altro livello: trainer K-pop, smoothie bar, tutto high-tech. Ma soprattutto: devi sapere come comunicare i tuoi obiettivi! Parliamo di allenamento, muscoli, e la sacra routine di Sara.",
      "concept": "In coreano i verbi vanno sempre alla fine. Per esprimere ciò che vuoi fare: [Cosa] + 하고 싶어요 (hago sipeoyo) = voglio fare. Es: 운동하고 싶어요 = voglio allenarmi.",
      "builderRule": "🔗 Chain link: 안녕하세요 → 오늘 무슨 운동 해요? (Che allenamento fai oggi?) → 단백질 먹어요! (Mangio proteine!) — la combo da gym rat!",
      "examples": [
        {
          "hangul": "오늘 무슨 운동 해요?",
          "romaji": "Oneul museun undong haeyo?",
          "eng": "Che allenamento fai oggi?",
          "context": "Perfetto per rompere il ghiaccio in palestra! 🏋️"
        },
        {
          "hangul": "몇 세트 남았어요?",
          "romaji": "Myeot sete namasseoyo?",
          "eng": "Quante serie ti mancano?",
          "context": "Quando vuoi usare un macchinario occupato. 🏋️‍♀️"
        },
        {
          "hangul": "단백질 쉐이크 있어요?",
          "romaji": "Danbaekjil syeiku isseoyo?",
          "eng": "Avete protein shake?",
          "context": "La domanda più importante post-allenamento! 💪"
        },
        {
          "hangul": "땀이 많이 났어요",
          "romaji": "Ttami mani nasseoyo",
          "eng": "Ho sudato molto",
          "context": "Dopo 40 minuti di cardio intenso. 💦"
        },
        {
          "hangul": "다리 운동 해요",
          "romaji": "Dari undong haeyo",
          "eng": "Faccio il leg day",
          "context": "La sessione più temuta e rispettata! 🦵"
        },
        {
          "hangul": "근육통이 심해요",
          "romaji": "Geunyuktong-i simhaeyo",
          "eng": "Il dolore muscolare è forte (DOMS)",
          "context": "Il mattino dopo il leg day — ti capisce tutta la Corea. 😩"
        }
      ],
      "culture": "Le palestre coreane sono spesso divise per genere negli spogliatoi e hanno una cultura di rispetto molto forte. Non dimenticare il telo per i macchinari (필수!)."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Sei in palestra e vuoi usare il leg press occupato. Cosa chiedi educatamente?",
        "options": [
          "Dakgaseumsal isseoyo?",
          "Myeot sete namasseoyo?",
          "Mul jom juseyo"
        ],
        "optionsHangul": [
          "닭가슴살 있어요?",
          "몇 세트 남았어요?",
          "물 좀 주세요"
        ],
        "answer": 1,
        "conceptTag": "Gym Etiquette",
        "feedback_incorrect": "Hai chiesto pollo invece di quante serie mancano!",
        "tip": "세트 (sete) = set/serie. 남다 = rimanere.",
        "optionsRomaji": [
          "Dak-gaseumssal isseoyo?",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questa parola fondamentale per i tuoi macros:",
        "audioHangul": "단백질",
        "options": [
          "Carboidrati",
          "Proteine",
          "Grassi"
        ],
        "answer": 1,
        "conceptTag": "Nutrizione",
        "feedback_incorrect": "단백질 (danbaekjil) = proteine!",
        "tip": "Dan-baek-jil. Impararla a memoria — è essenziale!",
        "audioRomaji": "Danbaekjil"
      },
      {
        "type": "speak",
        "question": "Chiedi al barman del gym: 'Avete protein shake?'",
        "expectedRomaji": [
          "danbaekjil syeiku isseoyo",
          "danbaekjilsyeikuisseoyo"
        ],
        "expectedHangul": [
          "단백질 쉐이크 있어요?"
        ],
        "conceptTag": "Pronuncia Gym",
        "feedback_incorrect": "Dan-baek-jil syei-ku is-seo-yo?",
        "tip": "쉐이크 è la versione coreana di 'shake'!"
      },
      {
        "type": "conversation",
        "context": "Il tuo personal trainer coreano ti chiede '오늘 무슨 운동 해요?' — Oggi cosa fai?",
        "question": "Rispondi che fai il leg day:",
        "options": [
          "Cheyukgwan-i eodiyeyo?",
          "Dari undong haeyo",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "체육관이 어디예요?",
          "다리 운동 해요",
          "감사합니다"
        ],
        "answer": 1,
        "conceptTag": "Risposta Gym",
        "feedback_incorrect": "Dovevi dire che fai leg day!",
        "tip": "다리 (dari) = gambe, 운동 (undong) = allenamento",
        "optionsRomaji": [
          "Cheyukgwan-i eodiyeyo?",
          "",
          "Gamsahamnida"
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Come dici 'Ho sudato molto' dopo una sessione cardio?",
        "options": [
          "Ttami mani nasseoyo",
          "Geunyuktong-i simhaeyo",
          "Sete mani isseoyo"
        ],
        "optionsHangul": [
          "땀이 많이 났어요",
          "근육통이 심해요",
          "세트 많이 있어요"
        ],
        "answer": 0,
        "conceptTag": "Dopo Allenamento",
        "feedback_incorrect": "땀 = sudore, 많이 = tanto, 났어요 = è venuto",
        "tip": "Ttam = sudore!",
        "optionsRomaji": [
          "Ttami mani nasseoyo",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questa lamentela post leg-day che senti in tutti i gym coreani:",
        "audioHangul": "근육통이 심해요",
        "options": [
          "Ho mal di testa",
          "Il dolore muscolare è forte",
          "Ho troppa energia"
        ],
        "answer": 1,
        "conceptTag": "Ascolto DOMS",
        "feedback_incorrect": "근육통 = DOMS/dolori muscolari",
        "tip": "근육 (geunyuk) = muscolo, 통 (tong) = dolore",
        "audioRomaji": "Geunyuktongi simhaeyo"
      },
      {
        "type": "speak",
        "question": "Spiega che allenamento fai oggi: 'Faccio leg day'",
        "expectedRomaji": [
          "dari undong haeyo",
          "dariundonghaeyo"
        ],
        "expectedHangul": [
          "다리 운동 해요"
        ],
        "conceptTag": "Parlato Gym",
        "feedback_incorrect": "Da-ri un-dong hae-yo",
        "tip": "다리 = gambe, 운동 하다 = fare sport/allenamento"
      },
      {
        "type": "fill_blank",
        "question": "Completa: '___이 많이 났어요' (Ho sudato molto)",
        "options": [
          "땀",
          "물",
          "기름",
          "눈물"
        ],
        "answer": 0,
        "conceptTag": "Vocabolario Corpo",
        "feedback_incorrect": "땀 = sudore!",
        "tip": "땀 (ttam) = sudore — una parola che userai sempre dopo la palestra!",
        "optionsHangul": [
          "땀",
          "물",
          "기름",
          "눈물"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "Sei al bar post-allenamento. Il barista ti propone un frullato alla frutta. Vuoi invece qualcosa con le proteine.",
        "question": "Cosa chiedi?",
        "options": [
          "Samgyeopsal juseyo",
          "Danbaekjil maneun geo juseyo",
          "Annyeonghaseyo"
        ],
        "optionsHangul": [
          "삼겹살 주세요",
          "단백질 많은 거 주세요",
          "안녕하세요"
        ],
        "answer": 1,
        "conceptTag": "Nutrizione Richiesta",
        "feedback_incorrect": "Non è il momento del K-BBQ, vuoi proteine!",
        "tip": "단백질 많은 거 = qualcosa con molte proteine",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso] Come si chiede 'Dov'è il PC Bang?' (dal Giorno 3)",
        "options": [
          "PC-bang-i eodiyeyo?",
          "PC-bang juseyo",
          "PC-bang isseoyo?"
        ],
        "optionsHangul": [
          "PC방이 어디예요?",
          "PC방 주세요",
          "PC방 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso Direzioni",
        "feedback_incorrect": "Per chiedere 'dov'è' si usa 어디예요?",
        "tip": "[Luogo] + 이/가 어디예요? = Dov'è il ___?",
        "optionsRomaji": [
          "PC-bang-i eodiyeyo?",
          "",
          ""
        ]
      }
    ]
  },
  {
    "day": 8,
    "title": "LoL: Parla da Pro in Chat! 🎮",
    "topic": "Gaming & Gergo LoL",
    "theory": {
      "intro": "Sara, oggi il coreano incontra League of Legends! Il server coreano di LoL è il più competitivo al mondo — i migliori player comunicano velocemente in chat. Impara il gergo pro e fai colpo sui tuoi compagni di lane!",
      "concept": "In coreano puoi abbreviare molto in chat gaming. '갱' (gaeng) viene da 'gank', '라인' (rain) da 'lane'. I coreani adorano le abbreviazioni in game!",
      "builderRule": "🔗 Chain link: Usa 감사합니다 → 갱 와주세요! La combo educazione + competitività è il segreto dei player coreani di alto rank!",
      "examples": [
        {
          "hangul": "갱 와주세요!",
          "romaji": "Gaeng wajuseyo!",
          "eng": "Vieni a gankarmi, per favore!",
          "context": "Sei sotto torre in Mid e il Jungler gira a vuoto. 😤"
        },
        {
          "hangul": "미드 차이",
          "romaji": "Mideu chai",
          "eng": "Mid diff (il mid nemico è meglio)",
          "context": "Quando perdi mid lane — diciamolo in coreano! 😅"
        },
        {
          "hangul": "힐 좀 주세요",
          "romaji": "Hil jom juseyo",
          "eng": "Dammi un po' di cure, per favore",
          "context": "Stai per morire e il support dorme. 😱"
        },
        {
          "hangul": "게임 정말 잘하시네요!",
          "romaji": "Geim jeongmal jalhasineyo!",
          "eng": "Sei davvero brava/o ai giochi!",
          "context": "Quando vuoi fare i complimenti al tuo ADC after game. 👏"
        },
        {
          "hangul": "트롤 하지마",
          "romaji": "Teurol hajima",
          "eng": "Non trollare",
          "context": "Il tuo support ha appena comprato 6 oggetti AP su un Thresh support. 💀"
        },
        {
          "hangul": "gg wp",
          "romaji": "ji-ji wu-pi",
          "eng": "Good Game, Well Played",
          "context": "Il classico rispetto post-partita — anche in Corea! 🤝"
        }
      ],
      "culture": "Il server coreano di LoL è chiamato 'Challenger Hell' dai player internazionali. I pro player come Faker si allenano qui. La cultura del rispetto post-game è molto forte: dire 'gg' è quasi obbligatorio!"
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Sei in Mid lane sotto pressione. Come chiedi aiuto al Jungler in coreano?",
        "options": [
          "Daebak! Hwaiting!",
          "Gaeng wajuseyo!",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "대박! 화이팅!",
          "갱 와주세요!",
          "감사합니다"
        ],
        "answer": 1,
        "conceptTag": "Gank Request",
        "feedback_incorrect": "Devi chiedere il gank, non ringraziare o esultare!",
        "tip": "갱 (gaeng) = gank. 와주세요 = vieni, per favore.",
        "optionsRomaji": [
          "",
          "",
          "Gamsahamnida"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questo termine fondamentale nel gergo LoL coreano:",
        "audioHangul": "갱",
        "options": [
          "Item",
          "Gank (arrivo a sorpresa)",
          "Nexus"
        ],
        "answer": 1,
        "conceptTag": "Gaming Vocab",
        "feedback_incorrect": "갱 (gaeng) = gank!",
        "tip": "갱킹 (gaengking) = ganking, 갱 = gank",
        "audioRomaji": "Gaeng"
      },
      {
        "type": "speak",
        "question": "Il tuo support sta dormendo. Chiedi: 'Dammi un po' di cure' (Hil jom juseyo)",
        "expectedRomaji": [
          "hil jom juseyo",
          "hiljomjuseyo"
        ],
        "expectedHangul": [
          "힐 좀 주세요"
        ],
        "conceptTag": "Heal Request",
        "feedback_incorrect": "Hil jom ju-se-yo",
        "tip": "힐 = heal, 좀 = un po', 주세요 = per favore dai"
      },
      {
        "type": "conversation",
        "context": "Dopo una partita perfetta, il tuo team si congratula. Come rispondi con umiltà in stile coreano?",
        "question": "Cosa dici?",
        "options": [
          "Teurol hajima!",
          "Anieyo, ajik meoreosseoyo (No, ho ancora molto da imparare)",
          "Mideu chai"
        ],
        "optionsHangul": [
          "트롤 하지마!",
          "아니에요, 아직 멀었어요",
          "미드 차이"
        ],
        "answer": 1,
        "conceptTag": "Umiltà Coreana",
        "feedback_incorrect": "In Corea si risponde con umiltà ai complimenti!",
        "tip": "아직 멀었어요 = ho ancora molto da imparare — risposta perfetta!",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Cosa significa 'Geim jeongmal jalhasineyo!'?",
        "options": [
          "Non trollare",
          "Sei davvero brava ai giochi!",
          "Vieni a gankarmi"
        ],
        "optionsHangul": [
          "트롤 하지마",
          "게임 정말 잘하시네요!",
          "갱 와주세요"
        ],
        "answer": 1,
        "conceptTag": "Complimenti Gaming",
        "feedback_incorrect": "잘하다 = essere bravo in qualcosa",
        "tip": "잘하다 (jalhada) = fare bene, essere bravo",
        "optionsRomaji": [
          "Teurol hajima",
          "",
          "Gaeng wajuseyo"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta il commento in chat dopo una mid lane disastrosa:",
        "audioHangul": "미드 차이",
        "options": [
          "Mid diff",
          "Top diff",
          "Tutti afk"
        ],
        "answer": 0,
        "conceptTag": "Gergo LoL",
        "feedback_incorrect": "미드 = mid, 차이 = differenza/diff",
        "tip": "차이 (chai) è il termine per 'diff' in gaming coreano",
        "audioRomaji": "Mideu chai"
      },
      {
        "type": "speak",
        "question": "Il support del nemico fa tonnellate di danni. Dì: 'Non trollare!'",
        "expectedRomaji": [
          "teurol hajima",
          "teurolhajima"
        ],
        "expectedHangul": [
          "트롤 하지마"
        ],
        "conceptTag": "Tilt Venting",
        "feedback_incorrect": "Teu-rol ha-ji-ma!",
        "tip": "트롤 = troll, 하지마 = non fare"
      },
      {
        "type": "fill_blank",
        "question": "Completa la richiesta gank: '갱 ___주세요' (Vieni a gankarmi, per favore)",
        "options": [
          "와",
          "가",
          "해",
          "봐"
        ],
        "answer": 0,
        "conceptTag": "Verbo Venire",
        "feedback_incorrect": "오다/와 = venire. 와주세요 = vieni per favore.",
        "tip": "오다 (oda) = venire → 와주세요 = vieni per favore",
        "optionsHangul": [
          "와",
          "가",
          "해",
          "봐"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "Perdi la partita a causa del Jungler che non fa ganking. Come esprimi la tua frustrazione in modo soft?",
        "question": "Cosa scrivi in chat?",
        "options": [
          "Jinjja jjajeungnayo (È davvero snervante)",
          "Hwaiting!",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "진짜 짜증나요",
          "화이팅!",
          "감사합니다"
        ],
        "answer": 0,
        "conceptTag": "Esprimere Frustrazione",
        "feedback_incorrect": "Devi esprimere la frustrazione, non ringraziare o incoraggiare!",
        "tip": "진짜 짜증나요 = è davvero snervante — usalo con cautela!",
        "optionsRomaji": [
          "",
          "",
          "Gamsahamnida"
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso] Come ci si presenta dicendo 'Io sono Sara'?",
        "options": [
          "Jeoneun Sara-yeyo",
          "Sara gamsahamnida",
          "Annyeong Sara"
        ],
        "optionsHangul": [
          "저는 사라예요",
          "사라 감사합니다",
          "안녕 사라"
        ],
        "answer": 0,
        "conceptTag": "Ripasso Presentazione",
        "feedback_incorrect": "Dal Giorno 2: 저는 + Nome + 예요/이에요",
        "tip": "저는 = io (formale), 예요 = sono",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      }
    ]
  },
  {
    "day": 9,
    "title": "Shopping Cosplay a Hongdae 🎌",
    "topic": "Shopping & Negozi",
    "theory": {
      "intro": "Oggi siamo ad Hongdae, il quartiere più creativo di Seoul! Negozi di cosplay, manga, figure — il paradiso. Impara a comprare, negoziare e fare il giro dei negozi come una pro!",
      "concept": "'얼마예요?' (Eolmayeyo?) = Quanto costa? È la domanda più utile in assoluto per lo shopping. Per chiedere se hanno qualcosa: [Cosa] + 있어요? (isseoyo?). Per provare: 입어봐도 돼요? (Posso provarlo?)",
      "builderRule": "🔗 Chain link: Entri → 안녕하세요 → [Cosa] 있어요? → 얼마예요? → 조금만 깎아주세요 (Fammi un piccolo sconto). Combo perfetta per lo shopping!",
      "examples": [
        {
          "hangul": "이거 입어봐도 돼요?",
          "romaji": "Igeo ibeobwado dwaeyo?",
          "eng": "Posso provarlo?",
          "context": "Sei da Animate e c'è un costume cosplay perfetto. 🎭"
        },
        {
          "hangul": "조금만 깎아주세요~",
          "romaji": "Jogeumman kkakajuseyo~",
          "eng": "Fammi un piccolo sconto~",
          "context": "Al mercato di Dongdaemun con le stoffe. Di' con voce dolce! 🥺"
        },
        {
          "hangul": "새로운 피규어 있어요?",
          "romaji": "Saeroun pigweo isseoyo?",
          "eng": "Avete nuove figure?",
          "context": "La domanda che fa soffrire il portafoglio. 💸"
        },
        {
          "hangul": "다른 색 있어요?",
          "romaji": "Dareun saek isseoyo?",
          "eng": "Avete un altro colore?",
          "context": "Il costume è perfetto ma il colore non va. 🎨"
        },
        {
          "hangul": "이거 얼마예요?",
          "romaji": "Igeo eolmayeyo?",
          "eng": "Quanto costa questo?",
          "context": "La domanda base per ogni acquisto! 💰"
        }
      ],
      "culture": "Nei mercati tradizionali come Namdaemun o Dongdaemun il trading è accettato — anche incoraggiato! Nei negozi moderni invece il prezzo è fisso. Sapere la differenza ti fa risparmiare molto!"
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Vedi un costume perfetto per la tua prossima fiera. Come chiedi di provarlo?",
        "options": [
          "Eolmayeyo?",
          "Igeo ibeobwado dwaeyo?",
          "Dareun saek isseoyo?"
        ],
        "optionsHangul": [
          "얼마예요?",
          "이거 입어봐도 돼요?",
          "다른 색 있어요?"
        ],
        "answer": 1,
        "conceptTag": "Provare Vestiti",
        "feedback_incorrect": "입어보다 = provare un vestito, dwaeyo = è permesso?",
        "tip": "이거 입어봐도 돼요? = Posso provare questo?",
        "optionsRomaji": [
          "Eolmayeyo?",
          "",
          "Dareun saek isseoyo?"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta quanto paga questa persona per la sua nuova figure rara:",
        "audioHangul": "얼마예요?",
        "options": [
          "Quanto costa?",
          "Dov'è la cassa?",
          "Avete lo sconto?"
        ],
        "answer": 0,
        "conceptTag": "Shopping Vocab",
        "feedback_incorrect": "얼마예요? = Quanto costa?",
        "tip": "얼마 (eolma) = quanto (prezzo)",
        "audioRomaji": "Eolmayeyo?"
      },
      {
        "type": "speak",
        "question": "Negozia il prezzo con voce dolce: 'Fammi un piccolo sconto' (Jogeumman kkakajuseyo)",
        "expectedRomaji": [
          "jogeumman kkakajuseyo",
          "jogeummankkakajuseyo"
        ],
        "expectedHangul": [
          "조금만 깎아주세요"
        ],
        "conceptTag": "Negoziazione",
        "feedback_incorrect": "Jo-geum-man kka-ka-ju-se-yo",
        "tip": "조금만 = solo un po'. Dilla con voce dolcissima!"
      },
      {
        "type": "conversation",
        "context": "Il negoziante di Animate ti mostra una figure di Attack on Titan. Vuoi sapere il prezzo.",
        "question": "Cosa chiedi?",
        "options": [
          "Gamsahamnida",
          "Igeo eolmayeyo?",
          "Hwaiting"
        ],
        "optionsHangul": [
          "감사합니다",
          "이거 얼마예요?",
          "화이팅"
        ],
        "answer": 1,
        "conceptTag": "Chiedere il Prezzo",
        "feedback_incorrect": "Non è il momento di ringraziare ancora!",
        "tip": "이거 (igeo) = questo, 얼마예요? = quanto costa?",
        "optionsRomaji": [
          "Gamsahamnida",
          "",
          "Hwaiting"
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Il costume è bello ma solo nel colore sbagliato. Cosa chiedi?",
        "options": [
          "Dareun saek isseoyo?",
          "Saeroun pigweo isseoyo?",
          "Igeojuseyo"
        ],
        "optionsHangul": [
          "다른 색 있어요?",
          "새로운 피규어 있어요?",
          "이거 주세요"
        ],
        "answer": 0,
        "conceptTag": "Colori Shopping",
        "feedback_incorrect": "다른 = diverso/altro, 색 = colore",
        "tip": "다른 색 (dareun saek) = un altro colore",
        "optionsRomaji": [
          "Dareun saek isseoyo?",
          "Saeroun pigweo isseoyo?",
          "Igeo juseyo"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questa domanda al commesso del negozio di cosplay:",
        "audioHangul": "새로운 피규어 있어요?",
        "options": [
          "Avete nuove figure?",
          "Quanto costa il manga?",
          "Posso provare il costume?"
        ],
        "answer": 0,
        "conceptTag": "Ascolto Shopping",
        "feedback_incorrect": "피규어 = figure, 새로운 = nuove",
        "tip": "새로운 (saeroun) = nuovo/nuove",
        "audioRomaji": "Saeroun pigweo isseoyo?"
      },
      {
        "type": "speak",
        "question": "Chiedi direttamente: 'Quanto costa questo?'",
        "expectedRomaji": [
          "igeo eolmayeyo",
          "igeoeolmayeyo"
        ],
        "expectedHangul": [
          "이거 얼마예요?"
        ],
        "conceptTag": "Prezzo",
        "feedback_incorrect": "I-geo eol-ma-ye-yo?",
        "tip": "이거 = questo, 얼마 = quanto (prezzo)"
      },
      {
        "type": "fill_blank",
        "question": "Completa: '이거 ___봐도 돼요?' (Posso provarlo?)",
        "options": [
          "입어",
          "먹어",
          "마셔",
          "써"
        ],
        "answer": 0,
        "conceptTag": "Verbo Provare",
        "feedback_incorrect": "입다 = indossare → 입어보다 = provare (indossando)",
        "tip": "입어보다 = provare un vestito — letteralmente 'indossare per vedere'",
        "optionsHangul": [
          "입어",
          "먹어",
          "마셔",
          "써"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "Trovi una parrucca perfetta per il tuo prossimo cosplay. Vuoi sapere se hanno anche altri modelli.",
        "question": "Come chiedi?",
        "options": [
          "I gabal eodiseo sasseoyo?",
          "Dareun saek isseoyo?",
          "Igeo juseyo"
        ],
        "optionsHangul": [
          "이 가발 어디서 샀어요?",
          "다른 색 있어요?",
          "이거 주세요"
        ],
        "answer": 1,
        "conceptTag": "Varianti Prodotto",
        "feedback_incorrect": "Devi chiedere altri modelli/colori!",
        "tip": "다른 = un altro/diverso",
        "optionsRomaji": [
          "",
          "Dareun saek isseoyo?",
          "Igeo juseyo"
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso] Come si dice 'Questo per favore' per ordinare o comprare?",
        "options": [
          "Igeo juseyo",
          "Igeo eolmayeyo",
          "Igeo isseoyo"
        ],
        "optionsHangul": [
          "이거 주세요",
          "이거 얼마예요?",
          "이거 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso Ordinare",
        "feedback_incorrect": "Dal Giorno 5: 이거 주세요 = Questo per favore",
        "tip": "주세요 (juseyo) = per favore dammi — si usa per comprare e ordinare!",
        "optionsRomaji": [
          "Igeo juseyo",
          "",
          ""
        ]
      }
    ]
  },
  {
    "day": 10,
    "title": "Animeland Sbloccata! Manga & Cosplay Pro 🎌✨",
    "topic": "Anime & Cultura Otaku",
    "theory": {
      "intro": "Oggi sblocchi Animeland! 🎌 Il negozio degli otaku di Seoul è leggendario: figure rare, manga in coreano, costumi su misura. La cultura anime è immensa in Corea — il termine 'manhwa' indica i fumetti coreani, cugini del manga giapponese!",
      "concept": "Per fare i complimenti al cosplay di qualcuno: [Soggetto] + 정말 + [Aggettivo] + 이에요/해요. Es: '코스프레 정말 예뻐요!' = 'Il tuo cosplay è davvero bellissimo!'",
      "builderRule": "🔗 Chain link: Entrare in fiera → 안녕하세요 → 코스프레 정말 멋있어요! (Il cosplay è pazzesco!) → 사진 같이 찍을까요? (Facciamo una foto insieme?) — la combo da cosplayer pro!",
      "examples": [
        {
          "hangul": "코스프레 정말 멋있어요!",
          "romaji": "Koseupeure jeongmal meosisseoyo!",
          "eng": "Il tuo cosplay è davvero fantastico!",
          "context": "Il complimento perfetto in fiera! 🌟"
        },
        {
          "hangul": "사진 같이 찍을까요?",
          "romaji": "Sajin gachi jjigeulkkayo?",
          "eng": "Facciamo una foto insieme?",
          "context": "Per ricordare il cosplayer pazzesco che hai incontrato! 📸"
        },
        {
          "hangul": "어떤 캐릭터예요?",
          "romaji": "Eotteon kaerikteo-yeyo?",
          "eng": "Che personaggio sei?",
          "context": "Quando non riconosci il cosplay ma vuoi saperlo! 🤔"
        },
        {
          "hangul": "밤새서 만들었어요",
          "romaji": "Bamsaeseo mandeureosseoyo",
          "eng": "L'ho fatto restando sveglia tutta la notte",
          "context": "Quando ti lodano l'armatura costruita a mano. 💪🎭"
        },
        {
          "hangul": "이 가발 어디서 샀어요?",
          "romaji": "I gabal eodiseo sasseoyo?",
          "eng": "Dove hai comprato questa parrucca?",
          "context": "Vuoi replicare la loro acconciatura perfetta! 💇‍♀️"
        }
      ],
      "culture": "La cultura cosplay coreana è diversa da quella giapponese: più professionale, con tantissime competizioni ufficiali. I cosplayer coreani sono noti per la loro precisione quasi maniacale nel replicare i personaggi!"
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Vedi la cosplayer più impressionante della fiera. Come la complimenti?",
        "options": [
          "Igeo eolmayeyo?",
          "Koseupeure jeongmal meosisseoyo!",
          "Teurol hajima"
        ],
        "optionsHangul": [
          "이거 얼마예요?",
          "코스프레 정말 멋있어요!",
          "트롤 하지마"
        ],
        "answer": 1,
        "conceptTag": "Complimenti Cosplay",
        "feedback_incorrect": "Non chiedere il prezzo o accusi di troll — complimentati!",
        "tip": "정말 (jeongmal) = davvero, 멋있어요 = è fantastico/figo",
        "optionsRomaji": [
          "",
          "",
          "Teurol hajima"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta questa proposta fotografica in stile coreano:",
        "audioHangul": "사진 같이 찍을까요?",
        "options": [
          "Facciamo una foto insieme?",
          "Posso comprare la tua foto?",
          "Dov'è il fotografo?"
        ],
        "answer": 0,
        "conceptTag": "Foto Cosplay",
        "feedback_incorrect": "사진 = foto, 같이 = insieme, 찍다 = scattare",
        "tip": "같이 (gachi) = insieme — parola bellissima!",
        "audioRomaji": "Sajin gachi jjigeulkkayo?"
      },
      {
        "type": "speak",
        "question": "Proponi una foto insieme: 'Facciamo una foto insieme?'",
        "expectedRomaji": [
          "sajin gachi jjigeulkkayo",
          "sajingachijjigeulkkayo"
        ],
        "expectedHangul": [
          "사진 같이 찍을까요?"
        ],
        "conceptTag": "Proposta Foto",
        "feedback_incorrect": "Sa-jin ga-chi jji-geul-kka-yo?",
        "tip": "찍을까요 = facciamo/scattiamo? È una proposta gentile!"
      },
      {
        "type": "conversation",
        "context": "Una cosplayer ti chiede quanto hai impiegato a fare il tuo costume. Come rispondi che hai lavorato tutta la notte?",
        "question": "Cosa rispondo?",
        "options": [
          "Bamsaeseo mandeureosseoyo",
          "Daebak!",
          "Gaeng wajuseyo"
        ],
        "optionsHangul": [
          "밤새서 만들었어요",
          "대박!",
          "갱 와주세요"
        ],
        "answer": 0,
        "conceptTag": "Racconto Cosplay",
        "feedback_incorrect": "밤새서 = restando sveglia tutta la notte",
        "tip": "밤새다 (bamsaeda) = fare le ore piccole, stare sveglia tutta la notte",
        "optionsRomaji": [
          "Bamsaeseo mandeureosseoyo",
          "Daebak!",
          "Gaeng wajuseyo"
        ]
      },
      {
        "type": "multiple_choice",
        "question": "Non riconosci il personaggio cosplayato. Come chiedi educatamente chi è?",
        "options": [
          "I gabal eodiseo sasseoyo?",
          "Eotteon kaerikteo-yeyo?",
          "Koseupeure jogeumman kkakajuseyo"
        ],
        "optionsHangul": [
          "이 가발 어디서 샀어요?",
          "어떤 캐릭터예요?",
          "코스프레 조금만 깎아주세요"
        ],
        "answer": 1,
        "conceptTag": "Chiedere il Personaggio",
        "feedback_incorrect": "어떤 = che tipo di, 캐릭터 = character, 예요 = è",
        "tip": "캐릭터 (kaerikteo) = personaggio (prestito dall'inglese 'character')",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta la domanda su dove ha comprato la parrucca:",
        "audioHangul": "이 가발 어디서 샀어요?",
        "options": [
          "Dove hai comprato questa parrucca?",
          "Quanto costa la parrucca?",
          "Posso provare la parrucca?"
        ],
        "answer": 0,
        "conceptTag": "Parrucca Cosplay",
        "feedback_incorrect": "가발 = parrucca, 어디서 = da dove, 샀어요 = hai comprato",
        "tip": "어디서 사다 = comprare da dove",
        "audioRomaji": "I gabal eodiseo sasseoyo?"
      },
      {
        "type": "speak",
        "question": "Ammetti con orgoglio: 'L'ho fatto restando sveglia tutta la notte'",
        "expectedRomaji": [
          "bamsaeseo mandeureosseoyo",
          "bamsaeseomandeureosseoyo"
        ],
        "expectedHangul": [
          "밤새서 만들었어요"
        ],
        "conceptTag": "Racconto",
        "feedback_incorrect": "Bam-sae-seo man-deu-reo-sseo-yo",
        "tip": "만들다 = fare/costruire → 만들었어요 = ho fatto (passato)"
      },
      {
        "type": "fill_blank",
        "question": "Completa il complimento: '코스프레 정말 ___있어요!' (È davvero fantastico!)",
        "options": [
          "멋",
          "맛",
          "힘",
          "돈"
        ],
        "answer": 0,
        "conceptTag": "Aggettivi Complimento",
        "feedback_incorrect": "멋있다 = essere figo/fantastico",
        "tip": "멋있다 (meosissda) = essere figo, fantastico, stylish!",
        "optionsHangul": [
          "멋",
          "맛",
          "힘",
          "돈"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "conversation",
        "context": "La tua foto con la cosplayer va virale sui social. Lei ti commenta 'Grazie' in coreano. Come rispondi?",
        "question": "Risposta educata?",
        "options": [
          "Anieyo, anieyo! (No, no, sono io che ti ringrazio!)",
          "Teurol hajima",
          "Daebak daebak"
        ],
        "optionsHangul": [
          "아니에요, 아니에요!",
          "트롤 하지마",
          "대박 대박"
        ],
        "answer": 0,
        "conceptTag": "Umiltà Coreana",
        "feedback_incorrect": "In Corea si risponde ai ringraziamenti con umiltà, non con ok o prego!",
        "tip": "아니에요 (anieyo) = no/non è niente — risposta umile ai ringraziamenti!",
        "optionsRomaji": [
          "",
          "Teurol hajima",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso] Come si chiede 'C'è posto?' (utile sia al gym che al PC Bang)",
        "options": [
          "Jari isseoyo?",
          "Jari eodiyeyo?",
          "Jari juseyo?"
        ],
        "optionsHangul": [
          "자리 있어요?",
          "자리 어디예요?",
          "자리 주세요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso Posti",
        "feedback_incorrect": "자리 (jari) = posto, 있어요 = c'è",
        "tip": "자리 있어요? = C'è posto disponibile?",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      }
    ]
  },
  {
    "day": 11,
    "title": "Relax al Fiume Han 🌿",
    "topic": "Proposte e Natura",
    "theory": {
      "intro": "Prenditi una pausa dalla palestra e da LoL. Oggi andiamo al Fiume Han (한강), lo scenario perfetto dei K-Drama per rilassare i muscoli dopo un allenamento pesante!",
      "concept": "Per proporre a qualcuno di fare qualcosa insieme si usa il verbo + '~(으)ㄹ까요?' (-(eu)lkkayo). È un modo gentile per dire 'Facciamo...?' o 'Andiamo...?'.",
      "builderRule": "🔗 Chain link: 오늘 날씨가 좋아요 (Il tempo è bello) + 산책 갈까요? (Andiamo a passeggiare?) = L'invito perfetto.",
      "examples": [
        {
          "hangul": "산책 갈까요?",
          "romaji": "Sanchaek galkkayo?",
          "eng": "Andiamo a fare una passeggiata?",
          "context": "Per esplorare il parco."
        },
        {
          "hangul": "오늘 날씨가 좋아요",
          "romaji": "Oneul nalssiga joayo",
          "eng": "Oggi il tempo è bello",
          "context": "Rompi ghiaccio perfetto."
        },
        {
          "hangul": "치맥 먹을까요?",
          "romaji": "Chimaek meogeulkkayo?",
          "eng": "Mangiamo pollo e birra?",
          "context": "Il pasto tradizionale al fiume Han!"
        },
        {
          "hangul": "자전거 타요",
          "romaji": "Jajeongeo tayo",
          "eng": "Andiamo in bici",
          "context": "Attività popolarissima sul fiume."
        }
      ],
      "culture": "Al Fiume Han è un must assoluto ordinare il 'Chimaek' (치맥 = Pollo fritto + Birra). Puoi ordinarlo sull'app e te lo consegnano letteralmente mentre sei sul prato!"
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Ascolta l'invito del tuo amico coreano:",
        "audioHangul": "산책 갈까요?",
        "options": [
          "Andiamo in palestra?",
          "Andiamo a fare una passeggiata?",
          "Dov'è il bagno?"
        ],
        "answer": 1,
        "conceptTag": "Proposte",
        "feedback_incorrect": "산책 (sanchaek) significa passeggiata.",
        "tip": "Usa ~(으)ㄹ까요 per le proposte.",
        "audioRomaji": "Sanchek galkkayo?"
      },
      {
        "type": "multiple_choice",
        "question": "Come si dice 'Oggi il tempo è bello'?",
        "options": [
          "Oneul nalssiga joayo",
          "Chimaek meogeulkkayo",
          "Jajeongeo tayo"
        ],
        "optionsHangul": [
          "오늘 날씨가 좋아요",
          "치맥 먹을까요?",
          "자전거 타요"
        ],
        "answer": 0,
        "conceptTag": "Meteo",
        "feedback_incorrect": "날씨 (nalssi) significa tempo atmosferico.",
        "tip": "Joayo = è bello/buono.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "speak",
        "question": "Proponi il cibo tipico: 'Mangiamo pollo e birra?'",
        "expectedRomaji": [
          "chimaek meogeulkkayo",
          "chimaekmeogeulkkayo"
        ],
        "expectedHangul": [
          "치맥 먹을까요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Chi-maek meo-geul-kka-yo?",
        "tip": "Chimaek è l'unione di Chicken e Maekju (Birra)."
      },
      {
        "type": "sentence_builder",
        "context": "Guardi il cielo azzurro e decidi di rompere il ghiaccio.",
        "question": "Componi la frase: 'Oggi (오늘) il tempo (날씨가) è bello (좋아요)'.",
        "shuffled_blocks": [
          "좋아요",
          "날씨가",
          "오늘"
        ],
        "correct_order": [
          "오늘",
          "날씨가",
          "좋아요"
        ],
        "conceptTag": "Sintassi",
        "feedback_incorrect": "Oggi (오늘) + Tempo (날씨가) + Bello (좋아요).",
        "tip": "Il soggetto/tema va sempre prima dell'aggettivo."
      },
      {
        "type": "conversation",
        "context": "Vuoi affittare delle biciclette vicino al fiume.",
        "question": "Cosa dici al tuo amico?",
        "options": [
          "Jajeongeo tayo",
          "Mollayo",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "자전거 타요",
          "몰라요",
          "감사합니다"
        ],
        "answer": 0,
        "conceptTag": "Attività",
        "feedback_incorrect": "자전거 (jajeongeo) = bicicletta.",
        "tip": "Tayo dal verbo 타다 (cavalcare/salire).",
        "optionsRomaji": [
          "",
          "Mollayo",
          "Gamsahamnida"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa la proposta: 산책 갈___? (Andiamo a passeggiare?)",
        "options": [
          "까요",
          "어요",
          "니다",
          "세"
        ],
        "answer": 0,
        "conceptTag": "Grammatica",
        "feedback_incorrect": "Per proporre si usa ~(으)ㄹ까요.",
        "tip": "Galkkayo? = andiamo?",
        "optionsHangul": [
          "까요",
          "어요",
          "니다",
          "세"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 9] Come chiedi 'Quanto costa?' per affittare la bici?",
        "options": [
          "Eolmayeyo?",
          "Isseoyo?",
          "Juseyo?"
        ],
        "optionsHangul": [
          "얼마예요?",
          "있어요?",
          "주세요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "얼마 (eolma) = quanto.",
        "tip": "Eolmayeyo è la base dello shopping.",
        "optionsRomaji": [
          "Eolmayeyo?",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Vuoi combinare le due idee principali della giornata.",
        "question": "Componi: 'Tempo bello (날씨가 좋아요), passeggiata andiamo? (산책 갈까요?)'.",
        "shuffled_blocks": [
          "산책",
          "갈까요?",
          "좋아요,",
          "날씨가"
        ],
        "correct_order": [
          "날씨가",
          "좋아요,",
          "산책",
          "갈까요?"
        ],
        "conceptTag": "Fluidità",
        "feedback_incorrect": "Costruisci le due frasi in sequenza.",
        "tip": "Prima il contesto, poi l'invito."
      },
      {
        "type": "listen",
        "question": "Cosa ti stanno proponendo di fare?",
        "audioHangul": "치맥 먹을까요?",
        "options": [
          "Bici?",
          "Pollo e birra?",
          "Passeggiata?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Vocab",
        "feedback_incorrect": "치맥 (Chimaek).",
        "tip": " 먹을까요 (Meogeulkkayo) = mangiamo?",
        "audioRomaji": "Chimaek meogeulkkayo?"
      },
      {
        "type": "speak",
        "question": "Dì ad alta voce: 'Andiamo a fare una passeggiata?'",
        "expectedRomaji": [
          "sanchaek galkkayo",
          "sanchaekgalkkayo"
        ],
        "expectedHangul": [
          "산책 갈까요?"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "San-chaek gal-kka-yo?",
        "tip": "Mettici un tono interrogativo ed entusiasta!"
      }
    ]
  },
  {
    "day": 12,
    "title": "Cat Café Sbloccato! 🐱🐾",
    "topic": "Permessi e Animali",
    "theory": {
      "intro": "Mappa Sbloccata! A Seoul i caffè con animali sono ovunque. Ma attenzione: prima di toccare un gatto, devi sempre chiedere il permesso educatamente.",
      "concept": "Per chiedere il permesso si usa 'Verbo + 아/어도 돼요?' (-do dwaeyo?). Es: 만지다 (toccare) diventa 만져도 돼요? (Posso toccare?). L'aggettivo 귀엽다 (carino) diventa 귀여워요!",
      "builderRule": "🔗 Chain link: Usa le frasi mappa! 고양이가 귀여워요! (Il gatto è carino) + 만져도 돼요? (Posso accarezzarlo?).",
      "examples": [
        {
          "hangul": "고양이 만져도 돼요?",
          "romaji": "Goyangi manjyeodo dwaeyo?",
          "eng": "Posso accarezzare il gatto?",
          "context": "Frase Mappa 📍 - Regola d'oro."
        },
        {
          "hangul": "고양이가 귀여워요!",
          "romaji": "Goyangi-ga gwiyeowo!",
          "eng": "Il gatto è carino!",
          "context": "Frase Mappa 📍 - Usala in continuazione!"
        },
        {
          "hangul": "간식 줘도 돼요?",
          "romaji": "Gansik jwodo dwaeyo?",
          "eng": "Posso dare degli snack?",
          "context": "Per comprare le crocchette al bancone."
        },
        {
          "hangul": "물지 않아요?",
          "romaji": "Mulji anayo?",
          "eng": "Non morde?",
          "context": "Per sicurezza, chiedi prima."
        }
      ],
      "culture": "Nei Cat Café (고양이 카페) dovrai toglierti le scarpe, indossare ciabatte fornite da loro e disinfettare le mani. I gatti sono i veri padroni."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Cosa ti sta chiedendo il cliente vicino a te?",
        "audioHangul": "만져도 돼요?",
        "options": [
          "Posso fare foto?",
          "Posso accarezzarlo?",
          "È carino?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Permessi",
        "feedback_incorrect": "만지다 (manjida) significa toccare.",
        "tip": "Manjyeodo = Anche se tocco, Dwaeyo = Va bene?",
        "audioRomaji": "Manjyeodo dwaeyo?"
      },
      {
        "type": "multiple_choice",
        "question": "Il gatto ti guarda affamato. Come chiedi se puoi dargli da mangiare?",
        "options": [
          "Gansik jwodo dwaeyo?",
          "Mulji anayo?",
          "Goyangi manjyeodo dwaeyo?"
        ],
        "optionsHangul": [
          "간식 줘도 돼요?",
          "물지 않아요?",
          "고양이 만져도 돼요?"
        ],
        "answer": 0,
        "conceptTag": "Snack",
        "feedback_incorrect": "간식 (gansik) = snack. 주다 (juda) = dare.",
        "tip": "Gansik jwodo dwaeyo?",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Vedi un gattino stupendo e vuoi chiedere il permesso.",
        "question": "Componi: 'Il gatto (고양이가) è carino! (귀여워요!) Posso accarezzarlo? (만져도 돼요?)'.",
        "shuffled_blocks": [
          "귀여워요!",
          "만져도",
          "고양이가",
          "돼요?"
        ],
        "correct_order": [
          "고양이가",
          "귀여워요!",
          "만져도",
          "돼요?"
        ],
        "conceptTag": "Sintassi",
        "feedback_incorrect": "Gatto + Carino + Toccare + Permesso.",
        "tip": "Collega l'esclamazione alla richiesta formale."
      },
      {
        "type": "conversation",
        "context": "🐱 Un Maine Coon gigante si avvicina. Assicurati che sia docile.",
        "question": "Come chiedi 'Non morde?'",
        "options": [
          "Mulji anayo?",
          "Gwiyeowoyo!",
          "Mollayo"
        ],
        "optionsHangul": [
          "물지 않아요?",
          "귀여워요!",
          "몰라요"
        ],
        "answer": 0,
        "conceptTag": "Sicurezza",
        "feedback_incorrect": "물다 (mulda) significa mordere.",
        "tip": "Aggiungendo '~지 않아요' rendi il verbo negativo.",
        "optionsRomaji": [
          "",
          "",
          "Mollayo"
        ]
      },
      {
        "type": "speak",
        "question": "Esprimi entusiasmo: 'Il gatto è carino!'",
        "expectedRomaji": [
          "goyangi-ga gwiyeowo",
          "goyangiga gwiyeowoyo"
        ],
        "expectedHangul": [
          "고양이가 귀여워요!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Go-yang-i-ga gwi-yeo-wo-yo!",
        "tip": "Gwi-yeo-wo-yo è l'aggettivo perfetto."
      },
      {
        "type": "fill_blank",
        "question": "Completa il permesso: '만져___ 돼요?' (Posso toccare?)",
        "options": [
          "도",
          "고",
          "서",
          "가"
        ],
        "answer": 0,
        "conceptTag": "Particelle",
        "feedback_incorrect": "La grammatica per il permesso richiede '~도 돼요'.",
        "tip": "만져도 = Anche se tocco.",
        "optionsHangul": [
          "도",
          "고",
          "서",
          "가"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 5] Vuoi ordinare da bere al Cat Cafe. 'Acqua per favore'.",
        "options": [
          "Mul juseyo",
          "Gansik juseyo",
          "Igeo juseyo"
        ],
        "optionsHangul": [
          "물 주세요",
          "간식 주세요",
          "이거 주세요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Mul = Acqua.",
        "tip": "Mul juseyo!",
        "optionsRomaji": [
          "",
          "",
          "Igeo juseyo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Chiedi di fare una foto al gatto dormiente.",
        "question": "Componi: 'Foto (사진) fare/scattare (찍어도) posso? (돼요?)'.",
        "shuffled_blocks": [
          "돼요?",
          "찍어도",
          "사진"
        ],
        "correct_order": [
          "사진",
          "찍어도",
          "돼요?"
        ],
        "conceptTag": "Applicazione",
        "feedback_incorrect": "Foto (Sajin) + Scattare (Jjigeodo) + Posso (Dwaeyo).",
        "tip": "Applica la stessa regola del toccare al verbo scattare."
      },
      {
        "type": "listen",
        "question": "Ascolta la risposta del padrone del locale:",
        "audioHangul": "네, 만져도 돼요",
        "options": [
          "No, non toccare",
          "Sì, puoi accarezzarlo",
          "Non morde"
        ],
        "answer": 1,
        "conceptTag": "Comprensione",
        "feedback_incorrect": "네 (Ne) = Sì.",
        "tip": "Ne, manjyeodo dwaeyo.",
        "audioRomaji": "Ne, manjyeodo dwaeyo"
      },
      {
        "type": "speak",
        "question": "Chiedi dolcemente: 'Posso accarezzare il gatto?'",
        "expectedRomaji": [
          "goyangi manjyeodo dwaeyo",
          "goyangimanjyeododwaeyo"
        ],
        "expectedHangul": [
          "고양이 만져도 돼요?"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Go-yang-i man-jyeo-do dwae-yo?",
        "tip": "Tono interrogativo alla fine."
      }
    ]
  },
  {
    "day": 13,
    "title": "Salone Coreano: Look Perfetto 💇‍♀️",
    "topic": "Bellezza & Richieste",
    "theory": {
      "intro": "Prima di sfoggiare quel nuovo cosplay ad Hongdae, serve l'acconciatura perfetta. I saloni di bellezza (미용실) offrono trattamenti super premium!",
      "concept": "Usa '주세요' (juseyo) per richiedere servizi. '다듬어 주세요' significa 'Mi spunti i capelli'. Aggiungi '조금만' (jogeumman) per dire 'solo un po''.",
      "builderRule": "🔗 Chain link: 머리 (Capelli) + 조금만 (Solo un po') + 다듬어 주세요 (Spuntali). Preciso e diretto!",
      "examples": [
        {
          "hangul": "머리 다듬어 주세요",
          "romaji": "Meori dadeumeo juseyo",
          "eng": "Mi spunti i capelli, per favore",
          "context": "Per evitare tagli troppo drastici!"
        },
        {
          "hangul": "이 색으로 염색 해주세요",
          "romaji": "I saek-euro yeomsaek haejuseyo",
          "eng": "Mi tinga di questo colore",
          "context": "Mostrando la foto del personaggio."
        },
        {
          "hangul": "앞머리 잘라 주세요",
          "romaji": "Apmmeori jalla juseyo",
          "eng": "Mi tagli la frangia, per favore",
          "context": "Il look classico K-Drama."
        },
        {
          "hangul": "파마 해주세요",
          "romaji": "Pama haejuseyo",
          "eng": "Voglio la permanente",
          "context": "Per ricci duraturi."
        }
      ],
      "culture": "I parrucchieri in Corea offrono sempre caffè e snack gratis mentre aspetti. Il lavaggio dei capelli include sempre un massaggio pazzesco."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Cosa ti propone di fare il parrucchiere?",
        "audioHangul": "앞머리 잘라 주세요",
        "options": [
          "Tintura blu",
          "Spuntare i capelli",
          "Tagliare la frangia"
        ],
        "answer": 2,
        "conceptTag": "Vocabolario",
        "feedback_incorrect": "앞머리 (Apmmeori) = frangia (capelli davanti).",
        "tip": "앞 (Ap) = davanti, 머리 (Meori) = capelli.",
        "audioRomaji": "Ammeorig jalla juseyo"
      },
      {
        "type": "multiple_choice",
        "question": "Mostri la foto di Jinx. Come dici 'Mi tinga di questo colore'?",
        "options": [
          "I saek-euro yeomsaek haejuseyo",
          "Meori dadeumeo juseyo",
          "Pama haejuseyo"
        ],
        "optionsHangul": [
          "이 색으로 염색 해주세요",
          "머리 다듬어 주세요",
          "파마 해주세요"
        ],
        "answer": 0,
        "conceptTag": "Colori",
        "feedback_incorrect": "염색 (yeomsaek) significa tintura.",
        "tip": "색 (saek) = colore. 이 색으로 = con questo colore.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Vuoi solo sistemare le punte.",
        "question": "Componi: 'Capelli (머리), solo un po' (조금만), spunti per favore (다듬어 주세요)'.",
        "shuffled_blocks": [
          "조금만",
          "다듬어 주세요",
          "머리"
        ],
        "correct_order": [
          "머리",
          "조금만",
          "다듬어 주세요"
        ],
        "conceptTag": "Richieste",
        "feedback_incorrect": "Soggetto (머리) + Avverbio (조금만) + Verbo (다듬어 주세요).",
        "tip": "Metti il 'solo un po'' prima del verbo."
      },
      {
        "type": "speak",
        "question": "Dì chiaramente: 'Mi spunti i capelli, per favore'.",
        "expectedRomaji": [
          "meori dadeumeo juseyo",
          "meoridadeumeojuseyo"
        ],
        "expectedHangul": [
          "머리 다듬어 주세요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Meo-ri da-deum-eo ju-se-yo.",
        "tip": "다듬다 = spuntare."
      },
      {
        "type": "conversation",
        "context": "Vuoi i capelli mossi come le idol.",
        "question": "Cosa chiedi?",
        "options": [
          "Pama haejuseyo",
          "Apmmeori jalla juseyo",
          "Mul juseyo"
        ],
        "optionsHangul": [
          "파마 해주세요",
          "앞머리 잘라 주세요",
          "물 주세요"
        ],
        "answer": 0,
        "conceptTag": "Stili",
        "feedback_incorrect": "파마 (Pama) deriva dall'inglese Perm.",
        "tip": "Pama haejuseyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 이 색___ 염색 해주세요 (Con questo colore...)",
        "options": [
          "으로",
          "가",
          "는",
          "도"
        ],
        "answer": 0,
        "conceptTag": "Strumenti",
        "feedback_incorrect": "으로 (euro) indica il mezzo o lo strumento ('con').",
        "tip": "Saek-euro = mediante/con il colore.",
        "optionsHangul": [
          "으로",
          "가",
          "는",
          "도"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 4] Se ti fanno i complimenti per il nuovo taglio. 'Non è niente / Sto bene'.",
        "options": [
          "Gwaenchanayo",
          "Joesonghamnida",
          "Mollayo"
        ],
        "optionsHangul": [
          "괜찮아요",
          "죄송합니다",
          "몰라요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Gwaenchanayo si usa anche per rispondere ai complimenti con modestia.",
        "tip": "Va tutto bene = Gwaenchanayo.",
        "optionsRomaji": [
          "Gwaenchanayo",
          "",
          "Mollayo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Il taglio è perfetto. Ringrazia e di' che ti piace.",
        "question": "Componi: 'Davvero (진짜) mi piace (좋아요)'.",
        "shuffled_blocks": [
          "좋아요",
          "진짜"
        ],
        "correct_order": [
          "진짜",
          "좋아요"
        ],
        "conceptTag": "Feedback",
        "feedback_incorrect": "Avverbio + Aggettivo.",
        "tip": "Jinjja joayo!"
      },
      {
        "type": "listen",
        "question": "Ascolta la domanda sui capelli:",
        "audioHangul": "머리 다듬어 주세요",
        "options": [
          "Voglio il rosso",
          "Spunti i capelli",
          "Tagli tutto"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Dadeum-eo = spuntare/rifinire.",
        "tip": "Ascolta la radice dadeum.",
        "audioRomaji": "Meori dadeumeojuseyo"
      },
      {
        "type": "speak",
        "question": "Chiedi la frangia: 'Mi tagli la frangia, per favore'.",
        "expectedRomaji": [
          "apmmeori jalla juseyo",
          "apmmeorijallajuseyo"
        ],
        "expectedHangul": [
          "앞머리 잘라 주세요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Ap-meo-ri jal-la ju-se-yo.",
        "tip": "Jalla viene da Jareuda (tagliare)."
      }
    ]
  },
  {
    "day": 14,
    "title": "Zoo di Seoul Sbloccato! 🦁🐼",
    "topic": "Animali e Direzioni Grandi",
    "theory": {
      "intro": "Mappa Sbloccata! Lo zoo di Seoul (서울대공원) è immenso. Oggi cerchiamo i grandi animali e impariamo a muoverci nei parchi enormi.",
      "concept": "La particella '가/이' indica il soggetto. 판다 (Panda) + 가 + 귀여워요 (è carino). Per orientarti usa sempre 어디예요? (dov'è?).",
      "builderRule": "🔗 Chain link: Le tue frasi mappa! 저기요 (Scusi) + 판다 어디예요? (Dov'è il panda?) + 동물 먹이 줘도 돼요? (Posso dare cibo?).",
      "examples": [
        {
          "hangul": "판다 어디예요?",
          "romaji": "Panda eodiyeyo?",
          "eng": "Dov'è il panda?",
          "context": "Frase Mappa 📍 - Essenziale in uno zoo enorme."
        },
        {
          "hangul": "동물 먹이 줘도 돼요?",
          "romaji": "Dongmul meogi jwodo dwaeyo?",
          "eng": "Posso dare da mangiare agli animali?",
          "context": "Frase Mappa 📍 - Nelle aree interattive."
        },
        {
          "hangul": "사자가 무서워요",
          "romaji": "Saja-ga museowoyo",
          "eng": "Il leone mi fa paura",
          "context": "Quando il leone ruggisce!"
        },
        {
          "hangul": "원숭이 귀여워요",
          "romaji": "Wonsungi gwiyeowoyo",
          "eng": "La scimmia è carina",
          "context": "Vocabolario animali."
        }
      ],
      "culture": "Il Seoul Grand Park Zoo ha un sentiero d'ingresso incredibile, pieno di ciliegi in primavera."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Un bambino vicino a te urla spaventato. Cosa ha detto?",
        "audioHangul": "사자가 무서워요",
        "options": [
          "Il panda è carino!",
          "Il leone fa paura!",
          "Ho fame!"
        ],
        "answer": 1,
        "conceptTag": "Emozioni",
        "feedback_incorrect": "무섭다 (museopda) significa avere paura.",
        "tip": "사자 (saja) = leone.",
        "audioRomaji": "Sajaga museowoyo"
      },
      {
        "type": "multiple_choice",
        "question": "Vuoi comprare del cibo per le giraffe. Cosa chiedi allo staff?",
        "options": [
          "Dongmul meogi jwodo dwaeyo?",
          "Saja-ga museowoyo",
          "Panda eodiyeyo?"
        ],
        "optionsHangul": [
          "동물 먹이 줘도 돼요?",
          "사자가 무서워요",
          "판다 어디예요?"
        ],
        "answer": 0,
        "conceptTag": "Interazione",
        "feedback_incorrect": "동물 (dongmul) = animale, 먹이 (meogi) = mangime.",
        "tip": "La grammatica ~도 돼요 torna utile!",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Ti sei persa cercando l'area dei Panda.",
        "question": "Componi: 'Scusi (저기요), il panda (판다) dov'è? (어디예요?)'.",
        "shuffled_blocks": [
          "어디예요?",
          "판다",
          "저기요,"
        ],
        "correct_order": [
          "저기요,",
          "판다",
          "어디예요?"
        ],
        "conceptTag": "Direzioni",
        "feedback_incorrect": "Attira l'attenzione (저기요) + Soggetto (판다) + Domanda (어디예요).",
        "tip": "Usa 저기요 per fermare lo staff."
      },
      {
        "type": "speak",
        "question": "Chiedi indicazioni: 'Dov'è il panda?'",
        "expectedRomaji": [
          "panda eodiyeyo",
          "pandaeodiyeyo"
        ],
        "expectedHangul": [
          "판다 어디예요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Pan-da eo-di-ye-yo?",
        "tip": "어디예요 (eodiyeyo) è la parola chiave per i luoghi."
      },
      {
        "type": "conversation",
        "context": "Vedi le scimmie fare acrobazie.",
        "question": "Cosa dici?",
        "options": [
          "Wonsungi gwiyeowoyo",
          "Saja museowoyo",
          "Panda eodiyeyo"
        ],
        "optionsHangul": [
          "원숭이 귀여워요",
          "사자 무서워요",
          "판다 어디예요"
        ],
        "answer": 0,
        "conceptTag": "Animali",
        "feedback_incorrect": "원숭이 (Wonsungi) = scimmia.",
        "tip": "Wonsungi gwiyeowoyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 사자___ 무서워요 (Il leone fa paura).",
        "options": [
          "가",
          "이",
          "는",
          "은"
        ],
        "answer": 0,
        "conceptTag": "Particelle",
        "feedback_incorrect": "Saja finisce in vocale, quindi prende '가'.",
        "tip": "Saja-ga.",
        "optionsHangul": [
          "가",
          "이",
          "는",
          "은"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 3] Dopo lo zoo cerchi la metropolitana. 'Dov'è dritto?'",
        "options": [
          "Jikjin",
          "Oenjjok",
          "Oreunjjok"
        ],
        "optionsHangul": [
          "직진",
          "왼쪽",
          "오른쪽"
        ],
        "answer": 0,
        "conceptTag": "Ripasso Direzioni",
        "feedback_incorrect": "Jikjin = dritto.",
        "tip": "Sempre Jikjin per tirare dritto.",
        "optionsRomaji": [
          "",
          "",
          "Oreunjjok"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Vuoi dar da mangiare al leone, ma forse non si può.",
        "question": "Componi: 'Animale (동물) cibo (먹이) dare posso? (줘도 돼요?)'.",
        "shuffled_blocks": [
          "줘도 돼요?",
          "동물",
          "먹이"
        ],
        "correct_order": [
          "동물",
          "먹이",
          "줘도 돼요?"
        ],
        "conceptTag": "Permessi",
        "feedback_incorrect": "Animale + Mangime + Dare posso.",
        "tip": "Dongmul meogi jwodo dwaeyo?"
      },
      {
        "type": "listen",
        "question": "Ascolta la domanda del turista:",
        "audioHangul": "판다 어디예요?",
        "options": [
          "Dov'è il bagno?",
          "Dov'è il panda?",
          "Quanto costa?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Panda.",
        "tip": "Panda eodiyeyo?",
        "audioRomaji": "Panda eodiyeyo?"
      },
      {
        "type": "speak",
        "question": "Ammira il gatto gigante: 'Il leone fa paura'.",
        "expectedRomaji": [
          "saja-ga museowoyo",
          "sajagamuseowoyo"
        ],
        "expectedHangul": [
          "사자가 무서워요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Sa-ja-ga mu-seo-wo-yo.",
        "tip": "Museowoyo per la paura."
      }
    ]
  },
  {
    "day": 15,
    "title": "K-BBQ: Il Sacro Samgyeopsal 🥩",
    "topic": "Ordinare la Carne",
    "theory": {
      "intro": "Giorno di sgarro dietetico! Oggi andiamo a mangiare il K-BBQ. Devi saper ordinare le porzioni corrette e dominare la griglia.",
      "concept": "La carne si ordina contando le porzioni con '인분' (inbun) = 'porzione per persona'. Due porzioni diventano '이 인분' (i inbun).",
      "builderRule": "🔗 Chain link: 삼겹살 (Pancetta) + 이 인분 (2 porzioni) + 주세요 (per favore). La prima frase al tavolo.",
      "examples": [
        {
          "hangul": "삼겹살 이 인분 주세요",
          "romaji": "Samgyeopsal i inbun juseyo",
          "eng": "Due porzioni di pancetta, per favore",
          "context": "L'ordine base."
        },
        {
          "hangul": "상추 더 주세요",
          "romaji": "Sangchu deo juseyo",
          "eng": "Ancora lattuga, per favore",
          "context": "Per avvolgere la carne (ssam)."
        },
        {
          "hangul": "진짜 맛있어요!",
          "romaji": "Jinjja masisseoyo!",
          "eng": "È davvero delizioso!",
          "context": "Colmo di gioia. 😋"
        },
        {
          "hangul": "볶음밥 하나 주세요",
          "romaji": "Bokkeumbap hana juseyo",
          "eng": "Un riso saltato, per favore",
          "context": "La fine di ogni pasto coreano."
        }
      ],
      "culture": "In un K-BBQ, il contorno (banchan) e la lattuga (sangchu) sono gratuiti e ricaricabili all'infinito! Basta dire '더 주세요'."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Ti siedi al ristorante. Come ordini 2 porzioni di pancetta?",
        "options": [
          "Sangchu deo juseyo",
          "Samgyeopsal i inbun juseyo",
          "Jinjja masisseoyo"
        ],
        "optionsHangul": [
          "상추 더 주세요",
          "삼겹살 이 인분 주세요",
          "진짜 맛있어요"
        ],
        "answer": 1,
        "conceptTag": "Ordinare Carne",
        "feedback_incorrect": "인분 (inbun) è il contatore per le porzioni.",
        "tip": "Samgyeopsal (pancetta) + I inbun (2 porzioni).",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Hai finito le foglie di lattuga per fare gli involtini.",
        "question": "Componi: 'Lattuga (상추) ancora (더) mi dia (주세요)'.",
        "shuffled_blocks": [
          "주세요",
          "상추",
          "더"
        ],
        "correct_order": [
          "상추",
          "더",
          "주세요"
        ],
        "conceptTag": "Refill",
        "feedback_incorrect": "Soggetto (상추) + Avverbio (더) + Verbo (주세요).",
        "tip": "더 (deo) = di più."
      },
      {
        "type": "listen",
        "question": "Il cameriere chiede se ti piace. Come rispondi?",
        "audioHangul": "진짜 맛있어요!",
        "options": [
          "Troppo piccante",
          "È davvero delizioso!",
          "Acqua"
        ],
        "answer": 1,
        "conceptTag": "Gusto",
        "feedback_incorrect": "진짜 (jinjja) = davvero.",
        "tip": "Masisseoyo!",
        "audioRomaji": "Jinjja masisseoyo!"
      },
      {
        "type": "speak",
        "question": "Ordina con sicurezza: 'Due porzioni di pancetta, per favore'.",
        "expectedRomaji": [
          "samgyeopsal i inbun juseyo",
          "samgyeopsaliinbunjuseyo"
        ],
        "expectedHangul": [
          "삼겹살 이 인분 주세요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Sam-gyeop-sal i in-bun ju-se-yo.",
        "tip": "Pancetta = Samgyeopsal."
      },
      {
        "type": "conversation",
        "context": "Alla fine della grigliata volete il riso saltato.",
        "question": "Cosa ordini?",
        "options": [
          "Bokkeumbap hana juseyo",
          "Mul juseyo",
          "Sangchu deo juseyo"
        ],
        "optionsHangul": [
          "볶음밥 하나 주세요",
          "물 주세요",
          "상추 더 주세요"
        ],
        "answer": 0,
        "conceptTag": "Piatti",
        "feedback_incorrect": "볶음밥 (Bokkeumbap) = riso saltato.",
        "tip": "Hana = Uno.",
        "optionsRomaji": [
          "Bokkeumbap hana juseyo",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 상추 ___ 주세요 (Ancora lattuga per favore).",
        "options": [
          "더",
          "덜",
          "안",
          "잘"
        ],
        "answer": 0,
        "conceptTag": "Avverbi",
        "feedback_incorrect": "더 (deo) = ancora/di più.",
        "tip": "Deo juseyo!",
        "optionsHangul": [
          "더",
          "덜",
          "안",
          "잘"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 5] Chiedi di togliere il piccante.",
        "options": [
          "Maepji ange haejuseyo",
          "Eolmayeyo",
          "Mul juseyo"
        ],
        "optionsHangul": [
          "맵지 않게 해주세요",
          "얼마예요",
          "물 주세요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Maepda = piccante.",
        "tip": "Maepji ange = non piccante.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combina la richiesta di carne e complimento.",
        "question": "Componi: 'Davvero delizioso! (진짜 맛있어요!) 2 porzioni dia (이 인분 주세요)'.",
        "shuffled_blocks": [
          "주세요",
          "진짜 맛있어요!",
          "이 인분"
        ],
        "correct_order": [
          "진짜 맛있어요!",
          "이 인분",
          "주세요"
        ],
        "conceptTag": "Sintassi",
        "feedback_incorrect": "Prima il complimento, poi l'ordine.",
        "tip": "Jinjja masisseoyo! I inbun juseyo."
      },
      {
        "type": "listen",
        "question": "Ascolta cosa ordina il tavolo a fianco:",
        "audioHangul": "볶음밥 하나 주세요",
        "options": [
          "Un riso saltato",
          "Due pancette",
          "Ancora lattuga"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Bokkeumbap = Riso saltato.",
        "tip": "Bok-keum-bap.",
        "audioRomaji": "Bokkeumbap hana juseyo"
      },
      {
        "type": "speak",
        "question": "Chiedi il refill verde: 'Ancora lattuga, per favore'.",
        "expectedRomaji": [
          "sangchu deo juseyo",
          "sangchudeojuseyo"
        ],
        "expectedHangul": [
          "상추 더 주세요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Sang-chu deo ju-se-yo.",
        "tip": "Sangchu = lattuga per il ssam."
      }
    ]
  },
  {
    "day": 16,
    "title": "Stanchezza Post Leg Day 😩",
    "topic": "Dolori e Stanchezza",
    "theory": {
      "intro": "Il Leg Day ti ha distrutta? Oggi impariamo a lamentarci come un vero coreano quando i muscoli bruciano (DOMS).",
      "concept": "La parola '너무' (Neomu) significa 'troppo'. Usala prima di 피곤해요 (stanca) o 아파요 (fa male) per dare un tono drammatico!",
      "builderRule": "🔗 Chain link: 다리가 (Le gambe) + 너무 아파요 (Fanno troppo male) + 쉬고 싶어요 (Voglio riposare).",
      "examples": [
        {
          "hangul": "너무 피곤해요",
          "romaji": "Neomu pigonhaeyo",
          "eng": "Sono troppo stanca",
          "context": "Dopo cardio."
        },
        {
          "hangul": "다리가 너무 아파요",
          "romaji": "Dari-ga neomu apayo",
          "eng": "Mi fanno troppo male le gambe",
          "context": "Dopo gli squat. 🦵"
        },
        {
          "hangul": "근육통 심해요",
          "romaji": "Geunyuktong simhaeyo",
          "eng": "I dolori muscolari sono forti",
          "context": "Con il PT."
        },
        {
          "hangul": "쉬고 싶어요",
          "romaji": "Swigo sipeoyo",
          "eng": "Voglio riposare",
          "context": "Sul divano."
        }
      ],
      "culture": "In Corea, dire 'Neomu pigonhaeyo' ti fa sembrare una persona che lavora o si allena duramente, è quasi un vanto."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Ascolta la lamentela del tuo gym-bro:",
        "audioHangul": "근육통 심해요",
        "options": [
          "Ho fame",
          "I dolori muscolari sono forti",
          "Mi fa male la testa"
        ],
        "answer": 1,
        "conceptTag": "Gym Vocab",
        "feedback_incorrect": "근육통 (geunyuktong) = DOMS.",
        "tip": "Geunyuk = muscolo, tong = dolore.",
        "audioRomaji": "Geunyuktong simhaeyo"
      },
      {
        "type": "multiple_choice",
        "question": "Non riesci a fare le scale. Cosa dici?",
        "options": [
          "Geunyuktong simhaeyo",
          "Neomu pigonhaeyo",
          "Dari-ga neomu apayo"
        ],
        "optionsHangul": [
          "근육통 심해요",
          "너무 피곤해요",
          "다리가 너무 아파요"
        ],
        "answer": 2,
        "conceptTag": "Corpo",
        "feedback_incorrect": "다리 (dari) = gambe.",
        "tip": "Apayo = fa male.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Torni a casa distrutta.",
        "question": "Componi: 'Oggi (오늘) sono troppo (너무) stanca (피곤해요)'.",
        "shuffled_blocks": [
          "피곤해요",
          "오늘",
          "너무"
        ],
        "correct_order": [
          "오늘",
          "너무",
          "피곤해요"
        ],
        "conceptTag": "Stanchezza",
        "feedback_incorrect": "Tempo + Avverbio + Aggettivo.",
        "tip": "Neomu va sempre prima del verbo."
      },
      {
        "type": "speak",
        "question": "Lamentati platealmente: 'Sono troppo stanca!'",
        "expectedRomaji": [
          "neomu pigonhaeyo",
          "neomupigonhaeyo"
        ],
        "expectedHangul": [
          "너무 피곤해요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Neo-mu pi-gon-hae-yo.",
        "tip": "Pi-gon-hae-yo."
      },
      {
        "type": "conversation",
        "context": "Il PT ti chiede di fare un altro set, ma tu crolli.",
        "question": "Cosa gli dici?",
        "options": [
          "Swigo sipeoyo",
          "Jinjja masisseoyo",
          "Ppalli gajuseyo"
        ],
        "optionsHangul": [
          "쉬고 싶어요",
          "진짜 맛있어요",
          "빨리 가주세요"
        ],
        "answer": 0,
        "conceptTag": "Riposo",
        "feedback_incorrect": "쉬다 (swida) = riposare.",
        "tip": "Swigo sipeoyo = voglio riposare.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 다리가 너무 ___요 (Le gambe fanno troppo male).",
        "options": [
          "아파",
          "예뻐",
          "좋아",
          "나빠"
        ],
        "answer": 0,
        "conceptTag": "Vocabolario Medico",
        "feedback_incorrect": "아프다 (apuda) = far male.",
        "tip": "Apayo!",
        "optionsHangul": [
          "아파",
          "예뻐",
          "좋아",
          "나빠"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 4] 'Non sono brava a fare sport'.",
        "options": [
          "Undong jal mothaeyo",
          "Geim jal mothaeyo",
          "Mollayo"
        ],
        "optionsHangul": [
          "운동 잘 못해요",
          "게임 잘 못해요",
          "몰라요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Undong = sport/palestra.",
        "tip": "Jal mothaeyo.",
        "optionsRomaji": [
          "Undong jal mothaeyo",
          "",
          "Mollayo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Uniamo le gambe doloranti alla voglia di riposo.",
        "question": "Componi: 'Gambe fanno male (다리가 아파요), riposare voglio (쉬고 싶어요)'.",
        "shuffled_blocks": [
          "쉬고 싶어요",
          "다리가 아파요,"
        ],
        "correct_order": [
          "다리가 아파요,",
          "쉬고 싶어요"
        ],
        "conceptTag": "Flusso",
        "feedback_incorrect": "Prima il problema, poi il desiderio.",
        "tip": "Dari-ga apayo, swigo sipeoyo."
      },
      {
        "type": "listen",
        "question": "Cosa urla l'atleta esausto?",
        "audioHangul": "다리가 너무 아파요",
        "options": [
          "Braccia stanche",
          "Gambe che fanno malissimo",
          "Schiena rotta"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Dari = gambe.",
        "tip": "Dari-ga neomu apayo.",
        "audioRomaji": "Dariga neomu apayo"
      },
      {
        "type": "speak",
        "question": "Dì chiaramente al PT: 'I dolori muscolari sono forti'.",
        "expectedRomaji": [
          "geunyuktong simhaeyo",
          "geunyuktongsimhaeyo"
        ],
        "expectedHangul": [
          "근육통 심해요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Geun-yuk-tong sim-hae-yo.",
        "tip": "Geunyuktong."
      }
    ]
  },
  {
    "day": 17,
    "title": "Mercato Cosplay: Sconti! 🛍️",
    "topic": "Negoziazione",
    "theory": {
      "intro": "Devi comprare stoffe al mercato di Dongdaemun. È giunta l'ora di tirare sul prezzo!",
      "concept": "Il verbo '깎다' (Kkakta) significa tagliare. Si usa per dire 'taglia il prezzo'. '조금만' = solo un po'.",
      "builderRule": "🔗 Chain link: 너무 비싸요 (È troppo caro!) + 조금만 깎아주세요 (Fammi un piccolo sconto). Sorridi sempre!",
      "examples": [
        {
          "hangul": "조금만 깎아주세요~",
          "romaji": "Jogeumman kkakajuseyo~",
          "eng": "Fammi un piccolo sconto~",
          "context": "Al mercato. 🥺"
        },
        {
          "hangul": "너무 비싸요!",
          "romaji": "Neomu bissayo!",
          "eng": "È troppo caro!",
          "context": "Tattica di shock."
        },
        {
          "hangul": "현금으로 드릴게요",
          "romaji": "Hyeongeum-euro deurilgeyo",
          "eng": "Pago in contanti",
          "context": "Sblocca lo sconto finale."
        },
        {
          "hangul": "영수증 주세요",
          "romaji": "Yeongsujeung juseyo",
          "eng": "Mi dia lo scontrino",
          "context": "Se paghi con carta."
        }
      ],
      "culture": "La negoziazione (흥정) è un'arte nei mercati. Se dici che paghi in contanti (현금), il venditore toglierà le tasse o farà uno sconto."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "La stoffa costa il doppio. Come reagisci?",
        "options": [
          "Neomu bissayo!",
          "Hyeongeum-euro deurilgeyo",
          "Jogeumman kkakajuseyo"
        ],
        "optionsHangul": [
          "너무 비싸요!",
          "현금으로 드릴게요",
          "조금만 깎아주세요"
        ],
        "answer": 0,
        "conceptTag": "Reazioni",
        "feedback_incorrect": "비싸다 (bissada) = costoso.",
        "tip": "Neomu bissayo!",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Sblocca lo sconto definitivo con questa frase:",
        "audioHangul": "현금으로 드릴게요",
        "options": [
          "Uso la carta",
          "Pago in contanti",
          "Torno domani"
        ],
        "answer": 1,
        "conceptTag": "Pagamenti",
        "feedback_incorrect": "현금 (hyeongeum) = contanti.",
        "tip": "Hyeongeum = Cash.",
        "audioRomaji": "Hyeongeumeuro deurilgeyo"
      },
      {
        "type": "sentence_builder",
        "context": "Hai fatto la tua mossa e chiedi dolcemente l'abbassamento.",
        "question": "Componi: 'Solo un po' (조금만) scontami per favore (깎아주세요)'.",
        "shuffled_blocks": [
          "깎아주세요",
          "조금만"
        ],
        "correct_order": [
          "조금만",
          "깎아주세요"
        ],
        "conceptTag": "Sconti",
        "feedback_incorrect": "Avverbio + Verbo.",
        "tip": "Jogeumman kkaka-juseyo."
      },
      {
        "type": "speak",
        "question": "Chiedi lo sconto con tono gentile: 'Fammi un piccolo sconto~'",
        "expectedRomaji": [
          "jogeumman kkakajuseyo",
          "jogeummankkakajuseyo"
        ],
        "expectedHangul": [
          "조금만 깎아주세요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Jo-geum-man kka-kka-ju-se-yo.",
        "tip": "Doppia ㄲ tesa."
      },
      {
        "type": "conversation",
        "context": "Hai pagato con la carta. Cosa chiedi prima di andare?",
        "options": [
          "Yeongsujeung juseyo",
          "Neomu bissayo",
          "Hyeongeum juseyo"
        ],
        "optionsHangul": [
          "영수증 주세요",
          "너무 비싸요",
          "현금 주세요"
        ],
        "answer": 0,
        "conceptTag": "Fattura",
        "feedback_incorrect": "영수증 (Yeongsujeung) = Scontrino.",
        "tip": "Yeongsujeung juseyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 조금만 ___주세요 (Scontami per favore).",
        "options": [
          "깎아",
          "먹어",
          "입어",
          "가"
        ],
        "answer": 0,
        "conceptTag": "Verbi Mercato",
        "feedback_incorrect": "깎다 = tagliare il prezzo.",
        "tip": "Kkaka!",
        "optionsHangul": [
          "깎아",
          "먹어",
          "입어",
          "가"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 9] 'Posso provarlo?' (il vestito).",
        "options": [
          "Igeo ibeobwado dwaeyo?",
          "Eolmayeyo?",
          "Dareun saek isseoyo?"
        ],
        "optionsHangul": [
          "이거 입어봐도 돼요?",
          "얼마예요?",
          "다른 색 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "입어보다 = provare abiti.",
        "tip": "Ibeobwado dwaeyo?",
        "optionsRomaji": [
          "",
          "Eolmayeyo?",
          "Dareun saek isseoyo?"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combina cash e scontrino.",
        "question": "Componi: 'Contanti con (현금으로) darò (드릴게요)'.",
        "shuffled_blocks": [
          "드릴게요",
          "현금으로"
        ],
        "correct_order": [
          "현금으로",
          "드릴게요"
        ],
        "conceptTag": "Fluenza",
        "feedback_incorrect": "Strumento + Azione.",
        "tip": "Hyeongeum-euro deurilgeyo."
      },
      {
        "type": "listen",
        "question": "Ascolta la risposta del venditore arreso:",
        "audioHangul": "조금만 깎아주세요",
        "options": [
          "Troppo costoso",
          "Scontami un po'",
          "Contanti"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Kkakajuseyo.",
        "tip": "Jogeumman.",
        "audioRomaji": "Jogeumman kkakkaojuseyo"
      },
      {
        "type": "speak",
        "question": "Dì esagerando: 'È troppo caro!'",
        "expectedRomaji": [
          "neomu bissayo",
          "neomubissayo"
        ],
        "expectedHangul": [
          "너무 비싸요!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Neo-mu bis-sa-yo!",
        "tip": "Bissayo."
      }
    ]
  },
  {
    "day": 18,
    "title": "Jeonju: Nel mondo di 2521 📺🏠",
    "topic": "K-Drama Set",
    "theory": {
      "intro": "Mappa Sbloccata! Sei a Jeonju, nell'Hanok Village dove hanno girato 2521. Trova la casa di Na Hee-do!",
      "concept": "Per confermare un'info, aggiungi '맞아요?' (majayo?) alla fine, significa 'È corretto?'.",
      "builderRule": "🔗 Chain link: 전주 한옥마을 어디예요? (Dov'è il villaggio?) + 여기가 촬영지 맞아요? (È questo il set?).",
      "examples": [
        {
          "hangul": "전주 한옥마을 어디예요?",
          "romaji": "Jeonju hanongmaul eodiyeyo?",
          "eng": "Dov'è il villaggio Hanok di Jeonju?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "드라마 촬영지 맞아요?",
          "romaji": "Deurama chwaryeongji majayo?",
          "eng": "È davvero il set del drama?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "이 여름은 우리 거야",
          "romaji": "I yeoreumeun uri geoya",
          "eng": "Questa estate è nostra",
          "context": "Citazione 2521. 🌊"
        },
        {
          "hangul": "교복 빌리고 싶어요",
          "romaji": "Gyobok billigo sipeoyo",
          "eng": "Voglio affittare l'uniforme scolastica",
          "context": "Attività per fan."
        }
      ],
      "culture": "Moltissimi turisti affittano uniformi scolastiche vintage per scattare foto nei luoghi delle riprese."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Senti un gruppo gridare questa frase del drama:",
        "audioHangul": "이 여름은 우리 거야",
        "options": [
          "Dov'è il set?",
          "Questa estate è nostra!",
          "Facciamo una foto!"
        ],
        "answer": 1,
        "conceptTag": "Quotes",
        "feedback_incorrect": "여름 (yeoreum) = estate.",
        "tip": "La frase simbolo.",
        "audioRomaji": "I yeoreumeun uri geoya"
      },
      {
        "type": "multiple_choice",
        "question": "Vedi una casa col tetto verde. Come chiedi conferma?",
        "options": [
          "Jeonju hanongmaul eodiyeyo?",
          "I yeoreumeun uri geoya",
          "Deurama chwaryeongji majayo?"
        ],
        "optionsHangul": [
          "전주 한옥마을 어디예요?",
          "이 여름은 우리 거야",
          "드라마 촬영지 맞아요?"
        ],
        "answer": 2,
        "conceptTag": "Set",
        "feedback_incorrect": "촬영지 (chwaryeongji) = set.",
        "tip": "Usa 'majayo?'",
        "optionsRomaji": [
          "",
          "I yeoreumeun uri geoya",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Cerchi il famoso villaggio tradizionale.",
        "question": "Componi: 'Dov'è il villaggio Hanok di Jeonju?'",
        "shuffled_blocks": [
          "한옥마을",
          "어디예요?",
          "전주"
        ],
        "correct_order": [
          "전주",
          "한옥마을",
          "어디예요?"
        ],
        "conceptTag": "Direzioni",
        "feedback_incorrect": "Luogo + Dov'è.",
        "tip": "Jeonju Hanok-maeul."
      },
      {
        "type": "speak",
        "question": "Pronuncia la citazione iconica: 'Questa estate è nostra'.",
        "expectedRomaji": [
          "i yeoreumeun uri geoya",
          "iyeoreumeunurigeoya"
        ],
        "expectedHangul": [
          "이 여름은 우리 거야"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "I yeo-reum-eun u-ri geo-ya.",
        "tip": "Urla come Hee-do."
      },
      {
        "type": "conversation",
        "context": "Vuoi farti foto in stile anni '90.",
        "question": "Cosa chiedi al noleggio?",
        "options": [
          "Gyobok billigo sipeoyo",
          "Deurama majayo?",
          "Hanongmaul eodiyeyo?"
        ],
        "optionsHangul": [
          "교복 빌리고 싶어요",
          "드라마 맞아요?",
          "한옥마을 어디예요?"
        ],
        "answer": 0,
        "conceptTag": "Vestiti",
        "feedback_incorrect": "교복 (Gyobok) = divisa scolastica.",
        "tip": "Billida = affittare.",
        "optionsRomaji": [
          "Gyobok billigo sipeoyo",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa la conferma: 촬영지 ___? (È il set?)",
        "options": [
          "맞아요",
          "아니요",
          "없어요",
          "가요"
        ],
        "answer": 0,
        "conceptTag": "Conferme",
        "feedback_incorrect": "맞아요 (majayo) = corretto.",
        "tip": "Majayo?",
        "optionsHangul": [
          "맞아요",
          "아니요",
          "없어요",
          "가요"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 6] 'Non arrenderti' di Start-Up.",
        "options": [
          "Pogihaji maseyo",
          "Hal su isseoyo",
          "Kkumeul kkweoyo"
        ],
        "optionsHangul": [
          "포기하지 마세요",
          "할 수 있어요",
          "꿈을 꿔요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Pogihada = arrendersi.",
        "tip": "Pogihaji maseyo.",
        "optionsRomaji": [
          "Pogihaji maseyo",
          "",
          "Kkumeul kkweoyo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Uniamo luogo e conferma.",
        "question": "Componi: 'Qui (여기가) Set è? (촬영지 맞아요?)'.",
        "shuffled_blocks": [
          "촬영지",
          "맞아요?",
          "여기가"
        ],
        "correct_order": [
          "여기가",
          "촬영지",
          "맞아요?"
        ],
        "conceptTag": "Fluenza",
        "feedback_incorrect": "Soggetto + Set + Giusto.",
        "tip": "Yeogiga chwaryeongji majayo?"
      },
      {
        "type": "listen",
        "question": "Ascolta la richiesta del fan:",
        "audioHangul": "교복 빌리고 싶어요",
        "options": [
          "Set",
          "Voglio la divisa",
          "Estate nostra"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Gyobok = uniforme.",
        "tip": "Gyobok billigo sipeoyo.",
        "audioRomaji": "Gyobok billigo sipeoyo"
      },
      {
        "type": "speak",
        "question": "Chiedi conferma: 'È davvero il set del drama?'",
        "expectedRomaji": [
          "deurama chwaryeongji majayo",
          "deuramachwaryeongjimajayo"
        ],
        "expectedHangul": [
          "드라마 촬영지 맞아요?"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Deu-ra-ma chwa-ryeong-ji ma-ja-yo?",
        "tip": "Chwaryeongji."
      }
    ]
  },
  {
    "day": 19,
    "title": "Gamer Pro: Supporto su LoL 🎮",
    "topic": "Gergo Gaming",
    "theory": {
      "intro": "Team fight. Il tuo ADC è nei guai. Se giochi Support, i comandi veloci ai compagni in chat salveranno la partita!",
      "concept": "'아끼다' (Akkida) = risparmiare. '궁' (Gung) = Ultimate (la R). 궁 아끼세요 = Conserva la ulti!",
      "builderRule": "🔗 Chain link: 뒤에 있어요 (Ci sono dietro) + 궁 아끼세요 (Conserva la R).",
      "examples": [
        {
          "hangul": "궁 아끼세요",
          "romaji": "Gung akkiseyo",
          "eng": "Risparmia la ultimate",
          "context": "Prima del drago!"
        },
        {
          "hangul": "뒤에 있어요!",
          "romaji": "Dwie isseoyo!",
          "eng": "Ci sono alle tue spalle!",
          "context": "Rassicura l'ADC."
        },
        {
          "hangul": "물러나세요!",
          "romaji": "Mulleonaseyo!",
          "eng": "Ritirati!",
          "context": "Gank in arrivo."
        },
        {
          "hangul": "제가 갈게요",
          "romaji": "Jega galgeyo",
          "eng": "Arrivo io",
          "context": "In roaming verso mid."
        }
      ],
      "culture": "In chat si usano comandi corti, ma mantenendo un livello di formalità base."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Il tuo midlaner urla. Cosa chiede di NON usare?",
        "audioHangul": "궁 아끼세요",
        "options": [
          "Non usare la ultimate",
          "Ritirati subito",
          "Cura il team"
        ],
        "answer": 0,
        "conceptTag": "Tattica",
        "feedback_incorrect": "궁 (gung) = Ultimate.",
        "tip": "아끼다 (akkida) = risparmiare.",
        "audioRomaji": "Gung akkiseyo"
      },
      {
        "type": "multiple_choice",
        "question": "Vedi il Jungler nemico. Cosa scrivi all'ADC?",
        "options": [
          "Mulleonaseyo!",
          "Gung akkiseyo",
          "Dwie isseoyo!"
        ],
        "optionsHangul": [
          "물러나세요!",
          "궁 아끼세요",
          "뒤에 있어요!"
        ],
        "answer": 0,
        "conceptTag": "Comandi",
        "feedback_incorrect": "물러나다 (mulleonada) = ritirarsi.",
        "tip": "Mulleonaseyo = Fall back!",
        "optionsRomaji": [
          "Mulleonaseyo!",
          "Gung akkiseyo",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Sei dietro l'ADC per coprirlo.",
        "question": "Componi: 'Io (제가) sono dietro (뒤에 있어요)'.",
        "shuffled_blocks": [
          "뒤에",
          "제가",
          "있어요"
        ],
        "correct_order": [
          "제가",
          "뒤에",
          "있어요"
        ],
        "conceptTag": "Posizione",
        "feedback_incorrect": "Soggetto + Dietro + Esserci.",
        "tip": "뒤 (dwi) = dietro."
      },
      {
        "type": "speak",
        "question": "Urla nel microfono: 'Ritirati!'",
        "expectedRomaji": [
          "mulleonaseyo",
          "mulleonaseyo!"
        ],
        "expectedHangul": [
          "물러나세요!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Mul-leo-na-se-yo!",
        "tip": "Dillo con urgenza!"
      },
      {
        "type": "conversation",
        "context": "Il midlaner ha bisogno di aiuto. Tu stai ruotando dalla botlane.",
        "question": "Cosa dici?",
        "options": [
          "Jega galgeyo",
          "Mulleonaseyo",
          "Gung akkiseyo"
        ],
        "optionsHangul": [
          "제가 갈게요",
          "물러나세요",
          "궁 아끼세요"
        ],
        "answer": 0,
        "conceptTag": "Roaming",
        "feedback_incorrect": "제가 (Jega) = io, 갈게요 (galgeyo) = andrò.",
        "tip": "Jega galgeyo = I'm coming.",
        "optionsRomaji": [
          "Jega galgeyo",
          "",
          "Gung akkiseyo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___ 아끼세요 (Risparmia la R).",
        "options": [
          "궁",
          "검",
          "방",
          "힐"
        ],
        "answer": 0,
        "conceptTag": "Termini LoL",
        "feedback_incorrect": "궁 (gung) = Ultimate.",
        "tip": "Gung akkiseyo.",
        "optionsHangul": [
          "궁",
          "검",
          "방",
          "힐"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 8] 'Vieni a gankarmi per favore'.",
        "options": [
          "Gaeng wajuseyo",
          "Teurol hajima",
          "Mideu chai"
        ],
        "optionsHangul": [
          "갱 와주세요",
          "트롤 하지마",
          "미드 차이"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Gaeng = Gank.",
        "tip": "Gaeng wajuseyo.",
        "optionsRomaji": [
          "Gaeng wajuseyo",
          "Teurol hajima",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Rassicura il team sulla ultimate.",
        "question": "Componi: 'Ultimate (궁) risparmia (아끼세요)'.",
        "shuffled_blocks": [
          "아끼세요",
          "궁"
        ],
        "correct_order": [
          "궁",
          "아끼세요"
        ],
        "conceptTag": "Macro",
        "feedback_incorrect": "Oggetto + Verbo.",
        "tip": "Gung akkiseyo."
      },
      {
        "type": "listen",
        "question": "Cosa dice il support mentre arriva?",
        "audioHangul": "제가 갈게요",
        "options": [
          "Arrivo io",
          "Vado via",
          "Muori"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Galgeyo = andrò.",
        "tip": "Jega galgeyo.",
        "audioRomaji": "Jega galgeyo"
      },
      {
        "type": "speak",
        "question": "Dì al team: 'Risparmia la ultimate!'",
        "expectedRomaji": [
          "gung akkiseyo",
          "gungakkiseyo"
        ],
        "expectedHangul": [
          "궁 아끼세요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Gung ak-ki-se-yo.",
        "tip": "Gung."
      }
    ]
  },
  {
    "day": 20,
    "title": "Cosplay Photoshoot! 📸",
    "topic": "Fotografia & Richieste",
    "theory": {
      "intro": "Hai il costume perfetto. Ora ti serve un fotografo! Impariamo a dirigere uno shooting improvvisato con i passanti.",
      "concept": "'~아/어 주시겠어요?' è una richiesta estremamente educata (Potrebbe per favore...). 찍다 (scattare) diventa 찍어주시겠어요?.",
      "builderRule": "🔗 Chain link: 저기요 (Scusi) + 사진 좀 찍어주시겠어요? (Potrebbe scattarmi una foto?).",
      "examples": [
        {
          "hangul": "사진 좀 찍어주시겠어요?",
          "romaji": "Sajin jom jjigeojusigesseoyo?",
          "eng": "Potrebbe scattarmi una foto?",
          "context": "Il modo educato per i passanti."
        },
        {
          "hangul": "더 가까이 찍어주세요",
          "romaji": "Deo gakkai jjigeojuseyo",
          "eng": "Scatti più da vicino",
          "context": "Per i ritratti."
        },
        {
          "hangul": "하나 둘 셋!",
          "romaji": "Hana dul set!",
          "eng": "Uno, due, tre!",
          "context": "Il conto alla rovescia."
        },
        {
          "hangul": "다시 찍을게요",
          "romaji": "Dasi jjigeulgeyo",
          "eng": "La scatto di nuovo",
          "context": "Se è venuta mossa."
        }
      ],
      "culture": "I coreani sono fotografi nati. Si metteranno in ginocchio per farti sembrare più alta!"
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Mettiti in posa! Cosa dice il fotografo?",
        "audioHangul": "하나 둘 셋!",
        "options": [
          "Più vicino",
          "Sorridi!",
          "Uno, due, tre!"
        ],
        "answer": 2,
        "conceptTag": "Numeri",
        "feedback_incorrect": "Numeri nativi: 1, 2, 3.",
        "tip": "Hana, Dul, Set.",
        "audioRomaji": "Hana dul set!"
      },
      {
        "type": "multiple_choice",
        "question": "Vuoi un close-up del viso. Cosa chiedi?",
        "options": [
          "Hana dul set!",
          "Sajin jom jjigeojusigesseoyo?",
          "Deo gakkai jjigeojuseyo"
        ],
        "optionsHangul": [
          "하나 둘 셋!",
          "사진 좀 찍어주시겠어요?",
          "더 가까이 찍어주세요"
        ],
        "answer": 2,
        "conceptTag": "Direzione",
        "feedback_incorrect": "가까이 (gakkai) = vicino.",
        "tip": "Deo gakkai = ancora più vicino.",
        "optionsRomaji": [
          "Hana dul set!",
          "Sajin jom jjigeojusigesseoyo?",
          "Deo gakkai jjigeojuseyo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Fermati un passante.",
        "question": "Componi: 'Foto (사진) un po' (좀) potrebbe scattare? (찍어주시겠어요?)'.",
        "shuffled_blocks": [
          "찍어주시겠어요?",
          "사진",
          "좀"
        ],
        "correct_order": [
          "사진",
          "좀",
          "찍어주시겠어요?"
        ],
        "conceptTag": "Cortesia",
        "feedback_incorrect": "Oggetto + 좀 (un po') + Verbo formale.",
        "tip": "Sajin jom jjigeojusigesseoyo."
      },
      {
        "type": "speak",
        "question": "Chiedi educatamente: 'Potrebbe scattarmi una foto?'",
        "expectedRomaji": [
          "sajin jom jjigeojusigesseoyo",
          "sajinjomjjigeojusigesseoyo"
        ],
        "expectedHangul": [
          "사진 좀 찍어주시겠어요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Sa-jin jom jji-geo-ju-si-get-seo-yo?",
        "tip": "Cadenza morbida."
      },
      {
        "type": "conversation",
        "context": "La foto è sfocata. Ti offri di rifarla per il tuo amico.",
        "question": "Cosa dici?",
        "options": [
          "Dasi jjigeulgeyo",
          "Hana dul set",
          "Gakkai jjigeojuseyo"
        ],
        "optionsHangul": [
          "다시 찍을게요",
          "하나 둘 셋",
          "가까이 찍어주세요"
        ],
        "answer": 0,
        "conceptTag": "Rifare",
        "feedback_incorrect": "다시 (dasi) = di nuovo.",
        "tip": "Dasi jjigeulgeyo.",
        "optionsRomaji": [
          "Dasi jjigeulgeyo",
          "",
          "Gakkai jjigeojuseyo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa il countdown: 하나, ___, 셋!",
        "options": [
          "둘",
          "넷",
          "다섯",
          "일"
        ],
        "answer": 0,
        "conceptTag": "Numeri Base",
        "feedback_incorrect": "Hana, Dul, Set.",
        "tip": "Dul = Due.",
        "optionsHangul": [
          "둘",
          "넷",
          "다섯",
          "일"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 10] 'Facciamo una foto insieme?'",
        "options": [
          "Sajin gachi jjigeulkkayo?",
          "Koseupeure meosisseoyo",
          "Eotteon kaerikteoyeyo?"
        ],
        "optionsHangul": [
          "사진 같이 찍을까요?",
          "코스프레 멋있어요",
          "어떤 캐릭터예요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "같이 (gachi) = insieme.",
        "tip": "Sajin gachi jjigeulkkayo.",
        "optionsRomaji": [
          "Sajin gachi jjigeulkkayo?",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Vuoi più zoom.",
        "question": "Componi: 'Più (더) vicino (가까이) scatti per favore (찍어주세요)'.",
        "shuffled_blocks": [
          "가까이",
          "더",
          "찍어주세요"
        ],
        "correct_order": [
          "더",
          "가까이",
          "찍어주세요"
        ],
        "conceptTag": "Avverbi",
        "feedback_incorrect": "Più + Vicino + Scatta.",
        "tip": "Deo gakkai jjigeojuseyo."
      },
      {
        "type": "listen",
        "question": "Ascolta l'offerta di rifare la foto:",
        "audioHangul": "다시 찍을게요",
        "options": [
          "La scatto di nuovo",
          "Finito",
          "Più lontano"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Dasi = di nuovo.",
        "tip": "Dasi jjigeulgeyo.",
        "audioRomaji": "Dasi jjigeulgeyo"
      },
      {
        "type": "speak",
        "question": "Dì ad alta voce: 'Scatti più da vicino'.",
        "expectedRomaji": [
          "deo gakkai jjigeojuseyo",
          "deogakkaijjigeojuseyo"
        ],
        "expectedHangul": [
          "더 가까이 찍어주세요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Deo gak-ka-i jji-geo-ju-se-yo.",
        "tip": "Deo gakkai."
      }
    ]
  },
  {
    "day": 21,
    "title": "Daebak! Espressioni Forti 💥",
    "topic": "Slang & Reazioni",
    "theory": {
      "intro": "Hai appena fatto una pentakill su LoL o visto il cosplay più bello della fiera? Dimentica la formalità, oggi impariamo le esclamazioni forti!",
      "concept": "'대박' (Daebak) = 'Wow / Incredibile'. '헐' (Heol) è un verso di shock. '미쳤어' = Sei pazzo/È pazzesco.",
      "builderRule": "🔗 Chain link: 코스프레 멋있어요 (Il cosplay è figo) + 대박! (Pazzesco!).",
      "examples": [
        {
          "hangul": "대박!",
          "romaji": "Daebak!",
          "eng": "Incredibile! / Wow!",
          "context": "Reazione epica."
        },
        {
          "hangul": "헐!",
          "romaji": "Heol!",
          "eng": "Cavolo! / Wow (shock)",
          "context": "Sorpresa o sgomento."
        },
        {
          "hangul": "미쳤어!",
          "romaji": "Michyeosseo!",
          "eng": "È pazzesco! / Sei pazzo!",
          "context": "Giocata impossibile."
        },
        {
          "hangul": "장난 아니야",
          "romaji": "Jangnan aniya",
          "eng": "Non sto scherzando / Assurdo",
          "context": "Per confermare lo stupore."
        }
      ],
      "culture": "Le reazioni esagerate ('Reacting') sono fondamentali. Più rispondi con '대박!', più suonerai come una nativa."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "La cosplayer ti dice che ha fatto l'armatura in una notte. Come reagisci?",
        "audioHangul": "대박!",
        "options": [
          "Non ci credo",
          "Pazzesco/Incredibile!",
          "Scusa"
        ],
        "answer": 1,
        "conceptTag": "Reacting",
        "feedback_incorrect": "Reazione universale.",
        "tip": "Daebak!",
        "audioRomaji": "Daebak!"
      },
      {
        "type": "multiple_choice",
        "question": "Il tuo team ribalta una partita persa in 30 min. Cosa urli?",
        "options": [
          "Heol!",
          "Daebak!",
          "Joesonghamnida!"
        ],
        "optionsHangul": [
          "헐!",
          "대박!",
          "죄송합니다!"
        ],
        "answer": 1,
        "conceptTag": "Esultanza",
        "feedback_incorrect": "대박 per cose positive.",
        "tip": "Daebak = Jackpot!",
        "optionsRomaji": [
          "",
          "Daebak!",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Un amico spende 500 euro per una figure.",
        "question": "Componi: 'Cavolo! (헐!) È pazzesco! (미쳤어!)'.",
        "shuffled_blocks": [
          "미쳤어!",
          "헐!"
        ],
        "correct_order": [
          "헐!",
          "미쳤어!"
        ],
        "conceptTag": "Shock",
        "feedback_incorrect": "Prima lo shock, poi l'esclamazione.",
        "tip": "Heol michyeosseo!"
      },
      {
        "type": "speak",
        "question": "Esclama stupita: 'Cavolo! (Heol!)'",
        "expectedRomaji": [
          "heol",
          "hol"
        ],
        "expectedHangul": [
          "헐!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Heol! (Aspira la H).",
        "tip": "Bocca mezza aperta."
      },
      {
        "type": "conversation",
        "context": "Qualcuno dubita della tua abilità.",
        "question": "Cosa rispondi? (Non scherzo!)",
        "options": [
          "Jangnan aniya",
          "Michyeosseo",
          "Heol"
        ],
        "optionsHangul": [
          "장난 아니야",
          "미쳤어",
          "헐"
        ],
        "answer": 0,
        "conceptTag": "Conferma",
        "feedback_incorrect": "장난 (Jangnan) = scherzo. 아니야 = non è.",
        "tip": "Jangnan aniya.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___박! (Incredibile!)",
        "options": [
          "대",
          "소",
          "중",
          "헐"
        ],
        "answer": 0,
        "conceptTag": "Vocabolario Base",
        "feedback_incorrect": "Daebak.",
        "tip": "Dae-bak.",
        "optionsHangul": [
          "대",
          "소",
          "중",
          "헐"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 4] Risposta alla frase di shock, in tono modesto.",
        "options": [
          "Gwaenchanayo",
          "Mollayo",
          "Jeongmal jalhasineyo"
        ],
        "optionsHangul": [
          "괜찮아요",
          "몰라요",
          "정말 잘하시네요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Gwaenchanayo = Va tutto bene/non è nulla.",
        "tip": "Modestia.",
        "optionsRomaji": [
          "Gwaenchanayo",
          "Mollayo",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combina lo slang.",
        "question": "Componi: 'Non è uno scherzo! (장난 아니야) Pazzesco! (미쳤어!)'.",
        "shuffled_blocks": [
          "미쳤어!",
          "아니야",
          "장난"
        ],
        "correct_order": [
          "장난",
          "아니야",
          "미쳤어!"
        ],
        "conceptTag": "Combos",
        "feedback_incorrect": "Scherzo non è + Pazzesco.",
        "tip": "Jangnan aniya michyeosseo."
      },
      {
        "type": "listen",
        "question": "Ascolta lo sgomento:",
        "audioHangul": "헐!",
        "options": [
          "Evviva",
          "Cavolo!",
          "Bello"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Heol.",
        "tip": "Heol!",
        "audioRomaji": "Heol!"
      },
      {
        "type": "speak",
        "question": "Dì: 'È pazzesco!'",
        "expectedRomaji": [
          "michyeosseo",
          "michyosso"
        ],
        "expectedHangul": [
          "미쳤어!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Mi-chyeot-seo!",
        "tip": "Dallo con enfasi!"
      }
    ]
  },
  {
    "day": 22,
    "title": "Haeundae: Sole a Busan 🏖️",
    "topic": "Spiaggia e Viaggi",
    "theory": {
      "intro": "Mappa Sbloccata! Sei ad Haeundae, Busan. La spiaggia scotta e tu devi orientarti.",
      "concept": "Per chiedere come raggiungere un posto usa '어떻게 가요?' (eotteoke gayo? = come ci si va?). 선크림 (seonkeurim) è la crema solare.",
      "builderRule": "🔗 Chain link: 해운대역 어떻게 가요? (Come arrivo alla stazione?) + 선크림 있어요? (Avete crema solare?).",
      "examples": [
        {
          "hangul": "해운대역 어떻게 가요?",
          "romaji": "Haeundaeyeok eotteoke gayo?",
          "eng": "Come si arriva alla stazione Haeundae?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "선크림 있어요?",
          "romaji": "Seonkeurim isseoyo?",
          "eng": "Avete crema solare?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "바다가 예뻐요",
          "romaji": "Bada-ga yeppeoyo",
          "eng": "Il mare è bello",
          "context": "Per il vlog."
        },
        {
          "hangul": "수영해요",
          "romaji": "Suyeonghaeyo",
          "eng": "Nuoto",
          "context": "Attività."
        }
      ],
      "culture": "A Busan si usa il dialetto 'Satoori', ma capiscono il coreano standard. Le protezioni solari sono fondamentali (Rash guards)."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Guardi l'orizzonte e dici:",
        "audioHangul": "바다가 예뻐요",
        "options": [
          "Il sole scotta",
          "Il mare è bello",
          "La sabbia è calda"
        ],
        "answer": 1,
        "conceptTag": "Natura",
        "feedback_incorrect": "바다 (bada) = mare.",
        "tip": "Yeppeoyo = bello.",
        "audioRomaji": "Badaga yeppeoyo"
      },
      {
        "type": "multiple_choice",
        "question": "Hai dimenticato la protezione. Cosa chiedi al 7-Eleven?",
        "options": [
          "Bada yeppeoyo",
          "Seonkeurim isseoyo?",
          "Haeundaeyeok eotteoke gayo?"
        ],
        "optionsHangul": [
          "바다 예뻐요",
          "선크림 있어요?",
          "해운대역 어떻게 가요?"
        ],
        "answer": 1,
        "conceptTag": "Sole",
        "feedback_incorrect": "선크림 = Sun cream.",
        "tip": "Seonkeurim isseoyo?",
        "optionsRomaji": [
          "",
          "Seonkeurim isseoyo?",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Devi prendere la metro.",
        "question": "Componi: 'Stazione Haeundae (해운대역) come (어떻게) vado? (가요?)'.",
        "shuffled_blocks": [
          "어떻게",
          "가요?",
          "해운대역"
        ],
        "correct_order": [
          "해운대역",
          "어떻게",
          "가요?"
        ],
        "conceptTag": "Metro",
        "feedback_incorrect": "Luogo + Come + Vado.",
        "tip": "Yeok = Stazione."
      },
      {
        "type": "speak",
        "question": "Chiedi indicazioni: 'Come si arriva alla stazione Haeundae?'",
        "expectedRomaji": [
          "haeundaeyeok eotteoke gayo",
          "haeundaeyeogeotteokegayo"
        ],
        "expectedHangul": [
          "해운대역 어떻게 가요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Hae-un-dae-yeok eo-tto-ke ga-yo?",
        "tip": "O-tto-ke."
      },
      {
        "type": "conversation",
        "context": "Ti chiedono cosa fai in acqua.",
        "question": "Rispondi: 'Nuoto'",
        "options": [
          "Suyeonghaeyo",
          "Mollayo",
          "Bada yeppeoyo"
        ],
        "optionsHangul": [
          "수영해요",
          "몰라요",
          "바다 예뻐요"
        ],
        "answer": 0,
        "conceptTag": "Attività",
        "feedback_incorrect": "수영 (Suyeong) = nuoto.",
        "tip": "Suyeonghaeyo.",
        "optionsRomaji": [
          "",
          "Mollayo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___크림 있어요? (Crema solare)",
        "options": [
          "선",
          "달",
          "별",
          "해"
        ],
        "answer": 0,
        "conceptTag": "Konglish",
        "feedback_incorrect": "선 (Sun).",
        "tip": "Seon-keu-rim.",
        "optionsHangul": [
          "선",
          "달",
          "별",
          "해"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 3] 'Dov'è il bagno?'",
        "options": [
          "Hwajangsil eodiyeyo?",
          "Jikjin",
          "Oenjjok"
        ],
        "optionsHangul": [
          "화장실 어디예요?",
          "직진",
          "왼쪽"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Hwajangsil = bagno.",
        "tip": "Hwajangsil eodiyeyo?",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Riassumi la situazione.",
        "question": "Componi: 'Mare (바다가) bello (예뻐요), nuoto! (수영해요!)'.",
        "shuffled_blocks": [
          "수영해요!",
          "바다가",
          "예뻐요,"
        ],
        "correct_order": [
          "바다가",
          "예뻐요,",
          "수영해요!"
        ],
        "conceptTag": "Sintassi",
        "feedback_incorrect": "Soggetto + Aggettivo + Verbo.",
        "tip": "Bada-ga yeppeoyo, suyeonghaeyo."
      },
      {
        "type": "listen",
        "question": "Ascolta la domanda del turista perso:",
        "audioHangul": "어떻게 가요?",
        "options": [
          "Come ci vado?",
          "Quanto costa?",
          "Dov'è?"
        ],
        "answer": 0,
        "conceptTag": "Ascolto Direzioni",
        "feedback_incorrect": "Eotteoke gayo = Come ci si va.",
        "tip": "Eotteoke = come."
      },
      {
        "type": "speak",
        "question": "Dì felice: 'Il mare è bello!'",
        "expectedRomaji": [
          "bada-ga yeppeoyo",
          "badagayeppeoyo"
        ],
        "expectedHangul": [
          "바다가 예뻐요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Ba-da-ga yep-peo-yo.",
        "tip": "Bada = Mare."
      }
    ]
  },
  {
    "day": 23,
    "title": "Sul Taxi per il PC Bang! 🚕",
    "topic": "Taxi e Trasporti",
    "theory": {
      "intro": "Piove, sei stanca e la promo su LoL chiama. Impariamo a dare indicazioni a un tassista coreano!",
      "concept": "La particella '(으)로' indica direzione. '가주세요' (vada per favore). PC방 + 으로 가주세요 = Vada verso il PC Bang.",
      "builderRule": "🔗 Chain link: 안녕하세요 (Salve) + PC방으로 가주세요 (Al PC Bang) + 여기서 세워주세요 (Si fermi qui).",
      "examples": [
        {
          "hangul": "PC방으로 가주세요",
          "romaji": "PC-bang-euro gajuseyo",
          "eng": "Al PC Bang, per favore",
          "context": "Appena sali."
        },
        {
          "hangul": "빨리 가주세요",
          "romaji": "Ppalli gajuseyo",
          "eng": "Vada veloce, per favore",
          "context": "Ritardo per il torneo!"
        },
        {
          "hangul": "여기서 세워주세요",
          "romaji": "Yeogiseo seweojuseyo",
          "eng": "Si fermi qui, per favore",
          "context": "Arrivati."
        },
        {
          "hangul": "카드 돼요?",
          "romaji": "Kadeu dwaeyo?",
          "eng": "Posso pagare con carta?",
          "context": "Al momento del pagamento."
        }
      ],
      "culture": "I taxi coreani accettano quasi tutti la carta di credito o T-Money. Il contante è meno usato."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Sei in ritardissimo. Cosa urli al tassista?",
        "audioHangul": "빨리 가주세요",
        "options": [
          "Si fermi qui",
          "Vada a destra",
          "Vada veloce"
        ],
        "answer": 2,
        "conceptTag": "Urgenza",
        "feedback_incorrect": "빨리 (ppalli) = velocemente.",
        "tip": "Ppalli ppalli!"
      },
      {
        "type": "multiple_choice",
        "question": "Il taxi sta per superare il posto. Come lo fermi?",
        "options": [
          "Ppalli gajuseyo",
          "Yeogiseo seweojuseyo",
          "PC-bang-euro gajuseyo"
        ],
        "optionsHangul": [
          "빨리 가주세요",
          "여기서 세워주세요",
          "PC방으로 가주세요"
        ],
        "answer": 1,
        "conceptTag": "Stop Taxi",
        "feedback_incorrect": "여기서 = qui, 세워주세요 = accosti.",
        "tip": "Seweojuseyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Sali in taxi.",
        "question": "Componi: 'Verso il PC Bang (PC방으로) vada per favore (가주세요)'.",
        "shuffled_blocks": [
          "가주세요",
          "PC방으로"
        ],
        "correct_order": [
          "PC방으로",
          "가주세요"
        ],
        "conceptTag": "Destinazioni",
        "feedback_incorrect": "Destinazione + 으로 + 가주세요.",
        "tip": "PC-bang-euro."
      },
      {
        "type": "speak",
        "question": "Di' di accostare: 'Si fermi qui, per favore'.",
        "expectedRomaji": [
          "yeogiseo seweojuseyo",
          "yeogiseoseweojuseyo"
        ],
        "expectedHangul": [
          "여기서 세워주세요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Yeo-gi-seo se-wo-ju-se-yo.",
        "tip": "Chiaro e forte."
      },
      {
        "type": "conversation",
        "context": "Vuoi pagare, ma non hai contanti.",
        "question": "Cosa chiedi?",
        "options": [
          "Kadeu dwaeyo?",
          "Hyeongeum isseoyo?",
          "Yeongsujeung juseyo"
        ],
        "optionsHangul": [
          "카드 돼요?",
          "현금 있어요?",
          "영수증 주세요"
        ],
        "answer": 0,
        "conceptTag": "Pagamento",
        "feedback_incorrect": "카드 (Kadeu) = Card.",
        "tip": "Kadeu dwaeyo?",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 강남___ 가주세요 (Verso Gangnam per favore).",
        "options": [
          "으로",
          "가",
          "는",
          "를"
        ],
        "answer": 0,
        "conceptTag": "Particella Direzione",
        "feedback_incorrect": "으로 (euro) = verso.",
        "tip": "Gangnam-euro.",
        "optionsHangul": [
          "으로",
          "가",
          "는",
          "를"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 11] 'Oggi il tempo è bello'.",
        "options": [
          "Oneul nalssiga joayo",
          "Sanchaek galkkayo",
          "Bada yeppeoyo"
        ],
        "optionsHangul": [
          "오늘 날씨가 좋아요",
          "산책 갈까요",
          "바다 예뻐요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Nalssi = tempo.",
        "tip": "Oneul nalssiga joayo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Mixa le richieste.",
        "question": "Componi: 'Veloce (빨리) vada per favore (가주세요)'.",
        "shuffled_blocks": [
          "가주세요",
          "빨리"
        ],
        "correct_order": [
          "빨리",
          "가주세요"
        ],
        "conceptTag": "Velocità",
        "feedback_incorrect": "Avverbio + Verbo.",
        "tip": "Ppalli gajuseyo."
      },
      {
        "type": "listen",
        "question": "Ascolta la destinazione:",
        "audioHangul": "PC방으로 가주세요",
        "options": [
          "Gym",
          "PC Bang",
          "Hotel"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "PC Bang.",
        "tip": "PC-bang-euro."
      },
      {
        "type": "speak",
        "question": "Dì la frase salvavita: 'Posso pagare con carta?'",
        "expectedRomaji": [
          "kadeu dwaeyo",
          "kadeudwaeyo"
        ],
        "expectedHangul": [
          "카드 돼요?"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Ka-deu dwae-yo?",
        "tip": "Dwaeyo = Si può fare / Va bene?"
      }
    ]
  },
  {
    "day": 24,
    "title": "Falsa Modestia Coreana 🙇",
    "topic": "Etiquette e Complimenti",
    "theory": {
      "intro": "Ti fanno i complimenti per come giochi o ti alleni? In Corea non si dice solo 'Grazie', devi mostrare l'arte della modestia!",
      "concept": "La frase '아직 멀었어요' (Ajik meoreosseoyo) significa alla lettera 'è ancora lontano'. Si traduce: 'Ho ancora molto da imparare'.",
      "builderRule": "🔗 Chain link: 아니에요 (No) + 아직 멀었어요 (Ho ancora molto da imparare). Combo perfetta per rifiutare un complimento educatamente.",
      "examples": [
        {
          "hangul": "아니에요, 아직 멀었어요",
          "romaji": "Anieyo, ajik meoreosseoyo",
          "eng": "No, ho ancora molto da imparare",
          "context": "Quando lodano le tue abilità."
        },
        {
          "hangul": "운이 좋았어요",
          "romaji": "Un-i joasseoyo",
          "eng": "Sono stata solo fortunata",
          "context": "Quando vinci un 1v2 su LoL."
        },
        {
          "hangul": "열심히 할게요",
          "romaji": "Yeolsimhi halgeyo",
          "eng": "Ce la metterò tutta",
          "context": "Da dire al PT."
        },
        {
          "hangul": "감사합니다",
          "romaji": "Gamsahamnida",
          "eng": "Grazie",
          "context": "Da dire DOPO aver rifiutato."
        }
      ],
      "culture": "Rifiutare un complimento sminuendo le proprie abilità prima di accettarlo timidamente è il massimo della buona educazione (겸손 - Modestia)."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Cosa prometti al tuo PT?",
        "audioHangul": "열심히 할게요",
        "options": [
          "Sono stanca",
          "Ce la metterò tutta",
          "Vado a casa"
        ],
        "answer": 1,
        "conceptTag": "Impegno",
        "feedback_incorrect": "열심히 (yeolsimhi) = con impegno.",
        "tip": "Halgeyo = lo farò."
      },
      {
        "type": "multiple_choice",
        "question": "Il team ti loda per aver rubato il drago. Cosa dici?",
        "options": [
          "Daebak!",
          "Un-i joasseoyo",
          "Yeolsimhi halgeyo"
        ],
        "optionsHangul": [
          "대박!",
          "운이 좋았어요",
          "열심히 할게요"
        ],
        "answer": 1,
        "conceptTag": "Modestia Gaming",
        "feedback_incorrect": "운 (un) = fortuna.",
        "tip": "Un-i joasseoyo = La fortuna era buona.",
        "optionsRomaji": [
          "Daebak!",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Ti dicono che parli bene coreano.",
        "question": "Componi: 'No (아니에요), ancora molto da imparare (아직 멀었어요)'.",
        "shuffled_blocks": [
          "멀었어요",
          "아니에요,",
          "아직"
        ],
        "correct_order": [
          "아니에요,",
          "아직",
          "멀었어요"
        ],
        "conceptTag": "Risposte",
        "feedback_incorrect": "No + Ancora + Lontano.",
        "tip": "Inizia rifiutando con 'Anieyo'."
      },
      {
        "type": "speak",
        "question": "Rispondi con modestia: 'Ho ancora molto da imparare'.",
        "expectedRomaji": [
          "ajik meoreosseoyo",
          "ajikmeoreosseoyo"
        ],
        "expectedHangul": [
          "아직 멀었어요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "A-jik meol-eoss-eo-yo.",
        "tip": "Letteralmente: 'È ancora lontano'."
      },
      {
        "type": "conversation",
        "context": "Alla fine cedi e ringrazi.",
        "question": "Cosa dici?",
        "options": [
          "Gamsahamnida",
          "Mollayo",
          "Heol"
        ],
        "optionsHangul": [
          "감사합니다",
          "몰라요",
          "헐"
        ],
        "answer": 0,
        "conceptTag": "Ringraziamenti",
        "feedback_incorrect": "Gamsahamnida è il grazie formale.",
        "tip": "Sempre valido.",
        "optionsRomaji": [
          "Gamsahamnida",
          "Mollayo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___ 멀었어요 (Ancora molto da imparare).",
        "options": [
          "아직",
          "지금",
          "나중",
          "오늘"
        ],
        "answer": 0,
        "conceptTag": "Avverbi",
        "feedback_incorrect": "아직 (Ajik) = ancora.",
        "tip": "Ajik.",
        "optionsHangul": [
          "아직",
          "지금",
          "나중",
          "오늘"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 21] 'Pazzesco / Incredibile!'.",
        "options": [
          "Daebak",
          "Sugo",
          "Pama"
        ],
        "optionsHangul": [
          "대박",
          "수고",
          "파마"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Daebak.",
        "tip": "Dae-bak.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Sii modesta per le tue giocate su LoL.",
        "question": "Componi: 'Fortuna (운이) buona era (좋았어요)'.",
        "shuffled_blocks": [
          "좋았어요",
          "운이"
        ],
        "correct_order": [
          "운이",
          "좋았어요"
        ],
        "conceptTag": "Fortuna",
        "feedback_incorrect": "Soggetto + Aggettivo passato.",
        "tip": "Un-i joasseoyo."
      },
      {
        "type": "listen",
        "question": "Ascolta il rifiuto cortese:",
        "audioHangul": "아니에요",
        "options": [
          "No",
          "Sì",
          "Forse"
        ],
        "answer": 0,
        "conceptTag": "Ascolto Base",
        "feedback_incorrect": "Anieyo = No / Non è nulla.",
        "tip": "Anieyo."
      },
      {
        "type": "speak",
        "question": "Prometti impegno: 'Ce la metterò tutta'.",
        "expectedRomaji": [
          "yeolsimhi halgeyo",
          "yeolsimhihalgeyo"
        ],
        "expectedHangul": [
          "열심히 할게요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Yeol-sim-hi hal-ge-yo.",
        "tip": "Yeolsimhi."
      }
    ]
  },
  {
    "day": 25,
    "title": "Gamcheon Village Sbloccato! 🎨",
    "topic": "Esplorazione & Sopravvivenza",
    "theory": {
      "intro": "Mappa Sbloccata! Sei al Gamcheon Culture Village a Busan, un labirinto coloratissimo. È ora di esplorare!",
      "concept": "Per chiedere se qualcosa è disponibile, usa '있어요?' (isseoyo?). Per il prezzo dell'ingresso usa 입장료 (ipjangnyo).",
      "builderRule": "🔗 Chain link: 예뻐요! (È bellissimo!) + 지도 있어요? (Avete una mappa?).",
      "examples": [
        {
          "hangul": "지도 있어요?",
          "romaji": "Jido isseoyo?",
          "eng": "Avete una mappa?",
          "context": "Frase Mappa 📍 - Indispensabile qui!"
        },
        {
          "hangul": "입장료가 얼마예요?",
          "romaji": "Ipjangnyo-ga eolmayeyo?",
          "eng": "Quanto costa l'ingresso?",
          "context": "Frase Mappa 📍 - Per i punti panoramici."
        },
        {
          "hangul": "길을 잃었어요",
          "romaji": "Gireul ileosseoyo",
          "eng": "Mi sono persa",
          "context": "Quando il labirinto ti sconfigge."
        },
        {
          "hangul": "사진 찍어주세요",
          "romaji": "Sajin jjigeojuseyo",
          "eng": "Mi scatti una foto, per favore",
          "context": "Davanti ai murales."
        }
      ],
      "culture": "Gamcheon è chiamato il 'Machu Picchu di Busan', dipinto dagli artisti locali in tinte pastello."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Devi entrare in una piattaforma. Cosa chiedi?",
        "audioHangul": "입장료가 얼마예요?",
        "options": [
          "Dov'è il bagno?",
          "Avete una mappa?",
          "Quanto costa l'ingresso?"
        ],
        "answer": 2,
        "conceptTag": "Acquisti",
        "feedback_incorrect": "입장료 (ipjangnyo) = biglietto.",
        "tip": "Eolmayeyo = quanto costa?"
      },
      {
        "type": "multiple_choice",
        "question": "In un vicolo cieco. Come chiedi aiuto?",
        "options": [
          "Gireul ileosseoyo",
          "Ipjangnyo-ga eolmayeyo?",
          "Jido isseoyo?"
        ],
        "optionsHangul": [
          "길을 잃었어요",
          "입장료가 얼마예요?",
          "지도 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Emergenza",
        "feedback_incorrect": "길 (gil) = strada. 잃다 (ilta) = perdere.",
        "tip": "Gireul ileosseoyo.",
        "optionsRomaji": [
          "",
          "",
          "Jido isseoyo?"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Cerchi l'infopoint per orientarti.",
        "question": "Componi: 'Mappa (지도) avete? (있어요?)'.",
        "shuffled_blocks": [
          "있어요?",
          "지도"
        ],
        "correct_order": [
          "지도",
          "있어요?"
        ],
        "conceptTag": "Mappa",
        "feedback_incorrect": "Oggetto + Verbo.",
        "tip": "Jido = mappa."
      },
      {
        "type": "speak",
        "question": "Di' alla guida: 'Avete una mappa?'",
        "expectedRomaji": [
          "jido isseoyo",
          "jidoisseoyo"
        ],
        "expectedHangul": [
          "지도 있어요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Ji-do is-seo-yo?",
        "tip": "Pronuncia J dolce."
      },
      {
        "type": "conversation",
        "context": "Vuoi una foto con il murales del Piccolo Principe.",
        "question": "Cosa chiedi?",
        "options": [
          "Sajin jjigeojuseyo",
          "Gireul ileosseoyo",
          "Jido isseoyo"
        ],
        "optionsHangul": [
          "사진 찍어주세요",
          "길을 잃었어요",
          "지도 있어요"
        ],
        "answer": 0,
        "conceptTag": "Foto",
        "feedback_incorrect": "사진 (Sajin) = foto.",
        "tip": "Sajin jjigeojuseyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___장료 (Tassa d'ingresso).",
        "options": [
          "입",
          "출",
          "문",
          "창"
        ],
        "answer": 0,
        "conceptTag": "Vocabolario Turistico",
        "feedback_incorrect": "입 (Ip) = Entrata.",
        "tip": "Ipjangnyo.",
        "optionsHangul": [
          "입",
          "출",
          "문",
          "창"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 22] 'Crema solare avete?'",
        "options": [
          "Seonkeurim isseoyo?",
          "Jido isseoyo?",
          "Mul isseoyo?"
        ],
        "optionsHangul": [
          "선크림 있어요?",
          "지도 있어요?",
          "물 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Seonkeurim.",
        "tip": "Sun-cream.",
        "optionsRomaji": [
          "Seonkeurim isseoyo?",
          "Jido isseoyo?",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combina disperazione.",
        "question": "Componi: 'Persa (길을 잃었어요) mappa (지도) avete? (있어요?)'.",
        "shuffled_blocks": [
          "있어요?",
          "지도",
          "길을 잃었어요,"
        ],
        "correct_order": [
          "길을 잃었어요,",
          "지도",
          "있어요?"
        ],
        "conceptTag": "Survival",
        "feedback_incorrect": "Azione passata + Domanda.",
        "tip": "Gireul ileosseoyo, jido isseoyo?"
      },
      {
        "type": "listen",
        "question": "Ascolta l'emergenza turistica:",
        "audioHangul": "길을 잃었어요",
        "options": [
          "Mi sono persa",
          "Ho fame",
          "Bellissimo"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Ilta = perdere.",
        "tip": "Gireul ileosseoyo."
      },
      {
        "type": "speak",
        "question": "Chiedi il prezzo del biglietto: 'Quanto costa l'ingresso?'",
        "expectedRomaji": [
          "ipjangnyo-ga eolmayeyo",
          "ipjangnyogaeolmayeyo"
        ],
        "expectedHangul": [
          "입장료가 얼마예요?"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Ip-jang-nyo-ga eol-ma-ye-yo?",
        "tip": "Ipjangnyo."
      }
    ]
  },
  {
    "day": 26,
    "title": "Noraebang: Anime Songs! 🎤",
    "topic": "Karaoke e Musica",
    "theory": {
      "intro": "Dopo la palestra si va al Noraebang (Karaoke)! Sei con i tuoi amici, sfodera le opening degli anime.",
      "concept": "Il verbo '부르다' (bureuda) = cantare. Unito a ~(으)ㄹ까요? diventa '부를까요?' (Cantiamo?).",
      "builderRule": "🔗 Chain link: 노래 진짜 잘해요! (Canti davvero bene!) + 애니 노래 부를까요? (Cantiamo anime?).",
      "examples": [
        {
          "hangul": "애니 노래 부를까요?",
          "romaji": "Aeni norae bureulkkayo?",
          "eng": "Cantiamo canzoni anime?",
          "context": "Per caricare la stanza."
        },
        {
          "hangul": "노래 잘해요!",
          "romaji": "Norae jalhaeyo!",
          "eng": "Canti bene!",
          "context": "Il complimento d'obbligo."
        },
        {
          "hangul": "마이크 주세요",
          "romaji": "Mike juseyo",
          "eng": "Passami il microfono",
          "context": "Il tuo turno!"
        },
        {
          "hangul": "재밌어요",
          "romaji": "Jaemisseoyo",
          "eng": "È divertente",
          "context": "Esclamazione generale."
        }
      ],
      "culture": "I Noraebang sono stanze private! Puoi urlare e cantare senza vergogna."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "Cosa chiedi al tuo amico con il tamburello?",
        "audioHangul": "마이크 주세요",
        "options": [
          "Il telecomando",
          "Il microfono",
          "Il tamburello"
        ],
        "answer": 1,
        "conceptTag": "Oggetti",
        "feedback_incorrect": "마이크 (maikeu) = Mic.",
        "tip": "Mike juseyo."
      },
      {
        "type": "multiple_choice",
        "question": "Proponi Demon Slayer. Cosa dici?",
        "options": [
          "Aeni norae bureulkkayo?",
          "Norae jalhaeyo!",
          "Mike juseyo"
        ],
        "optionsHangul": [
          "애니 노래 부를까요?",
          "노래 잘해요!",
          "마이크 주세요"
        ],
        "answer": 0,
        "conceptTag": "Proposte",
        "feedback_incorrect": "애니 (aeni) = Anime.",
        "tip": "Aeni norae.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Il tuo amico è stato bravissimo.",
        "question": "Componi: 'Canzone (노래) bene fai! (잘해요!)'.",
        "shuffled_blocks": [
          "잘해요!",
          "노래"
        ],
        "correct_order": [
          "노래",
          "잘해요!"
        ],
        "conceptTag": "Complimenti",
        "feedback_incorrect": "Oggetto + Essere bravi.",
        "tip": "Norae jalhaeyo."
      },
      {
        "type": "speak",
        "question": "Proposta Otaku: 'Cantiamo canzoni anime?'",
        "expectedRomaji": [
          "aeni norae bureulkkayo",
          "aeninoraebureulkkayo"
        ],
        "expectedHangul": [
          "애니 노래 부를까요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Ae-ni no-rae bu-reul-kka-yo?",
        "tip": "Norae = Canzone."
      },
      {
        "type": "conversation",
        "context": "Siete a fine serata.",
        "question": "Come commenti la serata?",
        "options": [
          "Jaemisseoyo",
          "Mollayo",
          "Apayo"
        ],
        "optionsHangul": [
          "재밌어요",
          "몰라요",
          "아파요"
        ],
        "answer": 0,
        "conceptTag": "Emozioni",
        "feedback_incorrect": "재밌다 (jaemitda) = divertente.",
        "tip": "Jaemisseoyo.",
        "optionsRomaji": [
          "",
          "Mollayo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 노래 부를___? (Cantiamo?)",
        "options": [
          "까요",
          "어요",
          "니다",
          "세"
        ],
        "answer": 0,
        "conceptTag": "Proposte",
        "feedback_incorrect": "~ㄹ까요 per proporre.",
        "tip": "Bureulkkayo.",
        "optionsHangul": [
          "까요",
          "어요",
          "니다",
          "세"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 1] 'Forza!' in coreano.",
        "options": [
          "Hwaiting",
          "Annyeong",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "화이팅",
          "안녕",
          "감사합니다"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Hwaiting per caricare chi canta.",
        "tip": "Fighting!",
        "optionsRomaji": [
          "Hwaiting",
          "",
          "Gamsahamnida"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combo Karaoke.",
        "question": "Componi: 'Microfono (마이크) dammi (주세요), cantiamo? (부를까요?)'.",
        "shuffled_blocks": [
          "부를까요?",
          "주세요,",
          "마이크"
        ],
        "correct_order": [
          "마이크",
          "주세요,",
          "부를까요?"
        ],
        "conceptTag": "Flusso",
        "feedback_incorrect": "Prima chiedi il mic, poi proponi.",
        "tip": "Mike juseyo, bureulkkayo?"
      },
      {
        "type": "listen",
        "question": "Il complimento obbligatorio:",
        "audioHangul": "노래 잘해요!",
        "options": [
          "Stonato",
          "Canti bene!",
          "Basta"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Jalhaeyo = fare bene.",
        "tip": "Norae jalhaeyo."
      },
      {
        "type": "speak",
        "question": "Pretendi lo strumento: 'Passami il microfono'.",
        "expectedRomaji": [
          "mike juseyo",
          "maikeujuseyo"
        ],
        "expectedHangul": [
          "마이크 주세요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Ma-i-keu ju-se-yo.",
        "tip": "Konglish!"
      }
    ]
  },
  {
    "day": 27,
    "title": "Nostalgia: 보고 싶어요 💕",
    "topic": "Chat e Sentimenti",
    "theory": {
      "intro": "L'allenamento è finito, scorri le foto di Busan e vuoi scrivere agli amici o a Nam Joo-hyuk.",
      "concept": "La grammatica '~고 싶다' (-go sipda) esprime 'voglio'. 보다 (vedere) + 고 싶어요 = 보고 싶어요: 'Voglio vederti', ma si traduce 'Mi manchi'.",
      "builderRule": "🔗 Chain link: 오늘 재밌었어요 (Oggi è stato divertente) + 보고 싶어요 (Mi manchi).",
      "examples": [
        {
          "hangul": "보고 싶어요",
          "romaji": "Bogo sipeoyo",
          "eng": "Mi manchi / Voglio vederti",
          "context": "Frase romantica/nostalgica."
        },
        {
          "hangul": "잘 지내요?",
          "romaji": "Jal jinaeyo?",
          "eng": "Come stai?",
          "context": "Per riaprire una chat."
        },
        {
          "hangul": "한국 가고 싶어요",
          "romaji": "Hanguk gago sipeoyo",
          "eng": "Voglio andare in Corea",
          "context": "Applicazione di ~고 싶어요."
        },
        {
          "hangul": "저도요",
          "romaji": "Jeodoyo",
          "eng": "Anche io",
          "context": "Risposta a mi manchi."
        }
      ],
      "culture": "In Corea si usa KakaoTalk (카톡). Ha emoticons animate perfette per emozioni drammatiche."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "La frase di ogni K-Drama romantico:",
        "audioHangul": "보고 싶어요",
        "options": [
          "Voglio mangiare",
          "Mi manchi",
          "Ho sonno"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Emotivo",
        "feedback_incorrect": "Significa 'Voglio vederti' = Mi manchi.",
        "tip": "Bo-go si-peo-yo.",
        "audioRomaji": "Bogo sipeoyo"
      },
      {
        "type": "multiple_choice",
        "question": "Vuoi dire che vuoi viaggiare in Corea.",
        "options": [
          "Hanguk gago sipeoyo",
          "Bogo sipeoyo",
          "Jal jinaeyo?"
        ],
        "optionsHangul": [
          "한국 가고 싶어요",
          "보고 싶어요",
          "잘 지내요?"
        ],
        "answer": 0,
        "conceptTag": "Desideri",
        "feedback_incorrect": "가다 (gada) = andare.",
        "tip": "Hanguk (Corea) gago sipeoyo.",
        "optionsRomaji": [
          "",
          "Bogo sipeoyo",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Scrivi a un amico su KakaoTalk.",
        "question": "Componi: 'Come stai? (잘 지내요?) Mi manchi (보고 싶어요)'.",
        "shuffled_blocks": [
          "싶어요",
          "보고",
          "지내요?",
          "잘"
        ],
        "correct_order": [
          "잘",
          "지내요?",
          "보고",
          "싶어요"
        ],
        "conceptTag": "Messaggi",
        "feedback_incorrect": "Stai bene? + Vedere voglio.",
        "tip": "Jal jinaeyo? Bogo sipeoyo."
      },
      {
        "type": "speak",
        "question": "Sospira: 'Voglio andare in Corea!'",
        "expectedRomaji": [
          "hanguk gago sipeoyo",
          "hangukgagosipeoyo"
        ],
        "expectedHangul": [
          "한국 가고 싶어요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Han-guk ga-go si-peo-yo.",
        "tip": "Gago = Voglio andare."
      },
      {
        "type": "conversation",
        "context": "L'amica ti dice 'Bogo sipeoyo'.",
        "question": "Come rispondi 'Anche io'?",
        "options": [
          "Jeodoyo",
          "Anieyo",
          "Mollayo"
        ],
        "optionsHangul": [
          "저도요",
          "아니에요",
          "몰라요"
        ],
        "answer": 0,
        "conceptTag": "Risposte",
        "feedback_incorrect": "저 (jeo) = io, 도 (do) = anche.",
        "tip": "Jeodoyo.",
        "optionsRomaji": [
          "",
          "",
          "Mollayo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 보고 ___요 (Voglio vederti).",
        "options": [
          "싶어",
          "먹어",
          "가",
          "아파"
        ],
        "answer": 0,
        "conceptTag": "Grammatica Voglio",
        "feedback_incorrect": "~고 싶어요 = voglio.",
        "tip": "Sipeoyo.",
        "optionsHangul": [
          "싶어",
          "먹어",
          "가",
          "아파"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 16] 'Sono troppo stanca' (dopo aver chattato ore).",
        "options": [
          "Neomu pigonhaeyo",
          "Geunyuktong simhaeyo",
          "Gamsahamnida"
        ],
        "optionsHangul": [
          "너무 피곤해요",
          "근육통 심해요",
          "감사합니다"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Pigonhada = stanco.",
        "tip": "Neomu pigonhaeyo.",
        "optionsRomaji": [
          "",
          "",
          "Gamsahamnida"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Vuoi farti sentire.",
        "question": "Componi: 'Anche io (저도) mi manchi (보고 싶어요)'.",
        "shuffled_blocks": [
          "싶어요",
          "보고",
          "저도"
        ],
        "correct_order": [
          "저도",
          "보고",
          "싶어요"
        ],
        "conceptTag": "Ricambio",
        "feedback_incorrect": "Anche io + Voglio vederti.",
        "tip": "Jeodo bogo sipeoyo."
      },
      {
        "type": "listen",
        "question": "Ascolta il saluto in chat:",
        "audioHangul": "잘 지내요?",
        "options": [
          "Dove sei?",
          "Stai bene?",
          "Chi sei?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Jinaeda = passare il tempo.",
        "tip": "Jal jinaeyo?"
      },
      {
        "type": "speak",
        "question": "Dì dolcemente: 'Mi manchi'.",
        "expectedRomaji": [
          "bogo sipeoyo",
          "bogosipeoyo"
        ],
        "expectedHangul": [
          "보고 싶어요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Bo-go si-peo-yo.",
        "tip": "Classica frase Kdrama."
      }
    ]
  },
  {
    "day": 28,
    "title": "Farmacia: Infortuni in Palestra! 💊",
    "topic": "Salute e Medicina",
    "theory": {
      "intro": "Ieri hai esagerato con lo stacco da terra e hai la schiena a pezzi. Andiamo in farmacia (약국)!",
      "concept": "La parola chiave è '약' (yak - medicina). Sintomo + 약 = cura. 근육통 + 약 = medicina per dolori muscolari.",
      "builderRule": "🔗 Chain link: 다리가 너무 아파요 (Gambe fanno male) + 근육통 약 있어요? (Avete medicine per i DOMS?).",
      "examples": [
        {
          "hangul": "근육통 약 있어요?",
          "romaji": "Geunyuktong yak isseoyo?",
          "eng": "Avete medicine per dolori muscolari?",
          "context": "Salvavita post Leg Day."
        },
        {
          "hangul": "밴드 주세요",
          "romaji": "Baendeu juseyo",
          "eng": "Mi dia dei cerotti",
          "context": "Per vesciche cosplay."
        },
        {
          "hangul": "이 약 어떻게 먹어요?",
          "romaji": "I yak eotteoke meogeoyo?",
          "eng": "Come si prende questa medicina?",
          "context": "Per il dosaggio."
        },
        {
          "hangul": "머리 아파요",
          "romaji": "Meori apayo",
          "eng": "Ho mal di testa",
          "context": "Dopo troppe ore al PC."
        }
      ],
      "culture": "I farmacisti (약사) in Corea ti daranno bustine di carta pre-confezionate con il numero esatto di pillole per ogni pasto."
    },
    "exercises": [
      {
        "type": "listen",
        "question": "La richiesta disperata al farmacista:",
        "audioHangul": "근육통 약 있어요?",
        "options": [
          "Cerotti",
          "Medicine per dolori muscolari",
          "Acqua"
        ],
        "answer": 1,
        "conceptTag": "Gym Vocab",
        "feedback_incorrect": "근육통 (Geunyuktong) = DOMS.",
        "tip": "Yak = Medicina.",
        "audioRomaji": "Geunyuktong yak isseoyo?"
      },
      {
        "type": "multiple_choice",
        "question": "Le scarpe cosplay ti hanno distrutto i talloni. Cosa compri?",
        "options": [
          "Baendeu juseyo",
          "Geunyuktong yak isseoyo?",
          "I yak eotteoke meogeoyo?"
        ],
        "optionsHangul": [
          "밴드 주세요",
          "근육통 약 있어요?",
          "이 약 어떻게 먹어요?"
        ],
        "answer": 0,
        "conceptTag": "Pronto Soccorso",
        "feedback_incorrect": "밴드 (baendeu) = cerotto (band-aid).",
        "tip": "Baendeu juseyo.",
        "optionsRomaji": [
          "Baendeu juseyo",
          "Geunyuktong yak isseoyo?",
          "I yak eotteoke meogeoyo?"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Scatola con scritte in coreano, non sai il dosaggio.",
        "question": "Componi: 'Questa medicina (이 약) come (어떻게) prendo? (먹어요?)'.",
        "shuffled_blocks": [
          "먹어요?",
          "약",
          "어떻게",
          "이"
        ],
        "correct_order": [
          "이",
          "약",
          "어떻게",
          "먹어요?"
        ],
        "conceptTag": "Dosaggio",
        "feedback_incorrect": "Questa + Medicina + Come + Prendo/Mangio.",
        "tip": "In coreano si 'mangia' (먹다) la medicina."
      },
      {
        "type": "speak",
        "question": "Chiedi il dosaggio: 'Come si prende questa medicina?'",
        "expectedRomaji": [
          "i yak eotteoke meogeoyo",
          "iyakeotteokemeogeoyo"
        ],
        "expectedHangul": [
          "이 약 어떻게 먹어요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "I yak eo-tto-ke meo-geo-yo?",
        "tip": "Eotteoke."
      },
      {
        "type": "conversation",
        "context": "Troppo LoL ti ha fritto il cervello.",
        "question": "Cosa dici al farmacista?",
        "options": [
          "Meori apayo",
          "Dari apayo",
          "Baegopayo"
        ],
        "optionsHangul": [
          "머리 아파요",
          "다리 아파요",
          "배고파요"
        ],
        "answer": 0,
        "conceptTag": "Sintomi",
        "feedback_incorrect": "머리 (Meori) = testa. 다리 = gamba.",
        "tip": "Meori apayo.",
        "optionsRomaji": [
          "Meori apayo",
          "Dari apayo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 근육통 ___ 있어요? (Medicina).",
        "options": [
          "약",
          "물",
          "밥",
          "차"
        ],
        "answer": 0,
        "conceptTag": "Vocabolario Medico",
        "feedback_incorrect": "약 (Yak) = Medicina.",
        "tip": "Yak isseoyo.",
        "optionsHangul": [
          "약",
          "물",
          "밥",
          "차"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 23] Come si va in Taxi alla farmacia (Yakguk)?",
        "options": [
          "Yakguk-euro gajuseyo",
          "PC-bang-euro gajuseyo",
          "Haeundae gajuseyo"
        ],
        "optionsHangul": [
          "약국으로 가주세요",
          "PC방으로 가주세요",
          "해운대 가주세요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Yakguk = farmacia.",
        "tip": "Euro gajuseyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Associa sintomo e richiesta.",
        "question": "Componi: 'Testa (머리) fa male (아파요), medicina (약) dia per favore (주세요)'.",
        "shuffled_blocks": [
          "아파요,",
          "약",
          "머리",
          "주세요"
        ],
        "correct_order": [
          "머리",
          "아파요,",
          "약",
          "주세요"
        ],
        "conceptTag": "Comunicazione",
        "feedback_incorrect": "Causa + Richiesta.",
        "tip": "Meori apayo, yak juseyo."
      },
      {
        "type": "listen",
        "question": "Ascolta cosa vuole il cliente ferito:",
        "audioHangul": "밴드 주세요",
        "options": [
          "Cerotti",
          "Bende per box",
          "Acqua"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Band-aid.",
        "tip": "Baendeu.",
        "audioRomaji": "Baendeu juseyo"
      },
      {
        "type": "speak",
        "question": "Chiedi il salvavita: 'Avete medicine per i dolori muscolari?'",
        "expectedRomaji": [
          "geunyuktong yak isseoyo",
          "geunyuktongyakisseoyo"
        ],
        "expectedHangul": [
          "근육통 약 있어요?"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Geun-yuk-tong yak is-seo-yo.",
        "tip": "Geunyuktong."
      }
    ]
  },
  {
    "day": 29,
    "title": "Mangiamo Insieme? 🍜",
    "topic": "Inviti e Socialità",
    "theory": {
      "intro": "Hai incontrato amici gamer o cosplayer. Al momento di salutarsi, si usa un invito classico.",
      "concept": "'밥 한번 먹자' (Bap hanbeon meokja) = 'Mangiamo un pasto una volta'. È l'equivalente di 'Ci vediamo!', ma se aggiungi '언제' (Quando) diventa reale.",
      "builderRule": "🔗 Chain link: 나중에 봐요! (Ci vediamo dopo!) + 언제 밥 한번 먹자! (Mangiamo insieme!).",
      "examples": [
        {
          "hangul": "언제 밥 한번 먹자!",
          "romaji": "Eonje bap hanbeon meokja!",
          "eng": "Mangiamo insieme qualche volta!",
          "context": "Saluto caldo tra amici."
        },
        {
          "hangul": "이번 주말 어때요?",
          "romaji": "Ibeon jumal eottaeyo?",
          "eng": "Questo fine settimana che ne dici?",
          "context": "Per fissare la data! 📅"
        },
        {
          "hangul": "어디서 만날까요?",
          "romaji": "Eodiseo mannalkkayo?",
          "eng": "Dove ci incontriamo?",
          "context": "I dettagli."
        },
        {
          "hangul": "좋아요",
          "romaji": "Joayo",
          "eng": "Va bene / Mi piace",
          "context": "Accettare."
        }
      ],
      "culture": "Se un coreano dice 'Bap hanbeon meokja', è una formula di cortesia che indica affetto, non sempre un invito immediato."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "L'amico ti invita a concretizzare. Cosa chiede?",
        "options": [
          "Ibeon jumal eottaeyo?",
          "Eodiseo mannalkkayo?",
          "Eonje bap hanbeon meokja!"
        ],
        "optionsHangul": [
          "이번 주말 어때요?",
          "어디서 만날까요?",
          "언제 밥 한번 먹자!"
        ],
        "answer": 0,
        "conceptTag": "Date",
        "feedback_incorrect": "주말 (jumal) = fine settimana. 어때요 = che ne pensi?.",
        "tip": "Ibeon jumal.",
        "optionsRomaji": [
          "Ibeon jumal eottaeyo?",
          "",
          "Eonje bap hanbeon meokja!"
        ]
      },
      {
        "type": "listen",
        "question": "Avete deciso di vedervi. Ora chiedi il luogo:",
        "audioHangul": "어디서 만날까요?",
        "options": [
          "Dove ci incontriamo?",
          "Cosa mangiamo?",
          "A che ora?"
        ],
        "answer": 0,
        "conceptTag": "Luoghi",
        "feedback_incorrect": "어디서 (eodiseo) = Dove? 만날까요? = Ci incontriamo?.",
        "tip": "Eodiseo = dove."
      },
      {
        "type": "sentence_builder",
        "context": "Salutando amici dopo LAN party.",
        "question": "Componi: 'Quando (언제) pasto (밥) una volta (한번) mangiamo! (먹자!)'.",
        "shuffled_blocks": [
          "한번",
          "먹자!",
          "언제",
          "밥"
        ],
        "correct_order": [
          "언제",
          "밥",
          "한번",
          "먹자!"
        ],
        "conceptTag": "Frasi Fatte",
        "feedback_incorrect": "Quando + Riso + Una volta + Mangiamo.",
        "tip": "Bap = riso/pasto."
      },
      {
        "type": "speak",
        "question": "Dì ai tuoi amici: 'Mangiamo insieme qualche volta!'",
        "expectedRomaji": [
          "eonje bap hanbeon meokja",
          "eonjebaphanbeonmeokja"
        ],
        "expectedHangul": [
          "언제 밥 한번 먹자!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Eon-je bap han-beon meok-ja!",
        "tip": "È informale (niente -yo)."
      },
      {
        "type": "conversation",
        "context": "L'amico ti propone il weekend. Accetta!",
        "question": "Cosa dici?",
        "options": [
          "Joayo",
          "Mollayo",
          "Anieyo"
        ],
        "optionsHangul": [
          "좋아요",
          "몰라요",
          "아니에요"
        ],
        "answer": 0,
        "conceptTag": "Accettare",
        "feedback_incorrect": "좋아요 (Joayo) = bene/ok.",
        "tip": "Joayo!",
        "optionsRomaji": [
          "",
          "Mollayo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___서 만날까요? (Dove incontriamo?)",
        "options": [
          "어디",
          "언제",
          "누구",
          "왜"
        ],
        "answer": 0,
        "conceptTag": "Pronomi",
        "feedback_incorrect": "어디 (Eodi) = dove.",
        "tip": "Eodiseo.",
        "optionsHangul": [
          "어디",
          "언제",
          "누구",
          "왜"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 11] 'Mangiamo pollo e birra?'",
        "options": [
          "Chimaek meogeulkkayo?",
          "Sanchaek galkkayo?",
          "Samgyeopsal juseyo"
        ],
        "optionsHangul": [
          "치맥 먹을까요?",
          "산책 갈까요?",
          "삼겹살 주세요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Chimaek = Chicken + Maekju.",
        "tip": "Chimaek.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combo proposta e accettazione.",
        "question": "Componi: 'Va bene (좋아요), dove (어디서) incontriamo? (만날까요?)'.",
        "shuffled_blocks": [
          "만날까요?",
          "좋아요,",
          "어디서"
        ],
        "correct_order": [
          "좋아요,",
          "어디서",
          "만날까요?"
        ],
        "conceptTag": "Dialogo",
        "feedback_incorrect": "Accetta, poi chiedi.",
        "tip": "Joayo, eodiseo mannalkkayo?"
      },
      {
        "type": "listen",
        "question": "Ascolta la proposta di data:",
        "audioHangul": "이번 주말 어때요?",
        "options": [
          "Domani?",
          "Questo weekend?",
          "Oggi?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Ibeon jumal = Questo weekend.",
        "tip": "Jumal = fine settimana.",
        "audioRomaji": "Ibeon jumal eottaeyo?"
      },
      {
        "type": "speak",
        "question": "Fissa il luogo: 'Dove ci incontriamo?'",
        "expectedRomaji": [
          "eodiseo mannalkkayo",
          "eodiseomannalkkayo"
        ],
        "expectedHangul": [
          "어디서 만날까요?"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Eo-di-seo man-nal-kka-yo?",
        "tip": "Mannada = incontrare."
      }
    ]
  },
  {
    "day": 30,
    "title": "Geumjin Beach Sbloccata! 🌊",
    "topic": "Grammatica: Perché/Ma",
    "theory": {
      "intro": "Mappa Sbloccata! Sei alla spiaggia di Geumjin (2521). L'acqua è ghiacciata! Impariamo a unire due frasi.",
      "concept": "1. 'MA' (~지만): Si attacca alla radice. 차갑다 -> 차갑지만 (freddo MA). 2. 'QUINDI' (~아서/어서): Collega causa-effetto. 추워서 (fa freddo QUINDI).",
      "builderRule": "🔗 Chain link: 파도 예뻐요 (Onde belle) + 하지만 물이 차가워요 (Ma l'acqua è fredda).",
      "examples": [
        {
          "hangul": "여기가 금진 해변이에요?",
          "romaji": "Yeogiga Geumjin haebyeonieyo?",
          "eng": "È questa la spiaggia di Geumjin?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "파도 진짜 예뻐요",
          "romaji": "Pado jinjja yeppeoyo",
          "eng": "Le onde sono davvero belle",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "물이 차갑지만 좋아요",
          "romaji": "Muri chagapjiman joayo",
          "eng": "L'acqua è fredda, ma mi piace",
          "context": "Grammatica applicata! 🥶"
        },
        {
          "hangul": "추워서 안 들어가요",
          "romaji": "Chuwoseo an deureogayo",
          "eng": "Fa freddo quindi non entro",
          "context": "Uso di QUINDI."
        }
      ],
      "culture": "In Corea molti non nuotano, ma stanno a riva coperti dai rash guard."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Vuoi dire che le onde sono belle. Quale frase della Mappa usi?",
        "options": [
          "Muri chagapjiman joayo",
          "Pado jinjja yeppeoyo",
          "Yeogiga Geumjin haebyeonieyo?"
        ],
        "optionsHangul": [
          "물이 차갑지만 좋아요",
          "파도 진짜 예뻐요",
          "여기가 금진 해변이에요?"
        ],
        "answer": 1,
        "conceptTag": "Natura",
        "feedback_incorrect": "파도 (pado) = onde.",
        "tip": "Pado jinjja yeppeoyo.",
        "optionsRomaji": [
          "",
          "Pado jinjja yeppeoyo",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Cosa dice l'amico in acqua?",
        "audioHangul": "물이 차갑지만 좋아요",
        "options": [
          "Acqua calda",
          "L'acqua è fredda ma mi piace",
          "Vado a casa"
        ],
        "answer": 1,
        "conceptTag": "Grammatica Ma",
        "feedback_incorrect": "차갑다 = freddo. ~지만 = ma.",
        "tip": "Chagap-jiman."
      },
      {
        "type": "sentence_builder",
        "context": "Chiedi se è il set di 2521.",
        "question": "Componi: 'Qui (여기가) Geumjin spiaggia (금진 해변) è? (이에요?)'.",
        "shuffled_blocks": [
          "해변이에요?",
          "여기가",
          "금진"
        ],
        "correct_order": [
          "여기가",
          "금진",
          "해변이에요?"
        ],
        "conceptTag": "Luoghi",
        "feedback_incorrect": "Soggetto + Nome + È.",
        "tip": "Haebyeon = spiaggia."
      },
      {
        "type": "speak",
        "question": "Dì ad alta voce: 'Le onde sono davvero belle'.",
        "expectedRomaji": [
          "pado jinjja yeppeoyo",
          "padojinjjayeppeoyo"
        ],
        "expectedHangul": [
          "파도 진짜 예뻐요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Pa-do jin-jja yep-peo-yo.",
        "tip": "Pado = Onde."
      },
      {
        "type": "conversation",
        "context": "Perché non fai il bagno?",
        "question": "Spiegalo con la grammatica:",
        "options": [
          "Chuwoseo an deureogayo",
          "Muri chagapjiman joayo",
          "Pado yeppeoyo"
        ],
        "optionsHangul": [
          "추워서 안 들어가요",
          "물이 차갑지만 좋아요",
          "파도 예뻐요"
        ],
        "answer": 0,
        "conceptTag": "Cause",
        "feedback_incorrect": "추워서 (chuwoseo) = Fa freddo quindi.",
        "tip": "An deureogayo = non entro.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa con MA: 예쁘___ 안 사요 (È bello MA non lo compro).",
        "options": [
          "지만",
          "고",
          "서",
          "도"
        ],
        "answer": 0,
        "conceptTag": "Congiunzioni",
        "feedback_incorrect": "~지만 (jiman) = ma.",
        "tip": "Yeppeojiman.",
        "optionsHangul": [
          "지만",
          "고",
          "서",
          "도"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 18] 'Questa estate è nostra'.",
        "options": [
          "I yeoreumeun uri geoya",
          "Deurama majayo",
          "Sajin jjigeojuseyo"
        ],
        "optionsHangul": [
          "이 여름은 우리 거야",
          "드라마 맞아요",
          "사진 찍어주세요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Yeoreum = estate.",
        "tip": "Frase iconica 2521.",
        "optionsRomaji": [
          "I yeoreumeun uri geoya",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combina Causa e Effetto.",
        "question": "Componi: 'Freddo quindi (추워서) non (안) entro (들어가요)'.",
        "shuffled_blocks": [
          "들어가요",
          "안",
          "추워서"
        ],
        "correct_order": [
          "추워서",
          "안",
          "들어가요"
        ],
        "conceptTag": "Negazione",
        "feedback_incorrect": "Causa + Non + Entro.",
        "tip": "An = non."
      },
      {
        "type": "listen",
        "question": "Ascolta la conferma del luogo:",
        "audioHangul": "여기가 금진 해변이에요?",
        "options": [
          "È Haeundae?",
          "È Geumjin Beach?",
          "Dov'è il mare?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Geumjin Haebyeon.",
        "tip": "Haebyeon = spiaggia."
      },
      {
        "type": "speak",
        "question": "Usa la grammatica: 'L'acqua è fredda, ma mi piace'.",
        "expectedRomaji": [
          "muri chagapjiman joayo",
          "murichagapjimanjoayo"
        ],
        "expectedHangul": [
          "물이 차갑지만 좋아요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Mu-ri cha-gap-ji-man jo-a-yo.",
        "tip": "Jiman lega le due frasi."
      }
    ]
  },
  {
    "day": 31,
    "title": "Vittoria e Soju al Pub! 🍶",
    "topic": "Celebrazioni e Alcolici",
    "theory": {
      "intro": "Il team ha vinto! È ora di andare in un Pocha (포차) per festeggiare, mangiare anju (snack) e brindare.",
      "concept": "Il termine per 'Brindisi' è '건배' (Geonbae), letteralmente 'bicchiere vuoto'. L'alcolico nazionale è il '소주' (Soju).",
      "builderRule": "🔗 Chain link: 오늘 즐거웠어요! (Oggi è stato divertente!) + 건배! (Salute!).",
      "examples": [
        {
          "hangul": "건배!",
          "romaji": "Geonbae!",
          "eng": "Salute! / Brindisi!",
          "context": "Battendo i bicchierini."
        },
        {
          "hangul": "소주 한 병 주세요",
          "romaji": "Soju han byeong juseyo",
          "eng": "Una bottiglia di soju, per favore",
          "context": "Ordinando al cameriere."
        },
        {
          "hangul": "오늘 즐거웠어요",
          "romaji": "Oneul jeulgeowosseoyo",
          "eng": "Oggi è stato divertente",
          "context": "Fine serata."
        },
        {
          "hangul": "짠!",
          "romaji": "Jjan!",
          "eng": "Cin cin!",
          "context": "Suono onomatopeico dei bicchieri."
        }
      ],
      "culture": "Non ci si versa MAI da bere da soli in Corea. Versi per gli amici (usando due mani) e loro versano a te."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Il cameriere si avvicina. Come ordini da bere?",
        "options": [
          "Geonbae!",
          "Soju han byeong juseyo",
          "Oneul jeulgeowosseoyo"
        ],
        "optionsHangul": [
          "건배!",
          "소주 한 병 주세요",
          "오늘 즐거웠어요"
        ],
        "answer": 1,
        "conceptTag": "Ordinare",
        "feedback_incorrect": "한 병 (han byeong) = una bottiglia.",
        "tip": "Soju han byeong.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "listen",
        "question": "Senti tutti gridare al tavolo accanto:",
        "audioHangul": "건배!",
        "options": [
          "Salute!",
          "Un'altra bottiglia!",
          "Basta"
        ],
        "answer": 0,
        "conceptTag": "Esclamazioni",
        "feedback_incorrect": "Geonbae è la parola nei pub.",
        "tip": "Geonbae!"
      },
      {
        "type": "sentence_builder",
        "context": "Fai un brindisi sulla vostra vittoria.",
        "question": "Componi: 'Oggi (오늘) divertente è stato! (즐거웠어요) Salute! (건배!)'.",
        "shuffled_blocks": [
          "건배!",
          "오늘",
          "즐거웠어요"
        ],
        "correct_order": [
          "오늘",
          "즐거웠어요",
          "건배!"
        ],
        "conceptTag": "Discorsi",
        "feedback_incorrect": "Oggi + Divertente (passato) + Brindisi.",
        "tip": "Oneul jeulgeowosseoyo."
      },
      {
        "type": "speak",
        "question": "Ordina: 'Una bottiglia di soju, per favore'.",
        "expectedRomaji": [
          "soju han byeong juseyo",
          "sojuhanbyeongjuseyo"
        ],
        "expectedHangul": [
          "소주 한 병 주세요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "So-ju han byeong ju-se-yo.",
        "tip": "Byeong è il contatore bottiglie."
      },
      {
        "type": "conversation",
        "context": "Invece del formale Geonbae, usi la parola carina dei giovani.",
        "question": "Qual è il suono dei bicchieri?",
        "options": [
          "Jjan!",
          "Sugo!",
          "Heol!"
        ],
        "optionsHangul": [
          "짠!",
          "수고!",
          "헐!"
        ],
        "answer": 0,
        "conceptTag": "Slang Pub",
        "feedback_incorrect": "짠 (Jjan) è l'onomatopea del cin cin.",
        "tip": "Jjan!",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 소주 ___ 병 주세요 (1 bottiglia).",
        "options": [
          "한",
          "두",
          "세",
          "네"
        ],
        "answer": 0,
        "conceptTag": "Numeri",
        "feedback_incorrect": "한 (Han) = 1 (per contare).",
        "tip": "Han byeong.",
        "optionsHangul": [
          "한",
          "두",
          "세",
          "네"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 3] 'Dov'è il bagno?' nel pub.",
        "options": [
          "Hwajangsil eodiyeyo?",
          "Soju eodiyeyo?",
          "Jari isseoyo?"
        ],
        "optionsHangul": [
          "화장실 어디예요?",
          "소주 어디예요?",
          "자리 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Hwajangsil = Bagno.",
        "tip": "Sempre utile nei pub.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Saluti a fine serata.",
        "question": "Componi: 'Oggi (오늘) davvero (진짜) divertente! (즐거웠어요)'.",
        "shuffled_blocks": [
          "진짜",
          "즐거웠어요",
          "오늘"
        ],
        "correct_order": [
          "오늘",
          "진짜",
          "즐거웠어요"
        ],
        "conceptTag": "Complimenti",
        "feedback_incorrect": "Tempo + Avverbio + Verbo.",
        "tip": "Oneul jinjja jeulgeowosseoyo."
      },
      {
        "type": "listen",
        "question": "Il suono dei giovani che brindano:",
        "audioHangul": "짠!",
        "options": [
          "Vittoria",
          "Cin cin!",
          "Stop"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Slang",
        "feedback_incorrect": "Jjan!",
        "tip": "Cin cin."
      },
      {
        "type": "speak",
        "question": "Brinda ad alta voce: 'Salute!'",
        "expectedRomaji": [
          "geonbae",
          "geonbae!"
        ],
        "expectedHangul": [
          "건배!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Geon-bae!",
        "tip": "Dillo forte!"
      }
    ]
  },
  {
    "day": 32,
    "title": "Confessione K-Drama 💗",
    "topic": "Amore e Relazioni",
    "theory": {
      "intro": "Il momento clou di ogni K-Drama: la confessione (고백). Cosa dicono i protagonisti sotto i ciliegi?",
      "concept": "'좋아해요' (Joahaeyo) significa 'mi piaci', ma in Corea è la confessione d'amore standard (molto più comune di Saranghaeyo).",
      "builderRule": "🔗 Chain link: 진짜 (Davvero) + 좋아해요 (Mi piaci) + 우리 사귀어요? (Stiamo insieme?). Il cuore esplode!",
      "examples": [
        {
          "hangul": "좋아해요",
          "romaji": "Joahaeyo",
          "eng": "Mi piaci (confessione)",
          "context": "Episodio 8 del drama."
        },
        {
          "hangul": "우리 사귀어요?",
          "romaji": "Uri sagwieyo?",
          "eng": "Stiamo insieme?",
          "context": "Proposta ufficiale."
        },
        {
          "hangul": "설레요",
          "romaji": "Seolleoyo",
          "eng": "Sento le farfalle nello stomaco",
          "context": "Commentando la scena."
        },
        {
          "hangul": "사랑해요",
          "romaji": "Saranghaeyo",
          "eng": "Ti amo",
          "context": "Molto forte, usato dopo."
        }
      ],
      "culture": "In Corea c'è il periodo di 'Som' (썸 - chimica senza stare insieme) che finisce con 'Uri sagwieyo?'."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Il protagonista si confessa. Cosa dice?",
        "options": [
          "Seolleoyo",
          "Joahaeyo",
          "Uri sagwieyo?"
        ],
        "optionsHangul": [
          "설레요",
          "좋아해요",
          "우리 사귀어요?"
        ],
        "answer": 1,
        "conceptTag": "Confessioni",
        "feedback_incorrect": "La confessione standard è 'Joahaeyo'.",
        "tip": "Joahaeyo = Mi piaci.",
        "optionsRomaji": [
          "Seolleoyo",
          "Joahaeyo",
          "Uri sagwieyo?"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta l'emozione della tua amica davanti alla TV:",
        "audioHangul": "설레요",
        "options": [
          "Sono triste",
          "Sento le farfalle nello stomaco",
          "Sono arrabbiata"
        ],
        "answer": 1,
        "conceptTag": "Emozioni",
        "feedback_incorrect": "설레다 (seolleda) = cuore che batte.",
        "tip": "Seolleoyo.",
        "audioRomaji": "Seolleoyo"
      },
      {
        "type": "sentence_builder",
        "context": "Stai commentando la scena clou.",
        "question": "Componi: 'Noi (우리) stiamo insieme? (사귀어요?)'.",
        "shuffled_blocks": [
          "사귀어요?",
          "우리"
        ],
        "correct_order": [
          "우리",
          "사귀어요?"
        ],
        "conceptTag": "Coppie",
        "feedback_incorrect": "Noi + Stare insieme.",
        "tip": "Uri = Noi."
      },
      {
        "type": "speak",
        "question": "Dì 'Mi piaci' in modo dolce:",
        "expectedRomaji": [
          "joahaeyo",
          "joahaeyo"
        ],
        "expectedHangul": [
          "좋아해요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Jo-a-hae-yo.",
        "tip": "La H è muta."
      },
      {
        "type": "conversation",
        "context": "È il momento della parola più forte.",
        "question": "Come si dice 'Ti amo' in coreano?",
        "options": [
          "Saranghaeyo",
          "Joahaeyo",
          "Mollayo"
        ],
        "optionsHangul": [
          "사랑해요",
          "좋아해요",
          "몰라요"
        ],
        "answer": 0,
        "conceptTag": "Sentimenti",
        "feedback_incorrect": "Saranghaeyo è più intenso.",
        "tip": "Saranghaeyo.",
        "optionsRomaji": [
          "",
          "Joahaeyo",
          "Mollayo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___ 사귀어요? (Noi stiamo insieme?).",
        "options": [
          "우리",
          "나",
          "너",
          "그"
        ],
        "answer": 0,
        "conceptTag": "Pronomi",
        "feedback_incorrect": "우리 (Uri) = Noi.",
        "tip": "Uri.",
        "optionsHangul": [
          "우리",
          "나",
          "너",
          "그"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 27] 'Mi manchi' nel drama.",
        "options": [
          "Bogo sipeoyo",
          "Jal jinaeyo",
          "Joahaeyo"
        ],
        "optionsHangul": [
          "보고 싶어요",
          "잘 지내요",
          "좋아해요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Bogo sipeoyo = Voglio vederti.",
        "tip": "Sempre presente nei drama.",
        "optionsRomaji": [
          "Bogo sipeoyo",
          "",
          "Joahaeyo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combo super romantica.",
        "question": "Componi: 'Davvero (진짜) mi piaci (좋아해요)'.",
        "shuffled_blocks": [
          "좋아해요",
          "진짜"
        ],
        "correct_order": [
          "진짜",
          "좋아해요"
        ],
        "conceptTag": "Intensità",
        "feedback_incorrect": "Avverbio + Verbo.",
        "tip": "Jinjja joahaeyo."
      },
      {
        "type": "listen",
        "question": "Ascolta la proposta fatidica:",
        "audioHangul": "우리 사귀어요?",
        "options": [
          "Mi piaci",
          "Siamo fidanzati/Usciamo insieme?",
          "Addio"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Focus",
        "feedback_incorrect": "Sagwida = frequentarsi.",
        "tip": "Uri sagwieyo.",
        "audioRomaji": "Uri sagwieyo?"
      },
      {
        "type": "speak",
        "question": "Recita l'emozione: 'Sento le farfalle nello stomaco'.",
        "expectedRomaji": [
          "seolleoyo",
          "seolleoyo"
        ],
        "expectedHangul": [
          "설레요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Seol-le-yo.",
        "tip": "Fluttering heart."
      }
    ]
  },
  {
    "day": 33,
    "title": "Weekend da Gamer! 📅",
    "topic": "Pianificare Uscite",
    "theory": {
      "intro": "Volete incontrarvi dal vivo (현피) questo fine settimana in un PC Bang o per un allenamento di gruppo.",
      "concept": "Per chiedere la disponibilità chiedi se ha 'tempo' (시간 - sigan). 주말에 (nel fine settimana) + 시간 있어요? (hai tempo?).",
      "builderRule": "🔗 Chain link: 이번 주말에 시간 있어요? (Hai tempo nel weekend?) + PC방 갈까요? (Andiamo al PC Bang?).",
      "examples": [
        {
          "hangul": "주말에 시간 있어요?",
          "romaji": "Jumare sigan isseoyo?",
          "eng": "Hai tempo nel fine settimana?",
          "context": "Per pianificare."
        },
        {
          "hangul": "몇 시에 만날까요?",
          "romaji": "Myeot sie mannalkkayo?",
          "eng": "A che ora ci incontriamo?",
          "context": "Fissa l'orario!"
        },
        {
          "hangul": "좋아요, 갈게요!",
          "romaji": "Joayo, galgeyo!",
          "eng": "Bene, ci vengo!",
          "context": "Risposta confermativa."
        },
        {
          "hangul": "내일 어때요?",
          "romaji": "Naeil eottaeyo?",
          "eng": "Che ne dici di domani?",
          "context": "Alternativa."
        }
      ],
      "culture": "I coreani sono precisi sull'orario (몇 시) e sul luogo. Si decide subito per evitare il 'vediamo all'ultimo'!"
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Come chiedi al Duo se è libero sabato o domenica?",
        "options": [
          "Myeot sie mannalkkayo?",
          "Jumare sigan isseoyo?",
          "Joayo, galgeyo!"
        ],
        "optionsHangul": [
          "몇 시에 만날까요?",
          "주말에 시간 있어요?",
          "좋아요, 갈게요!"
        ],
        "answer": 1,
        "conceptTag": "Disponibilità",
        "feedback_incorrect": "주말 (jumal) = fine settimana.",
        "tip": "Jumare sigan isseoyo?",
        "optionsRomaji": [
          "",
          "Jumare sigan isseoyo?",
          "Joayo, galgeyo!"
        ]
      },
      {
        "type": "listen",
        "question": "Ascolta la risposta entusiasta:",
        "audioHangul": "좋아요, 갈게요!",
        "options": [
          "Non ho tempo",
          "Bene, vengo!",
          "Dove andiamo?"
        ],
        "answer": 1,
        "conceptTag": "Risposte",
        "feedback_incorrect": "갈게요 (galgeyo) = andrò/vengo.",
        "tip": "Joayo, galgeyo.",
        "audioRomaji": "Joayo, galgeyo!"
      },
      {
        "type": "sentence_builder",
        "context": "Fissa l'orario per il PC Bang.",
        "question": "Componi: 'A che ora (몇 시에) ci incontriamo? (만날까요?)'.",
        "shuffled_blocks": [
          "만날까요?",
          "시에",
          "몇"
        ],
        "correct_order": [
          "몇",
          "시에",
          "만날까요?"
        ],
        "conceptTag": "Orari",
        "feedback_incorrect": "A quale (몇) + ora (시에) + incontriamo.",
        "tip": "Myeot sie mannalkkayo."
      },
      {
        "type": "speak",
        "question": "Chiedi: 'Hai tempo nel fine settimana?'",
        "expectedRomaji": [
          "jumare sigan isseoyo",
          "jumaresiganisseoyo"
        ],
        "expectedHangul": [
          "주말에 시간 있어요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Ju-ma-re si-gan is-seo-yo?",
        "tip": "Jumal + e."
      },
      {
        "type": "conversation",
        "context": "Il weekend è occupato. Proponi domani.",
        "question": "Cosa dici?",
        "options": [
          "Naeil eottaeyo?",
          "Myeot sie?",
          "Jumal eottaeyo?"
        ],
        "optionsHangul": [
          "내일 어때요?",
          "몇 시에?",
          "주말 어때요?"
        ],
        "answer": 0,
        "conceptTag": "Alternative",
        "feedback_incorrect": "내일 (Naeil) = domani.",
        "tip": "Naeil eottaeyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 몇 ___에 만날까요? (A che ORA).",
        "options": [
          "시",
          "분",
          "초",
          "일"
        ],
        "answer": 0,
        "conceptTag": "Tempo",
        "feedback_incorrect": "시 (Si) = Ora.",
        "tip": "Myeot si.",
        "optionsHangul": [
          "시",
          "분",
          "초",
          "일"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 29] 'Dove ci incontriamo?'",
        "options": [
          "Eodiseo mannalkkayo?",
          "Eonje mannalkkayo?",
          "Mwo meogeulkkayo?"
        ],
        "optionsHangul": [
          "어디서 만날까요?",
          "언제 만날까요?",
          "뭐 먹을까요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "어디서 (Eodiseo) = Dove.",
        "tip": "Eodiseo.",
        "optionsRomaji": [
          "",
          "",
          "Mwo meogeulkkayo?"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combina orario e accettazione.",
        "question": "Componi: 'Bene (좋아요), a che ora (몇 시에) incontriamo? (만날까요?)'.",
        "shuffled_blocks": [
          "만날까요?",
          "좋아요,",
          "시에",
          "몇"
        ],
        "correct_order": [
          "좋아요,",
          "몇",
          "시에",
          "만날까요?"
        ],
        "conceptTag": "Fluidità",
        "feedback_incorrect": "Accetta, poi chiedi.",
        "tip": "Joayo, myeot sie mannalkkayo."
      },
      {
        "type": "listen",
        "question": "Ascolta la domanda sull'orario:",
        "audioHangul": "몇 시에 만날까요?",
        "options": [
          "A che ora ci incontriamo?",
          "Quando mangiamo?",
          "Hai tempo?"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Myeot si = che ora.",
        "tip": "Myeot sie."
      },
      {
        "type": "speak",
        "question": "Conferma: 'Bene, vengo!'",
        "expectedRomaji": [
          "joayo galgeyo",
          "joayogalgeyo"
        ],
        "expectedHangul": [
          "좋아요, 갈게요!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Jo-a-yo, gal-ge-yo!",
        "tip": "Galgeyo esprime l'intenzione."
      }
    ]
  },
  {
    "day": 34,
    "title": "Gamer Rage: LoL in Coreano! 🎮",
    "topic": "Slang Gaming",
    "theory": {
      "intro": "Il tuo Jungler stava trollando o ti sei fatta carryare? È il momento di usare il VERO coreano dei gamer.",
      "concept": "Farsi carryare si dice '버스 탄다' (guidare l'autobus). Quando qualcuno trolla/perde apposta si dice '던진다' (lanciare via).",
      "builderRule": "🔗 Chain link: 진짜 짜증나요 (È snervante) + 우리 팀 던져요 (Il team trolla). O se vinci: 버스 탔어요 (Mi sono fatta carryare)!",
      "examples": [
        {
          "hangul": "진짜 짜증나요",
          "romaji": "Jinjja jjajeungnayo",
          "eng": "È davvero snervante",
          "context": "Quando perdi la promo."
        },
        {
          "hangul": "우리 팀 던져요",
          "romaji": "Uri tim deonjyeoyo",
          "eng": "Il team trolla / butta la partita",
          "context": "ADC 0/10."
        },
        {
          "hangul": "버스 탔어요",
          "romaji": "Beoseu tasseoyo",
          "eng": "Mi sono fatta carryare (Autobus)",
          "context": "Quando vinci grazie al team."
        },
        {
          "hangul": "미드 오픈",
          "romaji": "Mideu opeun",
          "eng": "Mid open (arrendiamoci)",
          "context": "Partita irrecuperabile."
        }
      ],
      "culture": "Nei server coreani la mentalità è 'FF15'. Se va male, scrivono '미드 오픈' (Lasciamo aperta la mid) per fare una nuova partita in fretta."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Il tuo ADC muore 10 volte. Come dici che sta 'trollando'?",
        "options": [
          "Beoseu tasseoyo",
          "Deonjyeoyo",
          "Gaeng wajuseyo"
        ],
        "optionsHangul": [
          "버스 탔어요",
          "던져요",
          "갱 와주세요"
        ],
        "answer": 1,
        "conceptTag": "Slang Negativo",
        "feedback_incorrect": "던지다 (deonjida) = lanciare/trollare.",
        "tip": "Deonjyeoyo.",
        "optionsRomaji": [
          "",
          "",
          "Gaeng wajuseyo"
        ]
      },
      {
        "type": "listen",
        "question": "Il ragazzo di fianco al PC Bang sbatte il mouse. Cosa esclama?",
        "audioHangul": "진짜 짜증나요",
        "options": [
          "È davvero snervante!",
          "Ho vinto!",
          "Vieni a gankare!"
        ],
        "answer": 0,
        "conceptTag": "Rabbia",
        "feedback_incorrect": "짜증나다 = essere irritati.",
        "tip": "Jinjja jjajeungnayo."
      },
      {
        "type": "sentence_builder",
        "context": "Un Challenger ti fa vincere. Ammetti di essere stata carryata.",
        "question": "Componi: 'Oggi (오늘) autobus (버스) preso (탔어요)'.",
        "shuffled_blocks": [
          "탔어요",
          "버스",
          "오늘"
        ],
        "correct_order": [
          "오늘",
          "버스",
          "탔어요"
        ],
        "conceptTag": "Slang Positivo",
        "feedback_incorrect": "Oggi + Bus + Guidato.",
        "tip": "Beoseu tasseoyo."
      },
      {
        "type": "speak",
        "question": "Scrivi il segnale di resa: 'Mid Open'.",
        "expectedRomaji": [
          "mideu opeun",
          "mideuopeun"
        ],
        "expectedHangul": [
          "미드 오픈"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Mi-deu O-peun.",
        "tip": "Prestito dall'inglese."
      },
      {
        "type": "conversation",
        "context": "Vuoi incolpare il team.",
        "question": "Cosa dici?",
        "options": [
          "Uri tim deonjyeoyo",
          "Mideu opeun",
          "Beoseu tasseoyo"
        ],
        "optionsHangul": [
          "우리 팀 던져요",
          "미드 오픈",
          "버스 탔어요"
        ],
        "answer": 0,
        "conceptTag": "Blame",
        "feedback_incorrect": "우리 팀 (Uri tim) = Nostro team.",
        "tip": "Uri tim deonjyeoyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa l'esclamazione: 진짜 짜증___ (Snervante).",
        "options": [
          "나요",
          "가요",
          "해요",
          "봐요"
        ],
        "answer": 0,
        "conceptTag": "Verbi Emozione",
        "feedback_incorrect": "짜증나다.",
        "tip": "Jjajeungnayo.",
        "optionsHangul": [
          "나요",
          "가요",
          "해요",
          "봐요"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 19] 'Conserva la ultimate'.",
        "options": [
          "Gung akkiseyo",
          "Mulleonaseyo",
          "Dwie isseoyo"
        ],
        "optionsHangul": [
          "궁 아끼세요",
          "물러나세요",
          "뒤에 있어요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Gung = Ulti.",
        "tip": "Gung akkiseyo.",
        "optionsRomaji": [
          "Gung akkiseyo",
          "",
          "Dwie isseoyo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Pessimo game.",
        "question": "Componi: 'Nostro team (우리 팀) trolla, (던져요) mid open (미드 오픈)'.",
        "shuffled_blocks": [
          "오픈",
          "던져요,",
          "미드",
          "팀",
          "우리"
        ],
        "correct_order": [
          "우리",
          "팀",
          "던져요,",
          "미드",
          "오픈"
        ],
        "conceptTag": "Toxic Chat",
        "feedback_incorrect": "Il team lancia la partita, arrendiamoci.",
        "tip": "Uri tim deonjyeoyo, Mideu opeun."
      },
      {
        "type": "listen",
        "question": "Ascolta l'ammissione umile:",
        "audioHangul": "버스 탔어요",
        "options": [
          "Sono in bus",
          "Mi hanno carryato",
          "Trollano"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Slang",
        "feedback_incorrect": "Guidare l'autobus = farsi carryare.",
        "tip": "Beoseu tasseoyo."
      },
      {
        "type": "speak",
        "question": "Sfoga la rabbia: 'È davvero snervante!'",
        "expectedRomaji": [
          "jinjja jjajeungnayo",
          "jinjjajjajeungnayo"
        ],
        "expectedHangul": [
          "진짜 짜증나요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Jin-jja jja-jeung-na-yo.",
        "tip": "Jjajeungnayo!"
      }
    ]
  },
  {
    "day": 35,
    "title": "Gym Motivation! 💪🔥",
    "topic": "Incoraggiamento",
    "theory": {
      "intro": "Il tuo gym-bro è sfinito sotto la pressa. Tiriamo fuori lo spirito guerriero coreano (화이팅!) e diamogli motivazione.",
      "concept": "Per dire 'non' fare qualcosa si usa '~지 마세요' (-ji maseyo) dopo la radice. 포기하다 (arrendersi) -> 포기하지 마세요 (non arrenderti!).",
      "builderRule": "🔗 Chain link: 포기하지 마세요! (Non arrenderti!) + 거의 다 왔어요! (Siamo quasi arrivati/Manca poco!).",
      "examples": [
        {
          "hangul": "포기하지 마세요!",
          "romaji": "Pogihaji maseyo!",
          "eng": "Non arrenderti!",
          "context": "L'urlo motivazionale."
        },
        {
          "hangul": "거의 다 왔어요!",
          "romaji": "Geoui da wasseoyo!",
          "eng": "Manca poco! / Quasi fatto!",
          "context": "All'ultima rep."
        },
        {
          "hangul": "할 수 있어요!",
          "romaji": "Hal su isseoyo!",
          "eng": "Puoi farcela!",
          "context": "You can do it!"
        },
        {
          "hangul": "조금만 더!",
          "romaji": "Jogeumman deo!",
          "eng": "Ancora un po'!",
          "context": "Spingendo il peso."
        }
      ],
      "culture": "Arrendersi non è ben visto in Corea (열심히 하다 - fare con zelo). L'incoraggiamento (응원) è usato ovunque."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "L'amico vuole posare il bilanciere. Come lo fermi?",
        "options": [
          "Pogihaji maseyo!",
          "Hal su isseoyo!",
          "Geoui da wasseoyo!"
        ],
        "optionsHangul": [
          "포기하지 마세요!",
          "할 수 있어요!",
          "거의 다 왔어요!"
        ],
        "answer": 0,
        "conceptTag": "Stop",
        "feedback_incorrect": "포기하다 = arrendersi.",
        "tip": "Pogihaji maseyo!",
        "optionsRomaji": [
          "",
          "Hal su isseoyo!",
          "Geoui da wasseoyo!"
        ]
      },
      {
        "type": "listen",
        "question": "Il PT conta i secondi della plank e urla:",
        "audioHangul": "거의 다 왔어요!",
        "options": [
          "Sei stanca!",
          "Fermati!",
          "Manca poco!"
        ],
        "answer": 2,
        "conceptTag": "Tempo",
        "feedback_incorrect": "Letteralmente: 'Quasi tutti arrivati'.",
        "tip": "Manca poco.",
        "audioRomaji": "Geoui da wasseoyo!"
      },
      {
        "type": "sentence_builder",
        "context": "Mancano 2 rep. Dagli coraggio!",
        "question": "Componi: 'Fare (할) capacità (수) c'è! (있어요!)' -> Puoi farcela.",
        "shuffled_blocks": [
          "있어요!",
          "할",
          "수"
        ],
        "correct_order": [
          "할",
          "수",
          "있어요!"
        ],
        "conceptTag": "Potere",
        "feedback_incorrect": "Hal + Su + Isseoyo.",
        "tip": "Hal su isseoyo."
      },
      {
        "type": "speak",
        "question": "Urla: 'Non arrenderti!'",
        "expectedRomaji": [
          "pogihaji maseyo",
          "pogihajimaseyo"
        ],
        "expectedHangul": [
          "포기하지 마세요!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Po-gi-ha-ji ma-se-yo!",
        "tip": "Pogi = Rinuncia."
      },
      {
        "type": "conversation",
        "context": "L'ultimo sforzo.",
        "question": "Cosa gridi?",
        "options": [
          "Jogeumman deo!",
          "Mideu opeun",
          "Gwaenchanayo"
        ],
        "optionsHangul": [
          "조금만 더!",
          "미드 오픈",
          "괜찮아요"
        ],
        "answer": 0,
        "conceptTag": "Push",
        "feedback_incorrect": "조금만 = solo un po', 더 = di più.",
        "tip": "Jogeumman deo!",
        "optionsRomaji": [
          "Jogeumman deo!",
          "",
          "Gwaenchanayo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 포기하___ 마세요 (Non).",
        "options": [
          "지",
          "고",
          "도",
          "서"
        ],
        "answer": 0,
        "conceptTag": "Grammatica Non",
        "feedback_incorrect": "~지 마세요 (ji maseyo) = non fare.",
        "tip": "Ji.",
        "optionsHangul": [
          "지",
          "고",
          "도",
          "서"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 6] 'Dai il massimo' da Start-Up.",
        "options": [
          "Choeseoneul dahaseyo",
          "Kkumeul kkweoyo",
          "Hal su isseoyo"
        ],
        "optionsHangul": [
          "최선을 다하세요",
          "꿈을 꿔요",
          "할 수 있어요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Choeseon = il massimo.",
        "tip": "Choeseoneul dahaseyo.",
        "optionsRomaji": [
          "",
          "Kkumeul kkweoyo",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Super combo motivazionale.",
        "question": "Componi: 'Ancora un po'! (조금만 더!) Puoi farcela! (할 수 있어요!)'.",
        "shuffled_blocks": [
          "할 수 있어요!",
          "조금만",
          "더!"
        ],
        "correct_order": [
          "조금만",
          "더!",
          "할 수 있어요!"
        ],
        "conceptTag": "Energia",
        "feedback_incorrect": "Avverbio + Esortazione.",
        "tip": "Jogeumman deo! Hal su isseoyo!"
      },
      {
        "type": "listen",
        "question": "Ascolta l'incitamento positivo:",
        "audioHangul": "할 수 있어요!",
        "options": [
          "Fermati",
          "Puoi farcela!",
          "Riposati"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Base",
        "feedback_incorrect": "Hal su isseoyo.",
        "tip": "You can do it.",
        "audioRomaji": "Hal su isseoyo!"
      },
      {
        "type": "speak",
        "question": "Urla: 'Manca poco! / Siamo quasi arrivati!'",
        "expectedRomaji": [
          "geoui da wasseoyo",
          "geouidawasseoyo"
        ],
        "expectedHangul": [
          "거의 다 왔어요!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Geo-ui da wass-eo-yo!",
        "tip": "Geoui = quasi."
      },
      {
        "type": "dialogue",
        "context": "🏋️ Sei alla pressa con il tuo gym-bro. Lui sta per arrendersi all'ultima serie.",
        "question": "Scegli la risposta giusta per motivarlo:",
        "lines": [
          {
            "speaker": "Gym-bro",
            "hangul": "너무 힘들어요... 못 하겠어요.",
            "romaji": "Neomu himdeuleoyo... mot hagesseoyo.",
            "eng": "È troppo duro... non ce la faccio."
          },
          {
            "isBlank": true
          },
          {
            "speaker": "Gym-bro",
            "hangul": "고마워요! 할게요!",
            "romaji": "Gomawoyo! Halgeyo!",
            "eng": "Grazie! Lo farò!"
          }
        ],
        "options": [
          "괜찮아요, 쉬세요",
          "할 수 있어요! 조금만 더!",
          "안녕히 가세요"
        ],
        "optionsRomaji": [
          "Gwaenchanayo, swiseyo — 'Va bene, riposati'",
          "Hal su isseoyo! Jogeumman deo! — 'Puoi farcela! Ancora un po'!'",
          "Annyeonghi gaseyo — 'Arrivederci'"
        ],
        "answer": 1,
        "conceptTag": "Motivazione Gym",
        "feedback_incorrect": "Non mandarlo via! Incoraggialo!",
        "tip": "Hal su isseoyo + Jogeumman deo = la combo motivazionale perfetta!"
      }
    ]
  },
  {
    "day": 36,
    "title": "Fame Nera post-Fiera! 🍜",
    "topic": "Iperboli ed Esagerazioni",
    "theory": {
      "intro": "Hai passato 8 ore in fiera, saltando il pranzo. Ora potresti mangiarti un intero banchetto K-BBQ.",
      "concept": "I coreani amano l'iperbole! Aggiungendo '죽겠어요' (jukgesseoyo - 'da morire') ad aggettivi, crei frasi esagerate.",
      "builderRule": "🔗 Chain link: 배고파 죽겠어요 (Muoio di fame) + 빨리 먹고 싶어요 (Voglio mangiare in fretta).",
      "examples": [
        {
          "hangul": "배고파 죽겠어요",
          "romaji": "Baegopa jukgesseoyo",
          "eng": "Muoio di fame",
          "context": "Frase tipica post evento."
        },
        {
          "hangul": "뭐 먹을까요?",
          "romaji": "Mwo meogeulkkayo?",
          "eng": "Cosa mangiamo?",
          "context": "Per decidere il menù."
        },
        {
          "hangul": "빨리 먹고 싶어요",
          "romaji": "Ppalli meokgo sipeoyo",
          "eng": "Voglio mangiare in fretta",
          "context": "Zero pazienza."
        },
        {
          "hangul": "목말라 죽겠어요",
          "romaji": "Mongmalla jukgesseoyo",
          "eng": "Muoio di sete",
          "context": "Se non hai bevuto acqua."
        }
      ],
      "culture": "Dire 'Ah, jukgetda!' (Ah, muoio!) è lo slang più diffuso per esprimere stanchezza, fame o freddo."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Uscite dalla fiera e lo stomaco brontola. Cosa dici esagerando?",
        "options": [
          "Mwo meogeulkkayo?",
          "Baegopa jukgesseoyo",
          "Ppalli meokgo sipeoyo"
        ],
        "optionsHangul": [
          "뭐 먹을까요?",
          "배고파 죽겠어요",
          "빨리 먹고 싶어요"
        ],
        "answer": 1,
        "conceptTag": "Iperboli",
        "feedback_incorrect": "배고프다 = avere fame. 죽겠다 = morire.",
        "tip": "Baegopa jukgesseoyo!",
        "optionsRomaji": [
          "Mwo meogeulkkayo?",
          "Baegopa jukgesseoyo",
          "Ppalli meokgo sipeoyo"
        ]
      },
      {
        "type": "listen",
        "question": "Il tuo amico è impaziente davanti al ristorante. Cosa dice?",
        "audioHangul": "빨리 먹고 싶어요",
        "options": [
          "Voglio mangiare in fretta",
          "È delizioso",
          "Non voglio"
        ],
        "answer": 0,
        "conceptTag": "Desideri",
        "feedback_incorrect": "빨리 (ppalli) = in fretta. 먹고 싶어요 = voglio mangiare.",
        "tip": "Voglio = ~go sipeoyo.",
        "audioRomaji": "Ppalli meokgo sipeoyo"
      },
      {
        "type": "sentence_builder",
        "context": "Dovete decidere il ristorante.",
        "question": "Componi: 'Cosa (뭐) mangiamo? (먹을까요?)'.",
        "shuffled_blocks": [
          "먹을까요?",
          "뭐"
        ],
        "correct_order": [
          "뭐",
          "먹을까요?"
        ],
        "conceptTag": "Proposte Cibo",
        "feedback_incorrect": "Cosa + Mangiamo (proposta).",
        "tip": "Mwo meogeulkkayo?"
      },
      {
        "type": "speak",
        "question": "Lamentati drammaticamente: 'Muoio di fame!'",
        "expectedRomaji": [
          "baegopa jukgesseoyo",
          "baegopajukgesseoyo"
        ],
        "expectedHangul": [
          "배고파 죽겠어요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Bae-go-pa juk-get-seo-yo.",
        "tip": "Fai sentire il 'juk' (morte) teso!"
      },
      {
        "type": "conversation",
        "context": "Hai camminato 10km senza bere.",
        "question": "Cosa dici?",
        "options": [
          "Mongmalla jukgesseoyo",
          "Baegopa jukgesseoyo",
          "Pigonhaeyo"
        ],
        "optionsHangul": [
          "목말라 죽겠어요",
          "배고파 죽겠어요",
          "피곤해요"
        ],
        "answer": 0,
        "conceptTag": "Sete",
        "feedback_incorrect": "목말라 (Mongmalla) = aver sete.",
        "tip": "Mongmalla jukgesseoyo.",
        "optionsRomaji": [
          "Mongmalla jukgesseoyo",
          "Baegopa jukgesseoyo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa l'iperbole: 배고파 ___어요 (Muoio).",
        "options": [
          "죽겠",
          "살겠",
          "가겠",
          "오겠"
        ],
        "answer": 0,
        "conceptTag": "Slang Morire",
        "feedback_incorrect": "죽겠 (Jukget) = sto per morire.",
        "tip": "Jukgetseoyo.",
        "optionsHangul": [
          "죽겠",
          "살겠",
          "가겠",
          "오겠"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 15] Vuoi riso saltato per riempirti.",
        "options": [
          "Bokkeumbap hana juseyo",
          "Samgyeopsal juseyo",
          "Sangchu juseyo"
        ],
        "optionsHangul": [
          "볶음밥 하나 주세요",
          "삼겹살 주세요",
          "상추 주세요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Bokkeumbap = Riso saltato.",
        "tip": "Bokkeumbap.",
        "optionsRomaji": [
          "Bokkeumbap hana juseyo",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Combina urgenza e fame.",
        "question": "Componi: 'Veloce (빨리) mangiare (먹고) voglio (싶어요)'.",
        "shuffled_blocks": [
          "싶어요",
          "먹고",
          "빨리"
        ],
        "correct_order": [
          "빨리",
          "먹고",
          "싶어요"
        ],
        "conceptTag": "Urgenza Cibo",
        "feedback_incorrect": "Avverbio + Verbo + Volontà.",
        "tip": "Ppalli meokgo sipeoyo."
      },
      {
        "type": "listen",
        "question": "Ascolta la domanda dell'amico:",
        "audioHangul": "뭐 먹을까요?",
        "options": [
          "Cosa mangiamo?",
          "Quanto costa?",
          "Dove andiamo?"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Mwo = cosa. Meogeulkkayo = mangiamo?",
        "tip": "Mwo meogeulkkayo?",
        "audioRomaji": "Mwo meogeulkkayo?"
      },
      {
        "type": "speak",
        "question": "Dì esagerando: 'Muoio di sete!'",
        "expectedRomaji": [
          "mongmalla jukgesseoyo",
          "mongmallajukgesseoyo"
        ],
        "expectedHangul": [
          "목말라 죽겠어요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Mong-mal-la juk-get-seo-yo.",
        "tip": "Mongmalla."
      },
      {
        "type": "dialogue",
        "context": "🍜 Siete usciti dalla fiera affamati. Il tuo amico propone.",
        "question": "Rispondi dicendo che vuoi samgyeopsal:",
        "lines": [
          {
            "speaker": "Amico",
            "hangul": "뭐 먹을까요? 라면 어때요?",
            "romaji": "Mwo meogeulkkayo? Ramyeon eottaeyo?",
            "eng": "Cosa mangiamo? Ramen che ne dici?"
          },
          {
            "isBlank": true
          },
          {
            "speaker": "Amico",
            "hangul": "좋아요! 같이 가요!",
            "romaji": "Joayo! Gachi gayo!",
            "eng": "Ottimo! Andiamo insieme!"
          }
        ],
        "options": [
          "몰라요, 아무거나요",
          "삼겹살 먹고 싶어요!",
          "배고파 죽겠어요"
        ],
        "optionsRomaji": [
          "Mollayo, amugeonayo — 'Non so, qualsiasi cosa'",
          "Samgyeopsal meokgo sipeoyo! — 'Voglio mangiare il K-BBQ!'",
          "Baegopa jukgesseoyo — 'Muoio di fame' (non risponde alla domanda)"
        ],
        "answer": 1,
        "conceptTag": "Ordinare Cibo",
        "feedback_incorrect": "Proponi tu il piatto! Samgyeopsal!",
        "tip": "[Cibo] + meokgo sipeoyo = voglio mangiare [cibo]"
      }
    ]
  },
  {
    "day": 37,
    "title": "Bulguksa Sbloccato: UNESCO! 🛕",
    "topic": "Orari e Templi",
    "theory": {
      "intro": "Mappa Sbloccata! Sei davanti al tempio buddista di Bulguksa (Gyeongju), patrimonio UNESCO.",
      "concept": "Per chiedere gli orari, usa '몇 시' (Myeot si - A che ora). 열다 (aprire), 닫다 (chiudere).",
      "builderRule": "🔗 Chain link: 여기가 유네스코예요? (Questo è UNESCO?) + 몇 시에 닫아요? (A che ora chiude?).",
      "examples": [
        {
          "hangul": "몇 시에 닫아요?",
          "romaji": "Myeot sie dadayo?",
          "eng": "A che ora chiude?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "여기가 유네스코예요?",
          "romaji": "Yeogiga Yuneskoyeyo?",
          "eng": "Questo è patrimonio UNESCO?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "조용히 하세요",
          "romaji": "Joyonghi haseyo",
          "eng": "Fate silenzio, per favore",
          "context": "Regola nei templi."
        },
        {
          "hangul": "사진 금지예요",
          "romaji": "Sajin geumjiyeyo",
          "eng": "Le foto sono vietate",
          "context": "Nei luoghi sacri interni."
        }
      ],
      "culture": "Nei templi (사찰) si richiede silenzio assoluto, specialmente vicino alle sale di preghiera."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Il sole cala. Cosa chiedi in biglietteria?",
        "options": [
          "Joyonghi haseyo",
          "Yeogiga Yuneskoyeyo?",
          "Myeot sie dadayo?"
        ],
        "optionsHangul": [
          "조용히 하세요",
          "여기가 유네스코예요?",
          "몇 시에 닫아요?"
        ],
        "answer": 2,
        "conceptTag": "Orari",
        "feedback_incorrect": "닫다 (datda) = chiudere.",
        "tip": "Myeot sie dadayo?",
        "optionsRomaji": [
          "Joyonghi haseyo",
          "Yeogiga Yuneskoyeyo?",
          "Myeot sie dadayo?"
        ]
      },
      {
        "type": "listen",
        "question": "Cosa dice il monaco (o il cartello) all'ingresso?",
        "audioHangul": "조용히 하세요",
        "options": [
          "Entrate",
          "Fate silenzio",
          "Togliete le scarpe"
        ],
        "answer": 1,
        "conceptTag": "Etiquette",
        "feedback_incorrect": "조용히 (joyonghi) = silenziosamente.",
        "tip": "Joyonghi haseyo.",
        "audioRomaji": "Joyonghi haseyo"
      },
      {
        "type": "sentence_builder",
        "context": "Vedi il logo dell'organizzazione mondiale.",
        "question": "Componi: 'Qui (여기가) UNESCO è? (유네스코예요?)'.",
        "shuffled_blocks": [
          "유네스코예요?",
          "여기가"
        ],
        "correct_order": [
          "여기가",
          "유네스코예요?"
        ],
        "conceptTag": "Cultura",
        "feedback_incorrect": "Soggetto + Verbo.",
        "tip": "Yuneskoyeyo?"
      },
      {
        "type": "speak",
        "question": "Chiedi l'orario di chiusura: 'A che ora chiude?'",
        "expectedRomaji": [
          "myeot sie dadayo",
          "myeotsiedadayo"
        ],
        "expectedHangul": [
          "몇 시에 닫아요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Myeot si-e da-da-yo?",
        "tip": "La 't' di myeot si lega."
      },
      {
        "type": "conversation",
        "context": "Alzi il telefono, ma la guida ti ferma.",
        "question": "Cosa ti dice?",
        "options": [
          "Sajin geumjiyeyo",
          "Joyonghi haseyo",
          "Myeot sie dadayo"
        ],
        "optionsHangul": [
          "사진 금지예요",
          "조용히 하세요",
          "몇 시에 닫아요"
        ],
        "answer": 0,
        "conceptTag": "Regole",
        "feedback_incorrect": "금지 (Geumji) = Vietato.",
        "tip": "Sajin geumjiyeyo.",
        "optionsRomaji": [
          "",
          "Joyonghi haseyo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 몇 ___에 닫아요? (ORA).",
        "options": [
          "시",
          "분",
          "초",
          "일"
        ],
        "answer": 0,
        "conceptTag": "Tempo",
        "feedback_incorrect": "시 (Si) = Ora.",
        "tip": "Myeot si.",
        "optionsHangul": [
          "시",
          "분",
          "초",
          "일"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 25] 'Avete una mappa del tempio?'",
        "options": [
          "Jido isseoyo?",
          "Sajin isseoyo?",
          "Geumji isseoyo?"
        ],
        "optionsHangul": [
          "지도 있어요?",
          "사진 있어요?",
          "금지 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Jido = mappa.",
        "tip": "Jido isseoyo?",
        "optionsRomaji": [
          "Jido isseoyo?",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Metti in guardia un amico rumoroso.",
        "question": "Componi: 'Silenzio (조용히) fate per favore (하세요)'.",
        "shuffled_blocks": [
          "하세요",
          "조용히"
        ],
        "correct_order": [
          "조용히",
          "하세요"
        ],
        "conceptTag": "Avvertimenti",
        "feedback_incorrect": "Avverbio + Verbo.",
        "tip": "Joyonghi haseyo."
      },
      {
        "type": "listen",
        "question": "Ascolta la domanda del turista:",
        "audioHangul": "여기가 유네스코예요?",
        "options": [
          "È chiuso?",
          "È patrimonio UNESCO?",
          "Dov'è il bagno?"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Yunesko = UNESCO.",
        "tip": "Yeogiga yuneskoyeyo?",
        "audioRomaji": "Yeogiga Yuneskoyeyo?"
      },
      {
        "type": "speak",
        "question": "Dì il divieto: 'Le foto sono vietate'.",
        "expectedRomaji": [
          "sajin geumjiyeyo",
          "sajingeumjiyeyo"
        ],
        "expectedHangul": [
          "사진 금지예요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Sa-jin geum-ji-ye-yo.",
        "tip": "Geumji = divieto."
      },
      {
        "type": "text_fill",
        "context": "📱 Stai scrivendo a un amico descrivendo il tempio di Bulguksa.",
        "question": "Completa il messaggio con le parole giuste:",
        "text_with_blanks": "안녕! 여기 ___ 왔어요. 정말 예뻐요! ___ 하세요, 이곳은 사진 금지예요. 몇 시에 ___?",
        "text_romaji": "Annyeong! Yeogi ___ wasseoyo. Jeongmal yeppeoyo! ___ haseyo, igoseun sajin geumjiyeyo. Myeot sie ___?",
        "blanks": [
          {
            "options": [
              "불국사에",
              "서울에",
              "집에"
            ],
            "romaji": [
              "Bulguksa-e — 'a Bulguksa'",
              "Seoul-e — 'a Seoul'",
              "Jip-e — 'a casa'"
            ],
            "answer": 0
          },
          {
            "options": [
              "빨리",
              "조용히",
              "천천히"
            ],
            "romaji": [
              "Ppalli — 'velocemente'",
              "Joyonghi — 'silenziosamente'",
              "Cheoncheonhi — 'lentamente'"
            ],
            "answer": 1
          },
          {
            "options": [
              "먹어요",
              "닫아요",
              "열어요"
            ],
            "romaji": [
              "Meogeoyo — 'mangia'",
              "Dadayo — 'chiude'",
              "Yeoreoyo — 'apre'"
            ],
            "answer": 1
          }
        ],
        "conceptTag": "Scrittura Turismo",
        "feedback_incorrect": "Controlla il contesto di ogni blank: luogo → orario → azione corretta.",
        "tip": "Bulguksa-e (a Bulguksa) + Joyonghi (silenzio) + Dadayo (chiude)"
      }
    ]
  },
  {
    "day": 38,
    "title": "Crafting Cosplay! 🌙",
    "topic": "Sforzo e Lavoro",
    "theory": {
      "intro": "L'armatura è mezza dipinta. Ti prepari a un 'all-nighter' epico per il comic-con di domani.",
      "concept": "Per dire di aver passato la notte in bianco si usa '밤새다' (bamsaeda). Unito a 만들다 (fare) mostra lo sforzo.",
      "builderRule": "🔗 Chain link: 코스프레 제가 만들었어요! (L'ho fatto io!) + 밤새서 만들었어요 (Restando sveglia tutta la notte).",
      "examples": [
        {
          "hangul": "밤새서 만들었어요",
          "romaji": "Bamsaeseo mandeureosseoyo",
          "eng": "L'ho fatto restando sveglia tutta la notte",
          "context": "Per le occhiaie in fiera!"
        },
        {
          "hangul": "수고하셨습니다!",
          "romaji": "Sugohasyeotseumnida!",
          "eng": "Ottimo lavoro!",
          "context": "Grazie per lo sforzo."
        },
        {
          "hangul": "피곤하지만 행복해요",
          "romaji": "Pigonhajiman haengbokhaeyo",
          "eng": "Sono stanca ma felice",
          "context": "Grammatica del Giorno 30."
        },
        {
          "hangul": "드디어 끝났어요",
          "romaji": "Deudieo kkeunnasseoyo",
          "eng": "Finalmente è finito",
          "context": "Alle 6 del mattino."
        }
      ],
      "culture": "'수고하셨습니다' (Sugohasyeotseumnida) è una colonna portante in Corea. Si dice a chi ha lavorato sodo o completato un'impresa."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Mostri il prop e ammetti le tue fatiche notturne. Cosa dici?",
        "options": [
          "Sugohasyeotseumnida",
          "Bamsaeseo mandeureosseoyo",
          "Pigonhajiman haengbokhaeyo"
        ],
        "optionsHangul": [
          "수고하셨습니다",
          "밤새서 만들었어요",
          "피곤하지만 행복해요"
        ],
        "answer": 1,
        "conceptTag": "Lavoro Notturno",
        "feedback_incorrect": "밤새다 = notte in bianco.",
        "tip": "Bamsae-seo mandeureosseoyo.",
        "optionsRomaji": [
          "",
          "Bamsaeseo mandeureosseoyo",
          "Pigonhajiman haengbokhaeyo"
        ]
      },
      {
        "type": "listen",
        "question": "Il presentatore della gara Cosplay loda il tuo lavoro:",
        "audioHangul": "수고하셨습니다!",
        "options": [
          "Sei squalificata",
          "Ottimo lavoro / Grazie per lo sforzo",
          "Che brutto"
        ],
        "answer": 1,
        "conceptTag": "Rispetto Formale",
        "feedback_incorrect": "Frase formale per lodare il duro lavoro.",
        "tip": "Su-go-ha-syeot-seum-ni-da.",
        "audioRomaji": "Sugohasyeotseumnida!"
      },
      {
        "type": "sentence_builder",
        "context": "Sei distrutta ma hai vinto un premio.",
        "question": "Componi: 'Stanca MA (피곤하지만) felice (행복해요)'.",
        "shuffled_blocks": [
          "행복해요",
          "피곤하지만"
        ],
        "correct_order": [
          "피곤하지만",
          "행복해요"
        ],
        "conceptTag": "Emozioni Complesse",
        "feedback_incorrect": "Causa avversa + Emozione.",
        "tip": "Pigon-hajiman."
      },
      {
        "type": "speak",
        "question": "Dichiara con orgoglio (e sonno): 'L'ho fatto restando sveglia tutta la notte!'",
        "expectedRomaji": [
          "bamsaeseo mandeureosseoyo",
          "bamsaeseomandeureosseoyo"
        ],
        "expectedHangul": [
          "밤새서 만들었어요"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Bam-sae-seo man-deul-eoss-eo-yo.",
        "tip": "Mandeureosseoyo = l'ho fatto."
      },
      {
        "type": "conversation",
        "context": "Hai incollato l'ultimo pezzo alle 6:00 AM.",
        "question": "Cosa esclami?",
        "options": [
          "Deudieo kkeunnasseoyo",
          "Bamsaeseo mandeureosseoyo",
          "Sugohasyeotseumnida"
        ],
        "optionsHangul": [
          "드디어 끝났어요",
          "밤새서 만들었어요",
          "수고하셨습니다"
        ],
        "answer": 0,
        "conceptTag": "Completamento",
        "feedback_incorrect": "드디어 (Deudieo) = Finalmente. 끝났어요 = è finito.",
        "tip": "Deudieo kkeunnasseoyo.",
        "optionsRomaji": [
          "Deudieo kkeunnasseoyo",
          "Bamsaeseo mandeureosseoyo",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 수고하셨___! (Ottimo lavoro formale).",
        "options": [
          "습니다",
          "어요",
          "아",
          "다"
        ],
        "answer": 0,
        "conceptTag": "Formalità Max",
        "feedback_incorrect": "La formula fissa finisce in 습니다.",
        "tip": "Seumnida.",
        "optionsHangul": [
          "습니다",
          "어요",
          "아",
          "다"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 4] 'Il cosplay l'ho fatto io' (con orgoglio).",
        "options": [
          "Koseupeure jega mandeureosseoyo",
          "Koseupeure meosisseoyo",
          "Koseupeure eolmayeyo"
        ],
        "optionsHangul": [
          "코스프레 제가 만들었어요",
          "코스프레 멋있어요",
          "코스프레 얼마예요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "제가 = io (soggetto enfatico).",
        "tip": "Jega mandeureosseoyo.",
        "optionsRomaji": [
          "Koseupeure jega mandeureosseoyo",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Sospiri di sollievo.",
        "question": "Componi: 'Finalmente (드디어) è finito (끝났어요)'.",
        "shuffled_blocks": [
          "끝났어요",
          "드디어"
        ],
        "correct_order": [
          "드디어",
          "끝났어요"
        ],
        "conceptTag": "Fine Lavoro",
        "feedback_incorrect": "Avverbio + Verbo.",
        "tip": "Deudieo kkeunnasseoyo."
      },
      {
        "type": "listen",
        "question": "Ascolta l'emozione mista:",
        "audioHangul": "피곤하지만 행복해요",
        "options": [
          "Sono triste e stanca",
          "Sono stanca ma felice",
          "Ho sonno"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Haengbokhaeyo = felice.",
        "tip": "Haengbokhaeyo.",
        "audioRomaji": "Pigonhajiman haengbokhaeyo"
      },
      {
        "type": "speak",
        "question": "Ringrazia per l'impegno: 'Ottimo lavoro! / Grazie per lo sforzo!'",
        "expectedRomaji": [
          "sugohasyeotseumnida",
          "sugohasyeotseumnida"
        ],
        "expectedHangul": [
          "수고하셨습니다!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Su-go-ha-syeot-seum-ni-da.",
        "tip": "Usala tantissimo in Corea."
      },
      {
        "type": "dialogue",
        "context": "🏆 La giuria della gara cosplay ti fa domande dopo la tua vittoria.",
        "question": "Come rispondi alla domanda della giuria?",
        "lines": [
          {
            "speaker": "Giuria",
            "hangul": "이 코스프레 직접 만드셨어요?",
            "romaji": "I koseupeure jikjeop mandeusyeosseoyo?",
            "eng": "Ha fatto questo cosplay lei stessa?"
          },
          {
            "isBlank": true
          },
          {
            "speaker": "Giuria",
            "hangul": "정말요?! 수고하셨습니다!",
            "romaji": "Jeongmayo?! Sugohasyeotseumnida!",
            "eng": "Davvero?! Ha fatto un ottimo lavoro!"
          }
        ],
        "options": [
          "아니요, 샀어요",
          "네, 밤새서 만들었어요!",
          "코스프레 얼마예요?"
        ],
        "optionsRomaji": [
          "Aniyo, sasseoyo — 'No, l'ho comprato'",
          "Ne, bamsaeseo mandeureosseoyo! — 'Sì, l'ho fatto restando sveglia tutta la notte!'",
          "Koseupeure eolmayeyo? — 'Quanto costa il cosplay?'"
        ],
        "answer": 1,
        "conceptTag": "Cosplay Orgoglio",
        "feedback_incorrect": "Hai fatto tutto tu — dillo con orgoglio!",
        "tip": "Bamsaeseo = restando sveglia tutta la notte. Mandeureosseoyo = l'ho fatto."
      }
    ]
  },
  {
    "day": 39,
    "title": "Fangirling: Nam Joo-hyuk! 😍",
    "topic": "Estetica e Idol",
    "theory": {
      "intro": "Guardando 2521, a un certo punto dovrai commentare la bellezza del protagonista! Oggi sfoderiamo il vocabolario da fangirl.",
      "concept": "Per 'bello/figo' si usa '멋있어요' (meosisseoyo). Bello di viso per un uomo è '잘생겼어요' (jalsaenggyeosseoyo). '진짜' (jinjja) = davvero.",
      "builderRule": "🔗 Chain link: 이 드라마 대박! (Drama pazzesco!) + 남주혁 진짜 멋있어 (Nam Joo-hyuk è bellissimo!).",
      "examples": [
        {
          "hangul": "남주혁 진짜 멋있어",
          "romaji": "Nam Ju-hyeok jinjja meosisseo",
          "eng": "Nam Joo-hyuk è davvero figo",
          "context": "Informale tra amiche."
        },
        {
          "hangul": "너무 잘생겼어요",
          "romaji": "Neomu jalsaenggyeosseoyo",
          "eng": "È troppo bello (viso)",
          "context": "Complimento specifico per l'aspetto."
        },
        {
          "hangul": "제 이상형이에요",
          "romaji": "Je isanghyeong-ieyo",
          "eng": "È il mio tipo ideale",
          "context": "Per spiegare i tuoi gusti."
        },
        {
          "hangul": "심쿵",
          "romaji": "Simkung",
          "eng": "Heart attack d'amore",
          "context": "Slang giovanile per un colpo al cuore."
        }
      ],
      "culture": "In Corea, il termine '이상형' (tipo ideale) si usa tantissimo per descrivere il partner dei sogni, citando attori famosi."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Guardate la scena clou. Come esclami al gruppo che l'attore è fantastico?",
        "options": [
          "Je isanghyeong-ieyo",
          "Nam Ju-hyeok jinjja meosisseo",
          "Neomu jalsaenggyeosseoyo"
        ],
        "optionsHangul": [
          "제 이상형이에요",
          "남주혁 진짜 멋있어",
          "너무 잘생겼어요"
        ],
        "answer": 1,
        "conceptTag": "Fangirling",
        "feedback_incorrect": "Soggetto + Davvero + Figo.",
        "tip": "Meosisseo (informale).",
        "optionsRomaji": [
          "Je isanghyeong-ieyo",
          "Nam Ju-hyeok jinjja meosisseo",
          "Neomu jalsaenggyeosseoyo"
        ]
      },
      {
        "type": "listen",
        "question": "La tua amica vede un primo piano dell'attore e sospira:",
        "audioHangul": "너무 잘생겼어요",
        "options": [
          "È troppo bravo",
          "È troppo simpatico",
          "È troppo bello"
        ],
        "answer": 2,
        "conceptTag": "Aspetto",
        "feedback_incorrect": "잘생기다 (jalsaenggida) si usa per il viso bello di un uomo.",
        "tip": "Jal-saeng-gyeoss-eo-yo.",
        "audioRomaji": "Neomu jalsaenggyeosseoyo"
      },
      {
        "type": "sentence_builder",
        "context": "Ti chiedono che tipo di ragazzo ti piace.",
        "question": "Componi: 'Mio (제) tipo ideale è (이상형이에요)'.",
        "shuffled_blocks": [
          "이상형이에요",
          "제"
        ],
        "correct_order": [
          "제",
          "이상형이에요"
        ],
        "conceptTag": "Gusti",
        "feedback_incorrect": "Mio + Tipo Ideale è.",
        "tip": "Isanghyeong."
      },
      {
        "type": "speak",
        "question": "Dì con emozione: 'Nam Joo-hyuk è davvero bellissimo!'",
        "expectedRomaji": [
          "nam ju-hyeok jinjja meosisseo",
          "namju-hyeokjinjjameosisseo"
        ],
        "expectedHangul": [
          "남주혁 진짜 멋있어"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Jinjja meo-si-sseo!",
        "tip": "Meosisseo vale per 'bello' e 'cool'."
      },
      {
        "type": "conversation",
        "context": "Ti fa l'occhiolino dallo schermo.",
        "question": "Quale slang usi per il batticuore?",
        "options": [
          "Simkung",
          "Sugo",
          "Jjan"
        ],
        "optionsHangul": [
          "심쿵",
          "수고",
          "짠"
        ],
        "answer": 0,
        "conceptTag": "Slang Cuore",
        "feedback_incorrect": "심 (Sim) da cuore, 쿵 (Kung) battito forte.",
        "tip": "Simkung.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 너무 잘생___어요 (Troppo bello).",
        "options": [
          "겼",
          "갔",
          "먹",
          "잤"
        ],
        "answer": 0,
        "conceptTag": "Verbi Estetici",
        "feedback_incorrect": "잘생겼 (Jalsaenggyeot).",
        "tip": "Gyeot.",
        "optionsHangul": [
          "겼",
          "갔",
          "먹",
          "잤"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 32] 'Sento le farfalle nello stomaco'.",
        "options": [
          "Seolleoyo",
          "Joahaeyo",
          "Saranghaeyo"
        ],
        "optionsHangul": [
          "설레요",
          "좋아해요",
          "사랑해요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Seolleda.",
        "tip": "Seolleoyo.",
        "optionsRomaji": [
          "Seolleoyo",
          "Joahaeyo",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Il massimo del complimento.",
        "question": "Componi: 'Troppo (너무) bello è (잘생겼어요)'.",
        "shuffled_blocks": [
          "잘생겼어요",
          "너무"
        ],
        "correct_order": [
          "너무",
          "잘생겼어요"
        ],
        "conceptTag": "Iperboli Visive",
        "feedback_incorrect": "Avverbio + Aggettivo.",
        "tip": "Neomu jalsaenggyeosseoyo."
      },
      {
        "type": "listen",
        "question": "Ascolta la dichiarazione del tipo ideale:",
        "audioHangul": "제 이상형이에요",
        "options": [
          "Mio tipo ideale",
          "Mio amico",
          "Mio fidanzato"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Isanghyeong = Ideal type.",
        "tip": "Isanghyeong-ieyo.",
        "audioRomaji": "Je isanghyeong-ieyo"
      },
      {
        "type": "speak",
        "question": "Dì lo slang: 'Heart attack (Simkung)!'",
        "expectedRomaji": [
          "simkung",
          "shimkung"
        ],
        "expectedHangul": [
          "심쿵!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Sim-kung!",
        "tip": "Simkung!"
      },
      {
        "type": "text_fill",
        "context": "💬 Mandi un messaggio all'amica su Nam Joo-hyuk in 2521.",
        "question": "Completa il messaggio come una vera fangirl:",
        "text_with_blanks": "야!! 방금 2521 봤어? 남주혁 진짜 ___! 너무 ___겼어요. 완전 내 ___이에요 ㅠㅠ",
        "text_romaji": "Ya!! Banggeum 2521 bwasseo? Nam Ju-hyeok jinjja ___! Neomu ___gyeosseoyo. Wanjeon nae ___ieyo ㅠㅠ",
        "blanks": [
          {
            "options": [
              "멋있어",
              "괜찮아",
              "몰라"
            ],
            "romaji": [
              "Meosisseo — 'è figissimo' (informale)",
              "Gwaenchana — 'è ok'",
              "Molla — 'non lo so'"
            ],
            "answer": 0
          },
          {
            "options": [
              "잘생",
              "못생",
              "귀엽"
            ],
            "romaji": [
              "Jalsaeng + gyeosseoyo — 'è così bello di viso'",
              "Motsaeng + gyeosseoyo — 'è brutto'",
              "Gwiyeo + peoyo — 'è carino'"
            ],
            "answer": 0
          },
          {
            "options": [
              "이상형",
              "남자친구",
              "오빠"
            ],
            "romaji": [
              "Isanghyeong — 'tipo ideale'",
              "Namjachingu — 'fidanzato'",
              "Oppa — 'fratello maggiore/termine affettuoso'"
            ],
            "answer": 0
          }
        ],
        "conceptTag": "Fangirl KDrama",
        "feedback_incorrect": "Meosisseo + Jalsaeng + Isanghyeong = combo da vera fan!",
        "tip": "멋있어 (informale di 멋있어요), 잘생겼어요, 이상형이에요"
      }
    ]
  },
  {
    "day": 40,
    "title": "Farmacia Sportiva & Proteine 💊💪",
    "topic": "Integratori e Acquisti",
    "theory": {
      "intro": "Entri in un negozio di sport coreano per fare scorta del sacro graal: gli integratori proteici.",
      "concept": "Integratore = '보충제' (Bochungje). Per chiedere un consiglio/raccomandazione usa '추천하다' (Chucheonhada) + 주세요 (per favore).",
      "builderRule": "🔗 Chain link: 단백질 보충제 (Integratore proteico) + 추천해 주세요 (Mi consigli, per favore?).",
      "examples": [
        {
          "hangul": "단백질 보충제 추천해 주세요",
          "romaji": "Danbaekjil bochungje chucheonhae juseyo",
          "eng": "Mi consigli un integratore proteico?",
          "context": "Al commesso esperto."
        },
        {
          "hangul": "초코 맛 있어요?",
          "romaji": "Choko mat isseoyo?",
          "eng": "C'è il gusto cioccolato?",
          "context": "L'unico gusto tollerabile. 🍫"
        },
        {
          "hangul": "비타민도 주세요",
          "romaji": "Bitamin-do juseyo",
          "eng": "Mi dia anche le vitamine",
          "context": "Per il recupero."
        },
        {
          "hangul": "쉐이커 있어요?",
          "romaji": "Sweikeo isseoyo?",
          "eng": "Avete uno shaker?",
          "context": "Per mixare le polveri."
        }
      ],
      "culture": "L'estetica del corpo scolpito (Body Profile - 바디프로필) è un trend enorme. I negozi vendono proteine di altissima qualità."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Come chiedi al commesso di consigliarti un integratore proteico?",
        "options": [
          "Bitamin-do juseyo",
          "Danbaekjil bochungje chucheonhae juseyo",
          "Choko mat isseoyo?"
        ],
        "optionsHangul": [
          "비타민도 주세요",
          "단백질 보충제 추천해 주세요",
          "초코 맛 있어요?"
        ],
        "answer": 1,
        "conceptTag": "Consigli",
        "feedback_incorrect": "Danbaekjil (Proteine) + Bochungje (Integratore) + Chucheonhae juseyo (Consiglia).",
        "tip": "Chucheonhae juseyo è perfetto quando non sai cosa scegliere.",
        "optionsRomaji": [
          "Bitamin-do juseyo",
          "Danbaekjil bochungje chucheonhae juseyo",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Sei tradizionalista sui gusti.",
        "question": "Componi: 'Cioccolato (초코) gusto (맛) c'è? (있어요?)'.",
        "shuffled_blocks": [
          "맛",
          "초코",
          "있어요?"
        ],
        "correct_order": [
          "초코",
          "맛",
          "있어요?"
        ],
        "conceptTag": "Gusti",
        "feedback_incorrect": "Gusto = 맛 (mat). 초코 맛 = gusto cioccolato.",
        "tip": "Choko mat isseoyo?"
      },
      {
        "type": "listen",
        "question": "Aggiungi qualcosa al carrello per la stanchezza:",
        "audioHangul": "비타민도 주세요",
        "options": [
          "Vitamine anche per favore",
          "Cerotti per favore",
          "Niente"
        ],
        "answer": 0,
        "conceptTag": "Acquisti Extra",
        "feedback_incorrect": "비타민 (Bitamin) = Vitamine. '도' (-do) = 'anche'.",
        "tip": "Bitamin-do = anche le vitamine.",
        "audioRomaji": "Bitamin-do juseyo"
      },
      {
        "type": "speak",
        "question": "Chiedi il tuo gusto preferito: 'C'è il gusto cioccolato?'",
        "expectedRomaji": [
          "choko mat isseoyo",
          "chokomatisseoyo"
        ],
        "expectedHangul": [
          "초코 맛 있어요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Cho-ko mat is-seo-yo?",
        "tip": "La 't' si lega alla 'i' = 'ma-si-sseo-yo'."
      },
      {
        "type": "conversation",
        "context": "Hai le proteine ma non hai con cosa mischiarle.",
        "question": "Cosa chiedi?",
        "options": [
          "Sweikeo isseoyo?",
          "Bitamin isseoyo?",
          "Gansik isseoyo?"
        ],
        "optionsHangul": [
          "쉐이커 있어요?",
          "비타민 있어요?",
          "간식 있어요?"
        ],
        "answer": 0,
        "conceptTag": "Accessori",
        "feedback_incorrect": "쉐이커 (Sweikeo) = Shaker.",
        "tip": "Prestito dall'inglese Shaker.",
        "optionsRomaji": [
          "Sweikeo isseoyo?",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 비타민___ 주세요 (ANCHE le vitamine).",
        "options": [
          "도",
          "가",
          "는",
          "은"
        ],
        "answer": 0,
        "conceptTag": "Particelle Inclusive",
        "feedback_incorrect": "도 (do) = anche.",
        "tip": "Bitamin-do.",
        "optionsHangul": [
          "도",
          "가",
          "는",
          "은"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 7] 'Che allenamento fai oggi?'",
        "options": [
          "Oneul museun undong haeyo?",
          "Danbaekjil isseoyo?",
          "Dari undong haeyo"
        ],
        "optionsHangul": [
          "오늘 무슨 운동 해요?",
          "단백질 있어요?",
          "다리 운동 해요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Museun = quale.",
        "tip": "Oneul museun undong haeyo?",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Chiedi raccomandazioni.",
        "question": "Componi: 'Proteine (단백질) integratore (보충제) consiglia per favore (추천해 주세요)'.",
        "shuffled_blocks": [
          "보충제",
          "단백질",
          "추천해 주세요"
        ],
        "correct_order": [
          "단백질",
          "보충제",
          "추천해 주세요"
        ],
        "conceptTag": "Consigli Pro",
        "feedback_incorrect": "Nome Composto + Verbo.",
        "tip": "Danbaekjil bochungje chucheonhae juseyo."
      },
      {
        "type": "listen",
        "question": "Ascolta cosa ti offre il commesso:",
        "audioHangul": "초코 맛 있어요",
        "options": [
          "Abbiamo cioccolato",
          "Abbiamo fragola",
          "Finito"
        ],
        "answer": 0,
        "conceptTag": "Ascolto Gusti",
        "feedback_incorrect": "Choko mat = Cioccolato.",
        "tip": "Choko mat isseoyo."
      },
      {
        "type": "speak",
        "question": "Chiedi un consiglio: 'Mi consigli un integratore proteico?'",
        "expectedRomaji": [
          "danbaekjil bochungje chucheonhae juseyo",
          "danbaekjilbochungjechucheonhaejuseyo"
        ],
        "expectedHangul": [
          "단백질 보충제 추천해 주세요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Dan-baek-jil bo-chung-je chu-cheon-hae ju-se-yo.",
        "tip": "Frase lunga, vai piano."
      },
      {
        "type": "dialogue",
        "context": "💊 Sei in un negozio di integratori. Il commesso si avvicina.",
        "question": "Chiedi una raccomandazione di proteina:",
        "lines": [
          {
            "speaker": "Commesso",
            "hangul": "어서 오세요! 찾으시는 거 있으세요?",
            "romaji": "Eoseo oseyo! Chajeuisineun geo isseuseyo?",
            "eng": "Benvenuta! Cerca qualcosa in particolare?"
          },
          {
            "isBlank": true
          },
          {
            "speaker": "Commesso",
            "hangul": "초코 맛 추천드려요! 정말 맛있어요.",
            "romaji": "Choko mat chucheonduryeoyo! Jeongmal masisseoyo.",
            "eng": "Ti consiglio il gusto cioccolato! È davvero buono."
          }
        ],
        "options": [
          "괜찮아요, 그냥 볼게요",
          "단백질 보충제 추천해 주세요!",
          "얼마예요?"
        ],
        "optionsRomaji": [
          "Gwaenchanayo, geunyang bolgeyo — 'Sto solo guardando'",
          "Danbaekjil bochungje chucheonhae juseyo! — 'Mi consigli un integratore proteico!'",
          "Eolmayeyo? — 'Quanto costa?'"
        ],
        "answer": 1,
        "conceptTag": "Shopping Gym",
        "feedback_incorrect": "Chiedi un consiglio! Usa chucheonhae juseyo.",
        "tip": "Chucheonhae juseyo = per favore consigliami"
      }
    ]
  },
  {
    "day": 41,
    "title": "Log off: Arrivederci da Gamer! 👋",
    "topic": "Saluti Online",
    "theory": {
      "intro": "Hai completato la sessione su LoL. Il saluto di Giorno 1 va bene, ma per amici online c'è di meglio!",
      "concept": "'나중' (Najung) = 'dopo / più tardi'. '나중에 봐요' (Najunge bwayo) = 'Ci vediamo dopo / Alla prossima'.",
      "builderRule": "🔗 Chain link: 수고하셨습니다 (Ottimo lavoro) + 나중에 봐요! (Ci vediamo dopo!). Log off da Discord.",
      "examples": [
        {
          "hangul": "나중에 봐요!",
          "romaji": "Najunge bwayo!",
          "eng": "Ci vediamo dopo! / Alla prossima!",
          "context": "Disconnettendoti."
        },
        {
          "hangul": "수고!",
          "romaji": "Sugo!",
          "eng": "Buon lavoro! / Ciao! (Informale)",
          "context": "Accorciata di Sugohasyeotseumnida."
        },
        {
          "hangul": "내일 접속할게요",
          "romaji": "Naeil jeopsokalgeyo",
          "eng": "Domani farò il log-in",
          "context": "Avviso ai compagni."
        },
        {
          "hangul": "잘 자요",
          "romaji": "Jal jayo",
          "eng": "Buonanotte",
          "context": "Se stacchi tardi."
        }
      ],
      "culture": "Prima di disconnettersi, si scrive '수고' (Sugo) in chat per rispetto della partita fatta insieme."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Stai per staccare. Come dici 'Ci vediamo dopo'?",
        "options": [
          "Naeil jeopsokalgeyo",
          "Sugo!",
          "Najunge bwayo!"
        ],
        "optionsHangul": [
          "내일 접속할게요",
          "수고!",
          "나중에 봐요!"
        ],
        "answer": 2,
        "conceptTag": "Saluti",
        "feedback_incorrect": "Najunge (Più tardi) + bwayo (ci vediamo).",
        "tip": "Najunge bwayo è informale ma educato.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Rassicura il tuo ADC che tornerai domani.",
        "question": "Componi: 'Domani (내일) farò l'accesso/log-in (접속할게요)'.",
        "shuffled_blocks": [
          "내일",
          "접속할게요"
        ],
        "correct_order": [
          "내일",
          "접속할게요"
        ],
        "conceptTag": "Status",
        "feedback_incorrect": "Domani + Log-in.",
        "tip": "접속 (jeopsok) = connessione."
      },
      {
        "type": "listen",
        "question": "Tutti in chat dicono questa parola rapida prima di uscire:",
        "audioHangul": "수고!",
        "options": [
          "Perdenti",
          "Sugo / Ottimo lavoro",
          "Addio"
        ],
        "answer": 1,
        "conceptTag": "Slang Gamer",
        "feedback_incorrect": "Abbreviazione di 'Grazie per il duro lavoro'.",
        "tip": "Su-go!"
      },
      {
        "type": "speak",
        "question": "Saluta gentilmente: 'Ci vediamo dopo!'",
        "expectedRomaji": [
          "najunge bwayo",
          "najungebwayo"
        ],
        "expectedHangul": [
          "나중에 봐요!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Na-jung-e bwa-yo!",
        "tip": "Bwayo = vedere."
      },
      {
        "type": "conversation",
        "context": "Sono le 3 di notte e andate a dormire.",
        "question": "Cosa dici?",
        "options": [
          "Jal jayo",
          "Sugo",
          "Najunge bwayo"
        ],
        "optionsHangul": [
          "잘 자요",
          "수고",
          "나중에 봐요"
        ],
        "answer": 0,
        "conceptTag": "Notte",
        "feedback_incorrect": "잘 (Jal) = bene, 자다 (Jada) = dormire.",
        "tip": "Jal jayo = dormi bene.",
        "optionsRomaji": [
          "Jal jayo",
          "",
          "Najunge bwayo"
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___중에 봐요! (Più tardi).",
        "options": [
          "나",
          "가",
          "다",
          "너"
        ],
        "answer": 0,
        "conceptTag": "Avverbi Tempo",
        "feedback_incorrect": "나중 (Najung) = Più tardi.",
        "tip": "Na.",
        "optionsHangul": [
          "나",
          "가",
          "다",
          "너"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 34] 'Mi sono fatta carryare (Autobus)'.",
        "options": [
          "Beoseu tasseoyo",
          "Mideu opeun",
          "Deonjyeoyo"
        ],
        "optionsHangul": [
          "버스 탔어요",
          "미드 오픈",
          "던져요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Guidare il bus = Carryare.",
        "tip": "Beoseu tasseoyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Mixa i saluti a fine game.",
        "question": "Componi: 'Ottimo lavoro informale (수고!) dopo ci vediamo (나중에 봐요!)'.",
        "shuffled_blocks": [
          "나중에 봐요!",
          "수고!"
        ],
        "correct_order": [
          "수고!",
          "나중에 봐요!"
        ],
        "conceptTag": "Combo Saluti",
        "feedback_incorrect": "Sugo prima di staccare.",
        "tip": "Sugo! Najunge bwayo!"
      },
      {
        "type": "listen",
        "question": "Ascolta la promessa di tornare:",
        "audioHangul": "내일 접속할게요",
        "options": [
          "Log-in domani",
          "Log-out",
          "Basta giocare"
        ],
        "answer": 0,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Naeil = domani. Jeopsokalgeyo = farò log in.",
        "tip": "Naeil jeopsokalgeyo."
      },
      {
        "type": "speak",
        "question": "Dì velocemente: 'Sugo!'",
        "expectedRomaji": [
          "sugo",
          "sugo!"
        ],
        "expectedHangul": [
          "수고!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Su-go!",
        "tip": "Dillo con tono leggero."
      },
      {
        "type": "text_fill",
        "context": "🎮 Hai appena vinto una partita ranked. Scrivi in chat con il team.",
        "question": "Completa il messaggio post-partita:",
        "text_with_blanks": "수고하셨습니다! 오늘 팀 ___! 정글러 갱킹 정말 ___! 다음 판도 ___?",
        "text_romaji": "Sugohasyeotseumnida! Oneul tim ___! Jeonggeullo gaengking jeongmal ___! Daeum pando ___?",
        "blanks": [
          {
            "options": [
              "최고예요",
              "별로예요",
              "몰라요"
            ],
            "romaji": [
              "Choegoye — 'il team è il migliore!'",
              "Byeollo — 'non granché'",
              "Mollayo — 'non lo so'"
            ],
            "answer": 0
          },
          {
            "options": [
              "대박이에요",
              "별로예요",
              "무서워요"
            ],
            "romaji": [
              "Daebak-ieyo — 'era pazzesco!'",
              "Byeollo — 'non granché'",
              "Museowoyo — 'fa paura'"
            ],
            "answer": 0
          },
          {
            "options": [
              "이길 수 있어요",
              "질 것 같아요",
              "몰라요"
            ],
            "romaji": [
              "Igil su isseoyo — 'possiamo vincere!'",
              "Jil geot gatayo — 'penso che perderemo'",
              "Mollayo — 'non so'"
            ],
            "answer": 0
          }
        ],
        "conceptTag": "Chat LoL",
        "feedback_incorrect": "Messaggi positivi: Choegoye + Daebak + Igil su isseoyo!",
        "tip": "최고 (il meglio) + 대박 (pazzesco) + 이길 수 있어요 (possiamo vincere)"
      }
    ]
  },
  {
    "day": 42,
    "title": "2521: La Frase Drammatica 💘",
    "topic": "Citazioni Iconiche",
    "theory": {
      "intro": "È il momento della frase più iconica, intensa e meme-abile di 2521. Na Hee-do la urla: 'Devo averti!'.",
      "concept": "Il verbo 가지다 (gajida) = avere/possedere. Nella forma '~야겠어' (-yagesseo) esprime un forte obbligo ('Devo assolutamente...').",
      "builderRule": "🔗 Chain link: 너의 모든 걸 (Tutto di te) + 널 가져야겠어 (Devo averti!). Dramma da Oscar.",
      "examples": [
        {
          "hangul": "널 가져야겠어!",
          "romaji": "Neol gajyeoyagesseo!",
          "eng": "Devo averti (Ti farò mio/a)!",
          "context": "Citazione memorabile. 🤺"
        },
        {
          "hangul": "내 옆에 있어줘",
          "romaji": "Nae yeope isseojwo",
          "eng": "Resta al mio fianco",
          "context": "Dolce e romantica."
        },
        {
          "hangul": "무지개 같아요",
          "romaji": "Mujigae gatayo",
          "eng": "Siamo come un arcobaleno",
          "context": "Metafora iconica."
        },
        {
          "hangul": "울지 마요",
          "romaji": "Ulji mayo",
          "eng": "Non piangere",
          "context": "Per asciugare le lacrime."
        }
      ],
      "culture": "Le frasi dei K-Drama di successo diventano veri e propri tormentoni (유행어) e vengono usate nei giochi e in TV per far ridere."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Vuoi far ridere l'amica citando Na Hee-do. Cosa urli?",
        "options": [
          "Mujigae gatayo",
          "Neol gajyeoyagesseo!",
          "Nae yeope isseojwo"
        ],
        "optionsHangul": [
          "무지개 같아요",
          "널 가져야겠어!",
          "내 옆에 있어줘"
        ],
        "answer": 1,
        "conceptTag": "Citazioni",
        "feedback_incorrect": "Usa la frase possessiva drammatica.",
        "tip": "Neol (te) + Gajyeoyagesseo (devo avere).",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Scene finali, frase strappalacrime.",
        "question": "Componi: 'Mio (내) fianco-a (옆에) resta per favore (있어줘)'.",
        "shuffled_blocks": [
          "옆에",
          "내",
          "있어줘"
        ],
        "correct_order": [
          "내",
          "옆에",
          "있어줘"
        ],
        "conceptTag": "Romanticismo",
        "feedback_incorrect": "Mio + Fianco + Resta.",
        "tip": "Yeope (accanto a me)."
      },
      {
        "type": "listen",
        "question": "Ascolta la metafora di 2521:",
        "audioHangul": "무지개 같아요",
        "options": [
          "Come la pioggia",
          "Come un arcobaleno",
          "Lontani"
        ],
        "answer": 1,
        "conceptTag": "Metafore",
        "feedback_incorrect": "무지개 (Mujigae) = arcobaleno.",
        "tip": "Mujigae + gatayo (sembra/come)."
      },
      {
        "type": "speak",
        "question": "Recita l'iconica battuta: 'Devo averti!'",
        "expectedRomaji": [
          "neol gajyeoyagesseo",
          "neolgajyeoyagesseo"
        ],
        "expectedHangul": [
          "널 가져야겠어!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Neol ga-jyeo-ya-get-seo!",
        "tip": "Urlalo con convinzione da schermitrice!"
      },
      {
        "type": "conversation",
        "context": "Il protagonista piange.",
        "question": "Cosa gli dici?",
        "options": [
          "Ulji mayo",
          "Neol gajyeoyagesseo",
          "Mujigae gatayo"
        ],
        "optionsHangul": [
          "울지 마요",
          "널 가져야겠어",
          "무지개 같아요"
        ],
        "answer": 0,
        "conceptTag": "Conforto",
        "feedback_incorrect": "울다 (ulda) = piangere. ~지 마요 (ji mayo) = non fare.",
        "tip": "Ulji mayo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 무지개 ___요 (Sembra un arcobaleno).",
        "options": [
          "같아",
          "달라",
          "좋아",
          "나빠"
        ],
        "answer": 0,
        "conceptTag": "Verbi Somiglianza",
        "feedback_incorrect": "같다 (gatda) = essere simile/come.",
        "tip": "Gatayo.",
        "optionsHangul": [
          "같아",
          "달라",
          "좋아",
          "나빠"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 39] 'È il mio tipo ideale'.",
        "options": [
          "Je isanghyeong-ieyo",
          "Jalsaenggyeosseoyo",
          "Simkung"
        ],
        "optionsHangul": [
          "제 이상형이에요",
          "잘생겼어요",
          "심쿵"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Isanghyeong = Ideal type.",
        "tip": "Je isanghyeong-ieyo.",
        "optionsRomaji": [
          "Je isanghyeong-ieyo",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Dichiarazione estrema.",
        "question": "Componi: 'Te (널) devo avere! (가져야겠어!)'.",
        "shuffled_blocks": [
          "가져야겠어!",
          "널"
        ],
        "correct_order": [
          "널",
          "가져야겠어!"
        ],
        "conceptTag": "Possesso",
        "feedback_incorrect": "Te + Avere dovrei.",
        "tip": "Neol gajyeoyagesseo."
      },
      {
        "type": "listen",
        "question": "Ascolta la dolce richiesta:",
        "audioHangul": "내 옆에 있어줘",
        "options": [
          "Vai via",
          "Resta al mio fianco",
          "Non piangere"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Yeope = a fianco.",
        "tip": "Nae yeope isseojwo."
      },
      {
        "type": "speak",
        "question": "Dì dolcemente: 'Siamo come un arcobaleno'.",
        "expectedRomaji": [
          "mujigae gatayo",
          "mujigaegatayo"
        ],
        "expectedHangul": [
          "무지개 같아요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Mu-ji-gae ga-ta-yo.",
        "tip": "Gatayo si legge ga-ta-yo."
      },
      {
        "type": "dialogue",
        "context": "📱 Pianifichi con un'amica coreana di andare all'Animate insieme sabato.",
        "question": "Conferma l'appuntamento:",
        "lines": [
          {
            "speaker": "Amica",
            "hangul": "이번 주말에 애니메이트 같이 갈까요?",
            "romaji": "Ibeon jumare Aenimeiteu gachi galkkayo?",
            "eng": "Questo weekend andiamo insieme all'Animate?"
          },
          {
            "isBlank": true
          },
          {
            "speaker": "Amica",
            "hangul": "몇 시에 만날까요?",
            "romaji": "Myeot sie mannalkkayo?",
            "eng": "A che ora ci incontriamo?"
          }
        ],
        "options": [
          "지금 바빠요, 다음에요",
          "좋아요! 갈게요! 몇 시에요?",
          "애니메이트 어디예요?"
        ],
        "optionsRomaji": [
          "Jigeum bappayo, daeumeeyo — 'Ora sono occupata, un'altra volta'",
          "Joayo! Galgeyo! Myeot sieyo? — 'Perfetto! Ci vengo! A che ora?'",
          "Aenimeiteu eodiyeyo? — 'Dov'è l'Animate?' (non risponde)"
        ],
        "answer": 1,
        "conceptTag": "Appuntamento Cosplay",
        "feedback_incorrect": "Accetta e chiedi l'ora! Joayo + Galgeyo + Myeot sieyo?",
        "tip": "좋아요 (ok) + 갈게요 (ci vengo) = risposta perfetta per confermare"
      }
    ]
  },
  {
    "day": 43,
    "title": "Gym Pro: Spotting & Setup 🏋️‍♀️",
    "topic": "Interazioni Avanzate Gym",
    "theory": {
      "intro": "Ormai sei una vera habitué. È il momento di chiedere uno spotter (assistenza) e gestire i macchinari occupati.",
      "concept": "Il verbo '주다' (Juda) = dare. Unito a un altro verbo (~아/어 주다) = 'fare un favore a qualcuno'. 보조하다 (assistere) -> 보조해 주실 수 있나요? (Puoi farmi da spotter?).",
      "builderRule": "🔗 Chain link: 죄송하지만 (Scusi, ma...) + 보조해 주실 수 있나요? (Potrebbe farmi da spotter?). Sulla panca piana.",
      "examples": [
        {
          "hangul": "보조해 주실 수 있나요?",
          "romaji": "Bojohae jusil su innayo?",
          "eng": "Potrebbe farmi da spotter?",
          "context": "Per il nuovo massimale."
        },
        {
          "hangul": "이 기구 쓰시나요?",
          "romaji": "I gigu sseusinayo?",
          "eng": "Sta usando questo macchinario?",
          "context": "C'è un asciugamano, nessuno intorno."
        },
        {
          "hangul": "같이 교대로 쓸까요?",
          "romaji": "Gachi gyodaero sseulkkayo?",
          "eng": "Possiamo alternarci?",
          "context": "Palestra affollata!"
        },
        {
          "hangul": "무게 올려주세요",
          "romaji": "Muge ollyeojuseyo",
          "eng": "Aumenti il peso, per favore",
          "context": "Al personal trainer."
        }
      ],
      "culture": "Nelle palestre coreane 'condividere' un macchinario (교대로 쓰다 - alternarsi) è comunissimo. Diranno quasi sempre di sì."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Vuoi provare il massimale ma hai paura. Cosa chiedi a quello forte?",
        "options": [
          "I gigu sseusinayo?",
          "Gachi gyodaero sseulkkayo?",
          "Bojohae jusil su innayo?"
        ],
        "optionsHangul": [
          "이 기구 쓰시나요?",
          "같이 교대로 쓸까요?",
          "보조해 주실 수 있나요?"
        ],
        "answer": 2,
        "conceptTag": "Assistenza",
        "feedback_incorrect": "보조하다 = assistere.",
        "tip": "Bojohae jusil su innayo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "La pressa è occupata da chi riposa da troppo.",
        "question": "Componi: 'Insieme (같이) a turni (교대로) usiamo? (쓸까요?)'.",
        "shuffled_blocks": [
          "쓸까요?",
          "교대로",
          "같이"
        ],
        "correct_order": [
          "같이",
          "교대로",
          "쓸까요?"
        ],
        "conceptTag": "Condivisione",
        "feedback_incorrect": "Insieme + A turni + Usiamo.",
        "tip": "Gyodaero = a turni."
      },
      {
        "type": "listen",
        "question": "Chiedi se è libero. Lui risponde questo (quindi no!):",
        "audioHangul": "이 기구 쓰시나요?",
        "options": [
          "Posso farle da spotter?",
          "Sta usando questo macchinario?",
          "Manca poco"
        ],
        "answer": 1,
        "conceptTag": "Macchinari",
        "feedback_incorrect": "기구 (Gigu) = attrezzatura. 쓰다 = usare.",
        "tip": "I gigu sseusinayo?"
      },
      {
        "type": "speak",
        "question": "Chiedi lo spotter decisa: 'Potrebbe farmi da spotter?'",
        "expectedRomaji": [
          "bojohae jusil su innayo",
          "bojohaejusilsuinnayo"
        ],
        "expectedHangul": [
          "보조해 주실 수 있나요?"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Bo-jo-hae ju-sil su in-na-yo?",
        "tip": "Bojohae."
      },
      {
        "type": "conversation",
        "context": "Il peso è troppo leggero. Chiedi al PT di aumentarlo.",
        "question": "Cosa dici?",
        "options": [
          "Muge ollyeojuseyo",
          "Gachi sseulkkayo",
          "I gigu sseusinayo"
        ],
        "optionsHangul": [
          "무게 올려주세요",
          "같이 쓸까요",
          "이 기구 쓰시나요"
        ],
        "answer": 0,
        "conceptTag": "Pesi",
        "feedback_incorrect": "무게 (Muge) = peso. 올리다 (ollida) = alzare.",
        "tip": "Muge ollyeojuseyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: 이 ___ 쓰시나요? (Questo macchinario).",
        "options": [
          "기구",
          "차",
          "물",
          "약"
        ],
        "answer": 0,
        "conceptTag": "Attrezzatura",
        "feedback_incorrect": "기구 (Gigu) = macchinario.",
        "tip": "Gigu.",
        "optionsHangul": [
          "기구",
          "차",
          "물",
          "약"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 40] 'Mi consigli un integratore proteico?'",
        "options": [
          "Danbaekjil bochungje chucheonhae juseyo",
          "Choko mat isseoyo",
          "Bitamin juseyo"
        ],
        "optionsHangul": [
          "단백질 보충제 추천해 주세요",
          "초코 맛 있어요",
          "비타민 주세요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Bochungje = integratore.",
        "tip": "Chucheonhae juseyo = consiglia.",
        "optionsRomaji": [
          "Danbaekjil bochungje chucheonhae juseyo",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Chiedi il permesso per la panca.",
        "question": "Componi: 'Questo (이) macchinario (기구) usa? (쓰시나요?)'.",
        "shuffled_blocks": [
          "쓰시나요?",
          "이",
          "기구"
        ],
        "correct_order": [
          "이",
          "기구",
          "쓰시나요?"
        ],
        "conceptTag": "Disponibilità",
        "feedback_incorrect": "Questo + Macchinario + Usi.",
        "tip": "I gigu sseusinayo."
      },
      {
        "type": "listen",
        "question": "Ascolta la proposta di condivisione:",
        "audioHangul": "같이 교대로 쓸까요?",
        "options": [
          "Andiamo via",
          "Possiamo alternarci?",
          "Spotter"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Gachi = insieme. Gyodaero = a turni.",
        "tip": "Gyodaero."
      },
      {
        "type": "speak",
        "question": "Dì al PT: 'Aumenti il peso, per favore'.",
        "expectedRomaji": [
          "muge ollyeojuseyo",
          "mugeollyeojuseyo"
        ],
        "expectedHangul": [
          "무게 올려주세요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Mu-ge ol-lyeo-ju-se-yo.",
        "tip": "Ollyeojuseyo."
      },
      {
        "type": "text_fill",
        "context": "📝 Stai completando una bio per un'app di language exchange coreana.",
        "question": "Completa la tua presentazione in coreano:",
        "text_with_blanks": "안녕하세요! 저는 사라예요. 이탈리아 ___에서 왔어요. 제 취미는 ___ 이에요. 한국어가 재미있지만 조금 ___.",
        "text_romaji": "Annyeonghaseyo! Jeoneun Sara-yeyo. Italia ___eseo wasseoyo. Je chwimineun ___ ieyo. Hangugeo-ga jaemiitjiman jogeum ___.",
        "blanks": [
          {
            "options": [
              "로마",
              "도쿄",
              "서울"
            ],
            "romaji": [
              "Roma — 'Roma'",
              "Tokyo — 'Tokyo'",
              "Seoul — 'Seoul'"
            ],
            "answer": 0
          },
          {
            "options": [
              "운동",
              "수면",
              "공부"
            ],
            "romaji": [
              "Undong — 'allenamento'",
              "Sumyeon — 'dormire'",
              "Gongbu — 'studiare'"
            ],
            "answer": 0
          },
          {
            "options": [
              "어려워요",
              "쉬워요",
              "몰라요"
            ],
            "romaji": [
              "Eoryeowoyo — 'è difficile'",
              "Siwoyo — 'è facile'",
              "Mollayo — 'non so'"
            ],
            "answer": 0
          }
        ],
        "conceptTag": "Presentazione Personale",
        "feedback_incorrect": "Roma + Undong + Eoryeowoyo = la tua bio vera!",
        "tip": "로마에서 왔어요 (vengo da Roma) + 운동 (gym) + 어려워요 (è difficile)"
      }
    ]
  },
  {
    "day": 44,
    "title": "Tirare le somme: 한국어! 🌸",
    "topic": "Studio e Fluenza",
    "theory": {
      "intro": "Vigilia del gran finale. Quante frasi hai imparato? È ora di saper parlare... del tuo coreano!",
      "concept": "Descrivere l'esperienza: '재미있어요' (Jaemiisseoyo) = 'è divertente'. '조금' (Jogeum) = 'un po''.",
      "builderRule": "🔗 Chain link: 한국어가 조금 어렵지만 (Il coreano è un po' difficile, ma) + 너무 재미있어요! (È troppo divertente!).",
      "examples": [
        {
          "hangul": "한국어가 재미있어요!",
          "romaji": "Hangugeo-ga jaemiisseoyo!",
          "eng": "Il coreano è divertente!",
          "context": "Quando si stupiscono del tuo livello."
        },
        {
          "hangul": "조금 어렵지만 좋아요",
          "romaji": "Jogeum eoryeopjiman joayo",
          "eng": "È un po' difficile ma mi piace",
          "context": "Grammatica del Giorno 30!"
        },
        {
          "hangul": "매일 공부해요",
          "romaji": "Maeil gongbuhaeyo",
          "eng": "Studio ogni giorno",
          "context": "Il segreto del tuo streak. 🔥"
        },
        {
          "hangul": "한국어 선생님",
          "romaji": "Hangugeo seonsaengnim",
          "eng": "Insegnante di coreano",
          "context": "Chi ti ha guidato fin qui."
        }
      ],
      "culture": "I coreani sono lusingatissimi quando uno straniero studia la loro lingua. Riceverai valanghe di complimenti!"
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "Ti chiedono perché studi. Tu rispondi che è divertente. Cosa dici?",
        "options": [
          "Jogeum eoryeopjiman joayo",
          "Hangugeo-ga jaemiisseoyo!",
          "Maeil gongbuhaeyo"
        ],
        "optionsHangul": [
          "조금 어렵지만 좋아요",
          "한국어가 재미있어요!",
          "매일 공부해요"
        ],
        "answer": 1,
        "conceptTag": "Passione",
        "feedback_incorrect": "재미있어요 = è divertente.",
        "tip": "Jaemiisseoyo.",
        "optionsRomaji": [
          "Jogeum eoryeopjiman joayo",
          "Hangugeo-ga jaemiisseoyo!",
          "Maeil gongbuhaeyo"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Sei fiera del tuo percorso.",
        "question": "Componi: 'Ogni giorno (매일) studio (공부해요)'.",
        "shuffled_blocks": [
          "공부해요",
          "매일"
        ],
        "correct_order": [
          "매일",
          "공부해요"
        ],
        "conceptTag": "Abitudini",
        "feedback_incorrect": "Ogni giorno + Studio.",
        "tip": "Maeil = Ogni giorno."
      },
      {
        "type": "listen",
        "question": "Ametti che l'Hangul non è sempre facile:",
        "audioHangul": "조금 어렵지만 좋아요",
        "options": [
          "È noioso",
          "È un po' difficile ma mi piace",
          "Studio ogni giorno"
        ],
        "answer": 1,
        "conceptTag": "Opinioni",
        "feedback_incorrect": "어렵다 (difficile) + ~지만 (ma).",
        "tip": "Eoryeopjiman.",
        "audioRomaji": "Jogeum eoryeopjiman joayo"
      },
      {
        "type": "speak",
        "question": "Dì con orgoglio: 'Il coreano è divertente!'",
        "expectedRomaji": [
          "hangugeo-ga jaemiisseoyo",
          "hangugeogajaemiisseoyo"
        ],
        "expectedHangul": [
          "한국어가 재미있어요!"
        ],
        "conceptTag": "Pronuncia",
        "feedback_incorrect": "Han-guk-eo-ga jae-mi-it-seo-yo!",
        "tip": "Hangugeo = Coreano."
      },
      {
        "type": "conversation",
        "context": "Ringrazi chi ti ha creato i 45 giorni.",
        "question": "Come dici 'Insegnante di coreano'?",
        "options": [
          "Hangugeo seonsaengnim",
          "Hangugeo jaemiisseoyo",
          "Hangugeo haksaeng"
        ],
        "optionsHangul": [
          "한국어 선생님",
          "한국어 재미있어요",
          "한국어 학생"
        ],
        "answer": 0,
        "conceptTag": "Titoli",
        "feedback_incorrect": "선생님 (Seonsaengnim) = Insegnante.",
        "tip": "Seonsaengnim.",
        "optionsRomaji": [
          "Hangugeo seonsaengnim",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___일 공부해요 (Ogni giorno).",
        "options": [
          "매",
          "내",
          "주",
          "월"
        ],
        "answer": 0,
        "conceptTag": "Frequenza",
        "feedback_incorrect": "매일 (Maeil) = Ogni giorno.",
        "tip": "Maeil.",
        "optionsHangul": [
          "매",
          "내",
          "주",
          "월"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Giorno 24] 'Ho ancora molto da imparare' (alla maestra).",
        "options": [
          "Ajik meoreosseoyo",
          "Un-i joasseoyo",
          "Daebak"
        ],
        "optionsHangul": [
          "아직 멀었어요",
          "운이 좋았어요",
          "대박"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Ajik meoreosseoyo.",
        "tip": "Falsa modestia coreana.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Spiega la tua opinione sul corso.",
        "question": "Componi: 'Un po' (조금) difficile-ma (어렵지만) piace (좋아요)'.",
        "shuffled_blocks": [
          "어렵지만",
          "좋아요",
          "조금"
        ],
        "correct_order": [
          "조금",
          "어렵지만",
          "좋아요"
        ],
        "conceptTag": "Sintassi Ma",
        "feedback_incorrect": "Avverbio + Verbo-ma + Verbo.",
        "tip": "Jogeum eoryeopjiman joayo."
      },
      {
        "type": "listen",
        "question": "Ascolta il tuo nuovo motto:",
        "audioHangul": "매일 공부해요",
        "options": [
          "Vado in palestra",
          "Studio ogni giorno",
          "Bevo soju"
        ],
        "answer": 1,
        "conceptTag": "Ascolto",
        "feedback_incorrect": "Gongbu = studio.",
        "tip": "Maeil gongbuhaeyo.",
        "audioRomaji": "Maeil gongbuhaeyo"
      },
      {
        "type": "speak",
        "question": "Dì: 'È un po' difficile ma mi piace'.",
        "expectedRomaji": [
          "jogeum eoryeopjiman joayo",
          "jogeumeoryeopjimanjoayo"
        ],
        "expectedHangul": [
          "조금 어렵지만 좋아요"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Jo-geum eo-ryeop-ji-man jo-a-yo.",
        "tip": "Eoryeopjiman."
      },
      {
        "type": "dialogue",
        "context": "🌸 La tua nuova amica coreana ti chiede dell'apprendimento del coreano.",
        "question": "Rispondi in modo autentico e modesto:",
        "lines": [
          {
            "speaker": "Amica 지연",
            "hangul": "한국어 정말 잘 해요! 어떻게 배웠어요?",
            "romaji": "Hangugeo jeongmal jal haeyo! Eotteoke baewosseoyo?",
            "eng": "Parli il coreano davvero bene! Come hai imparato?"
          },
          {
            "isBlank": true
          },
          {
            "speaker": "Amica 지연",
            "hangul": "와, 정말 대단해요! 화이팅!",
            "romaji": "Wa, jeongmal daedanhaeyo! Hwaiting!",
            "eng": "Wow, sei davvero straordinaria! Forza!"
          }
        ],
        "options": [
          "아니에요, 아직 멀었어요. 매일 공부했어요!",
          "네, 저 완전 잘 해요!",
          "몰라요, 그냥요"
        ],
        "optionsRomaji": [
          "Anieyo, ajik meoreosseoyo. Maeil gongbhaesseoyo! — 'Ma no, ho ancora molta strada. Ho studiato ogni giorno!'",
          "Ne, jeo wanjeon jal haeyo! — 'Sì, sono davvero brava!' (troppo arrogante!)",
          "Mollayo, geunyanyo — 'Non lo so, così' (troppo vago)"
        ],
        "answer": 0,
        "conceptTag": "Modestia + Sforzo",
        "feedback_incorrect": "La modestia coreana + mostrare lo sforzo è la risposta perfetta!",
        "tip": "Anieyo (Macché) + Ajik meoreosseoyo (ho ancora da imparare) = risposta coreana ideale"
      }
    ]
  },
  {
    "day": 45,
    "title": "Jeju Island! Vittoria Totale! 🌋👑",
    "topic": "Gran Finale & Mappa",
    "theory": {
      "intro": "Sara, SEI UNA CAMPIONESSA! 🏆 Hai completato 45 giorni e sbloccato Jeju Island, le Hawaii della Corea! Mangia mandarini e scala il vulcano Hallasan.",
      "concept": "Sull'Isola di Jeju si parla un dialetto (Satoori). '혼저옵서예' (Honjeoopseoye) = 'Benvenuti!'. Usa '추천해 주세요' (Chucheonhae juseyo) per farti raccomandare un posto.",
      "builderRule": "🔗 Chain link: 해냈어요! (Ce l'ho fatta!) + 제주도 너무 예뻐요 (Jeju è bellissima). Vittoria!",
      "examples": [
        {
          "hangul": "해냈어요! 정말 대단해요!",
          "romaji": "Haenaesseoyo! Jeongmal daedanhaeyo!",
          "eng": "Ce l'ho fatta! Sono fantastica!",
          "context": "Esclamazione di fine corso! 🎉"
        },
        {
          "hangul": "한라산 코스 추천해 주세요",
          "romaji": "Hallasan koseu chucheonhae juseyo",
          "eng": "Consigliami un sentiero per il Monte Halla.",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "귤 얼마예요?",
          "romaji": "Gyul eolmayeyo?",
          "eng": "Quanto costano i mandarini?",
          "context": "Frase Mappa 📍"
        },
        {
          "hangul": "혼저옵서예",
          "romaji": "Honjeoopseoye",
          "eng": "Benvenuti! (Dialetto Jeju)",
          "context": "All'aeroporto. ✈️"
        }
      ],
      "culture": "Jeju ha tre cose in abbondanza: vento, pietre e donne (Haenyeo). I mandarini Hallabong sono il souvenir numero uno."
    },
    "exercises": [
      {
        "type": "multiple_choice",
        "question": "In un mercato tipico. Come chiedi il prezzo dei famosi mandarini?",
        "options": [
          "Gyul eolmayeyo?",
          "Hallasan chucheonhae juseyo",
          "Haenaesseoyo!"
        ],
        "optionsHangul": [
          "귤 얼마예요?",
          "한라산 추천해 주세요",
          "해냈어요!"
        ],
        "answer": 0,
        "conceptTag": "Shopping Jeju",
        "feedback_incorrect": "귤 (Gyul) = Mandarino.",
        "tip": "Gyul + eolmayeyo.",
        "optionsRomaji": [
          "",
          "",
          "Haenaesseoyo!"
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Vuoi fare trekking sul vulcano più alto della Corea e cerchi consiglio.",
        "question": "Componi: 'Monte Halla (한라산) sentiero (코스) mi consigli (추천해 주세요)'.",
        "shuffled_blocks": [
          "추천해 주세요",
          "한라산",
          "코스"
        ],
        "correct_order": [
          "한라산",
          "코스",
          "추천해 주세요"
        ],
        "conceptTag": "Natura",
        "feedback_incorrect": "Halla Mountain + Sentiero + Consigliami.",
        "tip": "Chucheonhae juseyo = raccomandami."
      },
      {
        "type": "listen",
        "question": "All'aeroporto di Jeju, senti questo saluto nel dialetto dell'isola:",
        "audioHangul": "혼저옵서예",
        "options": [
          "Benvenuti!",
          "Arrivederci!",
          "Fa freddo!"
        ],
        "answer": 0,
        "conceptTag": "Dialetto",
        "feedback_incorrect": "Honjeoopseoye è il 'Welcome' di Jeju.",
        "tip": "Equivalente di Eoseo oseyo.",
        "audioRomaji": "Honjeoopseoye"
      },
      {
        "type": "speak",
        "question": "Urla la tua vittoria sulla vetta: 'Ce l'ho fatta!'",
        "expectedRomaji": [
          "haenaesseoyo",
          "haenaessoyo"
        ],
        "expectedHangul": [
          "해냈어요!"
        ],
        "conceptTag": "Vittoria Finale",
        "feedback_incorrect": "Hae-naess-eo-yo!",
        "tip": "Dal verbo 해내다."
      },
      {
        "type": "conversation",
        "context": "L'insegnante dell'app dice: '한국어 정말 잘 해요!' (Parli il coreano davvero bene!).",
        "question": "Rispondi con la Falsa Modestia perfetta:",
        "options": [
          "Anieyo, ajik meoreosseoyo",
          "Jinjja jjajeungnayo",
          "Ne, haenaesseoyo!"
        ],
        "optionsHangul": [
          "아니에요, 아직 멀었어요",
          "진짜 짜증나요",
          "네, 해냈어요!"
        ],
        "answer": 0,
        "conceptTag": "Modestia",
        "feedback_incorrect": "Anche se hai vinto, in Corea la modestia è la vera maestria!",
        "tip": "Ajik meoreosseoyo.",
        "optionsRomaji": [
          "",
          "",
          ""
        ]
      },
      {
        "type": "fill_blank",
        "question": "Completa: ___ 얼마예요? (Mandarini).",
        "options": [
          "귤",
          "물",
          "불",
          "돌"
        ],
        "answer": 0,
        "conceptTag": "Frutti",
        "feedback_incorrect": "귤 (Gyul) = Mandarino.",
        "tip": "Gyul.",
        "optionsHangul": [
          "귤",
          "물",
          "불",
          "돌"
        ],
        "optionsRomaji": [
          "",
          "",
          "",
          ""
        ]
      },
      {
        "type": "multiple_choice",
        "question": "[Ripasso Master] 'Questo, per favore' (Per comprare il biglietto aereo).",
        "options": [
          "Igeo juseyo",
          "Igeo eolmayeyo",
          "Igeo isseoyo"
        ],
        "optionsHangul": [
          "이거 주세요",
          "이거 얼마예요",
          "이거 있어요"
        ],
        "answer": 0,
        "conceptTag": "Ripasso",
        "feedback_incorrect": "Igeo juseyo è la base di tutto.",
        "tip": "Giorno 5!",
        "optionsRomaji": [
          "Igeo juseyo",
          "",
          ""
        ]
      },
      {
        "type": "sentence_builder",
        "context": "Affermi la tua forza.",
        "question": "Componi: 'Davvero (정말) fantastica-sono! (대단해요!)'.",
        "shuffled_blocks": [
          "대단해요!",
          "정말"
        ],
        "correct_order": [
          "정말",
          "대단해요!"
        ],
        "conceptTag": "Trionfo",
        "feedback_incorrect": "Davvero + Fantastico.",
        "tip": "Jeongmal daedanhaeyo!"
      },
      {
        "type": "listen",
        "question": "Ascolta la tua frase di vittoria:",
        "audioHangul": "해냈어요!",
        "options": [
          "Ho perso",
          "Ce l'ho fatta!",
          "Andiamo"
        ],
        "answer": 1,
        "conceptTag": "Ascolto Vittoria",
        "feedback_incorrect": "Haenaesseoyo = I did it!",
        "tip": "Haenaesseoyo!",
        "audioRomaji": "Haenaesseoyo!"
      },
      {
        "type": "speak",
        "question": "Dì per l'ultima volta: 'Sono davvero brava!'",
        "expectedRomaji": [
          "jeongmal daedanhaeyo",
          "jeongmaldaedanhaeyo"
        ],
        "expectedHangul": [
          "정말 대단해요!"
        ],
        "conceptTag": "Pronuncia Finale",
        "feedback_incorrect": "Jeong-mal dae-dan-hae-yo!",
        "tip": "Bravissima Sara! 🌸"
      },
      {
        "type": "text_fill",
        "context": "🌋 Sei sulla vetta del Monte Halla a Jeju. Scrivi una cartolina alla tua famiglia.",
        "question": "Completa la cartolina dalla cima del vulcano:",
        "text_with_blanks": "제주도에서 안녕! 한라산에 ___ 왔어요! 정말 ___! 45일 동안 한국어를 공부해서 여기까지 ___! 사랑해요 ❤️",
        "text_romaji": "Jeju-do-eseo annyeong! Hallasan-e ___ wasseoyo! Jeongmal ___! 45il dongan Hangugeo-reul gongbuhaeseo yeogikkaji ___! Saranghaeyo ❤️",
        "blanks": [
          {
            "options": [
              "드디어",
              "아직",
              "갑자기"
            ],
            "romaji": [
              "Deudieo — 'finalmente'",
              "Ajik — 'ancora'",
              "Gapjagi — 'improvvisamente'"
            ],
            "answer": 0
          },
          {
            "options": [
              "대박이에요",
              "별로예요",
              "몰라요"
            ],
            "romaji": [
              "Daebak-ieyo — 'è PAZZESCO!'",
              "Byeollo — 'non granché'",
              "Mollayo — 'non so'"
            ],
            "answer": 0
          },
          {
            "options": [
              "해냈어요",
              "못 왔어요",
              "갔어요"
            ],
            "romaji": [
              "Haenaesseoyo — 'ce l'ho fatta!'",
              "Mot wasseoyo — 'non sono potuta venire'",
              "Gasseoyo — 'sono andata'"
            ],
            "answer": 0
          }
        ],
        "conceptTag": "Gran Finale Vittoria",
        "feedback_incorrect": "Deudieo (finalmente) + Daebak (pazzesco) + Haenaesseoyo (ce l'ho fatta)!",
        "tip": "드디어 = finalmente. 해냈어요 = ce l'ho fatta. Sei arrivata! 🌸"
      }
    ]
  }
];