const bookSamples = {
    en: {
        pages: [
            {
                number: 1,
                label: "Page 1",
                content: `
                    <div class="page-header">Page 1</div>
                    <h2>Overcoming the Fear</h2>
                    <p>I'm afraid I'll spend the money and nothing will work. I have paid for courses and contractors and still had nothing I could ship, which is how I talk myself into waiting: maybe I need one more tutorial block, or I tell myself I'm not technical enough to start.</p>
                    <p>The shame weighs when you had the idea first and months later you are still prep work with no URL; that reaction is common, and this book was written for people who know that loop.</p>
                    <p>What you want is still credible: get a working link in front of someone and stop treating "almost started" as progress.</p>
                `
            },
            {
                number: 42,
                label: "Page 42",
                content: `
                    <div class="page-header">Page 42</div>
                    <h2>The PRD: Your Technical North Star</h2>
                    <p>The biggest mistake first-time founders make is expecting the model to read intent from a slogan. It behaves when the write-up names concrete screens, fields, and what fires on click. A vague "Uber for dogs" request falls apart; "this button writes a Firestore document with this shape" usually survives first contact.</p>
                    <p>The PRD (Product Requirements Document) anchors that level of detail. Your job is to lock down flows and boundaries before the first line of code lands, then keep the model inside those boundaries with the rules-first flow in the book.</p>
                `
            },
            {
                number: 87,
                label: "Page 87",
                content: `
                    <div class="page-header">Page 87</div>
                    <h2>Going Live: The "Ship It" Mindset</h2>
                    <p>Deployment is the point where the repository meets traffic. Founders often brace for a specialist-only ceremony; on Vercel the mechanical steps are short, while letting people use a rough interface takes more nerve than clicking publish.</p>
                    <p>Momentum matters more than polish on day one: a URL with rough edges collects feedback, while a polished tree that never deploys stays hypothetical. Treat the first launch as the start of iteration, with logs and user noise telling you what to change next.</p>
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
                    <p>«Боюсь влить время и деньги и получить ноль на выходе». Это нормальная реакция — я сам годами топтался на месте.</p>
                    <p>Страх перед стеком часто вырастает из того, что старый набор вариантов звучал одинаково дорого: большая команда или долгая школа до первой строчки кода.</p>
                    <p>Метод <strong>вайб-кодинга</strong> сжимает расстояние между «есть идея» и «есть ссылка»: вы держите архитектурные решения и спецификацию, не притворяясь штатным разработчиком на каждой строчке.</p>
                `
            },
            {
                number: 42,
                label: "Страница 42",
                content: `
                    <div class="page-header">Страница 42</div>
                    <h2>PRD: Ваш технический компас</h2>
                    <p>Главная ошибка — кормить ИИ лозунгами вместо структуры: нужны экраны, поля и реакция на клик. Размытое «сделай Uber для собак» ломается; формулировка «кнопка пишет документ Firestore с такой схемой» обычно держится.</p>
                    <p>PRD фиксирует этот уровень детализации: вы описываете потоки и границы до того, как появляется код, а затем удерживаете модель внутри них через подход с правилами, который разобран в книге.</p>
                `
            },
            {
                number: 87,
                label: "Страница 87",
                content: `
                    <div class="page-header">Страница 87</div>
                    <h2>Запуск: Психология релиза</h2>
                    <p>Деплой — место, где репозиторий встречает трафик. Его часто ждут как закрытый ритуал для «своих» в DevOps; на Vercel механика короткая, а вот дать людям потрогать сырой интерфейс обычно тяжелее, чем нажать кнопку публикации.</p>
                    <p>Инерция важнее лоска в первый день: рабочая ссылка с шероховатостями собирает сигнал, а идеально вылизанный код без URL остаётся упражнением. Первый выклад открывает цикл правок по логам и обратной связи.</p>
                `
            }
        ]
    },
    vi: {
        pages: [
            { number: 1, label: "Trang 1", content: `<div class="page-header">Trang 1</div><h2>Vượt qua nỗi sợ</h2><p>Tôi sợ mình sẽ tốn tiền mà chẳng thu lại được gì. Tôi đã từng đốt tiền vào khoá học với người làm thuê mà vẫn không ra bản gửi được.</p>` },
            { number: 42, label: "Trang 42", content: `<div class="page-header">Trang 42</div><h2>PRD: Kim chỉ nam</h2><p>Nên ghi rõ màn hình, trường dữ liệu và điều xảy ra khi bấm trong PRD; mô tả chung chung thường vỡ ngay lần nối đầu tiên.</p>` },
            { number: 87, label: "Trang 87", content: `<div class="page-header">Trang 87</div><h2>Ra mắt: Tư duy mới</h2><p>Phiên bản đã deploy mang lại phản hồi thật dù giao diện còn thô. Lần ra mắt đầu mở vòng lặp cải thiện với telemetry và tiếng nói người dùng.</p>` }
        ]
    },
    ms: {
        pages: [
            { number: 1, label: "Halaman 1", content: `<div class="page-header">Halaman 1</div><h2>Lawan Rasa Takut</h2><p>Saya takut saya akan habiskan duit dan akhirnya tiada apa yang menjadi. Saya pernah berada di sana.</p>` },
            { number: 42, label: "Halaman 42", content: `<div class="page-header">Halaman 42</div><h2>PRD: Kompas Anda</h2><p>AI perlukan arahan eksplisit. Tuliskan dalam PRD untuk hasil terbaik.</p>` },
            { number: 87, label: "Halaman 87", content: `<div class="page-header">Halaman 87</div><h2>Minda Melancar</h2><p>Build yang sudah live mengumpul maklum balas walaupun UI masih kasar; kod yang tidak pernah dilancarkan tidak. Pelancaran pertama membuka kitaran penambahbaikan berdasarkan log dan respons pengguna.</p>` }
        ]
    },
    id: {
        pages: [
            { number: 1, label: "Halaman 1", content: `<div class="page-header">Halaman 1</div><h2>Lawan Rasa Takut</h2><p>Gue takut gue bakal habisin duit dan akhirnya nggak ada yang jadi. Gue pernah di posisi itu.</p>` },
            { number: 42, label: "Halaman 42", content: `<div class="page-header">Halaman 42</div><h2>PRD: Panduan Teknis</h2><p>AI perlu instruksi tertulis di PRD—layar, field, apa yang terjadi saat diklik; permintaan samar biasanya robek di uji pertama.</p>` },
            { number: 87, label: "Halaman 87", content: `<div class="page-header">Halaman 87</div><h2>Gaskeun Meluncur</h2><p>Build yang sudah live dengan UI kasar tetap mengumpulkan sinyal; kode "mulus" yang tak pernah di-deploy tidak. Rilis pertama membuka putaran perbaikan berdasarkan log dan feedback.</p>` }
        ]
    },
    te: {
        pages: [
            { number: 1, label: "పేజీ 1", content: `<div class="page-header">పేజీ 1</div><h2>భయాన్ని అధిగమించడం</h2><p>డబ్బు ఖర్చు చేసినా ఫలితం లేకపోతుందేమో అని భయంగా ఉంది. కోర్సులు, కాంట్రాక్టర్లతో ప్రయత్నించినా పంపగలిగేది రాలేదు.</p>` },
            { number: 42, label: "పేజీ 42", content: `<div class="page-header">పేజీ 42</div><h2>PRD: మీ దిక్సూచి</h2><p>స్క్రీన్లు, ఫీల్డ్లు, క్లిక్ తర్వాత ఏమి జరగాలో PRDలో రాయండి; అస్పష్టమైన అభ్యర్థన మొదటి ఇంటిగ్రేషన్లోనే పడిపోతుంది.</p>` },
            { number: 87, label: "పేజీ 87", content: `<div class="page-header">పేజీ 87</div><h2>ప్రారంభం: సరికొత్త ఆలోచన</h2><p>లింక్‌తో చూడగల బిల్డ్ నిజమైన అభిప్రాయాన్ని పొందుతుంది; ల్యాప్‌టాప్‌లోనే ఆగిపోయిన కోడ్ కాదు. మొదటి లాంచ్ తర్వాత లాగ్‌లు, వాడుకరుల సంకేతాలు తర్వాత ఏమి మార్చాలో చూపిస్తాయి.</p>` }
        ]
    },
    ta: {
        pages: [
            { number: 1, label: "பக்கம் 1", content: `<div class="page-header">பக்கம் 1</div><h2>ஆரம்ப பயம்</h2><p>பணம் செலவழித்தாலும் எதுவும் வேலை செய்யாது என்று நான் பயப்படுகிறேன்.</p>` },
            { number: 42, label: "பக்கம் 42", content: `<div class="page-header">பக்கம் 42</div><h2>PRD: உங்கள் வழிகாட்டி</h2><p>திரைகள், புலங்கள், கிளிக்குக்குப் பிறகு என்ன நடக்கும் என்பதை PRD-ல் எழுதுங்கள்; அடி மழுப்பான கோரிக்கை முதல் இணைப்பிலேயே உடையும்.</p>` },
            { number: 87, label: "பக்கம் 87", content: `<div class="page-header">பக்கம் 87</div><h2>வெளியீடு: புதிய மனநிலை</h2><p>இணைப்புடன் வெளியேறும் பதிப்பு உண்மையான கருத்துக்களைப் பெறும்; மடிக்கணினியில் மட்டுமே தேய்க்கும் குறியீடு அல்ல. முதல் வெளியீட்டிற்குப் பிறகு பதிவுகளும் பயனர் ஒலியும் அடுத்து எதை மாற்ற வேண்டும் என்பதைச் சொல்லும்.</p>` }
        ]
    },
    "zh-CN": {
        pages: [
            { number: 1, label: "第 1 页", content: `<div class="page-header">第 1 页</div><h2>克服恐惧</h2><p>我担心钱花出去了却没任何结果。我以前折腾过外包和课程，最后还是两手空空。</p>` },
            { number: 42, label: "第 42 页", content: `<div class="page-header">第 42 页</div><h2>PRD：技术北极星</h2><p>把界面、字段、点击后的结果写进 PRD，比空想要有效；含糊的「做个狗狗版 Uber」往往第一次联调就崩。</p>` },
            { number: 87, label: "第 87 页", content: `<div class="page-header">第 87 页</div><h2>上线：发布心态</h2><p>已经能用链接打开的一版会收到真实反馈；只留在本机里打磨的代码不会。第一次上线之后，日志和用户噪声会告诉你要改什么。</p>` }
        ]
    },
    "zh-TW": {
        pages: [
            { number: 1, label: "第 1 頁", content: `<div class="page-header">第 1 頁</div><h2>克服恐懼</h2><p>我擔心錢花出去了卻沒任何結果。我以前折騰過外包和課程，最後還是兩手空空。</p>` },
            { number: 42, label: "第 42 頁", content: `<div class="page-header">第 42 頁</div><h2>PRD：技術北極星</h2><p>把介面、欄位、點擊後的結果寫進 PRD，比空想要有效；含糊的「做個狗狗版 Uber」往往第一次聯調就崩。</p>` },
            { number: 87, label: "第 87 頁", content: `<div class="page-header">第 87 頁</div><h2>上線：發布心態</h2><p>已經能用連結打開的一版會收到真實回饋；只留在本機裡打磨的程式碼不會。第一次上線之後，日誌和使用者噪音會告訴你要改什麼。</p>` }
        ]
    },
    ml: {
        pages: [
            { number: 1, label: "പേജ് 1", content: `<div class="page-header">പേജ് 1</div><h2>ഭയത്തെ അതിജീവിക്കുക</h2><p>പണം ചിലവാക്കിയാലും ഒന്നും നടക്കില്ലെന്ന് ഞാൻ ഭയപ്പെടുന്നു.</p>` },
            { number: 42, label: "പേജ് 42", content: `<div class="page-header">പേജ് 42</div><h2>PRD: നിങ്ങളുടെ ദിശാസൂചി</h2><p>സ്ക്രീനുകൾ, ഫീൽഡുകൾ, ക്ലിക്കിന് ശേഷം എന്ത് സംഭവിക്കുന്നു എന്ന് PRD-യിൽ എഴുതുക; വ്യക്തമല്ലാത്ത അഭ്യർത്ഥന ആദ്യ ഇന്റിഗ്രേഷനിൽ തന്നെ പൊട്ടും.</p>` },
            { number: 87, label: "പേജ് 87", content: `<div class="page-header">പേജ് 87</div><h2>ലോഞ്ചിംഗ്: പുതിയ രീതി</h2><p>ലിങ്ക് ലൈവ് ആയ ബിൽഡ് ഫീഡ്‍ബാക്ക് ശേഖരിക്കും; ലാപ്‍ടോപ്പിനകത്ത് മാത്രമുള്ള പോളിഷ് ചെയ്ത കോഡ് അല്ല. ആദ്യ റിലീസ് ലോഗുകളും ഉപയോക്തൃ പ്രതികൂല പ്രതികരണവും വഴി അടുത്ത മാറ്റങ്ങൾ തിരഞ്ഞെടുക്കാൻ തുടങ്ങുന്നു.</p>` }
        ]
    },
    kn: {
        pages: [
            { number: 1, label: "ಪುಟ 1", content: `<div class="page-header">ಪುಟ 1</div><h2>ಭಯವನ್ನು ಜಯಿಸುವುದು</h2><p>ಹಣ ಖರ್ಚೊ ಮಾಡಿದರೂ ಏನೂ ಕೆಲಸ ಮಾಡದಿದ್ದರೆ ಎಂಬ ಭಯ ನನಗಿದೆ.</p>` },
            { number: 42, label: "ಪುಟ 42", content: `<div class="page-header">ಪುಟ 42</div><h2>PRD: ನಿಮ್ಮ ದಿಕ್ಸೂಚಿ</h2><p>ತೆರೆಗಳು, ಕ್ಷೇತ್ರಗಳು, ಕ್ಲಿಕ್ ನಂತರ ಏನಾಗುತ್ತದೆ ಎಂದು PRDನಲ್ಲಿ ಬರೆಯಿರಿ; ಅಸ್ಪಷ್ಟ ವಿನಂತಿಯು ಮೊದಲ ಸಂಯೋಜನೆಯಲ್ಲೇ ಬೇರ್ಪಡುತ್ತದೆ.</p>` },
            { number: 87, label: "ಪುಟ 87", content: `<div class="page-header">ಪುಟ 87</div><h2>ಲಾಂಚ್: ಹೊಸ ದಾರಿ</h2><p>ಲಿಂಕ್ ಮೂಲಕ ತೆರೆಯಬಹುದಾದ ಬಿಲ್ಡ್ ನಿಜವಾದ ಪ್ರತಿಕ್ರಿಯೆ ಪಡೆಯುತ್ತದೆ; ಲ್ಯಾಪ್‌ಟಾಪ್‌ನೊಳಗೆ ಮಾತ್ರ ಹೊಡೆದ ಕೋಡ್ ಅಲ್ಲ. ಮೊದಲ ಲಾಂಚ್ ನಂತರ ಲಾಗ್‌ಗಳು ಮತ್ತು ಬಳಕೆದಾರ ಧ್ವನಿಯು ಮುಂದಿನ ಬದಲಾವಣೆಗಳನ್ನು ಹೇಳುತ್ತವೆ.</p>` }
        ]
    },
    tl: {
        pages: [
            { number: 1, label: "Pahina 1", content: `<div class="page-header">Pahina 1</div><h2>Pagtagumpayan ang Takot</h2><p>Natatakot ako na baka masayang lang ang pera ko.</p>` },
            { number: 42, label: "Pahina 42", content: `<div class="page-header">Pahina 42</div><h2>PRD: Iyong Compass</h2><p>Ilagay sa PRD ang mga screen, field, at ano ang mangyayari pagkatapos mag-click; ang malabong brief ay madalas matuklap sa unang integration.</p>` },
            { number: 87, label: "Pahina 87", content: `<div class="page-header">Pahina 87</div><h2>I-Ship It!</h2><p>Ang build na may live link ang nakakakuha ng tunay na feedback mula sa mga tao. Pagkatapos ng unang launch, ang mga log at boses ng user ang nagtuturo kung ano ang susunod na ayusin.</p>` }
        ]
    }
};
