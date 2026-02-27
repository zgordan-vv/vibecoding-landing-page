const bookSamples = {
    en: {
        pages: [
            {
                number: 1,
                label: "Page 1",
                content: `
                    <div class="page-header">Page 1</div>
                    <h2>Overcoming the Fear</h2>
                    <p>I'm afraid I'll spend the money and nothing will work. I've been there before — paid for a course, hired someone, tried a tool — and in the end I had nothing to show. So I tell myself I'm not ready. Maybe I need to learn more first, or I'm just not technical enough.</p>
                    <p>And that shame — that I had the idea first and I'm still here, still preparing, still not shipping — that's the part that really gets me. You're not imagining it. That feeling is real. If any of this sounds familiar, this book was written for you.</p>
                    <p>What you want is real: to feel like someone who believes in themselves, to launch something, see it work, and know that you did it.</p>
                `
            },
            {
                number: 42,
                label: "Page 42",
                content: `
                    <div class="page-header">Page 42</div>
                    <h2>The PRD: Your Technical North Star</h2>
                    <p>The biggest mistake first-time founders make is trying to talk to AI like it's a mind reader. It isn't. AI is a world-class intern with an infinite memory but zero intuition. If you tell it "Build me an Uber for dogs," it will fail. If you tell it "The dog-owner needs a button that creates a Firestore record with the following schema," it will work.</p>
                    <p>This is where the PRD (Product Requirements Document) comes in. You are the Architect. You don't need to know how to lay the bricks, but you must know exactly where the walls go. We use a "Rules-First" approach where the AI is constrained by your vision, not the other way around.</p>
                `
            },
            {
                number: 87,
                label: "Page 87",
                content: `
                    <div class="page-header">Page 87</div>
                    <h2>Going Live: The "Ship It" Mindset</h2>
                    <p>Deployment is the moment of truth. Most founders treat this like a scary ritual that only high priests (DevOps engineers) can perform. In reality, it's about pushing three buttons on Vercel. The hard part isn't the technical click; it's the psychological permission to show the world your "ugly" first version.</p>
                    <p>Vibecoding is about momentum. A launched product that looks "okay" is infinitely more valuable than a "perfect" codebase that never leaves your laptop. Building in public isn't about perfection; it's about progress. Your first launch is just the beginning of the conversation.</p>
                `
            }
        ]
    },
    ru: {
        pages: [
            {
                number: 1,
                label: "Страница 1",
                content: `
                    <div class="page-header">Страница 1</div>
                    <h2>Как победить страх</h2>
                    <p>«Боюсь, что потрачу время и деньги, а на выходе получу пшик». Если вы так думали — поздравляю, вы нормальный человек. Я сам годами сидел в этой ловушке.</p>
                    <p>Ваш страх перед технологиями — это не дефект. Это результат того, что старый мир предлагал вам только плохие варианты: нанять команду за миллионы или учить код годами.</p>
                    <p>С помощью метода <strong>вайб-кодинга</strong> вы пролетаете технические дебри на сверхзвуковой скорости. Вы — Архитектор, и вам не нужно махать мастерком, чтобы построить дом.</p>
                `
            },
            {
                number: 42,
                label: "Страница 42",
                content: `
                    <div class="page-header">Страница 42</div>
                    <h2>PRD: Ваш технический компас</h2>
                    <p>Главная ошибка — общаться с ИИ так, будто он читает мысли. ИИ — это интерн мирового уровня с бесконечной памятью, но без интуиции. Если вы скажете «Сделай мне Uber для собак», он провалится. Если вы скажете «Пользователю нужна кнопка, создающая запись в Firestore с такой-то схемой», он справится идеально.</p>
                    <p>Здесь в игру вступает PRD. Вы — Архитектор. Вам не нужно знать, как класть кирпичи, но вы должны точно знать, где будут стены. Мы используем подход «Правила превыше всего».</p>
                `
            },
            {
                number: 87,
                label: "Страница 87",
                content: `
                    <div class="page-header">Страница 87</div>
                    <h2>Запуск: Психология релиза</h2>
                    <p>Деплой — это момент истины. Многие основатели относятся к этому как к страшному ритуалу. На самом деле — это три кнопки в Vercel. Сложность не в техническом клике, а в психологическом разрешении показать миру свою «неидеальную» первую версию.</p>
                    <p>Вайб-кодинг — это про инерцию. Запущенный продукт, который выглядит «норм», в бесконечность раз ценнее «идеального» кода, который никогда не покидал ваш ноутбук. Создание продукта — это не про совершенство, а про прогресс. Ваш первый запуск — это только начало пути.</p>
                `
            }
        ]
    },
    vi: {
        pages: [
            { number: 1, label: "Trang 1", content: `<div class="page-header">Trang 1</div><h2>Vượt qua nỗi sợ</h2><p>Tôi sợ mình sẽ tốn tiền mà chẳng thu lại được gì. Tôi đã từng ở đó — trả tiền cho một khóa học, thuê một ai đó, thử một công cụ.</p>` },
            { number: 42, label: "Trang 42", content: `<div class="page-header">Trang 42</div><h2>PRD: Kim chỉ nam</h2><p>Sai lầm lớn nhất là nói chuyện với AI như thể nó đọc được ý nghĩ của bạn. AI cần mô tả chính xác trong PRD.</p>` },
            { number: 87, label: "Trang 87", content: `<div class="page-header">Trang 87</div><h2>Ra mắt: Tư duy mới</h2><p>Một sản phẩm "tạm ổn" đã ra mắt vẫn giá trị hơn mã nguồn "hoàn hảo" nhưng không ai thấy. Ra mắt là sự khởi đầu, không phải kết thúc.</p>` }
        ]
    },
    ms: {
        pages: [
            { number: 1, label: "Halaman 1", content: `<div class="page-header">Halaman 1</div><h2>Lawan Rasa Takut</h2><p>Saya takut saya akan habiskan duit dan akhirnya tiada apa yang menjadi. Saya pernah berada di sana.</p>` },
            { number: 42, label: "Halaman 42", content: `<div class="page-header">Halaman 42</div><h2>PRD: Kompas Anda</h2><p>AI perlukan arahan eksplisit. Tuliskan dalam PRD untuk hasil terbaik.</p>` },
            { number: 87, label: "Halaman 87", content: `<div class="page-header">Halaman 87</div><h2>Minda Melancar</h2><p>Produk yang dilancarkan lebih bernilai daripada kod sempurna yang tersimpan. Pelancaran pertama adalah satu permulaan.</p>` }
        ]
    },
    id: {
        pages: [
            { number: 1, label: "Halaman 1", content: `<div class="page-header">Halaman 1</div><h2>Lawan Rasa Takut</h2><p>Gue takut gue bakal habisin duit dan akhirnya nggak ada yang jadi. Gue pernah di posisi itu.</p>` },
            { number: 42, label: "Halaman 42", content: `<div class="page-header">Halaman 42</div><h2>PRD: Panduan Teknis</h2><p>AI butuh instruksi jelas yang ditulis di PRD. Jangan harap AI baca pikiran lo.</p>` },
            { number: 87, label: "Halaman 87", content: `<div class="page-header">Halaman 87</div><h2>Gaskeun Meluncur</h2><p>Produk yang udah live jauh lebih berharga daripada kode "sempurna" yang cuma di laptop. Peluncuran pertama itu awal dari segalanya.</p>` }
        ]
    },
    te: {
        pages: [
            { number: 1, label: "పేజీ 1", content: `<div class="page-header">పేజీ 1</div><h2>భయాన్ని అధిగమించడం</h2><p>డబ్బు ఖర్చు చేసినా ఏమీ వర్క్ కాదని నాకు భయంగా ఉంది. నేను ఇంతకు ముందు ప్రయత్నించాను.</p>` },
            { number: 42, label: "పేజీ 42", content: `<div class="page-header">పేజీ 42</div><h2>PRD: మీ దిక్సూచి</h2><p>AI కి వివరణాత్మక PRD అవసరం. అప్పుడే అది సరిగ్గా పనిచేస్తుంది.</p>` },
            { number: 87, label: "పేజీ 87", content: `<div class="page-header">పేజీ 87</div><h2>ప్రారంభం: సరికొత్త ఆలోచన</h2><p>లైవ్ లో ఉండే యాప్ ఎప్పుడూ మిన్న. మీ మొదటి ప్రయత్నం మార్పుకు నాంది.</p>` }
        ]
    },
    ta: {
        pages: [
            { number: 1, label: "பக்கம் 1", content: `<div class="page-header">பக்கம் 1</div><h2>ஆரம்ப பயம்</h2><p>பணம் செலவழித்தாலும் எதுவும் வேலை செய்யாது என்று நான் பயப்படுகிறேன்.</p>` },
            { number: 42, label: "பக்கம் 42", content: `<div class="page-header">பக்கம் 42</div><h2>PRD: உங்கள் வழிகாட்டி</h2><p>AI-க்கு தெளிவான PRD தேவை. உங்கள் எண்ணங்களை அது தானாக அறியாது.</p>` },
            { number: 87, label: "பக்கம் 87", content: `<div class="page-header">பக்கம் 87</div><h2>வெளியீடு: புதிய மனநிலை</h2><p>வெளியாகி இருக்கும் தயாரிப்பு தான் சிறந்தது. இது உங்கள் பயணத்தின் ஆரம்பம்.</p>` }
        ]
    },
    "zh-CN": {
        pages: [
            { number: 1, label: "第 1 页", content: `<div class="page-header">第 1 页</div><h2>克服恐惧</h2><p>我担心钱花出去了却没任何结果。我以前经历过——付钱买课、请人、最后却拿不出任何东西。</p>` },
            { number: 42, label: "第 42 页", content: `<div class="page-header">第 42 页</div><h2>PRD：技术北极星</h2><p>不要以为 AI 能读懂你的心思。AI 需要你在 PRD 中提供明确的指令。</p>` },
            { number: 87, label: "第 87 页", content: `<div class="page-header">第 87 页</div><h2>上线：发布心态</h2><p>一个已经上线的产品，比永远留在电脑里的“完美”代码更有价值。发布只是开始。</p>` }
        ]
    },
    "zh-TW": {
        pages: [
            { number: 1, label: "第 1 頁", content: `<div class="page-header">第 1 頁</div><h2>克服恐懼</h2><p>我擔心錢花出去了卻沒任何結果。我以前經歷過——付錢買課、請人、最後卻拿不出任何東西。</p>` },
            { number: 42, label: "第 42 頁", content: `<div class="page-header">第 42 頁</div><h2>PRD：技術北極星</h2><p>不要以為 AI 能讀懂你的心思。AI 需要你在 PRD 中提供明確的指令。</p>` },
            { number: 87, label: "第 87 頁", content: `<div class="page-header">第 87 頁</div><h2>上線：發布心態</h2><p>一個已經上線的产品，比永遠留在電腦裡的「完美」代碼更有價值。發布只是開始。</p>` }
        ]
    },
    ml: {
        pages: [
            { number: 1, label: "പേജ് 1", content: `<div class="page-header">പേജ് 1</div><h2>ഭയത്തെ അതിജീവിക്കുക</h2><p>പണം ചിലവാക്കിയാലും ഒന്നും നടക്കില്ലെന്ന് ഞാൻ ഭയപ്പെടുന്നു.</p>` },
            { number: 42, label: "പേജ് 42", content: `<div class="page-header">പേജ് 42</div><h2>PRD: നിങ്ങളുടെ ദിശാസൂചി</h2><p>AI നിങ്ങളുടെ ചിന്തകൾ വായിക്കുമെന്ന് കരുതരുത്. PRD ആവശ്യമാണ്.</p>` },
            { number: 87, label: "പേജ് 87", content: `<div class="page-header">പേജ് 87</div><h2>ലോഞ്ചിംഗ്: പുതിയ രീതി</h2><p>മികച്ച കോഡിനേക്കാൾ മൂല്യം ലൈവ് ആയ ഉൽപ്പന്നത്തിനാണ്. ഇത് ഒരു തുടക്കം മാത്രം.</p>` }
        ]
    },
    kn: {
        pages: [
            { number: 1, label: "ಪುಟ 1", content: `<div class="page-header">ಪುಟ 1</div><h2>ಭಯವನ್ನು ಜಯಿಸುವುದು</h2><p>ಹಣ ఖర్చు ಮಾಡಿದರೂ ಏನೂ ಕೆಲಸ ಮಾಡದಿದ್ದರೆ ಎಂಬ ಭಯ ನನಗಿದೆ.</p>` },
            { number: 42, label: "ಪುಟ 42", content: `<div class="page-header">ಪುಟ 42</div><h2>PRD: ನಿಮ್ಮ ದಿಕ್ಸೂಚಿ</h2><p>AI ನಿಮ್ಮ ಮನಸ್ಸನ್ನು ಓದುತ್ತದೆ ಎಂದು ಭಾವಿಸಬೇಡಿ. ಅದಕ್ಕೆ PRD ಅತ್ಯಗತ್ಯ.</p>` },
            { number: 87, label: "ಪುಟ 87", content: `<div class="page-header">ಪುಟ 87</div><h2>ಲಾಂಚ್: ಹೊಸ ದಾರಿ</h2><p>ಲೈవ్ ಪ್ರಾಡಕ್ಟ್ ಲೇಸು. ಇದು ನಿಮ್ಮ ಮೊದಲ ಹೆಜ್ಜೆ మాత్రమే.</p>` }
        ]
    },
    tl: {
        pages: [
            { number: 1, label: "Pahina 1", content: `<div class="page-header">Pahina 1</div><h2>Pagtagumpayan ang Takot</h2><p>Natatakot ako na baka masayang lang ang pera ko.</p>` },
            { number: 42, label: "Pahina 42", content: `<div class="page-header">Pahina 42</div><h2>PRD: Iyong Compass</h2><p>Huwag asahan na mababasa ng AI ang isip mo. Kailangan nito ng malinaw na PRD.</p>` },
            { number: 87, label: "Pahina 87", content: `<div class="page-header">Pahina 87</div><h2>I-Ship It!</h2><p>Mas mahalaga ang produktong naka-live kaysa sa perpektong code na nasa laptop mo lang. Simula pa lang ito.</p>` }
        ]
    }
};
