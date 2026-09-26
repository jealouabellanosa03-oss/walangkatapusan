// =========================================================
// CYCLECARE - FULL FIXED SCRIPT.JS
// =========================================================


// =========================================================
// SYMPTOMS
// =========================================================

const symptoms = [
  'Cramps',
  'Headache',
  'Mood Swings',
  'Fatigue',
  'Acne',
  'Bloating',
  'Back Pain',
  'Tender Breasts'
];

const symptomIcons = [
  '♙',
  '◉',
  '☻',
  '▣',
  '◌',
  '♨',
  '♧',
  '♢'
];

let selectedSymptoms = JSON.parse(
  localStorage.getItem('ccSymptoms') ||
  '["Cramps","Headache","Mood Swings","Fatigue"]'
);


// Symptoms the user has typed in themselves, in addition
// to the built-in list above. Persisted so they stick
// around across visits.
let customSymptoms = JSON.parse(
  localStorage.getItem('ccCustomSymptoms') ||
  '[]'
);


// =========================================================
// CALENDAR
// =========================================================

let monthDate = new Date(2026, 7, 1);


// =========================================================
// LANGUAGE
// =========================================================

let currentLang =
  localStorage.getItem('ccLang') || 'English';

const originalTextMap = new WeakMap();


// =========================================================
// BISAYA TRANSLATIONS
// =========================================================

const bisaya = {

  // -------------------------
  // MENU / NAVIGATION
  // -------------------------

  'Home':
    'Balay',

  'Calendar':
    'Kalendaryo',

  'Profile':
    'Profile',

  'Language':
    'Pinulongan',

  'Menstrual Tips':
    'Mga Tip sa Regla',

  'Quiz':
    'Pangutana',

  'About App':
    'Mahitungod sa App',

  'About Developer':
    'Mahitungod sa Developer',


  // -------------------------
  // SPLASH
  // -------------------------

  'Menstrual Health Tracker':
    'Tagasubay sa Panglawas sa Regla',

  'Track your cycle, understand your symptoms,':
    'Subaybaya ang imong siklo ug sabta ang imong mga sintomas,',

  'and take better care of yourself.':
    'ug ampingi pag-ayo ang imong kaugalingon.',

  'Get Started':
    'Sugdi',


  // -------------------------
  // LOGIN
  // -------------------------

  'Log In':
    'Sulod',

  'Welcome to CycleCare!':
    'Maayong Pag-abot sa CycleCare!',

  'Enter your information to personalize your cycle tracking.':
    'Isulod ang imong impormasyon aron mapersonalize ang pagsubay sa imong siklo.',

  'Full Name':
    'Tibuok Ngalan',

  'Age':
    'Edad',

  'Average Cycle Length':
    'Kasagarang Gitas-on sa Siklo',

  'Select cycle length':
    'Pilia ang gitas-on sa siklo',

  'Period Length':
    'Gitas-on sa Regla',

  'Select period length':
    'Pilia ang gitas-on sa regla',

  'Last Period Start Date':
    'Petsa sa Pagsugod sa Kataposang Regla',

  'Ovulation Cycle':
    'Siklo sa Ovulation',

  'Enter your cycle length and last period date to calculate your estimated ovulation date.':
    'Isulod ang gitas-on sa imong siklo ug petsa sa kataposang regla aron makalkula ang gibanabana nga petsa sa ovulation.',

  'Calculate Ovulation':
    'Kalkulaha ang Ovulation',

  'Estimated ovulation date:':
    'Gibanabana nga petsa sa ovulation:',

  'Estimated fertile window: approximately 5 days before ovulation through ovulation day.':
    'Gibanabana nga fertile window: mga 5 ka adlaw sa wala pa ang ovulation hangtod sa adlaw sa ovulation.',

  'Please enter your cycle length and last period date.':
    'Palihog isulod ang gitas-on sa imong siklo ug petsa sa kataposang regla.',


  // -------------------------
  // HOME
  // -------------------------

  'Next Period':
    'Sunod nga Regla',

  'Track Cycle':
    'Subaybaya ang Siklo',

  'Symptoms':
    'Mga Sintomas',

  'Reminders':
    'Mga Pahinumdom',

  'History':
    'Kasaysayan',

  'Set your period date':
    'Ibutang ang petsa sa imong regla',

  'Track your cycle to get started':
    'Subaybaya ang imong siklo aron makasugod',

  'Period starts today':
    'Magsugod ang regla karon',

  'Period date has passed':
    'Milabay na ang petsa sa regla',

  'days left':
    'ka adlaw na lang',


  // -------------------------
  // CALENDAR
  // -------------------------

  'Period':
    'Regla',

  'Ovulation':
    'Ovulation',

  'Today':
    'Karon',

  'Reminder':
    'Pahinumdom',

  'Symptoms saved and added to the Calendar.':
    'Na-save ang mga sintomas ug gibutang sa Kalendaryo.',

  'Symptoms cleared and removed from the Calendar.':
    'Na-clear ang mga sintomas ug gitangtang sa Kalendaryo.',


  // -------------------------
  // SYMPTOMS
  // -------------------------

  'How are you feeling today?':
    'Kumusta ang imong gibati karon?',

  'Save':
    'I-save',

  'Symptoms saved':
    'Na-save ang mga sintomas',

  'No symptoms selected.':
    'Walay gipiling sintomas.',

  'Remove':
    'Kuhaa',

  'That symptom is already in your list.':
    'Naa na kana nga sintomas sa imong lista.',


  // -------------------------
  // REMINDERS
  // -------------------------

  'Period Reminder':
    'Pahinumdom sa Regla',

  '1 day before':
    '1 ka adlaw sa wala pa',

  'Ovulation Reminder':
    'Pahinumdom sa Ovulation',

  'On ovulation day':
    'Sa adlaw sa ovulation',

  'Drink Water':
    'Inom og Tubig',

  'Every day – 8:00 AM':
    'Adlaw-adlaw – 8:00 AM',

  'Take Medication':
    'Pag-inom og Tambal',

  'Every day – 9:00 AM':
    'Adlaw-adlaw – 9:00 AM',

  'Add Reminder':
    'Idugang nga Pahinumdom',

  'Reminder name':
    'Ngalan sa pahinumdom',

  'Cancel':
    'Kanselahon',

  'Add':
    'Idugang',

  'New Reminder':
    'Bag-ong Pahinumdom',

  'Reminder enabled':
    'Napagana ang pahinumdom',

  'Reminder disabled':
    'Napalong ang pahinumdom',


  // -------------------------
  // TRACK CYCLE
  // -------------------------

  'Save Cycle':
    'I-save ang Siklo',

  'Please select your period start date.':
    'Palihog pilia ang petsa sa pagsugod sa regla.',

  'Please select your period length.':
    'Palihog pilia ang gitas-on sa regla.',

  'Cycle saved successfully!':
    'Malampusong na-save ang siklo!',


  // -------------------------
  // PROFILE
  // -------------------------

  'Personal Information':
    'Personal nga Impormasyon',

  'My Credentials':
    'Akong Impormasyon',

  'Your cycle information':
    'Imong impormasyon sa siklo',

  'Your name':
    'Imong ngalan',

  'Your age':
    'Imong edad',

  'Cycle duration':
    'Gitas-on sa siklo',

  'Period duration':
    'Gitas-on sa regla',

  'Most recent start date':
    'Pinakabag-o nga petsa sa pagsugod',

  'Estimated date':
    'Gibanabana nga petsa',

  'Last Period':
    'Kataposang Regla',

  'Estimated Ovulation':
    'Gibanabana nga Ovulation',


  // -------------------------
  // ABOUT APP
  // -------------------------

  'App Version':
    'Bersyon sa App',

  'Purpose':
    'Katuyoan',

  'CycleCare is designed to help users record menstrual dates, symptoms, reminders, and cycle history in one simple mobile application.':
    'Ang CycleCare gihimo aron matabangan ang mga tiggamit sa pagrekord sa petsa sa regla, mga sintomas, mga pahinumdom, ug kasaysayan sa siklo sa usa ka yano nga mobile application.',

  'Support personal menstrual tracking and health awareness through an easy-to-use interface.':
    'Nagsuporta sa personal nga pagsubay sa regla ug kahibalo sa panglawas pinaagi sa sayon gamiton nga interface.',


  // -------------------------
  // ABOUT DEVELOPER
  // -------------------------

  'Developer Name':
    'Ngalan sa Developer',

  'Course / School':
    'Kurso / Eskwelahan',

  'Project':
    'Proyekto',

  'Technology':
    'Teknolohiya',

  'Acknowledgements':
    'Pagpasalamat',

  'CycleCare: Menstrual Health Tracker':
    'CycleCare: Tagasubay sa Panglawas sa Regla',

  'Offline HTML, CSS, and JavaScript prototype.':
    'Offline nga prototype gamit ang HTML, CSS, ug JavaScript.',

  'This section can contain contact information and project acknowledgements.':
    'Kini nga seksyon mahimong adunay contact information ug mga pagpasalamat sa proyekto.',

  'Change Photo':
    'Iliso ang Litrato',

  'Remove Photo':
    'Kuhaa ang Litrato',

  'Photo updated.':
    'Na-update ang litrato.',

  'Photo removed.':
    'Gikuha ang litrato.',

  'Please choose an image file.':
    'Palihog pagpili og image file.',

  'Image is too large. Please choose a photo under 3MB.':
    'Sobra ka dako ang imahe. Palihog pilia ang litrato nga ubos sa 3MB.',


  // -------------------------
  // MENSTRUAL TIPS
  // -------------------------

  'Stay Hydrated':
    'Pabiling Hydrated',

  'Eat Nutritious Foods':
    'Kaon og Masustansyang Pagkaon',

  'Get Enough Rest':
    'Pagpahulay og Igo',

  'Keep Good Hygiene':
    'Pagmintinar og Maayong Kalimpyo',

  'Track Your Symptoms':
    'Subaybaya ang Imong mga Sintomas',

  'Simple tips for menstrual health and comfort.':
    'Yano nga mga tip alang sa kahimsog ug kahupayan panahon sa regla.',

  'Drink enough water throughout the day to support hydration and overall well-being.':
    'Inom og igo nga tubig tibuok adlaw aron mapadayon ang hydration ug maayong kahimtang sa lawas.',

  'Choose balanced meals that include vegetables, fruits, protein, and whole grains.':
    'Pilia ang balanseng pagkaon nga adunay utanon, prutas, protina, ug whole grains.',

  'Give your body enough time to rest and recover, especially when experiencing menstrual discomfort.':
    'Hatagi og igong panahon ang imong lawas sa pagpahulay ug pagbawi, ilabi na kung adunay menstrual discomfort.',

  'Change menstrual products regularly and keep the body clean and comfortable.':
    'Ilisi kanunay ang menstrual products ug hupti nga limpyo ug komportable ang lawas.',

  'Recording symptoms can help you understand patterns throughout your menstrual cycle.':
    'Ang pagrekord sa mga sintomas makatabang sa pagsabot sa mga pattern sa imong siklo sa regla.',

  'Tap to view ›':
    'I-tap aron makita ›',

  'Done':
    'Human',


  // -------------------------
  // QUIZ
  // -------------------------

  'Menstrual Quiz':
    'Pangutana Bahin sa Regla',

  'Test your knowledge about menstrual health.':
    'Sulayi ang imong kahibalo bahin sa panglawas sa regla.',

  '10 Easy • 15 Intermediate • 20 Challenge':
    '10 Sayon • 15 Tunga-tunga • 20 Hagit',

  'Easy':
    'Sayon',

  'Intermediate':
    'Tunga-tunga',

  'Challenge':
    'Hagit',

  'Basic menstrual health knowledge • 10 questions':
    'Batakang kahibalo bahin sa panglawas sa regla • 10 ka pangutana',

  'Moderate menstrual health knowledge • 15 questions':
    'Tunga-tungang kahibalo bahin sa panglawas sa regla • 15 ka pangutana',

  'Advanced menstrual health knowledge • 20 questions':
    'Mas taas nga lebel nga kahibalo bahin sa panglawas sa regla • 20 ka pangutana',

  'Submit Quiz':
    'I-submit ang Pangutana',

  'View Score':
    'Tan-awa ang Score',

  'Quiz Result':
    'Resulta sa Pangutana',

  'Please answer all 45 questions.':
    'Palihog tubaga ang tanang 45 ka pangutana.',

  'Quiz submitted successfully.':
    'Malampusong na-submit ang pangutana.',

  'Please submit the quiz first.':
    'Palihog i-submit una ang pangutana.',

  'Question':
    'Pangutana',

  'of':
    'sa',

  'Previous':
    'Balik',

  'Next':
    'Sunod',

  'Answered':
    'Natubag na',

  'Excellent! You have a strong understanding of menstrual health.':
    'Maayo kaayo! Kusog ang imong kahibalo bahin sa panglawas sa regla.',

  'Very good! You have a good understanding of menstrual health.':
    'Maayo kaayo! Maayo ang imong pagsabot sa panglawas sa regla.',

  'Good effort! Review the topics and try again.':
    'Maayong paningkamot! Balika ang mga topic ug sulayi pag-usab.',

  'Keep learning! Review the menstrual health information and try again.':
    'Padayon sa pagkat-on! Balika ang impormasyon bahin sa panglawas sa regla ug sulayi pag-usab.',


  // -------------------------
  // HISTORY
  // -------------------------

  'Cycle Saved':
    'Na-save ang Siklo',

  'Symptoms Saved':
    'Na-save ang mga Sintomas',

  'Symptoms Cleared':
    'Na-clear ang mga Sintomas',

  'Reminder Added':
    'Nadugang ang Pahinumdom',

  'Reminder Enabled':
    'Napagana ang Pahinumdom',

  'Reminder Disabled':
    'Napalong ang Pahinumdom',

  'Quiz Completed':
    'Nahuman ang Quiz',

  'No history yet.':
    'Wala pay kasaysayan.',

  'No symptoms selected':
    'Walay gipiling sintomas',

  'Period Start':
    'Pagsugod sa Regla',

  'Period Length':
    'Gitas-on sa Regla',

  'Cycle Length':
    'Gitas-on sa Siklo',

  'Recorded':
    'Na-record',

  'Score':
    'Score',


  // -------------------------
  // MESSAGES
  // -------------------------

  'Correct answer':
    'Sakto nga tubag',

  'Try again':
    'Sulayi pag-usab',

  'Login successful!':
    'Malampusong nakasulod!',

  'Please complete all fields.':
    'Palihog kompletoha ang tanang field.',

  'Please enter a valid age.':
    'Palihog isulod ang hustong edad.'
};


