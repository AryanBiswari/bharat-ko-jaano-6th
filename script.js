// const welcomeElement = document.getElementById('question');
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const showAnsBtn = document.getElementById("show-ans-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const roundList = document.getElementById("round-list");
const copyrightSymbol = document.getElementById("copyright-symbol");
const modal = document.getElementById("copyright-modal");
const closeModal = document.getElementById("close-modal");

const sidebarRounds = [
  "default",
  "elimination",
  "passing",
  "group",
  "picture",
  "video",
  "audio",
  "fastest",
  "box",
  "patianceA",
  "patianceB",
  "patianceC",
  "patianceD",
  "patianceE",
  "patianceF",
  "khelA",
  "khelB",
  "khelC",
  "khelD",
  "khelE",
  "khelF",
  "rajnitiiA",
  "rajnitiiB",
  "rajnitiiC",
  "rajnitiiD",
  "rajnitiiE",
  "rajnitiiF",
];

// Modify questions array to include 'round' property for each question
const questions = [
  { round: "default", format: "text", question: "आपका स्वागत है", answer: "" },
  {
    round: "elimination",
    format: "text",
    question: "1. भारत की सबसे बड़ी झील कौन सी है",
    answer: "वूल्‍हर झील",
  },
  {
    round: "elimination",
    format: "text",
    question: "2. सबसे बड़ा डेल्‍टा",
    answer: "सुन्‍दर वन, पश्चिम बंगाल",
  },
  {
    round: "elimination",
    format: "text",
    question: "3. भारतीय बीमा निगम कब आरंभ हुआ",
    answer: "1 सितम्‍बर 1956",
  },

  {
    round: "elimination",
    format: "text",
    question: "4. असम का सबसे पुराना नाम क्‍या है",
    answer: "प्रागज्‍योतिष",
  },
  {
    round: "elimination",
    format: "text",
    question: "5. दास वंश या गुलाम वंश की नींव भारत वर्ष में किसने रखी थी",
    answer: "कुतुबुद्दीन ऐबक ने",
  },
  {
    round: "elimination",
    format: "text",
    question: "6. जहांगीरी महल किस जगह बना है",
    answer: "आगरा के किले में",
  },
  {
    round: "elimination",
    format: "text",
    question: "7. मेवाड़ के भीष्‍म नाम से प्रसिद्ध व्‍यक्ति का नाम बताओ",
    answer: "चूण्‍डा",
  },
  {
    round: "elimination",
    format: "text",
    question: "8. मीरा बाई का प्रताप से संबंध",
    answer: "प्रताप की ताई",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "9. शिवाजी के बाद जिस पेशवा ने मराठा राज्‍य को उत्‍कर्ष पर पहुंचाया, उसका नाम बताओ",
    answer: "बालाजी बाजीराव",
  },
  {
    round: "elimination",
    format: "text",
    question: "10. मिजोरम को पहले किस नाम से जाना जाता था ",
    answer: "लुषाई हिल्‍स",
  },
  {
    round: "elimination",
    format: "text",
    question:
      "11.	महात्‍मा गांधी ने किसकी मृत्‍यु पर कहा था कि, ‘मेरा सबसे मजबूत संरक्षक चला गया ",
    answer: "बाल गंगाधर तिलक",
  },
  {
    round: "elimination",
    format: "text",
    question: "12.	क्रांतिकारी संगठन ‘हिन्‍दुस्‍तान सोशलिस्‍ट रिपब्लिकन आर्मी का संगठन किसने किया था ",
    answer: "चन्‍द्रशेखर आजाद",
  },
  {
    round: "elimination",
    format: "text",
    question: "13.	किस घटना के कारण महात्‍मा गांधी ने असहयोग आन्‍दोलन (1920-22) को वापस ले लिया ",
    answer: "चौरी चौरा की घटना ",
  },
  {
    round: "elimination",
    format: "text",
    question: "14.	नागलैण्‍ड की युवा महिला नेता गै‍डनिल्‍यु को किसने ‘रानी’ उपनाम दिया था  ",
    answer: "जवाहर लाल नेहरू ",
  },
  {
    round: "elimination",
    format: "text",
    question: "15.	उस प्रधानमंत्री का नाम बताइए जिन्‍होंने अपने कार्यकाल में सदन का मुख कभी नहीं देखा ",
    answer: "चौधरी चरण सिंह ",
  },
  {
    round: "elimination",
    format: "text",
    question: "16.	स्‍वतंत्र भारत में सांसद का प्रथम अधिवेशन कब हुआ  ",
    answer: "13 मई 1952 ",
  },
  {
    round: "elimination",
    format: "text",
    question: "17.	भारत का प्रथम बजट कब पेश हुआ ",
    answer: "26 नवम्‍बर 1947 ",
  },
  {
    round: "elimination",
    format: "text",
    question: "18.	तमिलनाडु में सर्वाधिक समय तक मुख्‍यमंत्री रहने वाली महिला  ",
    answer: "जे. जयललिता ",
  },
  {
    round: "elimination",
    format: "text",
    question: "19.	भारत की प्रथम महिला विदेश सचिव  ",
    answer: "चोकिला अय्यर, मार्च 31, 2001 ",
  },
  {
    round: "elimination",
    format: "text",
    question: "20.	संघ लोक सेवा आयोग के चेयर मैन की नियुक्ति कौन करता है ",
    answer: "राष्‍ट्रपति ",
  },
  {
    round: "elimination",
    format: "text",
    question: "21.	उस प्रधानमंत्री का नाम बताओ जिसके पिता एवं पुत्र भी प्रधानमंत्री रहे",
    answer: "श्रीमती इन्दिरा गांधी",
  },
  {
    round: "elimination",
    format: "text",
    question: "22.	किस राज्‍य में चन्‍दन बहुतायत में पाया जाता है  ",
    answer: "कर्नाटक",
  },
  {
    round: "elimination",
    format: "text",
    question: "23.	दादर नागर हवेली के सबसे निकट कौन सा रेलवे स्‍टेशन है  ",
    answer: "वापी",
  },
  {
    round: "elimination",
    format: "text",
    question: "24.	नंगा पर्वत की ऊंचाई कितनी है ",
    answer: "8126 मीटर ",
  },
  {
    round: "elimination",
    format: "text",
    question: "25.	शिवालिक पर्वत श्रेणी की चोटियों की औसत ऊंचाई क्‍या है  ",
    answer: "1000 मीटर ",
  },
  {
    round: "elimination",
    format: "text",
    question: "26.	भारत के किस राज्‍य में सर्वाधिक वन क्षेत्र हैं  ",
    answer: "मध्‍यप्रदेश ",
  },
  {
    round: "elimination",
    format: "text",
    question: "27.	भारत के मध्‍य से कौन सी रेखा गुजरती है  ",
    answer: "कर्क रेखा ",
  },
  {
    round: "elimination",
    format: "text",
    question: "28.	चीन के सर्वाधिक कारखाने किस राज्‍य में स्थित है  ",
    answer: "उत्‍तर प्रदेश ",
  },
  {
    round: "elimination",
    format: "text",
    question: "29.	भारत में भारत के शीत मरुस्‍थल का नाम बताओ  ",
    answer: "लद्दाख",
  },
  {
    round: "elimination",
    format: "text",
    question: "30.	इलायची की पहाड़ी कहां पर स्थित है ",
    answer: "केरल में ",
  },
  {
    round: "elimination",
    format: "text",
    question: "31.	भारत का सबसे अधिक नगरीकृत राज्‍य कौन सा है  ",
    answer: "गोवा",
  },
  {
    round: "elimination",
    format: "text",
    question: "32.	छोटा नागपुर पठार का सर्वोच्‍च बिन्‍दु कहां पर है  ",
    answer: "पारसनाथ में ",
  },
  {
    round: "elimination",
    format: "text",
    question: "33.	मेघालय राज्‍य कब अस्तित्‍व में आया  ",
    answer: "1972",
  },
  {
    round: "elimination",
    format: "text",
    question: "34.	भारत के किस राज्‍य में सबसे अधिक पर्यटक आते हैं  ",
    answer: "तमिलनांडु ",
  },
  {
    round: "elimination",
    format: "text",
    question: "35.	अयोध्‍या किस नदी के तट पर स्थित है  ",
    answer: "सरयू ",
  },
  {
    round: "elimination",
    format: "text",
    question: "36.	इन्डियन स्‍पेस रिसर्च ऑर्गेनाइजेशन कहां स्थित है  ",
    answer: "बैंगलूर (कर्नाटक) ",
  },
  {
    round: "elimination",
    format: "text",
    question: "37.	सैन्‍ट्रल बिल्डिंग रिसर्च इन्‍स्‍टीट्यूट कहां स्थित है  ",
    answer: "रूड़की (उत्‍तराखण्‍ड) ",
  },
  {
    round: "elimination",
    format: "text",
    question: "38.	गुप्‍तकाल में जारी किए गए सोने के सिक्‍के को क्‍या कहा जाता था  ",
    answer: "दीनार ",
  },
  {
    round: "elimination",
    format: "text",
    question: "39.	भारत के किस राज्‍य में गरीबी की रेखा से नीचे कम जनसंख्‍या प्रतिश है  ",
    answer: "गोवा (6.3%) ",
  },
  {
    round: "elimination",
    format: "text",
    question: "40.	भारत की मुख्‍य खाद्यान्‍न फसल कौन सी है  ",
    answer: "चावल/धान ",
  },
  {
    round: "elimination",
    format: "text",
    question: "41.	चीनी उत्‍पादन में भारत का विश्‍व में कौन सा स्‍थान है  ",
    answer: "पहला ",
  },
  {
    round: "elimination",
    format: "text",
    question: "42.	गणित के क्षेत्र में भारत का विश्‍व को सबसे महत्‍वपूर्ण उपहार क्‍या है  ",
    answer: "शून्‍य का प्रयोग ",
  },
  {
    round: "elimination",
    format: "text",
    question: "43.	भारत में कुल कितने परमाणु संयंत्र सक्रिय हैं  ",
    answer: "21 ",
  },
  {
    round: "elimination",
    format: "text",
    question: "44.	नवरात्रों में नवें दिन दुर्गा के किस रूप की पूजा की जाती है  ",
    answer: "सिद्धिदात्री ",
  },
  {
    round: "elimination",
    format: "text",
    question: "45.	श्रीमद भागवत के लेखक का नाम  ",
    answer: "श्री वेद व्‍यास जी ",
  },
  {
    round: "elimination",
    format: "text",
    question: "46.	स्‍कन्‍द पुराण में गढ़वाल को क्‍या नाम दिया गया है  ",
    answer: "केदारखण्‍ड ",
  },
  {
    round: "elimination",
    format: "text",
    question: "47.	खालसा वंश की स्‍थापना किसने की थी  ",
    answer: "गुरु गोविन्‍द सिंह ",
  },
  {
    round: "elimination",
    format: "text",
    question: "48.	गुरु द्रोणाचार्य का मंदिर कहां पर स्थित है  ",
    answer: "गुड़गांव (हरियाणा) ",
  },
  {
    round: "elimination",
    format: "text",
    question: "49.	रामायण में कितने सर्ग हैं  ",
    answer: "500",
  },
  {
    round: "elimination",
    format: "text",
    question: "50.	मानीच की माता कौन थी  ",
    answer: "ताड़का राक्षसी ",
  },
  {
    round: "elimination",
    format: "text",
    question: "51.	बाली की पत्‍नी का नाम क्‍या था  ",
    answer: "तारा ",
  },
  {
    round: "elimination",
    format: "text",
    question: "52.	लव-कुश का जन्‍म किस ऋषि के आश्रम में हुआ था  ",
    answer: "बाल्‍मीकि ",
  },
  {
    round: "elimination",
    format: "text",
    question: "53.	कुम्‍भकर्ण की पत्‍नी का नाम क्‍या था  ",
    answer: "बज्रज्‍वाला ",
  },
  {
    round: "elimination",
    format: "text",
    question: "54.	भीष्‍म पितामह का असली नाम क्‍या था  ",
    answer: "देवरत ",
  },
  {
    round: "elimination",
    format: "text",
    question: "55.	महाराज धृतराष्‍ट्र ने किसको अपना मंत्री बनाया  ",
    answer: "विदुर ",
  },
  {
    round: "elimination",
    format: "text",
    question: "56.	पांडवों ने अपने अज्ञातवास का एक वर्ष कहां बिताया था  ",
    answer: "विराट नगर ",
  },
  {
    round: "elimination",
    format: "text",
    question: "57.	श्री कृष्‍ण के शंख का नाम क्‍या था  ",
    answer: "पांचजन्‍य ",
  },
  {
    round: "elimination",
    format: "text",
    question: "58.	द्रोणाचार्य ने कितने दिन सेनापति का भार संभाला था  ",
    answer: "पांच दिन ",
  },
  {
    round: "elimination",
    format: "text",
    question: "59.	कर्ण के निधन के बाद कौरव सेना की कमान किसने संभाली थी  ",
    answer: "शल्‍य ने ",
  },
  {
    round: "elimination",
    format: "text",
    question: "60.	अभिमन्‍यु की पत्‍नी उत्‍तरा किस की पुत्री थी  ",
    answer: "विराट की ",
  },
  {
    round: "elimination",
    format: "text",
    question: "61.	पालिताना जैन मंदिर किस प्रदेश में है  ",
    answer: "गुजरात ",
  },
  {
    round: "elimination",
    format: "text",
    question: "62.	प्रसिद्ध लिंगराज मंदिर किस प्रदेश में है  ",
    answer: "ओडि़शा ",
  },
  {
    round: "elimination",
    format: "text",
    question: "63.	केरल में पश्च्मिी घाट में साबरीमाला मंदिर में किसकी मूर्ति स्‍थापित है ",
    answer: "स्‍वामी अयप्‍पन ",
  },
  {
    round: "elimination",
    format: "text",
    question: "64.	बौद्ध मंदिर जिन्‍हें वहां के रहने वाले गोम्‍पा कहते हैं, कहां स्थित है ",
    answer: "अरुणाचल प्रदेश ",
  },
  {
    round: "elimination",
    format: "text",
    question: "65.	भारत नाट्यम किस प्रदेश का नृत्‍य है  ",
    answer: "तमिलनांडु ",
  },
  {
    round: "elimination",
    format: "text",
    question: "66.	हरिप्रसाद चौरसिया किस वाद्य के कलाकार हैं  ",
    answer: "बांसुरी",
  },
  {
    round: "elimination",
    format: "text",
    question: "67.	वर्षा ऋतु के दौरान गाये जाने वाले राग का नाम है  ",
    answer: "मल्‍हार",
  },
  {
    round: "elimination",
    format: "text",
    question: "68.	असुरों के गुरु का नाम है  ",
    answer: "शुक्राचार्य",
  },
  {
    round: "elimination",
    format: "text",
    question: "69.	‘एक तपू हुए लोहे को, दूसरे तपे हुए लोहे से जोड़ देना ही ठीक है’ यह किसके द्वारा कहा गया है ",
    answer: "कालीदास",
  },
  {
    round: "elimination",
    format: "text",
    question: "70.	ओलम्पिक में भारत के लिए भाग लेने वाले पहले खिलाड़ी कौन थे ",
    answer: "नार्मन प्रिचर्ड 1900, 2 रजत पदक जीते",
  },
  {
    round: "elimination",
    format: "text",
    question: "71.	विश्‍व जूनियर शतरंज चैम्पियनशिप जीतने वाले पहले भारतीय ",
    answer: "विश्‍वनाथन आननद (2-8-1987)",
  },
  {
    round: "elimination",
    format: "text",
    question: "72.	खो-खो खेल में खिलाडि़यों की संख्‍या कितनी होती है  ",
    answer: "दोनों टीमें में 9-9",
  },
  {
    round: "elimination",
    format: "text",
    question: "73.	‘फ्लाइंग सिक्‍ख’ किसे कहा जाता है ",
    answer: "मिल्‍खा सिंह",
  },
  {
    round: "elimination",
    format: "text",
    question: "74.	राजर्वि नाम से प्रसिद्ध व्‍यक्ति जिन्‍हें भारत रत्‍न पुरस्‍कार दिया गया ",
    answer: "पुरुषोत्‍तम दास टंडन",
  },
  {
    round: "elimination",
    format: "text",
    question: "75.	असम के प्रसिद्ध नेता जिन्‍हें भारत रत्‍न से सम्‍मानित किया गया ",
    answer: "गोपीनाथ बोरडोलई",
  },
  {
    round: "elimination",
    format: "text",
    question: "76.	भारतीय वायुसेना दिवस कब मनाया जाता है ",
    answer: "8 अक्‍टूबर",
  },
  {
    round: "elimination",
    format: "text",
    question: "77.	महर्षि बाल्‍मीकि का बचपन का नाम क्‍या था ",
    answer: "रत्‍नाकर",
  },
  {
    round: "elimination",
    format: "text",
    question: "78.	भारत विकास परिषद ने रजत जयन्‍ती समारोह कहां आयोजित किया ",
    answer: "ताल कटोरा स्‍टेडियम, दिल्‍ली में",
  },
  {
    round: "elimination",
    format: "text",
    question: "79.	न्‍यूयार्क में किस संस्‍था का गठन हुआ था ",
    answer: "वेदान्‍त सोसायटी",
  },
  {
    round: "elimination",
    format: "text",
    question: "80.	स्‍वामी विवेकानन्‍द का निधन कब हुआ था ",
    answer: "4 जुलाई 1902",
  },
  {
    round: "elimination",
    format: "text",
    question: "81.	इन्डियन काउंसिल ऑफ मेडिकल रिसर्च कहां स्थित है ",
    answer: "नई दिल्‍ली",
  },
  {
    round: "elimination",
    format: "text",
    question: "82.	चांदी भारत के किन राज्‍यों में पाया जाता है ",
    answer: "राजस्‍थान, झारखण्‍ड",
  },
  {
    round: "elimination",
    format: "text",
    question: "83.	कर्ण का वध किसके हाथों हुआ था ",
    answer: "अर्जुन के द्वारा",
  },
  {
    round: "elimination",
    format: "text",
    question: "84.	भारत में इन्‍टरनेट की शुरुआत कब से हुई थी ",
    answer: "15 अगस्‍त 1995",
  },
  {
    round: "elimination",
    format: "text",
    question: "85.	राष्‍ट्रीय विज्ञान दिवस कब मनाया जाता है ",
    answer: "28 फरवरी",
  },
  {
    round: "elimination",
    format: "text",
    question: "86.	भारत में सबसे अधिक जनजाती किस राज्‍य में मिलती है ",
    answer: "मध्‍यप्रदेश में",
  },
  {
    round: "elimination",
    format: "text",
    question: "87.	काराकोरम दर्रा (पास) भारत को किस देश से जोड़ता है ",
    answer: "चीन",
  },
  {
    round: "elimination",
    format: "text",
    question: "88.	कान्‍हा राष्‍ट्रीय पार्क कहां स्थित है ",
    answer: "मध्‍यप्रदेश",
  },
  {
    round: "elimination",
    format: "text",
    question: "89.	नीली क्रांति किससे संबंधित है ",
    answer: "मछली उत्‍पादन",
  },
  {
    round: "elimination",
    format: "text",
    question: "90.	हल्‍दीघाटी किस राज्‍य में स्थित है ",
    answer: "राजस्‍थान",
  },
  {
    round: "elimination",
    format: "text",
    question: "91.	किस नदी घाटी में सर्वाधिक कोयला पाया जाता है ",
    answer: "दामोदर घाटी",
  },
  {
    round: "elimination",
    format: "text",
    question: "92.	चेन्‍नई बन्‍दरगाह किस तट पर स्थित है ",
    answer: "कोरोमण्‍डल तट",
  },
  {
    round: "elimination",
    format: "text",
    question: "93.	राज्‍यसभा के सदस्‍यों का कार्यकाल कितना होता है ",
    answer: "6 वर्ष",
  },
  {
    round: "elimination",
    format: "text",
    question: "94.	भारत में कपास का सर्वाधिक उत्‍पादन किस राज्‍य में होता है ",
    answer: "गुजरात",
  },
  {
    round: "elimination",
    format: "text",
    question: "95.	ATM  का पूरा नाम बताओ ",
    answer: "ऑटोमेटेड टेलर मशीन",
  },
  {
    round: "elimination",
    format: "text",
    question: "96.	भारतीय ध्‍वज की लंबाई-चौड़ाई का अनुपात क्‍या होता है ",
    answer: "3:2",
  },
  {
    round: "elimination",
    format: "text",
    question: "97.	मध्‍यप्रदेश का राजकीय खेल का नाम क्‍या है ",
    answer: "मलखम्‍भ",
  },
  {
    round: "elimination",
    format: "text",
    question: "98.	भारत का केन्‍द्रीय बैंक कौन सा है ",
    answer: "भारतीय रिजर्व बैंक",
  },
  {
    round: "elimination",
    format: "text",
    question: "99.	भारत और चीन सीमा के बीच की रेखा का नाम क्‍या है ",
    answer: "मैकमोहन रेखा",
  },
  {
    round: "elimination",
    format: "text",
    question: "100.	सम्राट अशोक किस धर्म का अनुयायी था ",
    answer: "बौद्ध धर्म",
  },
 
{round: 'passing', format: 'text', question: '1. भारत का राष्‍ट्र प्रमुख कौन होता है ', answer: ' राष्‍ट्रपति‍'},
 
{round: 'passing', format: 'text', question: '2. भारत का सर्वाधिक ऊंचाई पर स्थित युद्ध स्‍थल कौनसा है  ', answer: ' सियाचिन क्षेत्र (जम्‍मू कश्‍मीर)'},
 
{round: 'passing', format: 'text', question: '3. भारत का राष्‍ट्रध्‍वज क्‍या है  ', answer: ' तिरंगा'},
 
{round: 'passing', format: 'text', question: '4. भारत का राष्‍ट्र वृक्ष क्‍या है  ', answer: ' बरगद'},
 
{round: 'passing', format: 'text', question: '5. इंग्लिश चैनल तैरकर पार करने वाली प्रथम भारतीय महिला कौन थी  ', answer: ' आरती साहा'},
 
{round: 'passing', format: 'text', question: '6. भारत का सबसे बड़ा पशु मेला कौन सा है  ', answer: ' सोनपुर (विहार)'},
 
{round: 'passing', format: 'text', question: '7. सबसे बड़ा बैराज कौनसा है  ', answer: ' फरक्‍का बैराज गंगा पर बना, 2245 मी. लम्‍बा'},
 
{round: 'passing', format: 'text', question: '8. सबसे बड़ा कार्डियक अस्‍पताल कहां है  ', answer: ' मेदांता गुरुग्राम, 2400 बेड'},
 
{round: 'passing', format: 'text', question: '9.सम्राट अशोक के पिता का नाम क्‍या था  ', answer: ' बिन्‍दुसार'},
 
{round: 'passing', format: 'text', question: '10. ऐलोरा का कैलाश मंदिर किसके द्वारा बनवाया गया  ', answer: ' राष्‍ट्रकूट राजा कृष्‍ण प्रथम'},
 
{round: 'passing', format: 'text', question: '11. जालियांवाला हत्‍याकांड किस वर्ष में हुआ था  ', answer: ' 1919'},
 
{round: 'passing', format: 'text', question: '12. पंजाब के कूका आन्‍दोलन का प्रमुख नेता कौन था  ', answer: ' राम सिंह'},
 
{round: 'passing', format: 'text', question: '13. आजाद हिन्‍द फौज के मूल संस्‍थापक कौन थे  ', answer: ' रासबिहारी बोस एवं कैप्‍टन मोहन सिंह'},
 
{round: 'passing', format: 'text', question: '14. भारत का प्रमुख नागरिक किसे कहते हैं  ', answer: ' राष्‍ट्रपति'},
 
{round: 'passing', format: 'text', question: '15. भारत के प्रथम राष्‍ट्रपति जो दलित वर्ग से थे  ', answer: 'के. आर. नारायणन'},
 
{round: 'passing', format: 'text', question: '16. किसी प्रदेश के मुख्‍यमंत्री, जिनकी हत्‍या की गई थी  ', answer: ' बेअन्‍त सिंह, पंजाब, 31 अगस्‍त 1995 को '},
 
{round: 'passing', format: 'text', question: '17. पूर्वोत्‍तर भाग की सबसे शानदार नदी किसे माना जाता है ', answer: ' ब्रहम्‍मापुत्र'},
 
{round: 'passing', format: 'text', question: '18. कोचीन किस तट पर बसा हुआ है ', answer: ' मालवार तट'},

{round: 'passing', format: 'text', question: '19. रेगुर मिट्टी है ', answer: ' मरुस्‍थलीय मिट्टी'},
 
{round: 'passing', format: 'text', question: '20. भारत के मध्‍य से कौन सी रेखा गुजरती है ', answer: ' कर्क रेखा'},
 
{round: 'passing', format: 'text', question: '21. भारत की आकृति कैसी है ', answer: ' चतुष्‍कोणीय है'},
 
{round: 'passing', format: 'text', question: '22. भारत का सबसे ऊंचा बांध कौन सा है ', answer: ' टिहरी बांध'},

{round: 'passing', format: 'text', question: '23. कोटा किस नदी के किनारे स्थित है ', answer: ' चम्‍बल '},

{round: 'passing', format: 'text', question: '24. मानसून ऋतु में बोई जाने वाली फसलों को किस सामूहिक नाम से जाना जाता है ', answer: ' खरीफ'},
 
{round: 'passing', format: 'text', question: '25. सड़क नेटवर्क में भारत का विश्‍व में कौन सा स्‍थान है ', answer: ' तीसरा'},
 
{round: 'passing', format: 'text', question: '26. पाई (  π) के सन्निकट मान की गणना किस प्राचीन भारतीय गणितज्ञ ने सर्वप्रथम की थी ', answer: ' आर्यभट्ट'},
 
{round: 'passing', format: 'text', question: '27. त्रिदेव में किसकी पूजा सबसे कम होती है ', answer: 'ब्रहम्‍मा जी'},
 
{round: 'passing', format: 'text', question: '28. मां सरस्‍वती का वाहन क्‍या है ', answer: ' हंस'},
 
{round: 'passing', format: 'text', question: '29. देवी सरस्‍वती किसकी पुत्री हैं ', answer: ' ब्रहम्‍मा जी की'},
 
{round: 'passing', format: 'text', question: '30 .वेदों में सबसे बड़ा वेद कौन सा है ', answer: ' ऋग्‍वेद'},
 
{round: 'passing', format: 'text', question: '31. रामायण के रचनाकार का नाम बताओ ', answer: ' बाल्‍मीकी'},
 
{round: 'passing', format: 'text', question: '32. राजा दशरथ के कुल गुरु का नाम ', answer: ' वशिष्‍ठ'},
 
{round: 'passing', format: 'text', question: '33. श्री राम और शबरी का मिलाप कहां हुआ था ', answer: ' पम्‍पा सरोवर के निकट'},
 
{round: 'passing', format: 'text', question: '34. रावण की पटरानी का नाम ', answer: ' मन्‍दोदरी '},
 
{round: 'passing', format: 'text', question: '35. महाभारत के लेखन का कार्य किसने किया ', answer: ' गणेश जी ने'},
 
{round: 'passing', format: 'text', question: '36. कर्ण का वध किसके हाथों हुआ ', answer: ' अर्जुन के द्वारा'},




  
  //patiance questions start from here
  {
    round: "patianceA",
    format: "text",
    question: "1.	श्रीमद भागवत में कुल कितने अध्‍याय हैं ",
    answer: "335",
  },
  {
    round: "patianceB",
    format: "text",
    question: "2.	महावीर स्‍वामी को ज्ञान किस वृक्ष के नीचे प्राप्‍त हुआ था ",
    answer: "अशोक",
  },
  {
    round: "patianceC",
    format: "text",
    question: "3.	गीता में किस स्‍थान को धर्मक्षेत्र कहा गया है ",
    answer: "कुरुक्षेत्र",
  },
  {
    round: "patianceD",
    format: "text",
    question: "4.	चारों मठों की स्‍थापना किसने की थी ",
    answer: "आदि गुरु शंकराचार्य ने",
  },
  {
    round: "patianceE",
    format: "text",
    question: "5.	अनुसुइया किस ऋषि की पत्‍नी थीं ",
    answer: "अत्रि",
  },
  {
    round: "patianceF",
    format: "text",
    question: "6.	महाभारत के अध्‍यायों को क्‍या कहते हैं ",
    answer: "पर्व",
  },

  //sanskriti questions start from here
  {
    round: "khelA",
    format: "text",
    question: "1.	अब तक ओलम्पिक में भारत कितने पदक जीत चुका है ",
    answer: "35 (10 स्‍वर्ण, 9 रजत, 16 कांस्‍य )",
  },
  {
    round: "khelB",
    format: "text",
    question: "2.	टोक्‍यो ओलंपिक 2021 में किस खिलाड़ी ने बॉक्सिंग में भारत के लिए कांस्‍य पदक जीता ",
    answer: "लवलीना बोरगोहेन",
  },
  {
    round: "khelC",
    format: "text",
    question: "3.	टेस्‍ट मैचों में सर्वाधिक रन बनाने वाले भारतीय बल्‍लेबाज कौन हैं ",
    answer: "सचिन तेंदुलकर 15921 रन",
  },
  {
    round: "khelD",
    format: "text",
    question: "4.	टी-20 क्रिकेट में भारत की ओर से सर्वाधिक व्‍यक्तिगत स्‍कोर बनाने वाले खिलाड़ी कौन हैं ",
    answer: "शुभमन गिल 126 रन न्‍यूजीलैण्‍ड 2023 ",
  },
  {
    round: "khelE",
    format: "text",
    question: "5.	यू. एस. ओपन गोल्‍फ टूर्नामेंट खेलने वाले प्रथम भारतीय का नाम क्‍या है ",
    answer: "जीव मिल्‍खा सिंह 2002",
  },
  {
    round: "khelF",
    format: "text",
    question: "6.	राष्‍ट्रीय टेनिस प्रतिस्‍पर्धा कब शुरु हुई थी ",
    answer: "1946, कोलकाता में",
  },
  //Rajniti Questions start from here
  {
    round: "rajnitiiA",
    format: "text",
    question: "1. इन्दिरा गांधी पहली बार कब कांग्रेस अध्‍यक्ष बनीं थी ",
    answer: "1960",
  },
  {
    round: "rajnitiiB",
    format: "text",
    question: "2. भारत – पाक का कच्‍छ के रन में युद्ध कब हुआ था ",
    answer: "1965",
  },
  {
    round: "rajnitiiC",
    format: "text",
    question: "3.	सबसे कम समय तक भारत के राष्‍ट्रपति रहने वाले व्‍यक्ति कौन थे  ",
    answer: "डॉ. जाकिर हुसैन",
  },
  {
    round: "rajnitiiD",
    format: "text",
    question: "4.	भारतीय संसद के कौन कौन से अंग हैं ",
    answer: "राष्‍ट्रपति, लोकसभा, राज्‍यसभा",
  },
  {
    round: "rajnitiiE",
    format: "text",
    question: "5.	भारत में राज्‍यपाल बनने के लिए न्‍यूनतम आयु क्‍या है ",
    answer: "35 वर्ष",
  },
  {
    round: "rajnitiiF",
    format: "text",
    question: "6.	संसद के संयुक्‍त अधिवेशन की अध्‍यक्षता कौन करता है ",
    answer: "लोकसभा अध्‍यक्ष",
  },

  //Images Round start from here
  {
    round: "picture",
    format: "image",
    questionContent: 'SET-A यह भारत के किस भौतिक विज्ञानी का चित्र है जिन्होंने रमन प्रभाव की खोज कि थी',
    question: "images/4.jpeg",
    answer: "सी.वी. रमन",
  },
  {
    round: "picture",
    format: "image",
    questionContent: 'SET-B यह नेहा धूपिया का चित्र है , बताइए यह किस वर्ष में मिस भारत बनी थी',
    question: "images/neha.jpeg",
    answer: "2002",
  },
  {
    round: "picture",
    format: "image",
    questionContent: 'SET-C यह भारत के किस परंपरागत खेल का चित्र है',
    question: "images/mal.jpeg",
    answer: "मलखम्ब",
  },
  {
    round: "picture",
    format: "image",
    questionContent: 'SET-D यह भारत की किस ऐतिहासिक सभ्यता का दृश्य है',
    question: "images/pahad.jpeg",
    answer: "हड़प्पा और मोहनजोदड़ो",
  },
  {
    round: "picture",
    format: "image",
    questionContent: 'SET-E यह भारत की कौन सी प्रसिद्ध नृत्य कला है',
    question: "images/dance.jpeg",
    answer: "भरतनाट्यम",
  },
  // {
  //   round: "picture",
  //   format: "image",
  //   questionContent: 'SET-F यह भारतीय वैज्ञानिक का चित्र है, जिन्होंने परमाणु की खोज की थी इनका नाम बताइए',
  //   question: "images/rishi.jpeg",
  //   answer: "महर्षि कन्नड़",
  // },

  //Audio Round Start from here
  {
    round: "audio",
    format: "audio",
    questionContent: 'SET-A यह किस गाने की धुन है',
    question: "audios/aarambh.mpeg",
    answer: "आरंभ है प्रचंड",
  },
  {
    round: "audio",
    format: "audio",
    questionContent: 'SET-B यह किस अभिनेता की आवाज है',
    question: "audios/amit.mpeg",
    answer: "श्री अमिताभ बच्चन",
  },
  {
    round: "audio",
    format: "audio",
    questionContent: 'SET-C यह किस चलचित्र का वार्ता है',
    question: "audios/bahu.mpeg",
    answer: "बाहुबली",
  },
  {
    round: "audio",
    format: "audio",
    questionContent: 'SET-D यह भारत के किस क्रांतिकारी का नारा था',
    question: "audios/kranti.mpeg",
    answer: "सुभाष चंद्र बोस",
  },
  {
    round: "audio",
    format: "audio",
    questionContent: 'SET-E यह गाना किस गायका के द्वारा गया गया है',
    question: "audios/harsh.mpeg",
    answer: "हर्षदीप कौर",
  },
  // {
  //   round: "audio",
  //   format: "audio",
  //   questionContent: 'SET-F यह किस गाने की धुन है',
  //   question: "audios/2.mp3",
  //   answer: "Radha",
  // },

  //Video Round starts from here
  {
    round: "video",
    format: "video",
    questionContent: 'SET-A इस प्रसंग में राम जी द्वारा किसका उद्धार किया गया है',
    question: "videos/ram.mp4",
    answer: "माता अहिल्या",
  },
  {
    round: "video",
    format: "video",
    questionContent: 'SET-B इस मूर्ति का नाम क्या है',
    question: "videos/shiv.mp4",
    answer: "आदियोगी शिव",
  },
  {
    round: "video",
    format: "video",
    questionContent: 'SET-C यह भारत की किस प्रसिद्ध राजनेता का भाषण है',
    question: "videos/speech.mp4",
    answer: "प्रतिभा पाटिल",
  },
  {
    round: "video",
    format: "video",
    questionContent: 'SET-D यह भारत के किस हत्याकांड का दृश्य है',
    question: "videos/murder.mp4",
    answer: "जलियांवाला बाग हत्याकांड",
  },
  {
    round: "video",
    format: "video",
    questionContent: 'SET-E यह दुनिया की सबसे बड़ी प्रतिमा है यह किस नदी के तट पर स्थित है',
    question: "videos/vid.mp4",
    answer: "सरदार सरोवर dam",
  },
  // {
  //   round: "video",
  //   format: "video",
  //   questionContent: 'SET-F यह किस चलचित्र का दृश्य',
  //   question: "videos/sholay.mp4",
  //   answer: "शोले",
  // },
  //Fastest fastest from here

{round: 'fastest', format: 'text', question: '1. षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्‍य कौन सा है ', answer: 'राजस्‍थान'},
{round: 'fastest', format: 'text', question: '2. भारत के प्रथम श्रम मंत्री कौन थे  ', answer: ' बाबू जगजीवन राम '},
{round: 'fastest', format: 'text', question: '3. स्‍वतंत्र भारत में प्रथम आम चुनाव कब हुआ था  ', answer: ' 1952 में'},
{round: 'fastest', format: 'text', question: '4. सबसे ऊंची मीनार कौन सी है  ', answer: ' कुतुब मीनार, दिल्‍ली'},
{round: 'fastest', format: 'text', question: '5. भारत की प्रथम कार फैक्‍टरी कहां स्थित है  ', answer: ' हिन्‍द मोटर्स, कोलकाता'},
{round: 'fastest', format: 'text', question: '6.  पृथ्‍वीराज चौहान की अस्थियां कहां रखी थीं  ', answer: ' अफगानिस्‍तान में'},
{round: 'fastest', format: 'text', question: '7. मेवाड़ के राणा सांगा का पूरा नाम क्‍या था  ', answer: ' राणा संग्राम सिंह'},
{round: 'fastest', format: 'text', question: '8. राणा सांगा और राणा प्रताप का क्‍या संबंध था  ', answer: ' दादा-पोते'}, 
{round: 'fastest', format: 'text', question: '9. अवध के अंतिम नवाब का नाम बताओ  ', answer: ' वाजिद अली शाह'},
{round: 'fastest', format: 'text', question: '10. गुजरात में खेड़ा सत्‍याग्रह आन्‍दोलन का नेतृत्‍व महात्‍मा गांधी के साथ किसने किया था  ', answer: ' सरदार वल्‍लभभाई पटेल'},
{round: 'fastest', format: 'text', question: '11.  1943 में सिंगापुर में आजाद हिन्‍द फौज का नेतृत्‍व किसने किया था  ', answer: ' सुभाष चन्‍द्र बोस'},
{round: 'fastest', format: 'text', question: '12.  कांग्रेस (आई) के प्रथम अध्‍यक्ष कौन थे  ', answer: ' बाबू जगजीवन राम'},
{round: 'fastest', format: 'text', question: '13.  पैंथर पार्टी किस राज्‍य का राजनीतिक दल है  ', answer: ' जम्‍मू–कश्‍मीर'},
{round: 'fastest', format: 'text', question: '14.  राष्‍ट्रपति के चुनाव में सर्वाधिक अन्‍तर से जीतने वाले व्‍यक्ति कौन थे  ', answer: ' डॉ. राजेनद्र प्रसाद'},
{round: 'fastest', format: 'text', question: '15.  राज्‍य सभा में अधिकतम सदस्‍य संख्‍या किनती हो सकती है  ', answer: ' 250 सदस्‍य'},
{round: 'fastest', format: 'text', question: '16.  सर्वाधिक प्रतिशत वोट प्राप्‍त करने वाले राष्‍ट्रपति कौन थे  ', answer: ' डॉ. राजेन्‍द्र प्रसाद'},
{round: 'fastest', format: 'text', question: '17.  भारत में सर्वाधिक उगाई जाने वाली फसल कौन सी है  ', answer: ' चावल'},
{round: 'fastest', format: 'text', question: '18.  भारत में सबसे ज्‍यादा जूट मिलें किस प्रदेश में हैं  ', answer: ' पश्चिम बंगाल'},
{round: 'fastest', format: 'text', question: '19.  छोटा नागपुर किन उत्‍पादों के लिए प्रसिद्ध है  ', answer: ' खनिज सम्‍पदा'},
{round: 'fastest', format: 'text', question: '20.  निजी क्षेत्र में भारत का प्रथम बन्‍दरगाह किस प्रदेश में स्थित है  ', answer: ' गुजरात'}, 
{round: 'fastest', format: 'text', question: '21.  सतपुड़ा पर्वतीय श्रृंखला किन प्रदेशों में फैली हुई है  ', answer: ' मध्‍य प्रदेश, महाराष्‍ट्र व गुजरात'},
{round: 'fastest', format: 'text', question: '22.  भारत के पूर्वी कोने से पश्चिमी कोने तक दूरी कितनी है  ', answer: ' 2933 किलोमीटर'},
{round: 'fastest', format: 'text', question: '23.  लक्षद्वीप समूह किस सागर में स्थित है  ', answer: ' अरब सागर'},
{round: 'fastest', format: 'text', question: '24.  भारत में हीरे की खान कहां स्थित हैं ', answer: ' पन्‍ना (मध्‍यप्रदेश)'}, 
{round: 'fastest', format: 'text', question: '25.  भारत का सबसे बड़ा नदी द्वीप कौन सा है  ', answer: ' माजुली द्वीप'},
{round: 'fastest', format: 'text', question: '26.  भारत में कुल राज्‍य कितने हैं  ', answer: ' 28'},
{round: 'fastest', format: 'text', question: '27.  भारत का सबसे लंबा बांध कौन सा है  ', answer: 'हीराकुंड (25.79 किमी)'},
{round: 'fastest', format: 'text', question: '28.  बद्रीनाथ किस नदी के किनारे स्थित है   ', answer: 'अलकनन्‍दा'},
{round: 'fastest', format: 'text', question: '29.  सैन्‍ट्रल सोयल सैलाइनिटी रिसर्च इन्‍स्‍टीट्यूट कहां है  ', answer: ' करनाल (हरियाणा)'},
{round: 'fastest', format: 'text', question: '30.  नीति आयोग के अध्‍यक्ष कौन होते हैं  ', answer: ' भारत के प्रधानमंत्री '},
{round: 'fastest', format: 'text', question: '31.  भारत में स्‍टॉक मार्केट को कौन सी संस्‍था नियमित करती है  ', answer: ' सेबी (SEBI)'},
{round: 'fastest', format: 'text', question: '32.  किस कृषि उत्‍पाद में भारत को सबसे अधिक निर्यात मूल्‍य प्राप्‍त होता है  ', answer: ' बासमती चावल'},
{round: 'fastest', format: 'text', question: '33.  ‘श्‍वेत क्रांति’ किस वर्ष में प्रारंभ हुई  ', answer: ' 1970'},
{round: 'fastest', format: 'text', question: '34.  राचीन भारत के कौन से ऋषि विमान – प्रौद्योगिकी के ज्ञाता थे  ', answer: ' महर्षि भारद्वाज'},
{round: 'fastest', format: 'text', question: '35.  देवताओं के राजा का नाम बताओ  ', answer: ' देवता इन्‍द्र जी '},
{round: 'fastest', format: 'text', question: '36.  महिषासुर राक्षस का वध किसने किया था  ', answer: ' दुर्गा जी '},
{round: 'fastest', format: 'text', question: '37.  नवरात्रों के दूसरे दिन दुर्गा के किस रूप की पूजा की जाती है  ', answer: ' ब्रहम्‍चारिणी'}, 
{round: 'fastest', format: 'text', question: '38.  सूर्य की पुत्री किस नदी को माना जाता है  ', answer: ' यमुना नदी '},
{round: 'fastest', format: 'text', question: '39.  दशरथ किस राजवंश के राजा था  ', answer: ' इक्ष्‍वाकु '},
{round: 'fastest', format: 'text', question: '40.  गंगा किसकी तपस्‍या से धरती पर आई थी  ', answer: ' भागीरथी'},
{round: 'fastest', format: 'text', question: '41.  कौशिक ऋषि का रामायण में सामान्‍य नाम क्‍या है  ', answer: ' विश्‍वामित्र'},
{round: 'fastest', format: 'text', question: '42.  लक्ष्‍मण की पत्‍नी का नाम क्‍या था  ', answer: ' उर्मिला'},
{round: 'fastest', format: 'text', question: '43.  लंका पहुंचकर हनुमान जी की सर्वप्रथम भेंट किससे हुई थी  ', answer: ' लंकिनी (लंका की देवी)'},
{round: 'fastest', format: 'text', question: '44. लंका से वापस आते समय हनुमान ने किस पर्वत पर चढ़कर छलांग लगाई थी  ', answer: ' अरिष्‍ट पर्वत'},
{round: 'fastest', format: 'text', question: '45. लंकापुरी के कितने मुख्‍य द्वार थे  ', answer: ' चार '},
{round: 'fastest', format: 'text', question: '46. इन्‍द्र द्वारा भेजे गए रथ का सारथी कौन था  ', answer: ' मालति'},
{round: 'fastest', format: 'text', question: '47. कुश को कहां का राज्‍य मिला  ', answer: ' दक्षिण कौशल '},
{round: 'fastest', format: 'text', question: '48. वानरराज बाली कहां के शासक थे  ', answer: ' किष्किन्‍धा '}, 
{round: 'fastest', format: 'text', question: '49. श्री राम- लक्ष्‍मण की शूर्पणखा से भेंट कहां हुई थी  ', answer: ' पंचवटी'},
{round: 'fastest', format: 'text', question: '50. विभीषण की ज्‍येष्‍ठ पुत्री का नाम क्‍या था  ', answer: ' कला '},
{round: 'fastest', format: 'text', question: '51. जाम्‍बवन्‍त के भाई का क्‍या नाम था  ', answer: ' रीछ राज धूम'},
{round: 'fastest', format: 'text', question: '52. पाराशर गीता का वर्णन किस पर्व में है  ', answer: ' शान्ति पर्व'},
{round: 'fastest', format: 'text', question: '53. शान्‍तनु ने किस केवट कन्‍या से विवाह किया था  ', answer: ' सत्‍यवती'},
{round: 'fastest', format: 'text', question: '54. पांडु की माता का नाम क्‍या था  ', answer: ' अम्‍बालिका'},
{round: 'fastest', format: 'text', question: '55. गंधारी किस प्रदेश की राजकुमारी थी  ', answer: ' गंधार'},
{round: 'fastest', format: 'text', question: '56. कर्ण की जन्‍मदात्री माता का नाम बताइए  ', answer: ' कुन्‍ती'},
{round: 'fastest', format: 'text', question: '57. पाण्‍डवों के अज्ञातवास के समय द्रोपदी का छदम नाम क्‍या था  ', answer: ' सैरन्‍ध्री'},
{round: 'fastest', format: 'text', question: '58. भीष्‍म कितने दिन सेनापति रहे  ', answer: ' 10 दिन '},
{round: 'fastest', format: 'text', question: '59. शल्‍य कितने दिन सेनापति रहे  ', answer: ' 1 दिन '}, 
{round: 'fastest', format: 'text', question: '60. चक्रव्‍यूह की रचना किसने की थी  ', answer: ' गुरु द्रोणाचार्य ने'}, 
{round: 'fastest', format: 'text', question: '61. विराट तथा द्रुपद का वध किसने किया था  ', answer: ' द्रोणाचार्य '},
{round: 'fastest', format: 'text', question: '62. अश्‍वत्‍थामा हाथी को किसने मारा  ', answer: ' भीम ने '},
{round: 'fastest', format: 'text', question: '63. शल्‍य का वध किसके हाथों हुआ था  ', answer: ' युधिष्ठिर के द्वारा'},
{round: 'fastest', format: 'text', question: '64. युधिष्ठिर ने राज्‍य प्राप्ति के बाद किस को मंत्री घोषित किया था  ', answer: ' विदुर'},
{round: 'fastest', format: 'text', question: '65. एकलव्‍य के पिता का नाम क्‍या था  ', answer: ' हिरण्‍यधनु '},
{round: 'fastest', format: 'text', question: '66. जैन तीर्थ गोमतेश्‍वर किस प्रदेश में है  ', answer: ' कर्नाटक'},
{round: 'fastest', format: 'text', question: '67. कुचिपुडि़ किस प्रदेश का मुख्‍य नृत्‍य है  ', answer: ' आन्‍ध्र प्रदेश'},
{round: 'fastest', format: 'text', question: '68. भवई किस प्रदेश की कला है  ', answer: ' गुजरात '},
{round: 'fastest', format: 'text', question: '69. गण गौर किस प्रदेश का नृत्‍य है  ', answer: ' राजस्‍थान'},
{round: 'fastest', format: 'text', question: '70. असम में अंकिया नट एकांकी नाटकों के सूत्रधार का नाम बताएं  ', answer: ' शंकर देव'},
{round: 'fastest', format: 'text', question: '71. शहनाई किस प्रकार का वाद्य यंत्र है  ', answer: ' सुषिर '},
{round: 'fastest', format: 'text', question: '72. चन्‍द्रगुप्‍त के गुरु का नाम क्‍या है  ', answer: ' चाणक्‍य '},
{round: 'fastest', format: 'text', question: '73. महादेवी वर्मा की किताब का नाम  ', answer: ' यामा (ज्ञानपीठ पुरस्‍कार)'},
{round: 'fastest', format: 'text', question: '74. चन्‍दबरदाई की किताब का नाम  ', answer: ' पृथ्‍वीराज रासो '},
{round: 'fastest', format: 'text', question: '75. आचार्य रजनीश की किताब का नाम  ', answer: ' Beginning of the Beginning'},
{round: 'fastest', format: 'text', question: '76. ‘कृण्‍वन्‍तो विश्‍वमार्यम्’ यह नारा किसने दिया था  ', answer: ' स्‍वामी दयानन्‍द'},
{round: 'fastest', format: 'text', question: '77. ‘अंग्रेजों भारत छोड़ो’ यह नारा किसने दिया था  ', answer: ' महात्‍मा गांधी '}, 
{round: 'fastest', format: 'text', question: '78. ‘सूर्य, चन्‍द्रमा तथा सत्‍य लम्‍बे समय तक ओट में नहीं रह सकता’ यह नारा किसने दिया  ', answer: ' बुद्ध'},
{round: 'fastest', format: 'text', question: '79. ‘कौन ऐसा प्राणी है जो अपनों का विरह करा सकता है’ यह नारा किसने दिया  ', answer: ' बाणभट्ट '}, 
{round: 'fastest', format: 'text', question: '80. ‘नास्तिक वह है जिसे अपने पर विश्‍वास नहीं है’ यह नारा किसने दिया  ', answer: ' विवेकानन्‍द '},
{round: 'fastest', format: 'text', question: '81. ‘राजा जैसा आचरण करता है, प्रजा भी वैसा ही आचरण का पालन करती है’ यह किसने कहा  ', answer: ' बाल्‍मीकि'},
{round: 'fastest', format: 'text', question: '82. ‘सरल व्‍यक्ति का सभी तिरस्‍कार करते हैं’ यह किसने कहा  ', answer: ' बाल्‍मीकि '},
{round: 'fastest', format: 'text', question: '83. टोक्‍यो ओलंपिक 2021 में रवि कुमार दहिया ने कौन सा पदक जीता  ', answer: ' रजत पदक'},
{round: 'fastest', format: 'text', question: '84. आल इंग्‍लैण्‍ड बैडमिन्‍टन चैम्पियनशिप जीतने वाले प्रथम भारतीय  ', answer: ' प्रकाश पादुकोण'},
{round: 'fastest', format: 'text', question: '85. भारत का सबसे पुराना स्विमिंग क्‍लब कौन सा है  ', answer: ' कोलकाता स्विमिंग क्‍लब, 1887 '},
{round: 'fastest', format: 'text', question: '86. टेस्‍ट मैचों में सर्वाधिक शतक बनाने वाले भारतीय कौन थे  ', answer: ' सचिन तेंदुलकर 51 शतक'},
{round: 'fastest', format: 'text', question: '87. किसी टेस्‍ट मैच की पहली गेंद पर आउट करने वाले प्रथम भारतीय कौन थे  ', answer: ' आबिद अली'},
{round: 'fastest', format: 'text', question: '88. एक दिवसीय क्रिकेट मैचों में विश्‍वकप में हैट्रिक लेने वाले प्रथम भारतीय  ', answer: ' चेतन शर्मा '},
{round: 'fastest', format: 'text', question: '89. आई. सी. सी. के तीनों ट्रॉफी जीतने वाले विश्‍व के इकलौते भारतीय कप्‍तान  ', answer: ' महेन्‍द्र सिंह धौनी'},
{round: 'fastest', format: 'text', question: '90. महिला टेस्‍ट क्रिकेट में भारत की प्रथम कप्‍तान कौन थी  ', answer: ' शान्‍ता रंगास्‍वाम'},





  // ... othfastests ...
  // ... quefastestother rounds ...
];

let currentRoundQuestions = [];
let currentQuestionIndex = 0;
let currentRoundId = sidebarRounds[0];

// Show questions for the selected round
function showRoundQuestions(roundId) {
  currentQuestionIndex = 0;
  currentRoundQuestions = questions.filter((q) => q.round === roundId);
  if (currentRoundQuestions.length > 0) {
    showQuestion(currentQuestionIndex);
    showAnsBtn.style.display = "block";
    nextQuestionBtn.style.display = "block";
  } else {
    questionText.textContent = "This round has been completed.";
    answerText.textContent = "";
    showAnsBtn.style.display = "none";
    nextQuestionBtn.style.display = "none";
  }
}

// Show a specific question and its answer
function showQuestion(index) {
  const currentQuestion = currentRoundQuestions[index];
  questionText.textContent = currentQuestion.question;

  if (currentQuestion.format === "image") {
    questionText.innerHTML = `<p class="questionPara">${currentQuestion.questionContent}</p><img src="${currentQuestion.question}" alt="Question Image">`;
  } else if (currentQuestion.format === "audio") {
    questionText.innerHTML = `<p class="questionPara">${currentQuestion.questionContent}</p><audio controls><source src="${currentQuestion.question}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
  } else if (currentQuestion.format === "video") {
    questionText.innerHTML = `<p class="questionPara">${currentQuestion.questionContent}</p><video controls poster="images/poster.jpg"><source src="${currentQuestion.question}" type="video/mp4">Your browser does not support the video element.</video>`;
  }

  answerText.textContent = currentQuestion.answer;
  answerText.classList.add("hidden");
  showAnsBtn.textContent = "Show Answer";
}

// Toggle answer visibility
function showAnswer() {
  answerText.classList.toggle("hidden");
  showAnsBtn.textContent = answerText.classList.contains("hidden")
     ?"Show Answer"
    : "Hide Answer";
}

// Event listener for showing answer
showAnsBtn.addEventListener("click", showAnswer);

// Event listener for moving to the next question
nextQuestionBtn.addEventListener("click", () => {
  if (currentQuestionIndex < currentRoundQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    questionText.textContent = "This round has been completed .";
    answerText.textContent = "";
    showAnsBtn.textContent = "Show Answer";
    answerText.classList.add("hidden");
  }
});

// Event listener for round selection in the sidebar
roundList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "A") {
    const roundId = target.getAttribute("href").substring(1);
    if (sidebarRounds.includes(roundId)) {
      currentRoundId = roundId;
      showRoundQuestions(currentRoundId);
      event.preventDefault();
    }
  }
});

// Initialize default round and questions
showRoundQuestions(currentRoundId);

// document.addEventListener("DOMContentLoaded", function () {
//   const yearElement = document.getElementById("year");
//   const currentYear = new Date().getFullYear();
//   yearElement.textContent = currentYear;
// });
// // Show the modal when the copyright symbol is clicked
// copyrightSymbol.addEventListener("click", function () {
//   // modal.style.display = "block";
//   modal.classList.add("active");
// });

// // Close the modal when the close button is clicked
// closeModal.addEventListener("click", function () {
//   // modal.style.display = "none";
//   modal.classList.remove("active");
// });

// // Close the modal when clicking outside of it
// window.addEventListener("click", function (event) {
//   if (event.target == modal) {
//     // modal.style.display = "none";
//     modal.classList.remove("active");
//   }
// });
