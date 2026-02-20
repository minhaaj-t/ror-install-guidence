(function () {
  'use strict';

  const translations = {
    en: {
      title: 'How to Install ROR VANSALE APP on Your Tab',
      subtitle: 'Follow these simple steps. No technical knowledge needed.',
      step1_title: 'Step 1: Get the app file',
      step1_desc: 'Tap the green button below. This will start downloading the app to your tablet.',
      step1_btn: 'CLICK THE DOWNLOAD BUTTON',
      step1_note: 'After you tap, go to Step 2 below.',
      step2_title: 'Step 2: When you see "Download file again?"',
      step2_desc: 'Your tablet may show a small box asking to download again. Do this:',
      step2_action: 'Tap the blue "Download again" button.',
      step2_note: 'This saves the app file (app-release.apk) on your device.',
      step3_title: 'Step 3: Open your Downloads',
      step3_desc: 'In your browser (Chrome or the app you used to download), do this:',
      step3_a: 'Tap the three dots (⋮) at the top right of the browser.',
      step3_after_dots: 'Then a menu will open. Tap "Downloads" in that menu:',
      step3_b: 'In the menu that opens, tap "Downloads".',
      step3_note: 'You will see a list of your downloaded files.',
      step4_title: 'Step 4: Install or update the app',
      step4_desc: 'In the Downloads list, find the file named app-release.apk (or app-release (1).apk).',
      step4_action: 'Tap on app-release.apk. Then tap Install or Update when your tablet asks.',
      step4_note: 'Done! The ROR VANSALE app will open after installation.',
      footer: 'Thank you. If you need help, ask someone who has used the app before.'
    },
    ml: {
      title: 'നിങ്ങളുടെ ടാബിൽ ROR VANSALE ആപ്പ് എങ്ങനെ ഇൻസ്റ്റാൾ ചെയ്യാം',
      subtitle: 'ഈ ലളിത ഘട്ടങ്ങൾ പിന്തുടരുക. സാങ്കേതിക അറിവ് ആവശ്യമില്ല.',
      step1_title: 'ഘട്ടം 1: ആപ്പ് ഫയൽ ഡൗൺലോഡ് ചെയ്യുക',
      step1_desc: 'താഴെയുള്ള പച്ച ബട്ടൺ ടാപ്പ് ചെയ്യുക. ഇത് നിങ്ങളുടെ ടാബ്ലെറ്റിൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യാൻ ആരംഭിക്കും.',
      step1_btn: 'ഡൗൺലോഡ് ബട്ടൺ ക്ലിക്ക് ചെയ്യുക',
      step1_note: 'ടാപ്പ് ചെയ്ത ശേഷം ഘട്ടം 2-ലേക്ക് പോകുക.',
      step2_title: 'ഘട്ടം 2: "ഫയൽ വീണ്ടും ഡൗൺലോഡ് ചെയ്യണോ?" കാണുമ്പോൾ',
      step2_desc: 'നിങ്ങളുടെ ടാബ്ലെറ്റ് വീണ്ടും ഡൗൺലോഡ് ചെയ്യാൻ ചോദിക്കുന്ന ഒരു ചെറിയ ബോക്സ് കാണിച്ചേക്കാം. ഇത് ചെയ്യുക:',
      step2_action: 'നീല "Download again" ബട്ടൺ ടാപ്പ് ചെയ്യുക.',
      step2_note: 'ഇത് ആപ്പ് ഫയൽ (app-release.apk) നിങ്ങളുടെ ഉപകരണത്തിൽ സംരക്ഷിക്കും.',
      step3_title: 'ഘട്ടം 3: ഡൗൺലോഡുകൾ തുറക്കുക',
      step3_desc: 'നിങ്ങളുടെ ബ്രൗസറിൽ (Chrome അല്ലെങ്കിൽ ഡൗൺലോഡിനായി ഉപയോഗിച്ച ആപ്പ്), ഇത് ചെയ്യുക:',
      step3_a: 'ബ്രൗസറിന്റെ മുകളിൽ വലതുവശത്തുള്ള മൂന്ന് ഡോട്ടുകൾ (⋮) ടാപ്പ് ചെയ്യുക.',
      step3_after_dots: 'അപ്പോൾ ഒരു മെനു തുറക്കും. അതിൽ "Downloads" ടാപ്പ് ചെയ്യുക:',
      step3_b: 'തുറക്കുന്ന മെനുവിൽ "Downloads" ടാപ്പ് ചെയ്യുക.',
      step3_note: 'നിങ്ങളുടെ ഡൗൺലോഡ് ചെയ്ത ഫയലുകളുടെ ഒരു ലിസ്റ്റ് കാണാം.',
      step4_title: 'ഘട്ടം 4: ആപ്പ് ഇൻസ്റ്റാൾ അല്ലെങ്കിൽ അപ്ഡേറ്റ് ചെയ്യുക',
      step4_desc: 'ഡൗൺലോഡുകളുടെ ലിസ്റ്റിൽ app-release.apk (അല്ലെങ്കിൽ app-release (1).apk) എന്ന ഫയൽ കണ്ടെത്തുക.',
      step4_action: 'app-release.apk-ൽ ടാപ്പ് ചെയ്യുക. നിങ്ങളുടെ ടാബ്ലെറ്റ് ചോദിക്കുമ്പോൾ Install അല്ലെങ്കിൽ Update ടാപ്പ് ചെയ്യുക.',
      step4_note: 'പൂർത്തി! ഇൻസ്റ്റാളേഷന് ശേഷം ROR VANSALE ആപ്പ് തുറക്കും.',
      footer: 'നന്ദി. സഹായം ആവശ്യമെങ്കിൽ, മുമ്പ് ആപ്പ് ഉപയോഗിച്ചിട്ടുള്ള ആരോടെങ്കിലും ചോദിക്കുക.'
    },
    hi: {
      title: 'अपने टैब में ROR VANSALE ऐप कैसे इंस्टॉल करें',
      subtitle: 'इन आसान चरणों को follow करें। तकनीकी ज्ञान की जरूरत नहीं।',
      step1_title: 'चरण 1: ऐप फाइल डाउनलोड करें',
      step1_desc: 'नीचे हरे बटन पर टैप करें। इससे आपके टैबलेट पर ऐप डाउनलोड होना शुरू हो जाएगा।',
      step1_btn: 'डाउनलोड बटन पर क्लिक करें',
      step1_note: 'टैप करने के बाद नीचे चरण 2 पर जाएं।',
      step2_title: 'चरण 2: जब "Download file again?" दिखे',
      step2_desc: 'आपके टैबलेट पर फिर से डाउनलोड करने के लिए एक छोटा बॉक्स दिख सकता है। यह करें:',
      step2_action: 'नीले "Download again" बटन पर टैप करें।',
      step2_note: 'इससे ऐप फाइल (app-release.apk) आपके डिवाइस पर सेव हो जाएगी।',
      step3_title: 'चरण 3: अपने डाउनलोड खोलें',
      step3_desc: 'अपने ब्राउज़र (Chrome या जिस ऐप से डाउनलोड किया) में यह करें:',
      step3_a: 'ब्राउज़र के ऊपर दाएं तरफ तीन बिंदु (⋮) पर टैप करें।',
      step3_after_dots: 'फिर एक मेनू खुलेगा। उस मेनू में "Downloads" पर टैप करें:',
      step3_b: 'खुलने वाले मेनू में "Downloads" पर टैप करें।',
      step3_note: 'आपको अपनी डाउनलोड की हुई फाइलों की सूची दिखेगी।',
      step4_title: 'चरण 4: ऐप इंस्टॉल या अपडेट करें',
      step4_desc: 'डाउनलोड सूची में app-release.apk (या app-release (1).apk) नाम की फाइल ढूंढें।',
      step4_action: 'app-release.apk पर टैप करें। फिर जब टैबलेट पूछे तो Install या Update पर टैप करें।',
      step4_note: 'हो गया! इंस्टॉल होने के बाद ROR VANSALE ऐप खुल जाएगा।',
      footer: 'धन्यवाद। मदद चाहिए तो पहले ऐप इस्तेमाल कर चुके किसी से पूछें।'
    },
    ta: {
      title: 'உங்கள் டாபில் ROR VANSALE ஆப் எப்படி நிறுவுவது',
      subtitle: 'இந்த எளிய படிகளைப் பின்பற்றுங்கள். தொழில்நுட்ப அறிவு தேவையில்லை.',
      step1_title: 'படி 1: ஆப் கோப்பைப் பதிவிறக்குங்கள்',
      step1_desc: 'கீழே உள்ள பச்சை பொத்தானைத் தட்டுங்கள். இது உங்கள் டாப்லெட்டில் ஆப்பைப் பதிவிறக்கத் தொடங்கும்.',
      step1_btn: 'பதிவிறக்க பொத்தானைக் கிளிக் செய்யுங்கள்',
      step1_note: 'தட்டிய பிறகு கீழே படி 2க்குச் செல்லுங்கள்.',
      step2_title: 'படி 2: "கோப்பை மீண்டும் பதிவிறக்கவா?" என்று தெரிந்தால்',
      step2_desc: 'உங்கள் டாப்லெட் மீண்டும் பதிவிறக்க கேட்கும் ஒரு சிறிய பெட்டியைக் காட்டலாம். இதைச் செய்யுங்கள்:',
      step2_action: 'நீல "Download again" பொத்தானைத் தட்டுங்கள்.',
      step2_note: 'இது ஆப் கோப்பை (app-release.apk) உங்கள் சாதனத்தில் சேமிக்கும்.',
      step3_title: 'படி 3: உங்கள் பதிவிறக்கங்களைத் திறக்கவும்',
      step3_desc: 'உங்கள் உலாவியில் (Chrome அல்லது பதிவிறக்கப் பயன்படுத்திய ஆப்), இதைச் செய்யுங்கள்:',
      step3_a: 'உலாவியின் மேல் வலப்புறம் மூன்று புள்ளிகள் (⋮) தட்டுங்கள்.',
      step3_after_dots: 'பிறகு ஒரு மெனு திறக்கும். அதில் "Downloads" தட்டுங்கள்:',
      step3_b: 'திறக்கும் மெனுவில் "Downloads" தட்டுங்கள்.',
      step3_note: 'பதிவிறக்கிய கோப்புகளின் பட்டியல் தெரியும்.',
      step4_title: 'படி 4: ஆப்பை நிறுவவும் அல்லது புதுப்பிக்கவும்',
      step4_desc: 'பதிவிறக்க பட்டியலில் app-release.apk (அல்லது app-release (1).apk) என்ற கோப்பைக் கண்டறியுங்கள்.',
      step4_action: 'app-release.apk மீது தட்டுங்கள். டாப்லெட் கேட்கும்போது Install அல்லது Update தட்டுங்கள்.',
      step4_note: 'முடிந்தது! நிறுவலுக்குப் பிறகு ROR VANSALE ஆப் திறக்கும்.',
      footer: 'நன்றி. உதவி தேவைப்பட்டால், முன்பு ஆப் பயன்படுத்தியவரிடம் கேளுங்கள்.'
    },
    ar: {
      title: 'كيفية تثبيت تطبيق ROR VANSALE على جهازك اللوحي',
      subtitle: 'اتبع هذه الخطوات البسيطة. لا تحتاج إلى معرفة تقنية.',
      step1_title: 'الخطوة 1: احصل على ملف التطبيق',
      step1_desc: 'اضغط على الزر الأخضر أدناه. سيبدأ هذا بتحميل التطبيق على جهازك اللوحي.',
      step1_btn: 'اضغط زر التحميل',
      step1_note: 'بعد الضغط، انتقل إلى الخطوة 2 أدناه.',
      step2_title: 'الخطوة 2: عند ظهور "تحميل الملف مرة أخرى؟"',
      step2_desc: 'قد يعرض جهازك اللوحي صندوقاً صغيراً يطلب التحميل مرة أخرى. افعل التالي:',
      step2_action: 'اضغط على الزر الأزرق "Download again" (تحميل مرة أخرى).',
      step2_note: 'هذا يحفظ ملف التطبيق (app-release.apk) على جهازك.',
      step3_title: 'الخطوة 3: افتح التحميلات',
      step3_desc: 'في المتصفح (Chrome أو التطبيق الذي استخدمته للتحميل)، افعل التالي:',
      step3_a: 'اضغط على النقاط الثلاث (⋮) في أعلى يمين المتصفح.',
      step3_after_dots: 'ثم ستفتح قائمة. اضغط على "Downloads" (التحميلات) في تلك القائمة:',
      step3_b: 'في القائمة التي تظهر، اضغط على "Downloads" (التحميلات).',
      step3_note: 'ستظهر قائمة بملفاتك المحملة.',
      step4_title: 'الخطوة 4: ثبّت التطبيق أو حدّثه',
      step4_desc: 'في قائمة التحميلات، ابحث عن الملف المسمى app-release.apk (أو app-release (1).apk).',
      step4_action: 'اضغط على app-release.apk. ثم اضغط تثبيت أو تحديث عندما يطلب جهازك ذلك.',
      step4_note: 'تم! سيفتح تطبيق ROR VANSALE بعد التثبيت.',
      footer: 'شكراً. إذا احتجت مساعدة، اسأل شخصاً استخدم التطبيق من قبل.'
    }
  };

  const RTL_LANGS = ['ar'];

  function getStoredLang() {
    try {
      return localStorage.getItem('ror-vansale-lang') || 'en';
    } catch (_) {
      return 'en';
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem('ror-vansale-lang', lang);
    } catch (_) {}
  }

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('.lang-tab').forEach(function (tab) {
      tab.classList.toggle('active', tab.getAttribute('data-lang') === lang);
      tab.setAttribute('aria-selected', tab.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    if (t.title) {
      document.title = t.title;
    }

    var html = document.documentElement;
    html.setAttribute('lang', lang === 'ar' ? 'ar' : lang === 'ml' ? 'ml' : lang === 'hi' ? 'hi' : lang === 'ta' ? 'ta' : 'en');
    html.setAttribute('dir', RTL_LANGS.indexOf(lang) >= 0 ? 'rtl' : 'ltr');

    setStoredLang(lang);
  }

  function init() {
    var currentLang = getStoredLang();
    applyLang(currentLang);

    document.querySelectorAll('.lang-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