// =========================================================
// TRANSLATION HELPER
// =========================================================

function t(text) {

  if (
    currentLang === 'Bisaya (Cebuano)' &&
    Object.prototype.hasOwnProperty.call(
      bisaya,
      text
    )
  ) {

    return bisaya[text];

  }

  return text;
}


// =========================================================
// TRANSLATE STATIC HTML TEXT
// =========================================================

function translateStaticText() {

  const walker =
    document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

  let node;

  while (
    node = walker.nextNode()
  ) {

    if (
      node.parentElement &&
      (
        node.parentElement.tagName === 'SCRIPT' ||
        node.parentElement.tagName === 'STYLE'
      )
    ) {

      continue;
    }


    const raw =
      node.nodeValue;

    const trimmed =
      raw.trim();


    if (!trimmed) {
      continue;
    }


    if (
      !originalTextMap.has(node)
    ) {

      originalTextMap.set(
        node,
        trimmed
      );
    }


    const original =
      originalTextMap.get(node);

    const translated =
      t(original);


    const leading =
      raw.match(/^\s*/)?.[0] || '';

    const trailing =
      raw.match(/\s*$/)?.[0] || '';


    node.nodeValue =
      leading +
      translated +
      trailing;
  }


  // -------------------------
  // PLACEHOLDERS
  // -------------------------

  document.querySelectorAll(
    '[placeholder]'
  ).forEach(
    input => {

      if (
        !input.dataset.originalPlaceholder
      ) {

        input.dataset.originalPlaceholder =
          input.getAttribute(
            'placeholder'
          );
      }


      input.setAttribute(
        'placeholder',
        t(
          input.dataset.originalPlaceholder
        )
      );

    }
  );


  // -------------------------
  // SELECT OPTIONS
  // -------------------------

  document.querySelectorAll(
    'select option'
  ).forEach(
    option => {

      if (
        !option.dataset.originalText
      ) {

        option.dataset.originalText =
          option.textContent.trim();
      }


      const original =
        option.dataset.originalText;


      const match =
        original.match(
          /^(\d+)\s+days$/
        );


      if (
        match &&
        currentLang === 'Bisaya (Cebuano)'
      ) {

        option.textContent =
          match[1] +
          ' ka adlaw';

      } else {

        option.textContent =
          t(original);
      }

    }
  );


  // -------------------------
  // PAGE TITLE
  // -------------------------

  document.title =
    currentLang === 'Bisaya (Cebuano)'
      ? 'CycleCare - Tagasubay sa Panglawas sa Regla'
      : 'CycleCare - Menstrual Health Tracker';
}


// =========================================================
// SHOW SCREEN
// =========================================================

function show(id) {

  document.querySelectorAll(
    '.screen'
  ).forEach(
    x =>
      x.classList.remove('active')
  );


  const screen =
    document.getElementById(id);


  if (!screen) {
    return;
  }


  screen.classList.add(
    'active'
  );


  const nav =
    document.getElementById('nav');


  if (nav) {

    nav.style.display =
      (
        id === 'splash' ||
        id === 'login'
      )
        ? 'none'
        : 'flex';
  }


  document.querySelectorAll(
    '.nav button'
  ).forEach(
    button => {

      button.classList.toggle(
        'active',
        button.dataset.page === id
      );

    }
  );


  // -------------------------
  // SCREEN UPDATES
  // -------------------------

  if (id === 'home') {

    updateHomeCycle();

  }


  if (id === 'calendar') {

    renderCalendar();

  }


  if (id === 'symptoms') {

    loadTodaySymptomsSelection();

    renderSymptoms();

  }


  if (id === 'history') {

    renderHistory();

  }


  if (id === 'profile') {

    loadProfile();

  }


  if (id === 'track') {

    loadTrackCycle();

  }


  if (id === 'quiz') {

    ensureQuizInterface();

    renderQuiz();

  }


  if (id === 'developer') {

    loadDeveloperPhoto();

  }


  translateStaticText();
}


// =========================================================
// TOAST
// =========================================================

function toast(msg) {

  const toastBox =
    document.getElementById(
      'toast'
    );


  if (!toastBox) {
    return;
  }


  toastBox.textContent =
    msg;


  toastBox.style.display =
    'block';


  clearTimeout(
    window.tt
  );


  window.tt =
    setTimeout(
      function() {

        toastBox.style.display =
          'none';

      },
      2500
    );
}


// =========================================================
// DATE KEY
// =========================================================

function getDateKey(
  date = new Date()
) {

  const year =
    date.getFullYear();


  const month =
    String(
      date.getMonth() + 1
    ).padStart(
      2,
      '0'
    );


  const day =
    String(
      date.getDate()
    ).padStart(
      2,
      '0'
    );


  return (
    year +
    '-' +
    month +
    '-' +
    day
  );
}


// =========================================================
// HISTORY STORAGE
// =========================================================

function getHistoryRecords() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(
          'ccHistory'
        ) || '[]'
      );


    return Array.isArray(saved)
      ? saved
      : [];

  } catch (error) {

    return [];

  }
}


// =========================================================
// SAVE HISTORY RECORD
// =========================================================

function addHistoryRecord(
  type,
  title,
  details
) {

  const history =
    getHistoryRecords();


  history.push({

    id:
      Date.now() +
      Math.random(),

    type:
      type,

    title:
      title,

    details:
      details || '',

    dateKey:
      getDateKey(),

    savedAt:
      new Date().toISOString()

  });


  localStorage.setItem(
    'ccHistory',
    JSON.stringify(
      history
    )
  );


  renderHistory();
}


// =========================================================
// GET HISTORY DISPLAY DATE
// =========================================================

function getHistoryDate(
  record
) {

  if (
    record.dateKey
  ) {

    const date =
      new Date(
        record.dateKey +
        'T00:00:00'
      );

    return date;
  }


  if (
    record.savedAt
  ) {

    return new Date(
      record.savedAt
    );
  }


  if (
    record.date
  ) {

    return new Date(
      record.date
    );
  }


  return new Date();
}


// =========================================================
// HISTORY SYMPTOM TRANSLATION
// =========================================================

function translateSymptomsForHistory(
  text
) {

  if (
    currentLang !== 'Bisaya (Cebuano)'
  ) {

    return text;
  }


  const symptomBisaya = {

    'Cramps':
      'Sakit sa tiyan',

    'Headache':
      'Sakit sa ulo',

    'Mood Swings':
      'Kausaban sa mood',

    'Fatigue':
      'Kakapoy',

    'Acne':
      'Pimples',

    'Bloating':
      'Pagburot sa tiyan',

    'Back Pain':
      'Sakit sa likod',

    'Tender Breasts':
      'Sakit sa suso'

  };


  return text
    .split(',')
    .map(
      function(item) {

        const name =
          item.trim();

        return (
          symptomBisaya[name] ||
          name
        );

      }
    )
    .join(', ');
}


// =========================================================
// HISTORY CYCLE DETAILS
// =========================================================

function translateCycleHistoryDetails(
  text
) {

  if (
    currentLang !== 'Bisaya (Cebuano)'
  ) {

    return text;
  }


  return text

    .replace(
      'Period Start:',
      'Pagsugod sa Regla:'
    )

    .replace(
      'Period Length:',
      'Gitas-on sa Regla:'
    )

    .replace(
      'Cycle Length:',
      'Gitas-on sa Siklo:'
    )

    .replace(
      'days',
      'ka adlaw'
    );
}


// =========================================================
// RENDER HISTORY
// =========================================================

function renderHistory() {

  const historyList =
    document.getElementById(
      'historyList'
    );


  if (!historyList) {
    return;
  }


  const history =
    getHistoryRecords();


  // -------------------------
  // NO HISTORY
  // -------------------------

  if (
    history.length === 0
  ) {

    historyList.innerHTML = `

      <div
        class="card"
        style="
          padding:25px 18px;
          text-align:center;
          color:#888;
          font-size:12px;
        "
      >

        <div
          style="
            font-size:34px;
            margin-bottom:8px;
          "
        >
          📝
        </div>

        ${
          t('No history yet.')
        }

      </div>

    `;

    return;
  }


  // -------------------------
  // NEWEST FIRST
  // -------------------------

  const sortedHistory =
    [...history].sort(
      function(a, b) {

        return (
          new Date(
            b.savedAt ||
            b.date ||
            0
          ) -
          new Date(
            a.savedAt ||
            a.date ||
            0
          )
        );

      }
    );


  historyList.innerHTML =
    sortedHistory
      .map(
        function(item) {

          let icon =
            '📝';

          let title =
            item.title ||
            'History';


          // -------------------------
          // TYPE ICON / TITLE
          // -------------------------

          if (
            item.type === 'cycle'
          ) {

            icon =
              '♥';

            title =
              t('Cycle Saved');

          }

          else if (
            item.type === 'symptom'
          ) {

            icon =
              '♥';

            title =
              item.title ===
              'Symptoms Cleared'

                ? t('Symptoms Cleared')

                : t('Symptoms Saved');

          }

          else if (
            item.type === 'reminder'
          ) {

            icon =
              '🔔';

            if (
              item.title ===
              'Reminder Enabled'
            ) {

              title =
                t('Reminder Enabled');

            }

            else if (
              item.title ===
              'Reminder Disabled'
            ) {

              title =
                t('Reminder Disabled');

            }

            else {

              title =
                t('Reminder Added');
            }

          }

          else if (
            item.type === 'quiz'
          ) {

            icon =
              '🏆';

            title =
              t('Quiz Completed');

          }


          // -------------------------
          // DISPLAY DATE
          // -------------------------

          const recordDate =
            getHistoryDate(
              item
            );


          const formattedDate =
            formatDateLocalized(
              recordDate,
              'short'
            );


          // -------------------------
          // DETAILS
          // -------------------------

          let details =
            item.details || '';


          if (
            item.type === 'symptom'
          ) {

            if (
              details ===
              'No symptoms selected'
            ) {

              details =
                t(
                  'No symptoms selected'
                );

            } else {

              details =
                translateSymptomsForHistory(
                  details
                );
            }
          }


          if (
            item.type === 'cycle'
          ) {

            details =
              translateCycleHistoryDetails(
                details
              );
          }


          if (
            item.type === 'quiz' &&
            currentLang === 'Bisaya (Cebuano)'
          ) {

            details =
              details.replace(
                'Score:',
                'Score:'
              );
          }


          return `

            <div
              class="history card"
            >

              <div
                class="historyIcon"
              >
                ${icon}
              </div>


              <div
                class="historyMain"
              >

                <div
                  style="
                    color:var(--purple2);
                    font-size:13px;
                    font-weight:800;
                  "
                >
                  ${title}
                </div>


                <div
                  class="historySub"
                >
                  ${formattedDate}
                </div>


                ${
                  details
                    ? `
                      <div
                        style="
                          color:#666;
                          font-size:10px;
                          line-height:1.5;
                          margin-top:5px;
                        "
                      >
                        ${details}
                      </div>
                    `
                    : ''
                }

              </div>


              <span
                style="
                  color:#aaa;
                  font-size:18px;
                "
              >
                ›
              </span>

            </div>

          `;

        }
      )
      .join('');
}


// =========================================================
// GET TODAY'S SYMPTOM RECORDS
// =========================================================

function getSymptomsByDate() {

  try {

    return JSON.parse(
      localStorage.getItem(
        'ccSymptomsByDate'
      ) || '{}'
    );

  } catch (error) {

    return {};

  }
}


// =========================================================
// LOAD TODAY'S SAVED SYMPTOMS
// =========================================================

function loadTodaySymptomsSelection() {

  const records =
    getSymptomsByDate();


  const todayKey =
    getDateKey();


  if (
    Object.prototype.hasOwnProperty.call(
      records,
      todayKey
    )
  ) {

    selectedSymptoms =
      Array.isArray(
        records[todayKey]
      )
        ? [
            ...records[todayKey]
          ]
        : [];


  } else {

    const savedGeneral =
      JSON.parse(
        localStorage.getItem(
          'ccSymptoms'
        ) ||
        '["Cramps","Headache","Mood Swings","Fatigue"]'
      );


    selectedSymptoms =
      Array.isArray(
        savedGeneral
      )
        ? [
            ...savedGeneral
          ]
        : [];
  }
}


// =========================================================
// SAVE TODAY'S SYMPTOMS
// =========================================================

function saveSymptomsForToday() {

  const records =
    getSymptomsByDate();


  const todayKey =
    getDateKey();


  if (
    selectedSymptoms.length === 0
  ) {

    delete records[
      todayKey
    ];

  } else {

    records[
      todayKey
    ] =
      [
        ...selectedSymptoms
      ];
  }


  localStorage.setItem(
    'ccSymptomsByDate',
    JSON.stringify(
      records
    )
  );


  localStorage.setItem(
    'ccSymptoms',
    JSON.stringify(
      selectedSymptoms
    )
  );
}


// =========================================================
// GET SAVED SYMPTOMS FOR A DATE
// =========================================================

function getSymptomsForDate(
  date
) {

  const records =
    getSymptomsByDate();


  const key =
    getDateKey(date);


  const list =
    records[key];


  return Array.isArray(list)
    ? list
    : [];
}


// =========================================================
// GET REMINDERS BY DATE
// =========================================================

function getRemindersByDate() {

  try {

    return JSON.parse(
      localStorage.getItem(
        'ccRemindersByDate'
      ) || '{}'
    );

  } catch (error) {

    return {};

  }
}


// =========================================================
// SAVE REMINDER FOR TODAY
// =========================================================

function saveReminderForToday(
  reminderName
) {

  const records =
    getRemindersByDate();


  const todayKey =
    getDateKey();


  if (
    !Array.isArray(
      records[todayKey]
    )
  ) {

    records[todayKey] =
      [];
  }


  records[todayKey].push({

    name:
      reminderName,

    savedAt:
      new Date().toISOString()

  });


  localStorage.setItem(
    'ccRemindersByDate',
    JSON.stringify(
      records
    )
  );
}


