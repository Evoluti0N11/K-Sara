/* ===== data.js — Static data (Map, Dictionary, WOTD, Badges) =====
 * NOTA: Le lezioni (COURSE_DATA) sono in js/lessons.js per facilità di modifica!
 * ===== */

window.APP_VERSION = '5.1';

// COURSE_DATA è caricato da js/lessons.js (deve essere incluso PRIMA di questo file)

/* ========= MAP REGIONS ========= */
window.MAP_REGIONS = [
  { name: "Gyeongbokgung", unlocksAtDay: 1, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", icon: "🏯", emoji: "👑", desc: "Il palazzo reale più grande della dinastia Joseon, cuore di Seoul. Indossare un Hanbok qui è magico.", keywords: ["Seoul", "Cultura", "Joseon"], lat: 37.5796, lng: 126.9770, unlockMsg: "🏯 Gyeongbokgung sbloccato! Inizio del percorso — è così che si apre una storia!", phrases: [{ hangul: "입장료가 얼마예요?", romaji: "Ipjangnyo-ga eolmayeyo?", eng: "Quanto costa l'ingresso?" }, { hangul: "한복 대여 어디예요?", romaji: "Hanbok daeyeo eodiyeyo?", eng: "Dov'è il noleggio Hanbok?" }] },
  { name: "Hongdae (홍대)", unlocksAtDay: 3, image: "https://tong.visitkorea.or.kr/cms/resource/17/3037717_image2_1.jpg", icon: "🎨", emoji: "🎵", desc: "Il quartiere universitario più hipster di Seoul. Street food, cosplay, musica indie, negozi alternativi.", keywords: ["Seoul", "Cosplay", "Street Art"], lat: 37.5563, lng: 126.9233, unlockMsg: "🎨 Hongdae sbloccato! 3 giorni completati — già degna di Hongdae!", phrases: [{ hangul: "코스프레 샵 어디예요?", romaji: "Koseupeure syap eodiyeyo?", eng: "Dov'è il negozio di cosplay?" }, { hangul: "여기 사진 찍어도 돼요?", romaji: "Yeogi sajin jjigeodo dwaeyo?", eng: "Posso fare foto qui?" }] },
  { name: "PC Bang Elite (PC방)", unlocksAtDay: 5, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80", icon: "🎮", emoji: "⌨️", desc: "Il tempio del gaming coreano. Monitor da 240Hz, sedie da gaming premium, ramen servito al posto. LoL paradise!", keywords: ["Gaming", "LoL", "PC Bang"], lat: 37.4979, lng: 127.0276, unlockMsg: "🎮 PC Bang sbloccato! 5 giorni completati — pronta per la classificata!", phrases: [{ hangul: "자리 있어요?", romaji: "Jari isseoyo?", eng: "C'è posto disponibile?" }, { hangul: "라면 주세요", romaji: "Ramyeon juseyo", eng: "Una ramen, per favore." }] },
  { name: "체육관 (Palestra Gangnam)", unlocksAtDay: 7, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", icon: "💪", emoji: "🏋️", desc: "Le palestre di Gangnam sono leggendarie: attrezzature hi-tech, personal trainer K-pop, smoothie bar integrato.", keywords: ["Gym", "Gangnam", "Fitness"], lat: 37.5171, lng: 127.0474, unlockMsg: "💪 Palestra Gangnam sbloccata! 7 giorni — i tuoi muscoli approvano questo percorso!", phrases: [{ hangul: "오늘 무슨 운동 해요?", romaji: "Oneul museun undong haeyo?", eng: "Che allenamento fai oggi?" }, { hangul: "단백질 쉐이크 있어요?", romaji: "Danbaekjil syeiku isseoyo?", eng: "Avete protein shake?" }] },
  { name: "Animeland (Animate 서울)", unlocksAtDay: 10, image: "https://www.animate.co.jp/assets/uploads/2024/08/1728386216-9de37d2e22efddceb0f1ed53bfb64e75.jpg", icon: "🎌", emoji: "✨", desc: "Lo store di anime e manga più amato. Figure, cosplay, manhwa, gadget: il paradiso dei collezionisti!", keywords: ["Anime", "Cosplay", "Manga"], lat: 37.5665, lng: 126.9780, unlockMsg: "🎌 Animeland sbloccato! 10 giorni — il tuo portafoglio è in pericolo!", phrases: [{ hangul: "새로운 피규어 있어요?", romaji: "Saeroun pigweo isseoyo?", eng: "Avete nuove figure?" }, { hangul: "코스프레 의상 봐도 돼요?", romaji: "Koseupeure uisang bwado dwaeyo?", eng: "Posso vedere i costumi cosplay?" }] },
  { name: "고양이 카페 (Cat Café 서울)", unlocksAtDay: 12, image: "https://media-cdn.tripadvisor.com/media/photo-s/0b/9e/d2/32/south-korea-seoul-cat.jpg", icon: "🐱", emoji: "🐾", desc: "I cat café di Seoul sono fenomenali! Decine di gatti liberi tra i tavoli mentre bevi il tuo caffè. Il paradiso per chi ama gli animali!", keywords: ["Gatti", "Caffè", "Animali"], lat: 37.5665, lng: 126.9900, unlockMsg: "🐱 Cat Café sbloccato! 12 giorni — i gattini ti stavano aspettando!", phrases: [{ hangul: "고양이가 귀여워요!", romaji: "Goyangi-ga gwiyeowo!", eng: "Il gatto è carino!" }, { hangul: "고양이 만져도 돼요?", romaji: "Goyangi manjyeodo dwaeyo?", eng: "Posso accarezzare il gatto?" }], isAnimal: true },
  { name: "동물원 (Zoo di Seoul)", unlocksAtDay: 14, image: "https://thumbs.dreamstime.com/b/l-entrata-allo-zoo-di-seoul-colorata-un-giorno-gesso-corea-del-sud-185593348.jpg", icon: "🦁", emoji: "🐼", desc: "Lo zoo di Seoul ospita oltre 3.000 animali tra cui il panda rosso, elefanti, gorilla e tantissimi uccelli esotici.", keywords: ["Animali", "Zoo", "Natura"], lat: 37.4834, lng: 126.9839, unlockMsg: "🦁 Zoo di Seoul sbloccato! 14 giorni — gli animali ti aspettano!", phrases: [{ hangul: "판다 어디예요?", romaji: "Panda eodiyeyo?", eng: "Dov'è il panda?" }, { hangul: "동물 먹이 줘도 돼요?", romaji: "Dongmul meogi jwodo dwaeyo?", eng: "Posso dare da mangiare agli animali?" }], isAnimal: true },
  { name: "House of Na Hee-do (2521)", unlocksAtDay: 18, image: "https://i0.wp.com/wanderwithjin.com/wp-content/uploads/2022/02/2521_house.jpg?resize=840%2C536&ssl=1", icon: "🏠", emoji: "📺", desc: "La leggendaria casa della protagonista di 2521. Un pellegrinaggio obbligatorio per ogni fan del drama!", keywords: ["2521", "K-Drama", "Jeonju"], lat: 35.8118, lng: 127.1435, unlockMsg: "🏠 Casa di Na Hee-do sbloccata! 18 giorni — sei degna di visitarla!", phrases: [{ hangul: "전주 한옥마을 어디예요?", romaji: "Jeonju hanongmaul eodiyeyo?", eng: "Dov'è il villaggio Hanok di Jeonju?" }, { hangul: "드라마 촬영지 맞아요?", romaji: "Deurama chwaryeongji majayo?", eng: "È davvero il set del drama?" }] },
  { name: "Spiaggia di Haeundae (Busan)", unlocksAtDay: 22, image: "https://images.trvl-media.com/place/6122748/5144d41e-8b27-4c37-a80b-eaeea620af01.jpg", icon: "🏖️", emoji: "🏄‍♀️", desc: "La spiaggia più famosa della Corea, nota per l'atmosfera estiva, il mercato del pesce e i grattacieli sul mare.", keywords: ["Busan", "Mare", "Relax"], lat: 35.1587, lng: 129.1604, unlockMsg: "🏖️ Haeundae sbloccata! 22 giorni — meritavi questa spiaggia!", phrases: [{ hangul: "선크림 있어요?", romaji: "Seonkeurim isseoyo?", eng: "Hai la crema solare?" }, { hangul: "해운대역 어떻게 가요?", romaji: "Haeundaeyeok eotteoke gayo?", eng: "Come si arriva alla stazione Haeundae?" }] },
  { name: "Gamcheon Culture Village", unlocksAtDay: 25, image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0c/fc/7b/25.jpg", icon: "🎨", emoji: "🖌️", desc: "Il 'Machu Picchu di Busan': labirinto coloratissimo di case e street art in collina.", keywords: ["Busan", "Arte", "Colori"], lat: 35.0975, lng: 129.0106, unlockMsg: "🎨 Gamcheon Village sbloccato! 25 giorni!", phrases: [{ hangul: "입장료가 얼마예요?", romaji: "Ipjangnyo-ga eolmayeyo?", eng: "Quanto costa l'ingresso?" }, { hangul: "지도 있어요?", romaji: "Jido isseoyo?", eng: "Avete una mappa?" }] },
  { name: "Spiaggia di Geumjin (2521)", unlocksAtDay: 30, image: "https://i0.wp.com/thefangirlverdict.com/wp-content/uploads/2022/04/Twenty-Five-Twenty-One-050.png?resize=764%2C430&ssl=1", icon: "🌊", emoji: "📸", desc: "Il luogo dello stupendo viaggio estivo della squadra di 2521. 'Questa estate è nostra!'", keywords: ["2521", "Amici", "Estate"], lat: 37.6450, lng: 129.0436, unlockMsg: "🌊 Spiaggia di Geumjin sbloccata! 30 giorni — questa estate è tua!", phrases: [{ hangul: "여기가 금진 해변이에요?", romaji: "Yeogiga Geumjin haebyeonieyo?", eng: "È questa la spiaggia di Geumjin?" }, { hangul: "파도 진짜 예뻐요", romaji: "Pado jinjja yeppeoyo", eng: "Le onde sono davvero belle." }] },
  { name: "Tempio di Bulguksa", unlocksAtDay: 37, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/53/f3/42/caption.jpg?w=900&h=500&s=1", icon: "🛕", emoji: "🙏", desc: "Patrimonio mondiale UNESCO. Nell'antica capitale del regno di Silla, un capolavoro dell'arte buddista.", keywords: ["Gyeongju", "Storia", "Tempio"], lat: 35.7900, lng: 129.3320, unlockMsg: "🛕 Bulguksa sbloccato! 37 giorni — patrimonio UNESCO come il tuo coreano!", phrases: [{ hangul: "몇 시에 닫아요?", romaji: "Myeot sie dadayo?", eng: "A che ora chiude?" }, { hangul: "여기가 유네스코예요?", romaji: "Yeogiga Yuneskoyeyo?", eng: "Questo è patrimonio UNESCO?" }] },
  { name: "Isola di Jeju 🌋", unlocksAtDay: 45, image: "https://www.columbusassicurazioni.it/media/aq4e2elt/jeijut3-min.webp", icon: "🌋", emoji: "🍊", desc: "Le Hawaii della Corea! Un'isola vulcanica con cascate, mandarini succosi e statue di pietra leggendarie.", keywords: ["Jeju", "Natura", "Vacanze"], lat: 33.3617, lng: 126.5292, unlockMsg: "🌋 JEJU SBLOCCATA! 45 giorni completati — SEI UNA CAMPIONESSA! 화이팅! ✊🌸", phrases: [{ hangul: "한라산 등반 코스 추천해 주세요", romaji: "Hallasan deungban koseu chucheonhae juseyo", eng: "Consigliami un sentiero per il Monte Halla." }, { hangul: "귤 한 봉지 얼마예요?", romaji: "Gyul han bongji eolmayeyo?", eng: "Quanto costa un sacchetto di mandarini?" }] }
];

/* ========= WORD OF DAY POOL ========= */
window.WOTD_POOL = [
  { hangul: "단백질", romaji: "danbaekjil", eng: "Proteine", category: "💪 Gym" },
  { hangul: "코스프레", romaji: "koseupeure", eng: "Cosplay", category: "🎭 Cosplay" },
  { hangul: "스쿼트", romaji: "seukwoteu", eng: "Squat", category: "💪 Gym" },
  { hangul: "만화", romaji: "manhwa", eng: "Fumetto/Manhwa", category: "📚 Anime" },
  { hangul: "롤", romaji: "rol", eng: "LoL (League of Legends)", category: "🎮 Gaming" },
  { hangul: "갱킹", romaji: "gaengking", eng: "Ganking", category: "🎮 Gaming" },
  { hangul: "한복", romaji: "hanbok", eng: "Abito tradizionale coreano", category: "🏯 Cultura" },
  { hangul: "드라마", romaji: "deurama", eng: "Drama (serie TV)", category: "📺 K-Drama" },
  { hangul: "주인공", romaji: "juingong", eng: "Protagonista", category: "📺 K-Drama" },
  { hangul: "파이팅", romaji: "paiting", eng: "Dai! / Forza!", category: "🌟 Espressioni" },
  { hangul: "대박", romaji: "daebak", eng: "Incredibile! / Wow!", category: "🌟 Espressioni" },
  { hangul: "귀여워", romaji: "gwiyeowo", eng: "Carino/a!", category: "🌟 Espressioni" },
  { hangul: "피씨방", romaji: "pissibang", eng: "PC Bang (sala gaming)", category: "🎮 Gaming" },
  { hangul: "노래방", romaji: "noraebang", eng: "Karaoke privato", category: "🎵 Musica" },
  { hangul: "고양이", romaji: "goyangi", eng: "Gatto", category: "🐱 Animali" },
  { hangul: "강아지", romaji: "gangaji", eng: "Cagnolino", category: "🐶 Animali" },
  { hangul: "삼겹살", romaji: "samgyeopsal", eng: "Pancetta grigliata (K-BBQ)", category: "🍖 Cibo" },
  { hangul: "소주", romaji: "soju", eng: "Soju (alcolico coreano)", category: "🍶 Cibo" },
  { hangul: "운동", romaji: "undong", eng: "Allenamento/Esercizio", category: "💪 Gym" },
  { hangul: "남자친구", romaji: "namjachingu", eng: "Fidanzato", category: "❤️ K-Drama" },
  { hangul: "여자친구", romaji: "yeojachingu", eng: "Fidanzata", category: "❤️ K-Drama" },
  { hangul: "설레다", romaji: "seolleda", eng: "Sentire le farfalle nello stomaco", category: "❤️ K-Drama" },
  { hangul: "아이템", romaji: "aitem", eng: "Item (in-game)", category: "🎮 Gaming" },
  { hangul: "정글러", romaji: "jeonggeullo", eng: "Jungler", category: "🎮 Gaming" },
  { hangul: "미소", romaji: "miso", eng: "Sorriso", category: "🌸 Vita" },
  { hangul: "꿈", romaji: "kkum", eng: "Sogno", category: "🌸 Vita" },
  { hangul: "피규어", romaji: "pigweo", eng: "Action Figure", category: "🎭 Cosplay" },
  { hangul: "마스크팩", romaji: "maseukpaek", eng: "Maschera per il viso", category: "💄 K-Beauty" },
  { hangul: "한강", romaji: "hangang", eng: "Fiume Han", category: "🏙️ Seoul" },
  { hangul: "치킨", romaji: "chikin", eng: "Pollo fritto coreano", category: "🍗 Cibo" }
];

/* ========= DICTIONARY DATA ========= */
window.DICTIONARY = [
  { category: "🙏 Saluti Base", words: [
    { hangul: "안녕하세요", romaji: "Annyeonghaseyo", eng: "Ciao (Formale)", formal: true, example: "안녕하세요! 처음 뵙겠습니다." },
    { hangul: "안녕", romaji: "Annyeong", eng: "Ciao (Informale)", formal: false, example: "안녕! 잘 지냈어?" },
    { hangul: "감사합니다", romaji: "Gamsahamnida", eng: "Grazie (Formale)", formal: true, example: "도와주셔서 감사합니다." },
    { hangul: "고마워요", romaji: "Gomawoyo", eng: "Grazie (Informale)", formal: false, example: "정말 고마워요!" },
    { hangul: "죄송합니다", romaji: "Joesonghamnida", eng: "Mi scusi (Formale)", formal: true, example: "늦어서 죄송합니다." },
    { hangul: "미안해요", romaji: "Mianhaeyo", eng: "Scusa (Informale)", formal: false, example: "미안해요, 제가 실수했어요." },
    { hangul: "괜찮아요", romaji: "Gwaenchanayo", eng: "Va bene / Sto bene", formal: false, example: "괜찮아요, 걱정 마세요." },
    { hangul: "화이팅", romaji: "Hwaiting", eng: "Forza! / Dai!", formal: false, example: "오늘도 화이팅!" }
  ]},
  { category: "💪 Palestra & Sport", words: [
    { hangul: "체육관", romaji: "Cheyukgwan", eng: "Palestra", formal: true, example: "체육관이 어디예요?" },
    { hangul: "운동", romaji: "Undong", eng: "Allenamento / Esercizio", formal: false, example: "오늘 운동했어요?" },
    { hangul: "단백질", romaji: "Danbaekjil", eng: "Proteine", formal: false, example: "단백질 쉐이크 주세요." },
    { hangul: "스쿼트", romaji: "Seukwoteu", eng: "Squat", formal: false, example: "스쿼트 100개 했어요!" },
    { hangul: "닭가슴살", romaji: "Dak-gaseumssal", eng: "Petto di pollo", formal: false, example: "닭가슴살 있어요?" },
    { hangul: "헬스장", romaji: "Helseujiang", eng: "Gym (colloquiale)", formal: false, example: "헬스장에 가요." }
  ]},
  { category: "🎮 Gaming & LoL", words: [
    { hangul: "롤", romaji: "Rol", eng: "League of Legends", formal: false, example: "롤 같이 해요?" },
    { hangul: "피씨방", romaji: "Pissibang", eng: "PC Bang", formal: false, example: "피씨방 어디예요?" },
    { hangul: "갱킹", romaji: "Gaengking", eng: "Ganking", formal: false, example: "갱킹 조심해!" },
    { hangul: "정글러", romaji: "Jeonggeullo", eng: "Jungler", formal: false, example: "우리 정글러 최고야!" },
    { hangul: "캐리", romaji: "Kaeri", eng: "Carry", formal: false, example: "오늘 캐리했어!" },
    { hangul: "이기다", romaji: "Igida", eng: "Vincere", formal: false, example: "오늘도 이겼어요!" },
    { hangul: "지다", romaji: "Jida", eng: "Perdere", formal: false, example: "오늘 졌어요... 다음엔 이길게요." }
  ]},
  { category: "🎭 Cosplay & Anime", words: [
    { hangul: "코스프레", romaji: "Koseupeure", eng: "Cosplay", formal: false, example: "코스프레 정말 잘 하셨네요!" },
    { hangul: "만화", romaji: "Manhwa", eng: "Fumetto coreano", formal: false, example: "만화책 있어요?" },
    { hangul: "피규어", romaji: "Pigweo", eng: "Action Figure", formal: false, example: "피규어 가격이 얼마예요?" },
    { hangul: "덕후", romaji: "Deoku", eng: "Otaku / Fan accanito", formal: false, example: "저는 애니메이션 덕후예요." }
  ]},
  { category: "📺 K-Drama", words: [
    { hangul: "드라마", romaji: "Deurama", eng: "Drama / Serie TV", formal: false, example: "무슨 드라마 봐요?" },
    { hangul: "주인공", romaji: "Juingong", eng: "Protagonista", formal: false, example: "주인공이 너무 잘생겼어요!" },
    { hangul: "설레다", romaji: "Seolleda", eng: "Sentire le farfalle", formal: false, example: "이 장면에서 설레요." },
    { hangul: "남자친구", romaji: "Namjachingu", eng: "Fidanzato", formal: false, example: "남자친구 생겼어요?" },
    { hangul: "여자친구", romaji: "Yeojachingu", eng: "Fidanzata", formal: false, example: "여자친구 있어요?" }
  ]},
  { category: "🐾 Animali", words: [
    { hangul: "고양이", romaji: "Goyangi", eng: "Gatto", formal: false, example: "고양이가 귀여워요!" },
    { hangul: "강아지", romaji: "Gangaji", eng: "Cagnolino", formal: false, example: "강아지 만져도 돼요?" },
    { hangul: "토끼", romaji: "Tokki", eng: "Coniglio", formal: false, example: "토끼가 너무 귀여워요." },
    { hangul: "새", romaji: "Sae", eng: "Uccello", formal: false, example: "저 새 이름이 뭐예요?" }
  ]},
  { category: "🍖 Cibo Coreano", words: [
    { hangul: "삼겹살", romaji: "Samgyeopsal", eng: "Pancetta grigliata K-BBQ", formal: false, example: "삼겹살 먹고 싶어요!" },
    { hangul: "라면", romaji: "Ramyeon", eng: "Ramen coreano", formal: false, example: "라면 주세요." },
    { hangul: "치킨", romaji: "Chikin", eng: "Pollo fritto coreano", formal: false, example: "치킨 배달 시켜요?" },
    { hangul: "소주", romaji: "Soju", eng: "Soju", formal: false, example: "소주 한 잔 할래요?" },
    { hangul: "물", romaji: "Mul", eng: "Acqua", formal: false, example: "물 주세요." }
  ]},
  { category: "🗺️ Direzioni & Luoghi", words: [
    { hangul: "직진", romaji: "Jikjin", eng: "Dritto", formal: false, example: "직진하세요." },
    { hangul: "오른쪽", romaji: "Oreunjjok", eng: "Destra", formal: false, example: "오른쪽으로 가세요." },
    { hangul: "왼쪽", romaji: "Oenjjok", eng: "Sinistra", formal: false, example: "왼쪽으로 가세요." },
    { hangul: "화장실", romaji: "Hwajangsil", eng: "Bagno", formal: false, example: "화장실이 어디예요?" },
    { hangul: "지하철", romaji: "Jihacheol", eng: "Metropolitana", formal: false, example: "지하철역이 어디예요?" }
  ]}
];

/* ========= BADGES ========= */
window.BADGES = [
  { id: "first_day", icon: "🌱", name: "Primo Passo", desc: "Completato il Giorno 1", condition: (s) => s.completedDays.includes(1) },
  { id: "gym_fan", icon: "💪", name: "Gym Master", desc: "Impara le frasi della palestra", condition: (s) => s.completedDays.includes(7) },
  { id: "lol_pro", icon: "🎮", name: "LoL Champion", desc: "Sblocca il PC Bang", condition: (s) => window.MAP_REGIONS.find(r => r.name.includes("PC Bang")) && s.completedDays.includes(5) },
  { id: "cosplay_queen", icon: "🎭", name: "Cosplay Queen", desc: "Sblocca Animeland", condition: (s) => s.completedDays.includes(10) },
  { id: "animal_lover", icon: "🐾", name: "Animal Lover", desc: "Sblocca il Cat Café", condition: (s) => s.completedDays.includes(12) },
  { id: "drama_fan", icon: "📺", name: "Drama Addict", desc: "Sblocca la Casa di Hee-do", condition: (s) => s.completedDays.includes(18) },
  { id: "streak_7", icon: "🔥", name: "Streaker 7", desc: "7 giorni consecutivi", condition: (s) => s.streak >= 7 },
  { id: "halfway", icon: "🏅", name: "A Metà Strada", desc: "22 giorni completati", condition: (s) => s.completedDays.length >= 22 },
  { id: "campionessa", icon: "👑", name: "Campionessa Coreana", desc: "Tutti i 45 giorni completati", condition: (s) => s.completedDays.length >= 45 }
];