// =========================================================
// GET SAVED REMINDERS FOR A DATE
// =========================================================

function getRemindersForDate(
  date
) {

  const records =
    getRemindersByDate();


  const key =
    getDateKey(date);


  const list =
    records[key];


  return Array.isArray(list)
    ? list
    : [];
}


// =========================================================
// RENDER SYMPTOMS
// =========================================================

function renderSymptoms() {

  const list =
    document.getElementById(
      'symptomList'
    );


  if (!list) {
    return;
  }


  const symptomBisaya = {

    'Cramps':
      'Sakit sa tiyan',

    'Headache':
      'Sakit sa ulo',

    'Mood Swings':
      'Kausaban sa mood',

    'Fatigue':
      'Kakapoy',

    'Acne':
      'Pimples',

    'Bloating':
      'Pagburot sa tiyan',

    'Back Pain':
      'Sakit sa likod',

    'Tender Breasts':
      'Sakit sa suso'

  };


  // Built-in symptoms keep their own icon; anything the
  // user typed in themselves gets a shared "custom" icon
  // and a small remove (×) button.

  const allSymptoms =
    symptoms.map(
      function(s, i) {

        return {
          name: s,
          icon: symptomIcons[i],
          custom: false
        };
      }
    ).concat(
      customSymptoms.map(
        function(s) {

          return {
            name: s,
            icon: '✎',
            custom: true
          };
        }
      )
    );


  list.innerHTML =
    allSymptoms.map(
      function(item) {

        const name =
          currentLang === 'Bisaya (Cebuano)'
            ? (symptomBisaya[item.name] || item.name)
            : item.name;


        const selected =
          selectedSymptoms.includes(
            item.name
          );


        return `

          <div
            class="symRow"
            onclick="toggleSym('${item.name.replace(/'/g, "\\'")}')"
          >

            <span class="symIcon">
              ${item.icon}
            </span>


            <span class="symName">
              ${name}
            </span>


            ${
              item.custom
                ? `
                  <span
                    class="symRemove"
                    title="${t('Remove')}"
                    onclick="
                      event.stopPropagation();
                      removeCustomSymptom('${item.name.replace(/'/g, "\\'")}')
                    "
                  >
                    ×
                  </span>
                `
                : ''
            }


            <span class="check ${
              selected
                ? 'on'
                : ''
            }">

              ${
                selected
                  ? '✓'
                  : ''
              }

            </span>

          </div>

        `;

      }
    ).join('');
}


// =========================================================
// TOGGLE SYMPTOM
// Does NOT save until Save is pressed.
// =========================================================

function toggleSym(name) {

  const position =
    selectedSymptoms.indexOf(
      name
    );


  if (
    position >= 0
  ) {

    selectedSymptoms.splice(
      position,
      1
    );

  } else {

    selectedSymptoms.push(
      name
    );
  }


  renderSymptoms();
}


// =========================================================
// ADD CUSTOM SYMPTOM
// Lets the user type in a symptom that isn't in the
// built-in list. Newly added symptoms are auto-selected
// and persist for next time.
// =========================================================

function addCustomSymptom() {

  const input =
    document.getElementById(
      'customSymptomInput'
    );


  if (!input) {
    return;
  }


  const value =
    input.value.trim();


  if (!value) {
    return;
  }


  const alreadyExists =
    symptoms
      .concat(customSymptoms)
      .some(
        function(s) {

          return s.toLowerCase() ===
            value.toLowerCase();
        }
      );


  if (alreadyExists) {

    toast(
      t('That symptom is already in your list.')
    );

    input.value =
      '';

    return;
  }


  customSymptoms.push(
    value
  );


  selectedSymptoms.push(
    value
  );


  localStorage.setItem(
    'ccCustomSymptoms',
    JSON.stringify(
      customSymptoms
    )
  );


  input.value =
    '';


  renderSymptoms();
}


// =========================================================
// REMOVE CUSTOM SYMPTOM
// =========================================================

function removeCustomSymptom(name) {

  customSymptoms =
    customSymptoms.filter(
      function(s) {

        return s !==
          name;
      }
    );


  selectedSymptoms =
    selectedSymptoms.filter(
      function(s) {

        return s !==
          name;
      }
    );


  localStorage.setItem(
    'ccCustomSymptoms',
    JSON.stringify(
      customSymptoms
    )
  );


  renderSymptoms();
}


// =========================================================
// SAVE SYMPTOMS
// SAVE -> CALENDAR + HISTORY
// =========================================================

function saveSymptoms() {

  saveSymptomsForToday();


  const today =
    new Date();


  // -------------------------
  // ADD HISTORY
  // -------------------------

  if (
    selectedSymptoms.length > 0
  ) {

    addHistoryRecord(
      'symptom',
      'Symptoms Saved',
      selectedSymptoms.join(', ')
    );

  } else {

    addHistoryRecord(
      'symptom',
      'Symptoms Cleared',
      'No symptoms selected'
    );
  }


  // -------------------------
  // CURRENT MONTH
  // -------------------------

  monthDate =
    new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );


  renderCalendar();


  // -------------------------
  // TOAST
  // -------------------------

  if (
    selectedSymptoms.length === 0
  ) {

    toast(
      currentLang === 'Bisaya (Cebuano)'
        ? 'Na-clear ang mga sintomas ug gitangtang sa Kalendaryo.'
        : 'Symptoms cleared and removed from the Calendar.'
    );

  } else {

    toast(
      currentLang === 'Bisaya (Cebuano)'
        ? 'Na-save ang mga sintomas ug gibutang sa Kalendaryo.'
        : 'Symptoms saved and added to the Calendar.'
    );
  }


  // -------------------------
  // GO TO CALENDAR
  // -------------------------

  setTimeout(
    function() {

      show('calendar');

    },
    600
  );
}


// =========================================================
// RENDER CALENDAR
// =========================================================

function renderCalendar() {

  const grid =
    document.getElementById(
      'calendarGrid'
    );


  const title =
    document.getElementById(
      'monthTitle'
    );


  if (
    !grid ||
    !title
  ) {
    return;
  }


  const year =
    monthDate.getFullYear();


  const monthValue =
    monthDate.getMonth();


  const englishMonths = [

    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'

  ];


  const bisayaMonths = [

    'Enero',
    'Pebrero',
    'Marso',
    'Abril',
    'Mayo',
    'Hunyo',
    'Hulyo',
    'Agosto',
    'Septyembre',
    'Oktubre',
    'Nobyembre',
    'Disyembre'

  ];


  const monthNames =
    currentLang === 'Bisaya (Cebuano)'
      ? bisayaMonths
      : englishMonths;


  title.textContent =
    monthNames[
      monthValue
    ] +
    ' ' +
    year;


  grid.innerHTML =
    '';


  const firstDay =
    new Date(
      year,
      monthValue,
      1
    ).getDay();


  const daysInMonth =
    new Date(
      year,
      monthValue + 1,
      0
    ).getDate();


  const user =
    JSON.parse(
      localStorage.getItem(
        'cyclecareUser'
      )
    );


  let periodStart =
    null;


  let periodLength =
    5;


  let cycleLength =
    28;


  if (user) {

    if (user.lastPeriod) {

      periodStart =
        new Date(
          user.lastPeriod +
          'T00:00:00'
        );
    }


    if (
      user.periodLength
    ) {

      periodLength =
        parseInt(
          user.periodLength
        );
    }


    if (
      user.cycleLength
    ) {

      cycleLength =
        parseInt(
          user.cycleLength
        );
    }
  }


  // -------------------------
  // OVULATION
  // -------------------------

  let ovulationDate =
    null;


  if (
    periodStart
  ) {

    ovulationDate =
      new Date(
        periodStart
      );


    ovulationDate.setDate(
      ovulationDate.getDate() +
      cycleLength -
      14
    );
  }


  // -------------------------
  // TODAY
  // -------------------------

  const today =
    new Date();


  today.setHours(
    0,
    0,
    0,
    0
  );


  // -------------------------
  // EMPTY CELLS
  // -------------------------

  for (
    let i = 0;
    i < firstDay;
    i++
  ) {

    const empty =
      document.createElement(
        'div'
      );


    empty.className =
      'day empty';


    grid.appendChild(
      empty
    );
  }


  // -------------------------
  // CALENDAR DAYS
  // -------------------------

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {

    const date =
      new Date(
        year,
        monthValue,
        day
      );


    const cell =
      document.createElement(
        'div'
      );


    cell.className =
      'day';


    // -------------------------
    // DATE NUMBER
    // -------------------------

    const number =
      document.createElement(
        'span'
      );


    number.className =
      'dayNumber';


    number.textContent =
      day;


    cell.appendChild(
      number
    );


    // -------------------------
    // PERIOD
    // -------------------------

    if (
      periodStart
    ) {

      const periodEnd =
        new Date(
          periodStart
        );


      periodEnd.setDate(
        periodEnd.getDate() +
        periodLength -
        1
      );


      if (
        date >= periodStart &&
        date <= periodEnd
      ) {

        cell.classList.add(
          'period'
        );
      }
    }


    // -------------------------
    // OVULATION
    // -------------------------

    if (
      ovulationDate &&
      date.toDateString() ===
      ovulationDate.toDateString()
    ) {

      cell.classList.add(
        'ovulation'
      );
    }


    // -------------------------
    // TODAY
    // -------------------------

    if (
      date.toDateString() ===
      today.toDateString()
    ) {

      cell.classList.add(
        'today'
      );
    }


    // -------------------------
    // SYMPTOMS FOR THIS DATE
    // -------------------------

    const savedSymptoms =
      getSymptomsForDate(
        date
      );


    // -------------------------
    // REMINDERS FOR THIS DATE
    // -------------------------

    const savedReminders =
      getRemindersForDate(
        date
      );


    // -------------------------
    // SYMPTOM MARKER
    // -------------------------

    if (
      savedSymptoms.length > 0
    ) {

      cell.classList.add(
        'symptomDay'
      );


      const symptomMark =
        document.createElement(
          'span'
        );


      symptomMark.className =
        'calendarSymptomMark';


      symptomMark.textContent =
        '♥';


      symptomMark.title =
        (
          currentLang === 'Bisaya (Cebuano)'
            ? 'Mga Sintomas: '
            : 'Symptoms: '
        ) +
        savedSymptoms.join(
          ', '
        );


      cell.appendChild(
        symptomMark
      );
    }


    // -------------------------
    // REMINDER MARKER
    // -------------------------

    if (
      savedReminders.length > 0
    ) {

      cell.classList.add(
        'reminderDay'
      );


      const reminderMark =
        document.createElement(
          'span'
        );


      reminderMark.className =
        'calendarReminderMark';


      reminderMark.textContent =
        '🔔';


      reminderMark.title =
        (
          currentLang === 'Bisaya (Cebuano)'
            ? 'Mga Pahinumdom: '
            : 'Reminders: '
        ) +
        savedReminders
          .map(
            item =>
              item.name
          )
          .join(', ');


      cell.appendChild(
        reminderMark
      );
    }


    // -------------------------
    // DATE CLICK
    // -------------------------

    if (
      savedSymptoms.length > 0 ||
      savedReminders.length > 0
    ) {

      cell.style.cursor =
        'pointer';


      cell.onclick =
        function() {

          const parts =
            [];


          if (
            savedSymptoms.length > 0
          ) {

            parts.push(
              (
                currentLang === 'Bisaya (Cebuano)'
                  ? 'Mga Sintomas: '
                  : 'Symptoms: '
              ) +
              savedSymptoms.join(
                ', '
              )
            );
          }


          if (
            savedReminders.length > 0
          ) {

            parts.push(
              (
                currentLang === 'Bisaya (Cebuano)'
                  ? 'Mga Pahinumdom: '
                  : 'Reminders: '
              ) +
              savedReminders
                .map(
                  item =>
                    item.name
                )
                .join(', ')
            );
          }


          toast(
            parts.join(
              ' • '
            )
          );
        };
    }


    grid.appendChild(
      cell
    );
  }
}


// =========================================================
// MONTH NAVIGATION
// =========================================================

function month(n) {

  monthDate.setMonth(
    monthDate.getMonth() +
    n
  );


  renderCalendar();
}


// =========================================================
// UPDATE HOME
// =========================================================

function updateHomeCycle() {

  const user =
    JSON.parse(
      localStorage.getItem(
        'cyclecareUser'
      )
    );


  const nextDateElement =
    document.getElementById(
      'nextDate'
    );


  const daysLeftElement =
    document.getElementById(
      'daysLeft'
    );


  if (
    !user ||
    !user.lastPeriod ||
    !user.cycleLength
  ) {

    if (
      nextDateElement
    ) {

      nextDateElement.textContent =
        currentLang === 'Bisaya (Cebuano)'
          ? 'Ibutang ang petsa sa imong regla'
          : 'Set your period date';
    }


    if (
      daysLeftElement
    ) {

      daysLeftElement.textContent =
        currentLang === 'Bisaya (Cebuano)'
          ? 'Subaybaya ang imong siklo aron makasugod'
          : 'Track your cycle to get started';
    }


    return;
  }


  const lastPeriod =
    new Date(
      user.lastPeriod +
      'T00:00:00'
    );


  const nextPeriod =
    new Date(
      lastPeriod
    );


  nextPeriod.setDate(
    nextPeriod.getDate() +
    parseInt(
      user.cycleLength
    )
  );


  if (
    nextDateElement
  ) {

    nextDateElement.textContent =
      nextPeriod.toLocaleDateString(
        'en-US',
        {
          month:
            'short',

          day:
            'numeric',

          year:
            'numeric'
        }
      );
  }


  const today =
    new Date();


  today.setHours(
    0,
    0,
    0,
    0
  );


  const days =
    Math.ceil(
      (
        nextPeriod -
        today
      ) /
      (
        1000 *
        60 *
        60 *
        24
      )
    );


  if (
    daysLeftElement
  ) {

    if (
      days > 0
    ) {

      daysLeftElement.textContent =
        currentLang === 'Bisaya (Cebuano)'
          ? days +
            ' ka adlaw na lang'
          : days +
            ' days left';


    } else if (
      days === 0
    ) {

      daysLeftElement.textContent =
        currentLang === 'Bisaya (Cebuano)'
          ? 'Magsugod ang regla karon'
          : 'Period starts today';


    } else {

      daysLeftElement.textContent =
        currentLang === 'Bisaya (Cebuano)'
          ? 'Milabay na ang petsa sa regla'
          : 'Period date has passed';
    }
  }
}


// =========================================================
// SAVE CYCLE
// SAVE -> CALENDAR + HISTORY
// =========================================================

function saveCycle() {

  const periodDate =
    document.getElementById(
      'periodDate'
    ).value;


  const periodLength =
    document.getElementById(
      'periodLength'
    ).value;


  if (!periodDate) {

    toast(
      currentLang === 'Bisaya (Cebuano)'
        ? 'Palihog pilia ang petsa sa pagsugod sa regla.'
        : 'Please select your period start date.'
    );


    return;
  }


  if (!periodLength) {

    toast(
      currentLang === 'Bisaya (Cebuano)'
        ? 'Palihog pilia ang gitas-on sa regla.'
        : 'Please select your period length.'
    );


    return;
  }


  let user =
    JSON.parse(
      localStorage.getItem(
        'cyclecareUser'
      )
    ) || {};


  user.lastPeriod =
    periodDate;


  user.periodLength =
    parseInt(
      periodLength
    );


  localStorage.setItem(
    'cyclecareUser',
    JSON.stringify(
      user
    )
  );


  // -------------------------
  // HISTORY
  // -------------------------

  const cycleLength =
    user.cycleLength ||
    28;


  const selectedDate =
    new Date(
      periodDate +
      'T00:00:00'
    );


  let cycleDetails =
    'Period Start: ' +
    formatDateLocalized(
      selectedDate,
      'short'
    ) +
    ' • Period Length: ' +
    periodLength +
    ' days' +
    ' • Cycle Length: ' +
    cycleLength +
    ' days';


  addHistoryRecord(
    'cycle',
    'Cycle Saved',
    cycleDetails
  );


  // -------------------------
  // CALENDAR
  // -------------------------

  monthDate =
    new Date(
      periodDate +
      'T00:00:00'
    );


  updateHomeCycle();

  renderCalendar();

  loadProfile();


  toast(
    currentLang === 'Bisaya (Cebuano)'
      ? 'Malampusong na-save ang siklo!'
      : 'Cycle saved successfully!'
  );


  setTimeout(
    function() {

      show('calendar');

    },
    700
  );
}


// =========================================================
// LOAD TRACK CYCLE
// =========================================================

function loadTrackCycle() {

  const user =
    JSON.parse(
      localStorage.getItem(
        'cyclecareUser'
      )
    );


  if (!user) {
    return;
  }


  const periodDate =
    document.getElementById(
      'periodDate'
    );


  const periodLength =
    document.getElementById(
      'periodLength'
    );


  if (
    periodDate &&
    user.lastPeriod
  ) {

    periodDate.value =
      user.lastPeriod;
  }


  if (
    periodLength &&
    user.periodLength
  ) {

    periodLength.value =
      String(
        user.periodLength
      );
  }
}


// =========================================================
// REMINDERS
// =========================================================

function toggleSwitch(el) {

  if (!el) {
    return;
  }


  el.classList.toggle(
    'on'
  );


  const enabled =
    el.classList.contains(
      'on'
    );


  // -------------------------
  // GET REMINDER NAME
  // -------------------------

  const reminderCard =
    el.closest(
      '.rem'
    );


  let reminderName =
    'Reminder';


  if (
    reminderCard
  ) {

    const titleElement =
      reminderCard.querySelector(
        '.remTitle'
      );


    if (
      titleElement
    ) {

      reminderName =
        titleElement.textContent.trim();
    }
  }


  // -------------------------
  // HISTORY
  // -------------------------

  addHistoryRecord(
    'reminder',
    enabled
      ? 'Reminder Enabled'
      : 'Reminder Disabled',
    reminderName
  );


  // -------------------------
  // TOAST
  // -------------------------

  toast(
    currentLang === 'Bisaya (Cebuano)'
      ? (
          enabled
            ? 'Napagana ang pahinumdom'
            : 'Napalong ang pahinumdom'
        )
      : (
          enabled
            ? 'Reminder enabled'
            : 'Reminder disabled'
        )
  );
}


// =========================================================
// OPEN ADD REMINDER
// =========================================================

function addReminder() {

  const modal =
    document.getElementById(
      'modal'
    );


  const input =
    document.getElementById(
      'remName'
    );


  if (
    modal
  ) {

    modal.classList.add(
      'open'
    );
  }


  if (
    input
  ) {

    input.focus();
  }
}


// =========================================================
// CLOSE REMINDER MODAL
// =========================================================

function closeModal() {

  const modal =
    document.getElementById(
      'modal'
    );


  if (
    modal
  ) {

    modal.classList.remove(
      'open'
    );
  }
}


// =========================================================
// SAVE REMINDER
// SAVE -> CALENDAR + HISTORY
// =========================================================

function saveReminder() {

  const input =
    document.getElementById(
      'remName'
    );


  if (!input) {
    return;
  }


  const enteredName =
    input.value.trim();


  const defaultName =
    currentLang === 'Bisaya (Cebuano)'
      ? 'Bag-ong Pahinumdom'
      : 'New Reminder';


  const name =
    enteredName ||
    defaultName;


  // -------------------------
  // SAVE BY DATE
  // -------------------------

  saveReminderForToday(
    name
  );


  // -------------------------
  // SAVE HISTORY
  // -------------------------

  addHistoryRecord(
    'reminder',
    'Reminder Added',
    name
  );


  // -------------------------
  // CLOSE MODAL
  // -------------------------

  closeModal();


  input.value =
    '';


  // -------------------------
  // SHOW CURRENT MONTH
  // -------------------------

  const today =
    new Date();


  monthDate =
    new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );


  renderCalendar();


  // -------------------------
  // TOAST
  // -------------------------

  toast(
    currentLang === 'Bisaya (Cebuano)'
      ? name +
        ' gibutang sa Kalendaryo.'
      : name +
        ' added to the Calendar.'
  );


  // -------------------------
  // GO TO CALENDAR
  // -------------------------

  setTimeout(
    function() {

      show('calendar');

    },
    600
  );
}


// =========================================================
// DRAWER
// =========================================================

function openDrawer() {

  const drawer =
    document.getElementById(
      'drawer'
    );


  const shade =
    document.getElementById(
      'drawerShade'
    );


  if (
    drawer
  ) {

    drawer.classList.add(
      'open'
    );
  }


  if (
    shade
  ) {

    shade.classList.add(
      'open'
    );
  }
}


// =========================================================
// CLOSE DRAWER
// =========================================================

function closeDrawer() {

  const drawer =
    document.getElementById(
      'drawer'
    );


  const shade =
    document.getElementById(
      'drawerShade'
    );


  if (
    drawer
  ) {

    drawer.classList.remove(
      'open'
    );
  }


  if (
    shade
  ) {

    shade.classList.remove(
      'open'
    );
  }
}


// =========================================================
// LANGUAGE MENU
// =========================================================

function toggleLanguageMenu() {

  const menu =
    document.getElementById(
      'langChoice'
    );


  const arrow =
    document.getElementById(
      'languageArrow'
    );


  if (!menu) {
    return;
  }


  menu.classList.toggle(
    'open'
  );


  if (
    arrow
  ) {

    arrow.textContent =
      menu.classList.contains(
        'open'
      )
        ? '⌃'
        : '›';
  }
}


// =========================================================
// SET LANGUAGE
// =========================================================

function setLang(
  lang
) {

  currentLang =
    lang;


  localStorage.setItem(
    'ccLang',
    lang
  );


  const en =
    document.getElementById(
      'langEn'
    );


  const bis =
    document.getElementById(
      'langBis'
    );


  if (
    en
  ) {

    en.classList.toggle(
      'selected',
      lang === 'English'
    );
  }


  if (
    bis
  ) {

    bis.classList.toggle(
      'selected',
      lang === 'Bisaya (Cebuano)'
    );
  }


  translateStaticText();


  // -------------------------
  // DYNAMIC CONTENT
  // -------------------------

  renderSymptoms();

  renderCalendar();

  renderHistory();

  updateHomeCycle();

  loadProfile();


  // -------------------------
  // QUIZ
  // -------------------------

  ensureQuizInterface();

  renderQuiz();


  // -------------------------
  // KEEP MENU OPEN
  // -------------------------

  const menu =
    document.getElementById(
      'langChoice'
    );


  const arrow =
    document.getElementById(
      'languageArrow'
    );


  if (
    menu
  ) {

    menu.classList.add(
      'open'
    );
  }


  if (
    arrow
  ) {

    arrow.textContent =
      '⌃';
  }


  toast(
    lang === 'Bisaya (Cebuano)'
      ? 'Pinulongan: Bisaya'
      : 'Language: English'
  );
}


// =========================================================
// LOGIN
// =========================================================

function loginUser() {

  const name =
    document
      .getElementById(
        'loginName'
      )
      .value
      .trim();


  const age =
    document
      .getElementById(
        'loginAge'
      )
      .value;


  const cycleLength =
    document
      .getElementById(
        'loginCycleLength'
      )
      .value;


  const periodLength =
    document
      .getElementById(
        'loginPeriodLength'
      )
      .value;


  const lastPeriod =
    document
      .getElementById(
        'loginLastPeriod'
      )
      .value;


  if (
    !name ||
    !age ||
    !cycleLength ||
    !periodLength ||
    !lastPeriod
  ) {

    toast(
      currentLang === 'Bisaya (Cebuano)'
        ? 'Palihog kompletoha ang tanang field.'
        : 'Please complete all fields.'
    );


    return;
  }


  if (
    Number(age) < 10 ||
    Number(age) > 100
  ) {

    toast(
      currentLang === 'Bisaya (Cebuano)'
        ? 'Palihog isulod ang hustong edad.'
        : 'Please enter a valid age.'
    );


    return;
  }


  const user = {

    name:
      name,

    age:
      age,

    cycleLength:
      parseInt(
        cycleLength
      ),

    periodLength:
      parseInt(
        periodLength
      ),

    lastPeriod:
      lastPeriod

  };


  localStorage.setItem(
    'cyclecareUser',
    JSON.stringify(
      user
    )
  );


  monthDate =
    new Date(
      lastPeriod +
      'T00:00:00'
    );


  toast(
    currentLang === 'Bisaya (Cebuano)'
      ? 'Malampusong nakasulod!'
      : 'Login successful!'
  );


  setTimeout(
    function() {

      show('home');

    },
    700
  );
}


// =========================================================
// LOGIN OVULATION CALCULATION
// =========================================================

function calculateLoginOvulation() {

  const cycleLength =
    parseInt(
      document.getElementById(
        'loginCycleLength'
      ).value
    );


  const lastPeriodValue =
    document.getElementById(
      'loginLastPeriod'
    ).value;


  const result =
    document.getElementById(
      'loginOvulationInfo'
    );


  if (
    !cycleLength ||
    !lastPeriodValue
  ) {

    result.textContent =
      currentLang === 'Bisaya (Cebuano)'
        ? 'Palihog isulod ang gitas-on sa imong siklo ug petsa sa kataposang regla.'
        : 'Please enter your cycle length and last period date.';


    return;
  }


  const lastPeriod =
    new Date(
      lastPeriodValue +
      'T00:00:00'
    );


  const ovulationDay =
    cycleLength -
    14;


  const ovulationDate =
    new Date(
      lastPeriod
    );


  ovulationDate.setDate(
    ovulationDate.getDate() +
    ovulationDay
  );


  const formattedDate =
    formatDateLocalized(
      ovulationDate,
      'long'
    );


  if (
    currentLang === 'Bisaya (Cebuano)'
  ) {

    result.innerHTML =
      'Gibanabana nga petsa sa ovulation: <strong>' +
      formattedDate +
      '</strong><br>' +
      'Gibanabana nga fertile window: mga 5 ka adlaw sa wala pa ang ovulation hangtod sa adlaw sa ovulation.';

  } else {

    result.innerHTML =
      'Estimated ovulation date: <strong>' +
      formattedDate +
      '</strong><br>' +
      'Estimated fertile window: approximately 5 days before ovulation through ovulation day.';
  }
}


// =========================================================
// DATE FORMATTER
// =========================================================

function formatDateLocalized(
  date,
  format = 'short'
) {

  if (
    currentLang !== 'Bisaya (Cebuano)'
  ) {

    return date.toLocaleDateString(
      'en-US',
      format === 'long'
        ? {
            month:
              'long',

            day:
              'numeric',

            year:
              'numeric'
          }
        : {
            month:
              'short',

            day:
              'numeric',

            year:
              'numeric'
          }
    );
  }


  const monthsShort = [

    'Ene.',
    'Peb.',
    'Mar.',
    'Abr.',
    'Mayo',
    'Hun.',
    'Hul.',
    'Agos.',
    'Sept.',
    'Okt.',
    'Nob.',
    'Dis.'

  ];


  const monthsLong = [

    'Enero',
    'Pebrero',
    'Marso',
    'Abril',
    'Mayo',
    'Hunyo',
    'Hulyo',
    'Agosto',
    'Septyembre',
    'Oktubre',
    'Nobyembre',
    'Disyembre'

  ];


  if (
    format === 'long'
  ) {

    return (
      monthsLong[
        date.getMonth()
      ] +
      ' ' +
      date.getDate() +
      ', ' +
      date.getFullYear()
    );
  }


  return (
    monthsShort[
      date.getMonth()
    ] +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear()
  );
}


// =========================================================
// LOAD PROFILE
// =========================================================

function loadProfile() {

  const savedUser =
    JSON.parse(
      localStorage.getItem(
        'cyclecareUser'
      )
    );


  if (
    !savedUser
  ) {

    return;
  }


  // -------------------------
  // PROFILE NAME
  // -------------------------

  const profileName =
    document.getElementById(
      'profileName'
    );


  if (
    profileName
  ) {

    profileName.textContent =
      savedUser.name ||
      'User';
  }


  // -------------------------
  // FULL NAME
  // -------------------------

  const fullName =
    document.getElementById(
      'profileFullName'
    );


  if (
    fullName
  ) {

    fullName.textContent =
      savedUser.name ||
      '-';
  }


  // -------------------------
  // AGE
  // -------------------------

  const age =
    document.getElementById(
      'profileAge'
    );


  if (
    age
  ) {

    age.textContent =
      savedUser.age

        ? (
            currentLang === 'Bisaya (Cebuano)'
              ? savedUser.age +
                ' anyos'
              : savedUser.age +
                ' years old'
          )

        : '-';
  }


  // -------------------------
  // CYCLE
  // -------------------------

  const cycle =
    document.getElementById(
      'profileCycle'
    );


  if (
    cycle
  ) {

    cycle.textContent =
      savedUser.cycleLength

        ? (
            currentLang === 'Bisaya (Cebuano)'
              ? savedUser.cycleLength +
                ' ka adlaw'
              : savedUser.cycleLength +
                ' days'
          )

        : '-';
  }


  // -------------------------
  // PERIOD LENGTH
  // -------------------------

  const period =
    document.getElementById(
      'profilePeriod'
    );


  if (
    period
  ) {

    period.textContent =
      savedUser.periodLength

        ? (
            currentLang === 'Bisaya (Cebuano)'
              ? savedUser.periodLength +
                ' ka adlaw'
              : savedUser.periodLength +
                ' days'
          )

        : '-';
  }


  // -------------------------
  // LAST PERIOD
  // -------------------------

  const lastPeriodElement =
    document.getElementById(
      'profileLastPeriod'
    );


  if (
    lastPeriodElement &&
    savedUser.lastPeriod
  ) {

    const lastPeriod =
      new Date(
        savedUser.lastPeriod +
        'T00:00:00'
      );


    lastPeriodElement.textContent =
      formatDateLocalized(
        lastPeriod,
        'short'
      );

  } else if (
    lastPeriodElement
  ) {

    lastPeriodElement.textContent =
      '-';
  }


  // -------------------------
  // OVULATION
  // -------------------------

  const ovulationElement =
    document.getElementById(
      'profileOvulation'
    );


  if (
    ovulationElement &&
    savedUser.lastPeriod &&
    savedUser.cycleLength
  ) {

    const lastPeriod =
      new Date(
        savedUser.lastPeriod +
        'T00:00:00'
      );


    const ovulationDate =
      new Date(
        lastPeriod
      );


    const ovulationDay =
      parseInt(
        savedUser.cycleLength
      ) -
      14;


    ovulationDate.setDate(
      ovulationDate.getDate() +
      ovulationDay
    );


    ovulationElement.textContent =
      formatDateLocalized(
        ovulationDate,
        'short'
      );

  } else if (
    ovulationElement
  ) {

    ovulationElement.textContent =
      '-';
  }
}


// =========================================================
// MENSTRUAL TIP POPUP
// =========================================================

function openTip(
  title,
  icon,
  text,
  image
) {

  const modal =
    document.getElementById(
      'tipModal'
    );


  const modalImage =
    document.getElementById(
      'tipModalImage'
    );


  const modalIcon =
    document.getElementById(
      'tipModalIcon'
    );


  const modalTitle =
    document.getElementById(
      'tipModalTitle'
    );


  const modalText =
    document.getElementById(
      'tipModalText'
    );


  if (!modal) {
    return;
  }


  if (
    modalTitle
  ) {

    modalTitle.textContent =
      t(title);
  }


  if (
    modalIcon
  ) {

    modalIcon.textContent =
      icon;
  }


  if (
    modalText
  ) {

    modalText.textContent =
      t(text);
  }


  if (
    modalImage
  ) {

    modalImage.src =
      image;


    modalImage.alt =
      t(title);
  }


  modal.classList.add(
    'show'
  );


  document.body.style.overflow =
    'hidden';
}


// =========================================================
// CLOSE TIP
// =========================================================

function closeTip() {

  const modal =
    document.getElementById(
      'tipModal'
    );


  if (
    !modal
  ) {

    return;
  }


  modal.classList.remove(
    'show'
  );


  document.body.style.overflow =
    '';
}


// =========================================================
// CLOSE TIP OUTSIDE
// =========================================================

function closeTipOutside(
  event
) {

  if (
    event.target ===
    document.getElementById(
      'tipModal'
    )
  ) {

    closeTip();
  }
}


// =========================================================
// OLD QUIZ COMPATIBILITY
// =========================================================

function answerQuiz(
  el,
  correct
) {

  if (
    !el
  ) {

    return;
  }


  const parent =
    el.parentElement;


  if (
    parent
  ) {

    parent.querySelectorAll(
      '.quizOpt'
    ).forEach(
      function(x) {

        x.classList.remove(
          'selected'
        );

      }
    );
  }


  el.classList.add(
    'selected'
  );


  toast(
    currentLang === 'Bisaya (Cebuano)'
      ? (
          correct
            ? 'Sakto nga tubag'
            : 'Sulayi pag-usab'
        )
      : (
          correct
            ? 'Correct answer'
            : 'Try again'
        )
  );
}


// =========================================================
// QUIZ DATA
// 10 EASY + 15 INTERMEDIATE + 20 CHALLENGE
// TOTAL = 45 QUESTIONS
// =========================================================

const quizQuestions = [

  // =======================================================
  // EASY - 10
  // =======================================================

  {
    level: 'Easy',

    question:
      'What is the first day of a menstrual cycle?',

    bq:
      'Unsa ang unang adlaw sa menstrual cycle?',

    options: [
      'The first day of menstrual bleeding',
      'The last day of menstrual bleeding',
      'The day of ovulation',
      'The day before menstruation'
    ],

    bo: [
      'Ang unang adlaw sa pagdugo sa regla',
      'Ang kataposang adlaw sa pagdugo sa regla',
      'Ang adlaw sa ovulation',
      'Ang adlaw sa wala pa ang regla'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'What does menstrual cycle length generally measure?',

    bq:
      'Unsa kasagarang gisukod sa gitas-on sa menstrual cycle?',

    options: [
      'The time from the first day of one period to the first day of the next',
      'Only the number of bleeding days',
      'Only the day of ovulation',
      'Only the days without bleeding'
    ],

    bo: [
      'Ang panahon gikan sa unang adlaw sa usa ka regla hangtod sa unang adlaw sa sunod',
      'Ang gidaghanon lamang sa mga adlaw sa pagdugo',
      'Ang adlaw lamang sa ovulation',
      'Ang mga adlaw lamang nga walay pagdugo'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'Which information is useful to record in a menstrual tracker?',

    bq:
      'Unsa nga impormasyon ang mapuslanon nga irekord sa menstrual tracker?',

    options: [
      'Period dates',
      'Only favorite foods',
      'Only clothing sizes',
      'Only school subjects'
    ],

    bo: [
      'Mga petsa sa regla',
      'Paborito lamang nga pagkaon',
      'Gidak-on lamang sa sinina',
      'Mga subject lamang sa eskwelahan'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'Which habit can support hydration?',

    bq:
      'Unsa nga batasan ang makatabang sa hydration?',

    options: [
      'Drinking enough water',
      'Avoiding water',
      'Drinking no fluids',
      'Skipping meals'
    ],

    bo: [
      'Pag-inom og igo nga tubig',
      'Paglikay sa tubig',
      'Dili pag-inom og likido',
      'Pag-skip sa pagkaon'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'Why is getting enough rest useful?',

    bq:
      'Ngano nga mapuslanon ang igo nga pagpahulay?',

    options: [
      'It supports general well-being',
      'It stops menstruation',
      'It guarantees a 28-day cycle',
      'It prevents all symptoms'
    ],

    bo: [
      'Nakatabang kini sa kinatibuk-ang kahimsog',
      'Kini mopahunong sa regla',
      'Kini mogarantiya og 28 ka adlaw nga siklo',
      'Kini mopugong sa tanang sintomas'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'Which can be a menstrual symptom?',

    bq:
      'Unsa ang mahimong sintomas sa regla?',

    options: [
      'Cramps',
      'Eye color',
      'Height',
      'Hair color'
    ],

    bo: [
      'Sakit sa tiyan',
      'Kolor sa mata',
      'Gitas-on sa lawas',
      'Kolor sa buhok'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'Why should menstrual products be changed regularly?',

    bq:
      'Ngano nga kinahanglan ilisan kanunay ang menstrual products?',

    options: [
      'For cleanliness and comfort',
      'To increase cycle length',
      'To stop ovulation',
      'To change body temperature'
    ],

    bo: [
      'Alang sa kalimpyo ug kahupayan',
      'Aron molungtad ang siklo',
      'Aron mapahunong ang ovulation',
      'Aron mausab ang temperatura sa lawas'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'What can a menstrual calendar help you track?',

    bq:
      'Unsa ang makatabang nga masubay sa menstrual calendar?',

    options: [
      'Period dates and cycle patterns',
      'Only birthdays',
      'Only school holidays',
      'Only weather'
    ],

    bo: [
      'Mga petsa sa regla ug mga pattern sa siklo',
      'Mga birthday lamang',
      'Mga holiday lamang sa eskwelahan',
      'Panahon lamang'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'Which is an example of balanced nutrition?',

    bq:
      'Unsa ang pananglitan sa balanseng nutrisyon?',

    options: [
      'A meal with vegetables, protein, and grains',
      'Only candy',
      'Only soft drinks',
      'Skipping every meal'
    ],

    bo: [
      'Pagkaon nga adunay utanon, protina, ug grains',
      'Candy lamang',
      'Soft drinks lamang',
      'Pag-skip sa tanang pagkaon'
    ],

    answer:
      0
  },


  {
    level: 'Easy',

    question:
      'Why can symptom tracking be useful?',

    bq:
      'Ngano nga mapuslanon ang pagsubay sa mga sintomas?',

    options: [
      'It can help identify patterns',
      'It stops all symptoms',
      'It guarantees a fixed cycle',
      'It replaces medical care'
    ],

    bo: [
      'Makatabang kini sa pag-ila sa mga pattern',
      'Kini mopahunong sa tanang sintomas',
      'Kini mogarantiya og fixed nga siklo',
      'Kini mopuli sa medical care'
    ],

    answer:
      0
  },


  // =======================================================
  // INTERMEDIATE - 15
  // =======================================================

  {
    level: 'Intermediate',

    question:
      'How is menstrual cycle length generally counted?',

    bq:
      'Giunsa kasagarang pag-ihap sa gitas-on sa menstrual cycle?',

    options: [
      'From the first day of one period to the first day of the next',
      'From the last day of one period to the first day of the next',
      'From ovulation to the next ovulation only',
      'From the middle of one period to the middle of the next'
    ],

    bo: [
      'Gikan sa unang adlaw sa usa ka regla hangtod sa unang adlaw sa sunod',
      'Gikan sa kataposang adlaw sa usa ka regla hangtod sa unang adlaw sa sunod',
      'Gikan sa ovulation hangtod sa sunod nga ovulation lamang',
      'Gikan sa tunga sa usa ka regla hangtod sa tunga sa sunod'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Is a 28-day cycle the only possible cycle length?',

    bq:
      'Ang 28 ka adlaw ba lamang ang posible nga gitas-on sa siklo?',

    options: [
      'No, cycle lengths can vary',
      'Yes, every cycle must be exactly 28 days',
      'Yes, anything different is impossible',
      'Only 28-day cycles should be tracked'
    ],

    bo: [
      'Dili, mahimong magkalainlain ang gitas-on sa siklo',
      'Oo, ang tanang siklo kinahanglan eksaktong 28 ka adlaw',
      'Oo, imposible ang laing gitas-on',
      '28 ka adlaw lamang nga siklo ang angay subayon'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Why can tracking several cycles be useful?',

    bq:
      'Ngano nga mapuslanon ang pagsubay sa daghang siklo?',

    options: [
      'It can show personal patterns over time',
      'It guarantees the exact future period date',
      'It prevents menstrual symptoms',
      'It changes hormone levels'
    ],

    bo: [
      'Makapakita kini sa personal nga mga pattern sa paglabay sa panahon',
      'Kini mogarantiya sa eksaktong petsa sa umaabot nga regla',
      'Kini mopugong sa sintomas sa regla',
      'Kini mousab sa hormone levels'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'When does ovulation often occur in relation to the next period?',

    bq:
      'Kanus-a kasagarang mahitabo ang ovulation kalabot sa sunod nga regla?',

    options: [
      'Often about two weeks before the next period',
      'Always on the first day of the period',
      'Always on the last day of bleeding',
      'Always exactly 14 days after bleeding ends'
    ],

    bo: [
      'Kasagaran mga duha ka semana sa wala pa ang sunod nga regla',
      'Kanunay sa unang adlaw sa regla',
      'Kanunay sa kataposang adlaw sa pagdugo',
      'Kanunay eksaktong 14 ka adlaw human matapos ang pagdugo'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Why is an estimated ovulation date only an estimate?',

    bq:
      'Ngano nga banabana lamang ang petsa sa ovulation?',

    options: [
      'Actual timing can vary between cycles',
      'Ovulation happens on the same date for everyone',
      'Ovulation is unrelated to the cycle',
      'Ovulation only happens during menstruation'
    ],

    bo: [
      'Mahimong mausab ang aktuwal nga timing tali sa mga siklo',
      'Ang ovulation mahitabo sa parehas nga petsa sa tanan',
      'Walay kalabotan ang ovulation sa siklo',
      'Ang ovulation mahitabo lamang panahon sa regla'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Which information can improve cycle tracking?',

    bq:
      'Unsa nga impormasyon ang makapaayo sa cycle tracking?',

    options: [
      'Accurate period start dates',
      'Only favorite colors',
      'Only body height',
      'Only the weather'
    ],

    bo: [
      'Hustong mga petsa sa pagsugod sa regla',
      'Paborito lamang nga kolor',
      'Gitas-on lamang sa lawas',
      'Panahon lamang'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'What can repeated symptom records help a user notice?',

    bq:
      'Unsa ang mahimong mamatikdan pinaagi sa balik-balik nga pagrekord sa sintomas?',

    options: [
      'Repeated patterns',
      'Exact hormone levels',
      'Guaranteed future symptoms',
      'A permanent cycle change'
    ],

    bo: [
      'Balik-balik nga mga pattern',
      'Eksaktong hormone levels',
      'Garinatisadong sintomas sa umaabot',
      'Permanenteng kausaban sa siklo'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Which practice supports menstrual hygiene?',

    bq:
      'Unsa nga praktis ang makatabang sa menstrual hygiene?',

    options: [
      'Changing menstrual products regularly',
      'Using one product indefinitely',
      'Ignoring discomfort',
      'Avoiding handwashing'
    ],

    bo: [
      'Kanunay nga pag-ilis sa menstrual products',
      'Paggamit sa usa ka produkto hangtod sa hangtod',
      'Pagpasagad sa discomfort',
      'Paglikay sa paghugas sa kamot'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Why can balanced nutrition be useful during menstruation?',

    bq:
      'Ngano nga mapuslanon ang balanseng nutrisyon panahon sa regla?',

    options: [
      'It supports general nutritional needs',
      'It guarantees no menstrual symptoms',
      'It stops menstruation',
      'It makes every cycle exactly 28 days'
    ],

    bo: [
      'Nakatabang kini sa kinatibuk-ang nutritional needs',
      'Kini mogarantiya nga walay menstrual symptoms',
      'Kini mopahunong sa regla',
      'Kini makahimo sa tanang siklo nga eksaktong 28 ka adlaw'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'What is one reasonable use for a reminder feature?',

    bq:
      'Unsa ang usa ka makatarunganong gamit sa reminder feature?',

    options: [
      'To remember upcoming dates or tracking tasks',
      'To force the body to ovulate',
      'To prevent all symptoms',
      'To change the menstrual cycle'
    ],

    bo: [
      'Aron mahinumdoman ang umaabot nga mga petsa o tracking tasks',
      'Aron pugson ang lawas nga mo-ovulate',
      'Aron mapugngan ang tanang sintomas',
      'Aron mausab ang menstrual cycle'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'What can menstrual history show?',

    bq:
      'Unsa ang mahimong ipakita sa menstrual history?',

    options: [
      'Past recorded cycle information',
      'Future events with complete certainty',
      'Exact hormone levels',
      'An automatic medical diagnosis'
    ],

    bo: [
      'Mga rekord sa nangaging siklo',
      'Umaabot nga mga panghitabo nga adunay hingpit nga kasiguroan',
      'Eksaktong hormone levels',
      'Automatic nga medical diagnosis'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Why should period dates be recorded consistently?',

    bq:
      'Ngano nga kinahanglan kanunay ug husto ang pagrekord sa mga petsa sa regla?',

    options: [
      'It can make patterns easier to identify',
      'It guarantees a regular cycle',
      'It prevents menstruation',
      'It changes period length'
    ],

    bo: [
      'Makapasayon kini sa pag-ila sa mga pattern',
      'Kini mogarantiya og regular nga siklo',
      'Kini mopugong sa regla',
      'Kini mousab sa gitas-on sa regla'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'Which statement about menstrual symptoms is most accurate?',

    bq:
      'Unsa ang labing husto nga pahayag bahin sa menstrual symptoms?',

    options: [
      'Symptoms can vary from person to person and cycle to cycle',
      'Everyone has exactly the same symptoms',
      'Symptoms never change',
      'Only one symptom can occur'
    ],

    bo: [
      'Mahimong magkalainlain ang sintomas sa matag tawo ug matag siklo',
      'Parehas gyud ang sintomas sa tanan',
      'Dili gayud mausab ang mga sintomas',
      'Usa lamang ka sintomas ang mahimong mahitabo'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'What is one benefit of combining a calendar with symptom tracking?',

    bq:
      'Unsa ang usa ka benepisyo sa paghiusa sa calendar ug symptom tracking?',

    options: [
      'It can help compare symptoms with cycle dates',
      'It guarantees a diagnosis',
      'It makes symptoms disappear',
      'It permanently changes the cycle'
    ],

    bo: [
      'Makatabang kini sa pagtandi sa sintomas ug mga petsa sa siklo',
      'Kini mogarantiya og diagnosis',
      'Kini mopawala sa sintomas',
      'Kini permanenteng mousab sa siklo'
    ],

    answer:
      0
  },


  {
    level: 'Intermediate',

    question:
      'What should someone consider when a symptom is concerning or unusual?',

    bq:
      'Unsa ang angay ikonsiderar kung ang usa ka sintomas makapabalaka o dili kasagaran?',

    options: [
      'Seeking advice from a qualified healthcare professional',
      'Ignoring it completely',
      'Changing the recorded data',
      'Stopping all tracking'
    ],

    bo: [
      'Pagpangayo og tambag gikan sa kwalipikadong healthcare professional',
      'Pagpasagad niini',
      'Pag-usab sa rekord nga impormasyon',
      'Pagpahunong sa tanang tracking'
    ],

    answer:
      0
  },


  // =======================================================
  // CHALLENGE - 20
  // =======================================================

  {
    level: 'Challenge',

    question:
      'Which statement best describes predictions in a cycle-tracking app?',

    bq:
      'Unsa ang labing hustong paghulagway sa mga prediction sa cycle-tracking app?',

    options: [
      'They are estimates based on recorded information',
      'They are guaranteed medical predictions',
      'They are always exact for everyone',
      'They never depend on past data'
    ],

    bo: [
      'Mga banabana kini base sa na-record nga impormasyon',
      'Garantisado kini nga medical predictions',
      'Kanunay kini eksakto para sa tanan',
      'Walay kalabotan ang past data niini'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Why can predictions become less accurate when cycle lengths vary?',

    bq:
      'Ngano nga mahimong dili kaayo tukma ang predictions kung magkalainlain ang gitas-on sa siklo?',

    options: [
      'Past patterns may not represent the next cycle exactly',
      'The calendar cannot display dates',
      'Symptoms cannot be recorded',
      'Periods cannot be tracked'
    ],

    bo: [
      'Ang nangaging patterns mahimong dili eksaktong parehas sa sunod nga siklo',
      'Dili makapakita og petsa ang calendar',
      'Dili ma-record ang sintomas',
      'Dili ma-track ang regla'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'What is useful when cycle lengths change from month to month?',

    bq:
      'Unsa ang mapuslanon kung mausab ang gitas-on sa siklo kada bulan?',

    options: [
      'Continue recording accurate dates over time',
      'Assume every cycle is 28 days',
      'Delete previous records',
      'Stop tracking entirely'
    ],

    bo: [
      'Padayon sa pagrekord sa tukmang mga petsa sa paglabay sa panahon',
      'I-assume nga 28 ka adlaw ang tanang siklo',
      'I-delete ang mga nangaging rekord',
      'Hunonga ang tracking'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Why should an estimated ovulation date not be treated as certain?',

    bq:
      'Ngano nga dili angay isipon nga sigurado ang gibanabana nga petsa sa ovulation?',

    options: [
      'Ovulation timing can vary',
      'Ovulation is always on one exact date',
      'Ovulation is unrelated to cycles',
      'Ovulation happens only once every two years'
    ],

    bo: [
      'Mahimong magkalainlain ang timing sa ovulation',
      'Ang ovulation kanunay sa usa ka eksaktong petsa',
      'Walay kalabotan ang ovulation sa siklo',
      'Ang ovulation mahitabo kausa kada duha ka tuig lamang'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'What can several cycles with different lengths help describe?',

    bq:
      'Unsa ang makatabang nga ihulagway sa daghang siklo nga magkalainlain ang gitas-on?',

    options: [
      'Observed cycle variability',
      'Exact hormone concentration',
      'A guaranteed future period date',
      'A permanent medical condition'
    ],

    bo: [
      'Naobserbahang kalainan sa gitas-on sa siklo',
      'Eksaktong hormone concentration',
      'Garantisadong umaabot nga petsa sa regla',
      'Permanenteng medical condition'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Which approach gives more useful tracking information?',

    bq:
      'Unsa nga pamaagi ang makahatag og mas mapuslanong tracking information?',

    options: [
      'Recording actual dates as accurately as possible',
      'Guessing dates each month',
      'Recording only severe symptoms',
      'Changing dates to match predictions'
    ],

    bo: [
      'Pagrekord sa aktuwal nga mga petsa kutob sa mahimo nga tukma',
      'Pagtagna sa petsa kada bulan',
      'Pagrekord lamang sa grabe nga sintomas',
      'Pag-usab sa petsa aron mosunod sa predictions'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Why can it be useful to record symptoms on the date they occur?',

    bq:
      'Ngano nga mapuslanon nga irekord ang sintomas sa petsa nga nahitabo kini?',

    options: [
      'It allows symptoms to be compared with cycle timing',
      'It guarantees the cause of every symptom',
      'It prevents future symptoms',
      'It changes the menstrual phase'
    ],

    bo: [
      'Makatugot kini nga itandi ang sintomas sa timing sa siklo',
      'Kini mogarantiya sa hinungdan sa tanang sintomas',
      'Kini mopugong sa umaabot nga sintomas',
      'Kini mousab sa menstrual phase'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Which statement about menstrual tracking is appropriate?',

    bq:
      'Unsa ang hustong pahayag bahin sa menstrual tracking?',

    options: [
      'Tracking supports awareness but does not replace professional medical evaluation',
      'Tracking provides automatic diagnosis',
      'Tracking replaces every medical consultation',
      'Tracking guarantees every symptom is harmless'
    ],

    bo: [
      'Ang tracking makatabang sa awareness apan dili mopuli sa professional medical evaluation',
      'Ang tracking automatic nga mohatag og diagnosis',
      'Ang tracking mopuli sa tanang medical consultation',
      'Ang tracking mogarantiya nga dili makadaot ang tanang sintomas'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Why can two people with the same cycle length still have different symptoms?',

    bq:
      'Ngano nga mahimong magkalainlain gihapon ang sintomas sa duha ka tawo nga parehas og cycle length?',

    options: [
      'Individual experiences can differ',
      'Their cycles must be medically identical',
      'Symptoms are unrelated to individuals',
      'Everyone has the same body response'
    ],

    bo: [
      'Mahimong magkalainlain ang kasinatian sa matag tawo',
      'Kinahanglan nga medikal nga parehas gyud ang ilang siklo',
      'Walay kalabotan ang sintomas sa indibidwal',
      'Parehas ang tubag sa lawas sa tanan'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'What does cycle variability mean?',

    bq:
      'Unsa ang pasabot sa cycle variability?',

    options: [
      'Cycle timing or length can differ between cycles',
      'Every cycle is exactly the same',
      'Only symptoms vary',
      'Menstruation stops permanently'
    ],

    bo: [
      'Mahimong magkalainlain ang timing o gitas-on sa mga siklo',
      'Eksaktong parehas ang tanang siklo',
      'Sintomas lamang ang mausab',
      'Permanenteng mohunong ang regla'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'If a period starts earlier than predicted, what should be recorded?',

    bq:
      'Kung mas sayo magsugod ang regla kaysa sa prediction, unsa ang angay irekord?',

    options: [
      'The actual start date',
      'The predicted date only',
      'No date',
      'Only the previous cycle date'
    ],

    bo: [
      'Ang aktuwal nga petsa sa pagsugod',
      'Ang predicted date lamang',
      'Walay petsa',
      'Ang petsa sa nangaging siklo lamang'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Why can recording both period dates and symptoms provide more context?',

    bq:
      'Ngano nga ang pagrekord sa mga petsa sa regla ug sintomas makahatag og dugang nga context?',

    options: [
      'It connects symptoms with the timing of the cycle',
      'It automatically identifies diseases',
      'It guarantees future cycle length',
      'It prevents cycle variability'
    ],

    bo: [
      'Nakahatag kini og koneksyon tali sa sintomas ug timing sa siklo',
      'Automatic kini nga makaila sa sakit',
      'Kini mogarantiya sa umaabot nga gitas-on sa siklo',
      'Kini mopugong sa cycle variability'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Which statement about menstrual health information is most appropriate?',

    bq:
      'Unsa ang labing angay nga pahayag bahin sa impormasyon sa menstrual health?',

    options: [
      'Patterns can be informative, but unusual concerns may need professional assessment',
      'Every symptom has one guaranteed cause',
      'Apps can diagnose every reproductive condition',
      'Any unusual symptom should always be ignored'
    ],

    bo: [
      'Ang mga pattern mahimong mapuslanon nga impormasyon, apan ang dili kasagarang kabalaka mahimong manginahanglan og professional assessment',
      'Ang matag sintomas adunay usa ra ka garantiya nga hinungdan',
      'Ang apps makadiagnose sa tanang reproductive conditions',
      'Ang dili kasagarang sintomas kinahanglan kanunay pasagdan'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'What is the value of keeping historical cycle records?',

    bq:
      'Unsa ang bili sa pagtipig sa historical cycle records?',

    options: [
      'They can help users review changes and patterns over time',
      'They guarantee the same cycle forever',
      'They remove the need for medical advice',
      'They prevent menstrual changes'
    ],

    bo: [
      'Makatabang kini sa pagrepaso sa mga kausaban ug pattern sa paglabay sa panahon',
      'Kini mogarantiya nga parehas ang siklo hangtod sa hangtod',
      'Kini mopawala sa panginahanglan sa medical advice',
      'Kini mopugong sa mga kausaban sa regla'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Why should users avoid assuming that an estimated date is exact?',

    bq:
      'Ngano nga dili angay isipon nga eksakto ang gibanabana nga petsa?',

    options: [
      'Biological timing is not always perfectly predictable',
      'Apps never use dates',
      'Periods occur only once per year',
      'All users have identical cycles'
    ],

    bo: [
      'Ang biological timing dili kanunay hingpit nga matagna',
      'Dili mogamit og dates ang apps',
      'Kausa ra kada tuig ang regla',
      'Parehas ang siklo sa tanan'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Which action improves the usefulness of a menstrual tracker?',

    bq:
      'Unsa nga aksyon ang makapaayo sa gamit sa menstrual tracker?',

    options: [
      'Entering accurate and consistent information',
      'Changing information to get desired predictions',
      'Recording only one cycle',
      'Ignoring date changes'
    ],

    bo: [
      'Pagbutang og tukma ug consistent nga impormasyon',
      'Pag-usab sa impormasyon aron makuha ang gusto nga prediction',
      'Pagrekord sa usa lamang ka siklo',
      'Pagpasagad sa mga kausaban sa petsa'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'What is one limitation of a simple calendar-based prediction?',

    bq:
      'Unsa ang usa ka limitasyon sa simple nga calendar-based prediction?',

    options: [
      'It may not account for every biological variation',
      'It always knows exact ovulation timing',
      'It automatically measures hormones',
      'It guarantees every future period date'
    ],

    bo: [
      'Mahimong dili niini maapil ang tanang biological variation',
      'Kanunay niini nahibaloan ang eksaktong timing sa ovulation',
      'Automatic niini masukod ang hormones',
      'Kini mogarantiya sa tanang umaabot nga petsa sa regla'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'Why can regular symptom tracking be helpful?',

    bq:
      'Ngano nga makatabang ang regular nga symptom tracking?',

    options: [
      'Repeated records can make personal patterns easier to notice',
      'It guarantees symptoms will disappear',
      'It prevents cycle variability',
      'It replaces all health assessments'
    ],

    bo: [
      'Ang balik-balik nga rekord makapasayon sa pagmatikod sa personal nga mga pattern',
      'Kini mogarantiya nga mawala ang mga sintomas',
      'Kini mopugong sa cycle variability',
      'Kini mopuli sa tanang health assessments'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'What is an appropriate response to a significant change in a usual menstrual pattern?',

    bq:
      'Unsa ang angay buhaton kung adunay dakong kausaban sa naandan nga menstrual pattern?',

    options: [
      'Record the change and consider professional advice when appropriate',
      'Change the data to match the old pattern',
      'Ignore the change permanently',
      'Assume the app must always be correct'
    ],

    bo: [
      'Irekord ang kausaban ug ikonsiderar ang professional advice kung angay',
      'Usba ang data aron parehas sa daang pattern',
      'Pasagdi hangtod sa hangtod',
      'I-assume nga kanunay sakto ang app'
    ],

    answer:
      0
  },


  {
    level: 'Challenge',

    question:
      'What is the best overall use of CycleCare tracking features?',

    bq:
      'Unsa ang labing angay nga paggamit sa tracking features sa CycleCare?',

    options: [
      'To support awareness of personal cycle dates and symptoms',
      'To provide guaranteed medical diagnoses',
      'To control biological processes',
      'To replace healthcare professionals'
    ],

    bo: [
      'Aron suportahan ang awareness sa personal nga cycle dates ug sintomas',
      'Aron mohatag og garantiya nga medical diagnoses',
      'Aron kontrolon ang biological processes',
      'Aron mopuli sa healthcare professionals'
    ],

    answer:
      0
  }

];


// =========================================================
// QUIZ STATE
// =========================================================

let quizAnswers =
  new Array(
    quizQuestions.length
  ).fill(null);


let quizSubmitted =
  false;


// Which difficulty tab is currently open, and which question
// (frame) within that difficulty is currently showing.
let quizActiveLevel =
  'Easy';


let quizFrameIndex = {
  Easy: 0,
  Intermediate: 0,
  Challenge: 0
};


// =========================================================
// QUIZ LEVEL / FRAME NAVIGATION
// =========================================================

function getQuizLevelGroups() {

  const groups = {
    Easy: [],
    Intermediate: [],
    Challenge: []
  };


  quizQuestions.forEach(
    function(q, i) {

      groups[q.level].push({
        q: q,
        index: i
      });
    }
  );


  return groups;
}


function setQuizLevel(level) {

  quizActiveLevel =
    level;


  renderQuiz();
}


function quizGoToFrame(delta) {

  const groups =
    getQuizLevelGroups();


  const items =
    groups[quizActiveLevel];


  let nextIndex =
    quizFrameIndex[quizActiveLevel] +
    delta;


  if (nextIndex < 0) {
    nextIndex = 0;
  }

  if (nextIndex > items.length - 1) {
    nextIndex = items.length - 1;
  }


  quizFrameIndex[quizActiveLevel] =
    nextIndex;


  renderQuiz();
}


// =========================================================
// QUIZ INTERFACE
// =========================================================

function ensureQuizInterface() {

  const quizSection =
    document.getElementById(
      'quiz'
    );


  if (!quizSection) {
    return;
  }


  let container =
    document.getElementById(
      'quizContainer'
    );


  if (!container) {

    const infoPage =
      quizSection.querySelector(
        '.infoPage'
      );


    if (!infoPage) {
      return;
    }


    infoPage.innerHTML = `

      <div class="card infoHero">

        <div class="big">
          ❓
        </div>


        <p>
          Test your knowledge about menstrual health.
        </p>


        <p>
          10 Easy • 15 Intermediate • 20 Challenge
        </p>

      </div>


      <div id="quizContainer"></div>


      <div class="card quizActions">

        <button
          class="primary"
          type="button"
          onclick="submitQuiz()"
        >
          Submit Quiz
        </button>


        <button
          class="secondary"
          type="button"
          onclick="viewQuizScore()"
        >
          View Score
        </button>

      </div>


      <div
        class="card quizScoreCard"
        id="quizScoreCard"
      >

        <div class="quizScoreIcon">
          🏆
        </div>


        <h2>
          Quiz Result
        </h2>


        <div
          class="quizTotalScore"
          id="quizTotalScore"
        >
          0 / 45
        </div>


        <div
          class="quizScoreMessage"
          id="quizScoreMessage"
        >
          Submit the quiz to see your score.
        </div>


        <div class="quizScoreRows">

          <div class="quizScoreRow">

            <span>
              Easy
            </span>

            <strong id="easyScore">
              0 / 10
            </strong>

          </div>


          <div class="quizScoreRow">

            <span>
              Intermediate
            </span>

            <strong id="intermediateScore">
              0 / 15
            </strong>

          </div>


          <div class="quizScoreRow">

            <span>
              Challenge
            </span>

            <strong id="challengeScore">
              0 / 20
            </strong>

          </div>

        </div>

      </div>

    `;


    container =
      document.getElementById(
        'quizContainer'
      );
  }
}


// =========================================================
// RENDER QUIZ
// =========================================================

function renderQuiz() {

  const container =
    document.getElementById(
      'quizContainer'
    );


  if (!container) {
    return;
  }


  const levels =
    ['Easy', 'Intermediate', 'Challenge'];


  const groups =
    getQuizLevelGroups();


  // -------------------------
  // KEEP FRAME INDEX IN RANGE
  // -------------------------

  levels.forEach(
    function(level) {

      const max =
        groups[level].length - 1;


      if (quizFrameIndex[level] > max) {
        quizFrameIndex[level] = max;
      }

      if (quizFrameIndex[level] < 0) {
        quizFrameIndex[level] = 0;
      }
    }
  );


  // -------------------------
  // LEVEL TABS
  // -------------------------

  let tabsHtml =
    '<div class="quizLevelTabs">';


  levels.forEach(
    function(level) {

      const items =
        groups[level];


      const answeredCount =
        items.filter(
          function(item) {

            return quizAnswers[item.index] !==
              null;
          }
        ).length;


      const isActive =
        level === quizActiveLevel;


      tabsHtml += `

        <button
          type="button"
          class="quizLevelTab ${isActive ? 'active' : ''}"
          onclick="setQuizLevel('${level}')"
        >

          ${t(level)}

          <span class="quizLevelTabCount">
            ${answeredCount}/${items.length}
          </span>

        </button>

      `;
    }
  );


  tabsHtml +=
    '</div>';


  // -------------------------
  // CURRENT FRAME (ONE QUESTION)
  // -------------------------

  const items =
    groups[quizActiveLevel];


  const frameIdx =
    quizFrameIndex[quizActiveLevel];


  const item =
    items[frameIdx];


  const q =
    item.q;


  const index =
    item.index;


  let description =
    '';


  if (q.level === 'Easy') {

    description =
      'Basic menstrual health knowledge • 10 questions';

  }

  else if (q.level === 'Intermediate') {

    description =
      'Moderate menstrual health knowledge • 15 questions';

  }

  else {

    description =
      'Advanced menstrual health knowledge • 20 questions';
  }


  const levelName =
    t(q.level);


  description =
    t(description);


  // -------------------------
  // QUESTION TEXT / OPTIONS
  // -------------------------

  const questionText =
    currentLang === 'Bisaya (Cebuano)'
      ? q.bq
      : q.question;


  const options =
    currentLang === 'Bisaya (Cebuano)'
      ? q.bo
      : q.options;


  let frameHtml = `

    <div class="quizLevelTitle">

      ${levelName}


      <div class="quizLevelSubtitle">

        ${description}

      </div>

    </div>


    <div class="quizFrame">

      <div class="quizFrameProgress">
        ${t('Question')} ${frameIdx + 1} ${t('of')} ${items.length}
      </div>


      <div class="card quizQuestion">

        <h4>

          ${
            index + 1
          }.
          ${questionText}

        </h4>


        ${
          options
            .map(
              function(
                option,
                optIndex
              ) {

                const isSelected =
                  quizAnswers[index] ===
                  optIndex;


                let resultClass =
                  '';


                if (
                  quizSubmitted
                ) {

                  if (
                    optIndex ===
                    q.answer
                  ) {

                    resultClass =
                      'correct';

                  }

                  else if (
                    isSelected &&
                    optIndex !==
                    q.answer
                  ) {

                    resultClass =
                      'wrong';
                  }
                }


                return `

                  <button

                    type="button"

                    class="
                      quizOption
                      ${
                        isSelected
                          ? 'selected'
                          : ''
                      }
                      ${
                        resultClass
                      }
                    "

                    data-question="${index}"

                    data-option="${optIndex}"

                    onclick="
                      selectQuizOption(
                        ${index},
                        ${optIndex}
                      )
                    "

                    ${
                      quizSubmitted
                        ? 'disabled'
                        : ''
                    }

                  >

                    ${
                      String.fromCharCode(
                        65 +
                        optIndex
                      )
                    }.

                    ${option}

                  </button>

                `;

              }
            )
            .join('')
        }

      </div>


      <div class="quizFrameNav">

        <button
          type="button"
          class="secondary"
          onclick="quizGoToFrame(-1)"
          ${frameIdx === 0 ? 'disabled' : ''}
        >
          ‹ ${t('Previous')}
        </button>


        <button
          type="button"
          class="primary"
          onclick="quizGoToFrame(1)"
          ${frameIdx === items.length - 1 ? 'disabled' : ''}
        >
          ${t('Next')} ›
        </button>

      </div>

    </div>

  `;


  container.innerHTML =
    tabsHtml +
    frameHtml;


  updateQuizScoreDisplay();
}


// =========================================================
// SELECT QUIZ OPTION
// =========================================================

function selectQuizOption(
  questionIndex,
  optionIndex
) {

  if (
    quizSubmitted
  ) {

    return;
  }


  quizAnswers[
    questionIndex
  ] =
    optionIndex;


  renderQuiz();


  // -------------------------
  // AUTO-ADVANCE TO NEXT FRAME
  // (slide to the next question in this
  // difficulty after a short pause, unless
  // this was already the last question)
  // -------------------------

  const groups =
    getQuizLevelGroups();


  const items =
    groups[quizActiveLevel];


  const frameIdx =
    quizFrameIndex[quizActiveLevel];


  if (frameIdx < items.length - 1) {

    setTimeout(
      function() {

        quizGoToFrame(1);
      },
      350
    );
  }
}


// =========================================================
// SUBMIT QUIZ
// SUBMIT -> HISTORY
// =========================================================

function submitQuiz() {

  const unanswered =
    quizAnswers.filter(
      function(answer) {

        return answer ===
          null;

      }
    ).length;


  if (
    unanswered > 0
  ) {

    // Jump straight to the first unanswered
    // question, switching difficulty tabs if
    // needed, so the person can see what's left.

    const firstUnansweredIndex =
      quizAnswers.findIndex(
        function(answer) {

          return answer ===
            null;
        }
      );


    if (firstUnansweredIndex !== -1) {

      const q =
        quizQuestions[firstUnansweredIndex];


      const groups =
        getQuizLevelGroups();


      const frameIdx =
        groups[q.level].findIndex(
          function(item) {

            return item.index ===
              firstUnansweredIndex;
          }
        );


      quizActiveLevel =
        q.level;


      quizFrameIndex[q.level] =
        frameIdx;


      renderQuiz();
    }


    toast(
      t(
        'Please answer all 45 questions.'
      )
    );


    return;
  }


  quizSubmitted =
    true;


  const result =
    getQuizScore();


  // -------------------------
  // SAVE QUIZ RESULT
  // -------------------------

  localStorage.setItem(
    'ccQuizResult',
    JSON.stringify({

      total:
        result.total,

      easy:
        result.easy,

      intermediate:
        result.intermediate,

      challenge:
        result.challenge,

      date:
        new Date().toISOString()

    })
  );


  // -------------------------
  // HISTORY
  // -------------------------

  addHistoryRecord(
    'quiz',
    'Quiz Completed',
    'Score: ' +
      result.total +
      ' / 45'
  );


  // -------------------------
  // DISPLAY
  // -------------------------

  calculateQuizScore();

  renderQuiz();


  // Show score card.
  const scoreCard =
    document.getElementById(
      'quizScoreCard'
    );


  if (
    scoreCard
  ) {

    scoreCard.classList.add(
      'show'
    );
  }


  toast(
    t(
      'Quiz submitted successfully.'
    )
  );
}


// =========================================================
// GET QUIZ SCORE
// =========================================================

function getQuizScore() {

  let easy =
    0;


  let intermediate =
    0;


  let challenge =
    0;


  quizQuestions.forEach(
    function(q, index) {

      if (
        quizAnswers[index] ===
        q.answer
      ) {

        if (
          q.level ===
          'Easy'
        ) {

          easy++;

        }

        else if (
          q.level ===
          'Intermediate'
        ) {

          intermediate++;

        }

        else {

          challenge++;
        }
      }
    }
  );


  return {

    easy:
      easy,

    intermediate:
      intermediate,

    challenge:
      challenge,

    total:
      easy +
      intermediate +
      challenge

  };
}


// =========================================================
// CALCULATE QUIZ SCORE
// =========================================================

function calculateQuizScore() {

  const result =
    getQuizScore();


  const easyBox =
    document.getElementById(
      'easyScore'
    );


  const intermediateBox =
    document.getElementById(
      'intermediateScore'
    );


  const challengeBox =
    document.getElementById(
      'challengeScore'
    );


  const totalBox =
    document.getElementById(
      'quizTotalScore'
    );


  const messageBox =
    document.getElementById(
      'quizScoreMessage'
    );


  if (
    easyBox
  ) {

    easyBox.textContent =
      result.easy +
      ' / 10';
  }


  if (
    intermediateBox
  ) {

    intermediateBox.textContent =
      result.intermediate +
      ' / 15';
  }


  if (
    challengeBox
  ) {

    challengeBox.textContent =
      result.challenge +
      ' / 20';
  }


  if (
    totalBox
  ) {

    totalBox.textContent =
      result.total +
      ' / 45';
  }


  let message =
    '';


  if (
    result.total >=
    40
  ) {

    message =
      'Excellent! You have a strong understanding of menstrual health.';

  }

  else if (
    result.total >=
    32
  ) {

    message =
      'Very good! You have a good understanding of menstrual health.';

  }

  else if (
    result.total >=
    23
  ) {

    message =
      'Good effort! Review the topics and try again.';

  }

  else {

    message =
      'Keep learning! Review the menstrual health information and try again.';
  }


  if (
    messageBox
  ) {

    messageBox.textContent =
      t(message);
  }
}


// =========================================================
// UPDATE QUIZ SCORE DISPLAY
// =========================================================

function updateQuizScoreDisplay() {

  if (
    !quizSubmitted
  ) {

    return;
  }


  calculateQuizScore();
}


// =========================================================
// VIEW SCORE
// =========================================================

function viewQuizScore() {

  // -------------------------
  // CURRENT QUIZ
  // -------------------------

  if (
    quizSubmitted
  ) {

    const scoreCard =
      document.getElementById(
        'quizScoreCard'
      );


    if (
      scoreCard
    ) {

      scoreCard.classList.add(
        'show'
      );


      scoreCard.scrollIntoView({
        behavior:
          'smooth',

        block:
          'start'
      });
    }


    return;
  }


  // -------------------------
  // SAVED QUIZ RESULT
  // -------------------------

  const saved =
    JSON.parse(
      localStorage.getItem(
        'ccQuizResult'
      )
    );


  if (
    !saved
  ) {

    toast(
      t(
        'Please submit the quiz first.'
      )
    );


    return;
  }


  const easyBox =
    document.getElementById(
      'easyScore'
    );


  const intermediateBox =
    document.getElementById(
      'intermediateScore'
    );


  const challengeBox =
    document.getElementById(
      'challengeScore'
    );


  const totalBox =
    document.getElementById(
      'quizTotalScore'
    );


  if (
    easyBox
  ) {

    easyBox.textContent =
      saved.easy +
      ' / 10';
  }


  if (
    intermediateBox
  ) {

    intermediateBox.textContent =
      saved.intermediate +
      ' / 15';
  }


  if (
    challengeBox
  ) {

    challengeBox.textContent =
      saved.challenge +
      ' / 20';
  }


  if (
    totalBox
  ) {

    totalBox.textContent =
      saved.total +
      ' / 45';
  }


  const scoreCard =
    document.getElementById(
      'quizScoreCard'
    );


  if (
    scoreCard
  ) {

    scoreCard.classList.add(
      'show'
    );


    scoreCard.scrollIntoView({
      behavior:
        'smooth',

      block:
        'start'
    });
  }
}


// =========================================================
// RESTORE QUIZ RESULT
// =========================================================

function restoreQuizResult() {

  const saved =
    JSON.parse(
      localStorage.getItem(
        'ccQuizResult'
      )
    );


  if (
    !saved
  ) {

    return;
  }


  const easyBox =
    document.getElementById(
      'easyScore'
    );


  const intermediateBox =
    document.getElementById(
      'intermediateScore'
    );


  const challengeBox =
    document.getElementById(
      'challengeScore'
    );


  const totalBox =
    document.getElementById(
      'quizTotalScore'
    );


  if (
    easyBox
  ) {

    easyBox.textContent =
      saved.easy +
      ' / 10';
  }


  if (
    intermediateBox
  ) {

    intermediateBox.textContent =
      saved.intermediate +
      ' / 15';
  }


  if (
    challengeBox
  ) {

    challengeBox.textContent =
      saved.challenge +
      ' / 20';
  }


  if (
    totalBox
  ) {

    totalBox.textContent =
      saved.total +
      ' / 45';
  }
}


// =========================================================
// QUIZ STYLES
// =========================================================

function injectQuizStyles() {

  if (
    document.getElementById(
      'cyclecareQuizStyles'
    )
  ) {

    return;
  }


  const style =
    document.createElement(
      'style'
    );


  style.id =
    'cyclecareQuizStyles';


  style.textContent = `

    .quizLevelTitle{

      padding:
        15px 16px;

      margin:
        0 0 10px;

      border-radius:
        15px;

      background:
        linear-gradient(
          135deg,
          #FDE5F1,
          #F1E8FA
        );

      color:
        #7650B8;

      font-size:
        18px;

      font-weight:
        800;

      text-align:
        center;
    }


    .quizLevelSubtitle{

      font-size:
        11px;

      color:
        #777;

      font-weight:
        500;

      margin-top:
        4px;
    }


    .quizQuestion{

      padding:
        15px;

      margin-bottom:
        10px;
    }


    .quizQuestion h4{

      font-size:
        14px;

      color:
        #7650B8;

      margin-bottom:
        11px;

      line-height:
        1.5;
    }


    .quizOption{

      width:
        100%;

      padding:
        11px 12px;

      margin:
        5px 0;

      border:
        1px solid #E9E5EA;

      border-radius:
        10px;

      background:
        #fff;

      color:
        #4b4552;

      text-align:
        left;

      font-size:
        12px;

      cursor:
        pointer;

      transition:
        .15s ease;
    }


    .quizOption:hover{

      background:
        #FDECF5;
    }


    .quizOption.selected{

      background:
        #FFE4F1;

      border-color:
        #F65AA8;

      color:
        #7650B8;

      font-weight:
        700;
    }


    .quizOption.correct{

      background:
        #E8F7EC;

      border-color:
        #62B878;

      color:
        #27733B;
    }


    .quizOption.wrong{

      background:
        #FDEAEA;

      border-color:
        #E07A7A;

      color:
        #A33A3A;
    }


    .quizOption:disabled{

      cursor:
        default;
    }


    .quizActions{

      padding:
        15px;

      margin:
        14px 0;
    }


    .quizActions button{

      margin-bottom:
        9px;
    }


    .quizActions button:last-child{

      margin-bottom:
        0;
    }


    .quizScoreCard{

      display:
        none;

      padding:
        20px;

      margin-bottom:
        20px;

      text-align:
        center;
    }


    .quizScoreCard.show{

      display:
        block;
    }


    .quizScoreIcon{

      font-size:
        42px;

      margin-bottom:
        5px;
    }


    .quizScoreCard h2{

      color:
        #7650B8;

      font-size:
        20px;

      margin-bottom:
        8px;
    }


    .quizTotalScore{

      color:
        #F65AA8;

      font-size:
        31px;

      font-weight:
        800;

      margin-bottom:
        5px;
    }


    .quizScoreMessage{

      color:
        #777;

      font-size:
        12px;

      line-height:
        1.5;

      margin-bottom:
        16px;
    }


    .quizScoreRows{

      border-top:
        1px solid #eee;
    }


    .quizScoreRow{

      display:
        flex;

      justify-content:
        space-between;

      align-items:
        center;

      padding:
        11px 0;

      border-bottom:
        1px solid #eee;

      font-size:
        12px;
    }


    .quizScoreRow span{

      color:
        #555;
    }


    .quizScoreRow strong{

      color:
        #7650B8;
    }


    /* =====================
       CALENDAR DATE NUMBER
    ===================== */

    .dayNumber{

      position:
        relative;

      z-index:
        2;
    }


    /* =====================
       SYMPTOM MARKER
    ===================== */

    .calendarSymptomMark{

      position:
        absolute;

      bottom:
        1px;

      left:
        40%;

      transform:
        translateX(-50%);

      font-size:
        8px;

      line-height:
        1;

      color:
        #F65AA8;

      font-weight:
        800;

      pointer-events:
        none;

      z-index:
        3;
    }


    /* =====================
       REMINDER MARKER
    ===================== */

    .calendarReminderMark{

      position:
        absolute;

      bottom:
        1px;

      left:
        64%;

      transform:
        translateX(-50%);

      font-size:
        8px;

      line-height:
        1;

      color:
        #7650B8;

      font-weight:
        800;

      pointer-events:
        none;

      z-index:
        3;
    }


    /* =====================
       PERIOD / OVULATION
    ===================== */

    .day.period
      .calendarSymptomMark,

    .day.period
      .calendarReminderMark,

    .day.ovulation
      .calendarSymptomMark,

    .day.ovulation
      .calendarReminderMark{

      color:
        #fff;
    }


    /* =====================
       LEGEND
    ===================== */

    .dot.s{

      background:
        #F65AA8;

      border:
        0;
    }


    .dot.r{

      background:
        #7650B8;

      border:
        0;
    }

  `;


  document.head.appendChild(
    style
  );
}


// =========================================================
// INITIALIZE APP
// =========================================================

document.addEventListener(
  'DOMContentLoaded',
  function() {

    // -------------------------
    // LANGUAGE
    // -------------------------

    currentLang =
      localStorage.getItem(
        'ccLang'
      ) ||
      'English';


    // -------------------------
    // USER
    // -------------------------

    const savedUser =
      JSON.parse(
        localStorage.getItem(
          'cyclecareUser'
        )
      );


    if (
      savedUser &&
      savedUser.lastPeriod
    ) {

      monthDate =
        new Date(
          savedUser.lastPeriod +
          'T00:00:00'
        );
    }


    // -------------------------
    // SYMPTOMS
    // -------------------------

    loadTodaySymptomsSelection();


    // -------------------------
    // QUIZ CSS
    // -------------------------

    injectQuizStyles();


    // -------------------------
    // INITIAL RENDER
    // -------------------------

    renderSymptoms();

    renderHistory();

    renderCalendar();

    updateHomeCycle();

    loadProfile();


    // -------------------------
    // QUIZ
    // -------------------------

    ensureQuizInterface();

    renderQuiz();

    restoreQuizResult();


    // -------------------------
    // DEVELOPER PHOTO
    // -------------------------

    loadDeveloperPhoto();


    // -------------------------
    // TRANSLATE
    // -------------------------

    translateStaticText();


    // -------------------------
    // RE-RENDER DYNAMIC
    // -------------------------

    renderSymptoms();

    renderHistory();

    renderCalendar();

    updateHomeCycle();

    loadProfile();

    ensureQuizInterface();

    renderQuiz();


    // -------------------------
    // LANGUAGE BUTTONS
    // -------------------------

    const en =
      document.getElementById(
        'langEn'
      );


    const bis =
      document.getElementById(
        'langBis'
      );


    if (
      en
    ) {

      en.classList.toggle(
        'selected',
        currentLang === 'English'
      );
    }


    if (
      bis
    ) {

      bis.classList.toggle(
        'selected',
        currentLang ===
        'Bisaya (Cebuano)'
      );
    }

  }
);


// =========================================================
// ABOUT DEVELOPER - PHOTO UPLOAD
// Lets the developer attach/replace their own photo from the
// device, no code editing required. Stored locally on this
// device only (localStorage), so it stays private and works
// fully offline.
// =========================================================

const DEV_PHOTO_KEY =
  'ccDeveloperPhoto';


function loadDeveloperPhoto() {

  const img =
    document.getElementById(
      'devPhotoImg'
    );


  const placeholder =
    document.getElementById(
      'devPhotoPlaceholder'
    );


  const removeBtn =
    document.getElementById(
      'devRemovePhotoBtn'
    );


  if (!img) {
    return;
  }


  const saved =
    localStorage.getItem(
      DEV_PHOTO_KEY
    );


  if (saved) {

    img.src =
      saved;

    img.style.display =
      'block';


    if (placeholder) {

      placeholder.style.display =
        'none';
    }


    if (removeBtn) {

      removeBtn.style.display =
        'inline-flex';
    }

  } else {

    img.removeAttribute(
      'src'
    );

    img.style.display =
      'none';


    if (placeholder) {

      placeholder.style.display =
        'flex';
    }


    if (removeBtn) {

      removeBtn.style.display =
        'none';
    }
  }
}


function handleDeveloperPhotoUpload(
  event
) {

  const input =
    event.target;


  const file =
    input.files &&
    input.files[0];


  if (!file) {
    return;
  }


  if (
    !file.type.startsWith(
      'image/'
    )
  ) {

    toast(
      t(
        'Please choose an image file.'
      )
    );


    input.value =
      '';


    return;
  }


  const maxSize =
    3 * 1024 * 1024;


  if (
    file.size >
    maxSize
  ) {

    toast(
      t(
        'Image is too large. Please choose a photo under 3MB.'
      )
    );


    input.value =
      '';


    return;
  }


  const reader =
    new FileReader();


  reader.onload =
    function() {

      localStorage.setItem(
        DEV_PHOTO_KEY,
        reader.result
      );


      loadDeveloperPhoto();


      toast(
        t(
          'Photo updated.'
        )
      );
    };


  reader.readAsDataURL(
    file
  );


  input.value =
    '';
}


function removeDeveloperPhoto() {

  localStorage.removeItem(
    DEV_PHOTO_KEY
  );


  loadDeveloperPhoto();


  toast(
    t(
      'Photo removed.'
    )
  );
}


// =========================================================
// ESC KEY
// =========================================================

document.addEventListener(
  'keydown',
  function(event) {

    if (
      event.key ===
      'Escape'
    ) {

      closeTip();

      closeModal();

      closeDrawer();
    }

  }
);