// ==========================================
// CORE WEB DATA & COLLEGES MODEL
// ==========================================

const coursesData = [
  {
    title: 'Engineering',
    icon: 'settings',
    courses: [
      'B.Tech / BE (All Branches: CS, EC, Civil, Mechanical, etc.)',
      'M.Tech / ME',
      'Diploma Engineering',
      'Polytechnic Courses'
    ]
  },
  {
    title: 'Medical & Health',
    icon: 'heart-pulse',
    courses: [
      'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
      'BDS (Bachelor of Dental Surgery)',
      'BAMS (Ayurvedic)',
      'BHMS (Homeopathic)',
      'B.Sc Nursing',
      'GNM (General Nursing and Midwifery)',
      'Pharmacy (D.Pharma / B.Pharma)',
      'Paramedical Courses'
    ]
  },
  {
    title: 'Management',
    icon: 'briefcase',
    courses: [
      'BBA (Bachelor of Business Administration)',
      'MBA (Master of Business Administration)',
      'B.Com (Hons.) & M.Com',
      'BBM (Bachelor of Business Management)',
      'BMS (Bachelor of Management Studies)'
    ]
  },
  {
    title: 'Science & IT',
    icon: 'atom',
    courses: [
      'B.Sc (PCM / PCB / CBZ)',
      'M.Sc (All major streams)',
      'BCA (Bachelor of Computer Applications)',
      'MCA (Master of Computer Applications)',
      'B.Sc IT / B.Sc Data Science',
      'B.Sc Biotechnology / B.Sc Agriculture',
      'B.Sc Forensic Science'
    ]
  },
  {
    title: 'Commerce',
    icon: 'coins',
    courses: [
      'B.Com (Pass Course)',
      'B.Com (Honours in Accounts/Finance/Marketing)',
      'M.Com (Master of Commerce)'
    ]
  },
  {
    title: 'Arts & Humanities',
    icon: 'book-open',
    courses: [
      'BA (Bachelor of Arts - History, Polity, Geography, Literature, etc.)',
      'MA (Master of Arts)',
      'BFA / BVA (Fine Arts & Visual Arts)',
      'BJMC / MJMC (Journalism & Mass Communication)',
      'B.Ed (Bachelor of Education) & M.Ed'
    ]
  },
  {
    title: 'Law',
    icon: 'scale',
    courses: [
      'LLB (3-Year Bachelor of Laws)',
      'Integrated BA LLB (5-Year)',
      'Integrated BBA LLB (5-Year)',
      'LLM (Master of Laws)'
    ]
  },
  {
    title: 'Design & Media',
    icon: 'palette',
    courses: [
      'B.Design / M.Design',
      'Fashion Design & Textile Design',
      'Interior Design & Architecture styling',
      'Animation, Multimedia & VFX',
      'Graphic Design, Web Design & UX/UI'
    ]
  },
  {
    title: 'Hotel Management',
    icon: 'utensils',
    courses: [
      'BHM (Bachelor of Hotel Management)',
      'MHM (Master of Hotel Management)',
      'Diploma in Hotel Management',
      'Culinary Arts & Catering Technology'
    ]
  }
];

const ushaMartinCourses = [
  { name: 'MBA (Master of Business Admin)', duration: '2 Years', regFee: '₹11,000', semFee: '₹1,20,000 (Half-Yearly)', totalFee: 513000, mode: 'DRCC' },
  { name: 'MCA (Master of Computer Appl.)', duration: '2 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 273000, mode: 'DRCC' },
  { name: 'PGDCA (PG Diploma Comp. Appl.)', duration: '1 Year', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 147000, mode: 'CASH' },
  { name: 'BBA (Bachelor of Business Admin)', duration: '3 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 399000, mode: 'DRCC' },
  { name: 'BCA (Bachelor of Computer Appl.)', duration: '3 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 399000, mode: 'DRCC' },
  { name: 'B.Com (Hons)', duration: '4 Years', regFee: '₹6,000', semFee: '₹20,000 (Half-Yearly)', totalFee: 195000, mode: 'DRCC' },
  { name: 'B.Com (Accountancy / Taxation)', duration: '4 Years', regFee: '₹11,000', semFee: '₹25,000 (Half-Yearly)', totalFee: 245000, mode: 'DRCC' },
  { name: 'BA (Hons) English', duration: '4 Years', regFee: '₹11,000', semFee: '₹15,000 (Half-Yearly)', totalFee: 165000, mode: 'DRCC' },
  { name: 'B.L.I.S (Library Science)', duration: '1 Year', regFee: '₹11,000', semFee: '₹30,000 (Half-Yearly)', totalFee: 82000, mode: 'CASH' },
  { name: 'MA English', duration: '2 Years', regFee: '₹6,000', semFee: '₹16,000 (Half-Yearly)', totalFee: 92000, mode: 'DRCC' },
  { name: 'MA Education', duration: '2 Years', regFee: '₹11,000', semFee: '₹16,000 (Half-Yearly)', totalFee: 97000, mode: 'DRCC' },
  { name: 'BA Journalism & Mass Comm.', duration: '3 Years', regFee: '₹11,000', semFee: '₹30,000 (Half-Yearly)', totalFee: 219000, mode: 'DRCC' },
  { name: 'Diploma Engineering (ME/EE/Mining/Civil/CSE)', duration: '3 Years', regFee: '₹11,000', semFee: '₹35,000 (Half-Yearly)', totalFee: 249000, mode: 'DRCC' },
  { name: 'Diploma Engineering (Lateral Entry)', duration: '2 Years', regFee: '₹11,000', semFee: '₹35,000 (Half-Yearly)', totalFee: 173000, mode: 'DRCC' },
  { name: 'B.Tech (Computer Science Eng.)', duration: '4 Years', regFee: '₹11,000', semFee: '₹80,000 (Half-Yearly)', totalFee: 685000, mode: 'DRCC' },
  { name: 'B.Tech (Mining/Mech/Civil/EEE)', duration: '4 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 525000, mode: 'DRCC' },
  { name: 'B.Tech Lateral Entry (CSE)', duration: '3 Years', regFee: '₹11,000', semFee: '₹80,000 (Half-Yearly)', totalFee: 519000, mode: 'DRCC' },
  { name: 'B.Tech Lateral Entry (Other Branches)', duration: '3 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 399000, mode: 'DRCC' },
  { name: 'BBA LLB (Integrated)', duration: '5 Years', regFee: '₹11,000', semFee: '₹50,000 (Half-Yearly)', totalFee: 551000, mode: 'DRCC' },
  { name: 'BA LLB (Integrated)', duration: '5 Years', regFee: '₹11,000', semFee: '₹50,000 (Half-Yearly)', totalFee: 551000, mode: 'DRCC' },
  { name: 'LLM (1 Year)', duration: '1 Year', regFee: '₹11,000', semFee: '₹45,000 (Half-Yearly)', totalFee: 117000, mode: 'CASH' },
  { name: 'LLM (2 Year)', duration: '2 Years', regFee: '₹11,000', semFee: '₹45,000 (Half-Yearly)', totalFee: 213000, mode: 'CASH' },
  { name: 'BPT (Bachelor of Physio.)', duration: '5 Years', regFee: '₹11,000', semFee: '₹80,000 (Half-Yearly)', totalFee: 685000, mode: 'DRCC' },
  { name: 'D.Pharma (Diploma Pharmacy)', duration: '2 Years', regFee: '₹11,000', semFee: '₹48,000 (Half-Yearly)', totalFee: 225000, mode: 'CASH' },
  { name: 'B.Pharma (Bachelor Pharmacy)', duration: '4 Years', regFee: '₹11,000', semFee: '₹80,000 (Half-Yearly)', totalFee: 685000, mode: 'DRCC' },
  { name: 'B.Pharma Lateral Entry', duration: '3 Years', regFee: '₹11,000', semFee: '₹80,000 (Half-Yearly)', totalFee: 519000, mode: 'DRCC' },
  { name: 'B.Sc MLT (Medical Lab Tech Hons)', duration: '4 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 525000, mode: 'CASH' },
  { name: 'B.Sc MLT Lateral Entry', duration: '3 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 399000, mode: 'CASH' },
  { name: 'B.Sc OTT (Operation Theatre Tech)', duration: '4 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 525000, mode: 'CASH' },
  { name: 'B.Sc Radiography', duration: '4 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 525000, mode: 'CASH' },
  { name: 'B.Sc Nursing', duration: '4 Years', regFee: '₹11,000', semFee: '₹1,20,000 (Half-Yearly)', totalFee: 1005000, mode: 'DRCC' },
  { name: 'GNM (Nursing)', duration: '3 Years', regFee: '₹11,000', semFee: '₹75,000 (Half-Yearly)', totalFee: 489000, mode: 'DRCC' },
  { name: 'B.Sc Agriculture (Hons)', duration: '4 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 530000, mode: 'DRCC' },
  { name: 'M.Sc Agriculture (Plant Breeding)', duration: '2 Years', regFee: '₹11,000', semFee: '₹50,000 (Half-Yearly)', totalFee: 233000, mode: 'CASH' },
  { name: 'M.Sc Agriculture (Agronomy)', duration: '2 Years', regFee: '₹11,000', semFee: '₹50,000 (Half-Yearly)', totalFee: 233000, mode: 'CASH' },
  { name: 'B.Sc Forensic Science', duration: '4 Years', regFee: '₹11,000', semFee: '₹60,000 (Half-Yearly)', totalFee: 525000, mode: 'CASH' },
  { name: 'B.Sc PCM', duration: '4 Years', regFee: '₹11,000', semFee: '₹30,000 (Half-Yearly)', totalFee: 285000, mode: 'DRCC' }
];

const madhavCourses = [
  { name: 'BPT (Physiotherapy)', duration: '4.5 Years', totalFee: 400000, hostelIncludedFee: 560000, mode: 'DRCC' },
  { name: 'B. Pharma (Pharmacy)', duration: '4 Years', totalFee: 400000, hostelIncludedFee: 600000, mode: 'DRCC' },
  { name: 'B.Sc Agriculture', duration: '4 Years', totalFee: 350000, hostelIncludedFee: 520000, mode: 'DRCC' },
  { name: 'Polytechnic Engineering', duration: '3 Years', totalFee: 210000, hostelIncludedFee: 320000, mode: 'DRCC' },
  { name: 'B.Tech (CSE) / CSE (Data Science)', duration: '4 Years', totalFee: 400000, hostelIncludedFee: 520000, mode: 'DRCC' },
  { name: 'B.Tech CSE (AI / ML)', duration: '4 Years', totalFee: 400000, hostelIncludedFee: 540000, mode: 'DRCC' },
  { name: 'B.Tech (EC / ECE / Civil / Mech)', duration: '4 Years', totalFee: 400000, hostelIncludedFee: 460000, mode: 'DRCC' },
  { name: 'B.Sc IT', duration: '3 Years', totalFee: 220000, hostelIncludedFee: 340000, mode: 'DRCC' },
  { name: 'BCA (Computer Applications)', duration: '3 Years', totalFee: 220000, hostelIncludedFee: 340000, mode: 'DRCC' },
  { name: 'BBA (Business Administration)', duration: '3 Years', totalFee: 220000, hostelIncludedFee: 340000, mode: 'DRCC' },
  { name: 'B.Com (Commerce)', duration: '3 Years', totalFee: 220000, hostelIncludedFee: 340000, mode: 'DRCC' },
  { name: 'MBA (Management)', duration: '2 Years', totalFee: 220000, hostelIncludedFee: 340000, mode: 'DRCC' },
  { name: 'MCA (Computer Applications)', duration: '2 Years', totalFee: 220000, hostelIncludedFee: 340000, mode: 'DRCC' },
  { name: 'M.Com', duration: '2 Years', totalFee: 200000, hostelIncludedFee: 300000, mode: 'DRCC' },
  { name: 'M.Sc IT', duration: '2 Years', totalFee: 200000, hostelIncludedFee: 300000, mode: 'DRCC' },
  { name: 'BA LLB (Integrated)', duration: '5 Years', totalFee: 250000, hostelIncludedFee: 500000, mode: 'DRCC' },
  { name: 'LLB (Law)', duration: '3 Years', totalFee: 200000, hostelIncludedFee: 345000, mode: 'DRCC' },
  { name: 'LLM (Master of Laws)', duration: '2 Years', totalFee: 150000, hostelIncludedFee: 260000, mode: 'DRCC' },
  { name: 'B.Ed (Education)', duration: '2 Years', totalFee: 120000, hostelIncludedFee: 240000, mode: 'DRCC' },
  { name: 'BA B.Ed (Integrated)', duration: '4 Years', totalFee: 200000, hostelIncludedFee: 400000, mode: 'DRCC' }
];

const mangalmayCourses = [
  { name: 'MBA++ (with IIM Certification)', duration: '2 Years', regFee: 'Affiliated to AKTU', semFee: 'Yr 1: ₹3.10L, Yr 2: ₹2.15L', totalFee: 525000, mode: 'DRCC' },
  { name: 'MBA (General Management)', duration: '2 Years', regFee: 'Affiliated to AKTU', semFee: 'Yr 1: ₹1.60L, Yr 2: ₹1.49L', totalFee: 309000, mode: 'DRCC' },
  { name: 'B.Tech Advance', duration: '4 Years', regFee: 'Affiliated to AKTU', semFee: '₹1.65L Per Year', totalFee: 660000, mode: 'DRCC' },
  { name: 'B.Tech (CSE / AI / ECE / ETE)', duration: '4 Years', regFee: 'Affiliated to AKTU', semFee: '₹1.29L Per Year', totalFee: 516000, mode: 'DRCC' },
  { name: 'BBA (Platina Course)', duration: '3 Years', regFee: 'Affiliated to CCS Uni.', semFee: '₹1.29L Per Year', totalFee: 387000, mode: 'DRCC' },
  { name: 'BBA (Regular Business Admin)', duration: '3 Years', regFee: 'Affiliated to CCS Uni.', semFee: '₹84,000 Per Year', totalFee: 252000, mode: 'DRCC' },
  { name: 'BCA (Computer Applications)', duration: '3 Years', regFee: 'Affiliated to CCS Uni.', semFee: '₹84,000 Per Year', totalFee: 252000, mode: 'DRCC' },
  { name: 'B.Com (Commerce)', duration: '3 Years', regFee: 'Affiliated to CCS Uni.', semFee: '₹55,000 Per Year', totalFee: 165000, mode: 'DRCC' },
  { name: 'B.A. B.Ed (Integrated)', duration: '4 Years', regFee: 'Affiliated to CCS Uni.', semFee: '₹55,000 Per Year', totalFee: 220000, mode: 'DRCC' }
];

const baddiCourses = [
  { name: 'B.Pharma / D.Pharma', details: 'PCI Approved Programs, direct state registration eligibility.' },
  { name: 'B.Tech (CSE, ME, EE, Civil)', details: 'AICTE approved courses with focused placement training.' },
  { name: 'MBA, MCA & BCA', details: 'Focused IT & Business curriculum with BUEST tie-ups.' },
  { name: 'B.Sc & M.Sc (All major streams)', details: 'Experienced faculty & modern labs.' }
];

const polytechnicPatna = [
  { branch: 'Civil Engineering', eligibility: '10th / 12th Pass' },
  { branch: 'Mechanical Engineering (ME)', eligibility: '10th / 12th Pass' },
  { branch: 'Electrical Engineering (EE)', eligibility: '10th / 12th Pass' },
  { branch: 'Computer Science Engineering (CSE)', eligibility: '10th / 12th Pass' }
];

const stepsData = [
  { step: 'Step 1', title: 'Submit Enquiry', desc: 'Fill our quick enquiry form below or text us directly on WhatsApp to share your career interests.', icon: 'clipboard-edit' },
  { step: 'Step 2', title: 'Free Counseling Session', desc: 'Connect with our expert counselor within 24 hours for a details-oriented profile review.', icon: 'users' },
  { step: 'Step 3', title: 'Personalized Shortlist', desc: 'Receive a customized list of top-tier colleges and courses matching your eligibility and budget.', icon: 'compass' },
  { step: 'Step 4', title: 'Admission & DRCC Support', desc: 'Get full assistance with applications, seat reservation, and student credit card loan paperwork.', icon: 'file-check' }
];

const trustPointsData = [
  { title: '100% Guidance Support', desc: 'Complete counseling from choosing the course, shortlisting colleges, locking admission to document support.', icon: 'heart-handshake' },
  { title: 'Best Colleges & Universities', desc: 'Representing a wide network of top-rated, government-recognized universities and colleges across India.', icon: 'school' },
  { title: 'Scholarship Assistance', desc: 'Guidance on merit-based, state-specific government scholarships, and student loan schemes.', icon: 'hand-coins' },
  { title: 'Visa & Global Opportunities', desc: 'Expert application preparation and guidance for foreign admissions, dental, and medical programs.', icon: 'globe' }
];

const statesList = ['Odisha', 'West Bengal', 'Punjab', 'Bangalore (Karnataka)', 'Uttarakhand', 'Delhi-NCR', 'Bihar', 'Jharkhand'];

// ==========================================
// DYNAMIC COMPONENT RENDERING
// ==========================================

// Render States List in Credit Card Banner
const statesContainer = document.getElementById('states-list');
if (statesContainer) {
  statesContainer.innerHTML = statesList.map(state => `<span>${state}</span>`).join('');
}

// Render How It Works steps
const stepsContainer = document.getElementById('steps-grid');
if (stepsContainer) {
  stepsContainer.innerHTML = stepsData.map((step, idx) => `
    <div class="step-card">
      <div class="step-icon-wrapper">
        <div class="step-icon-circle">
          <i data-lucide="${step.icon}"></i>
        </div>
        <span class="step-number-badge">0${idx + 1}</span>
      </div>
      <div class="step-desc-card neo-box">
        <span class="step-badge-mini">${step.step}</span>
        <h3 class="step-card-title">${step.title}</h3>
        <p class="step-card-desc">${step.desc}</p>
      </div>
    </div>
  `).join('');
}

// Render Trust Points
const trustContainer = document.getElementById('trust-points-grid');
if (trustContainer) {
  trustContainer.innerHTML = trustPointsData.map(point => `
    <div class="trust-point-card neo-box">
      <div class="feature-icon"><i data-lucide="${point.icon}"></i></div>
      <h3 class="trust-card-title">${point.title}</h3>
      <p class="trust-card-desc">${point.desc}</p>
    </div>
  `).join('');
}

// Render Accordion
const accordionContainer = document.getElementById('accordion-container');
if (accordionContainer) {
  accordionContainer.innerHTML = coursesData.map((category, index) => `
    <div class="accordion-card neo-box bg-${index % 2 === 0 ? 'primary-light' : 'white'}" id="accordion-${index}">
      <button class="accordion-header-btn" onclick="toggleAccordion(${index})">
        <div class="accordion-title-box">
          <div class="accordion-icon-box"><i data-lucide="${category.icon}"></i></div>
          <span>${category.title}</span>
        </div>
        <div class="accordion-arrow"><i data-lucide="chevron-down"></i></div>
      </button>
      <div class="accordion-content-panel">
        <div class="courses-list-grid">
          ${category.courses.map(course => `
            <div class="course-list-item">
              <span>${course}</span>
            </div>
          `).join('')}
        </div>
        <div class="accordion-action-row">
          <button onclick="autofillCourse('${category.title}')" class="neo-btn btn-primary">
            <i data-lucide="send"></i>
            <span>Enquire About ${category.title}</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Accordion Expand/Collapse Logic
window.toggleAccordion = function(index) {
  const allCards = document.querySelectorAll('.accordion-card');
  allCards.forEach((card, idx) => {
    if (idx === index) {
      card.classList.toggle('open');
    } else {
      card.classList.remove('open');
    }
  });
};

// Autofill course select callback
window.autofillCourse = function(courseName) {
  const courseInput = document.getElementById('form-course');
  if (courseInput) {
    courseInput.value = courseName;
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// ==========================================
// FEATURED COLLEGES & FEES DIRECTORY
// ==========================================

const collegeTabs = [
  { id: 'usha', label: 'Usha Martin University', sub: 'Ranchi, NAAC A' },
  { id: 'madhav', label: 'Madhav University', sub: 'Rajasthan, 100+ Acre' },
  { id: 'mangalmay', label: 'Mangalmay Group', sub: 'Greater Noida, AKTU' },
  { id: 'baddi', label: 'Baddi University', sub: 'Himachal, UGC & PCI' },
  { id: 'polytechnic', label: 'Patna Polytechnic', sub: 'Bihar DRCC' }
];

let activeTab = 'usha';
let searchWord = '';
let includeHostelState = false;

// Initialize Tab buttons
const tabsContainer = document.getElementById('tab-selectors-container');
if (tabsContainer) {
  tabsContainer.innerHTML = collegeTabs.map(tab => `
    <button class="tab-btn ${tab.id === activeTab ? 'active' : ''}" id="tab-btn-${tab.id}" onclick="switchTab('${tab.id}')">
      <div class="tab-title">${tab.label}</div>
      <div class="tab-sub">${tab.sub}</div>
    </button>
  `).join('');
}

window.switchTab = function(tabId) {
  activeTab = tabId;
  
  // Highlight tab
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Clear search
  const searchBox = document.getElementById('fee-search-box');
  if (searchBox) searchBox.value = '';
  searchWord = '';

  // Show/Hide search bar & hostel toggle
  const searchBarContainer = document.getElementById('search-input-group');
  const hostelToggleContainer = document.getElementById('hostel-toggle-group');

  if (['usha', 'madhav', 'mangalmay'].includes(tabId)) {
    searchBarContainer.style.display = 'block';
  } else {
    searchBarContainer.style.display = 'none';
  }

  if (tabId === 'madhav') {
    hostelToggleContainer.style.display = 'block';
  } else {
    hostelToggleContainer.style.display = 'none';
  }

  renderCollegesData();
};

// Render directory content based on tab
function renderCollegesData() {
  const displayWrapper = document.getElementById('fee-display-wrapper');
  if (!displayWrapper) return;

  const query = searchWord.toLowerCase().trim();

  // 1. Usha Martin Ranchi
  if (activeTab === 'usha') {
    const filtered = ushaMartinCourses.filter(c => c.name.toLowerCase().includes(query));
    
    displayWrapper.innerHTML = `
      <div class="college-meta-banner border-dark">
        <div class="meta-info-left">
          <div class="meta-icon-box"><i data-lucide="graduation-cap"></i></div>
          <div>
            <h3 class="meta-name">Usha Martin University, Ranchi</h3>
            <p class="meta-accreditation">Established 2012 | NAAC Grade A Accredited</p>
          </div>
        </div>
        <div class="meta-info-right font-mono">
          <i data-lucide="bed-double"></i>
          <span>Hostel per Sem: 4-Seater: ₹50K | 3-Seater: ₹60K</span>
        </div>
      </div>

      <div class="fee-table-container">
        <!-- Desktop Table -->
        <table class="fee-table">
          <thead>
            <tr>
              <th>Programme Name</th>
              <th>Duration</th>
              <th>Registration (One Time)</th>
              <th>Semester Fee</th>
              <th>Total Course Fee</th>
              <th>Loan Mode</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(c => `
              <tr>
                <td class="course-td-name">${c.name}</td>
                <td>${c.duration}</td>
                <td>${c.regFee}</td>
                <td>${c.semFee}</td>
                <td class="price-td-bold">₹${c.totalFee.toLocaleString('en-IN')}</td>
                <td>
                  <span class="drcc-badge ${c.mode === 'DRCC' ? 'drcc-yes' : 'drcc-no'}">
                    ${c.mode === 'DRCC' ? '<i data-lucide="landmark"></i> DRCC Approved' : 'Cash / Self Pay'}
                  </span>
                </td>
                <td style="text-align: right;">
                  <button onclick="autofillCollegeCourse('${c.name}', 'Usha Martin Ranchi')" class="neo-btn btn-primary">
                    <span>Enquire</span>
                    <i data-lucide="arrow-up-right"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
            ${filtered.length === 0 ? '<tr><td colspan="7" class="no-records-tr">No matching courses found.</td></tr>' : ''}
          </tbody>
        </table>

        <!-- Mobile Cards -->
        <div class="fee-cards-container-mobile">
          ${filtered.map(c => `
            <div class="fee-card-mobile">
              <div class="card-header-mobile">
                <h4 class="card-name-mobile">${c.name}</h4>
                <span class="drcc-badge ${c.mode === 'DRCC' ? 'drcc-yes' : 'drcc-no'}">${c.mode === 'DRCC' ? 'DRCC' : 'CASH'}</span>
              </div>
              <div class="card-details-grid-mobile">
                <div>Duration: <span class="label-bold">${c.duration}</span></div>
                <div>Registration: <span class="label-bold">${c.regFee}</span></div>
                <div class="col-span-2">Fees: <span class="label-bold">${c.semFee}</span></div>
                <div class="col-span-2 card-price-row-mobile">Total Package: <span class="price-num">₹${c.totalFee.toLocaleString('en-IN')}</span></div>
              </div>
              <button onclick="autofillCollegeCourse('${c.name}', 'Usha Martin Ranchi')" class="neo-btn btn-primary">
                <span>Enquire About Course</span>
                <i data-lucide="arrow-up-right"></i>
              </button>
            </div>
          `).join('')}
          ${filtered.length === 0 ? '<div class="p-6 text-center text-neutral-400 font-bold text-xs">No courses found.</div>' : ''}
        </div>
      </div>
    `;
  }

  // 2. Madhav University
  if (activeTab === 'madhav') {
    const filtered = madhavCourses.filter(c => c.name.toLowerCase().includes(query));
    
    displayWrapper.innerHTML = `
      <div class="college-meta-banner border-dark">
        <div class="meta-info-left">
          <div class="meta-icon-box"><i data-lucide="graduation-cap"></i></div>
          <div>
            <h3 class="meta-name">Madhav University, Rajasthan</h3>
            <p class="meta-accreditation">UGC Approved | 100+ Acres Campus & Placement Drive</p>
          </div>
        </div>
        <div class="meta-info-right font-mono">
          <i data-lucide="bed-double"></i>
          <span>Scholarships Up to 100% Available</span>
        </div>
      </div>

      <div class="fee-table-container">
        <!-- Desktop Table -->
        <table class="fee-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>DRCC Support</th>
              <th>Tuition Fee Only</th>
              <th>${includeHostelState ? 'Fee with Hostel Included' : 'Academic Fee Details'}</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(c => {
              const displayVal = includeHostelState && c.hostelIncludedFee ? c.hostelIncludedFee : c.totalFee;
              return `
                <tr>
                  <td class="course-td-name">${c.name}</td>
                  <td>${c.duration}</td>
                  <td>
                    <span class="drcc-badge drcc-yes">
                      <i data-lucide="landmark"></i> DRCC Approved
                    </span>
                  </td>
                  <td>₹${c.totalFee.toLocaleString('en-IN')}</td>
                  <td class="price-td-bold">
                    ₹${displayVal.toLocaleString('en-IN')}
                    ${includeHostelState ? '<span class="hostel-marker-lbl">(With Hostel)</span>' : ''}
                  </td>
                  <td style="text-align: right;">
                    <button onclick="autofillCollegeCourse('${c.name}', 'Madhav Uni.${includeHostelState ? ' with Hostel' : ''}')" class="neo-btn btn-primary">
                      <span>Enquire</span>
                      <i data-lucide="arrow-up-right"></i>
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
            ${filtered.length === 0 ? '<tr><td colspan="6" class="no-records-tr">No matching courses found.</td></tr>' : ''}
          </tbody>
        </table>

        <!-- Mobile Cards -->
        <div class="fee-cards-container-mobile">
          ${filtered.map(c => {
            const displayVal = includeHostelState && c.hostelIncludedFee ? c.hostelIncludedFee : c.totalFee;
            return `
              <div class="fee-card-mobile">
                <div class="card-header-mobile">
                  <h4 class="card-name-mobile">${c.name}</h4>
                  <span class="drcc-badge drcc-yes">DRCC</span>
                </div>
                <div class="card-details-grid-mobile">
                  <div>Duration: <span class="label-bold">${c.duration}</span></div>
                  <div>Tuition: <span class="label-bold">₹${c.totalFee.toLocaleString('en-IN')}</span></div>
                  <div class="col-span-2 card-price-row-mobile">
                    ${includeHostelState ? 'Total (with Hostel):' : 'Total (Tuition):'} <span class="price-num">₹${displayVal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <button onclick="autofillCollegeCourse('${c.name}', 'Madhav Uni.${includeHostelState ? ' with Hostel' : ''}')" class="neo-btn btn-primary">
                  <span>Enquire About Course</span>
                  <i data-lucide="arrow-up-right"></i>
                </button>
              </div>
            `;
          }).join('')}
          ${filtered.length === 0 ? '<div class="p-6 text-center text-neutral-400 font-bold text-xs">No courses found.</div>' : ''}
        </div>
      </div>
    `;
  }

  // 3. Mangalmay Noida
  if (activeTab === 'mangalmay') {
    const filtered = mangalmayCourses.filter(c => c.name.toLowerCase().includes(query));
    
    displayWrapper.innerHTML = `
      <div class="college-meta-banner border-dark">
        <div class="meta-info-left">
          <div class="meta-icon-box"><i data-lucide="graduation-cap"></i></div>
          <div>
            <h3 class="meta-name">Mangalmay Group of Institutions</h3>
            <p class="meta-accreditation">Greater Noida, Delhi-NCR | NAAC Accredited & AICTE Approved</p>
          </div>
        </div>
        <div class="placement-stats-row font-mono">
          <div class="placement-stat-badge">
            <div class="badge-num">37 LPA</div>
            <div class="badge-lbl">Highest package</div>
          </div>
          <div class="placement-stat-badge">
            <div class="badge-num">95%</div>
            <div class="badge-lbl">Placements</div>
          </div>
          <div class="placement-stat-badge">
            <div class="badge-num">1100+</div>
            <div class="badge-lbl">Companies</div>
          </div>
        </div>
      </div>

      <div class="fee-table-container">
        <!-- Desktop Table -->
        <table class="fee-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Affiliation</th>
              <th>Duration</th>
              <th>Fee Breakdown</th>
              <th>Total Course Package</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(c => `
              <tr>
                <td class="course-td-name">${c.name}</td>
                <td>${c.regFee}</td>
                <td>${c.duration}</td>
                <td style="font-size: 11px;">${c.semFee}</td>
                <td class="price-td-bold">₹${c.totalFee.toLocaleString('en-IN')}</td>
                <td style="text-align: right;">
                  <button onclick="autofillCollegeCourse('${c.name}', 'Mangalmay Noida')" class="neo-btn btn-primary">
                    <span>Enquire</span>
                    <i data-lucide="arrow-up-right"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
            ${filtered.length === 0 ? '<tr><td colspan="6" class="no-records-tr">No matching courses found.</td></tr>' : ''}
          </tbody>
        </table>

        <!-- Mobile Cards -->
        <div class="fee-cards-container-mobile">
          ${filtered.map(c => `
            <div class="fee-card-mobile">
              <div class="card-header-mobile">
                <h4 class="card-name-mobile">${c.name}</h4>
                <span class="drcc-badge drcc-yes">DRCC</span>
              </div>
              <div class="card-details-grid-mobile">
                <div>Affiliation: <span class="label-bold">${c.regFee}</span></div>
                <div>Duration: <span class="label-bold">${c.duration}</span></div>
                <div class="col-span-2">Fees: <span class="label-bold">${c.semFee}</span></div>
                <div class="col-span-2 card-price-row-mobile">Total Package: <span class="price-num">₹${c.totalFee.toLocaleString('en-IN')}</span></div>
              </div>
              <button onclick="autofillCollegeCourse('${c.name}', 'Mangalmay Noida')" class="neo-btn btn-primary">
                <span>Enquire About Course</span>
                <i data-lucide="arrow-up-right"></i>
              </button>
            </div>
          `).join('')}
          ${filtered.length === 0 ? '<div class="p-6 text-center text-neutral-400 font-bold text-xs">No courses found.</div>' : ''}
        </div>
      </div>
      <div class="baddi-badge-row border-dark bg-white" style="margin-top: 15px; border: 2px solid #111; padding: 12px; border-radius: 12px; display: flex; align-items: center; gap: 8px;">
        <i data-lucide="bed-double"></i>
        <span style="font-size: 11px; font-weight: 700; color: #555;">Hostel & Mess: Twin Sharing: ₹1,15,000/Yr | Triple Sharing: ₹1,00,000/Yr (girls only twin-sharing).</span>
      </div>
    `;
  }

  // 4. Baddi University (Himachal)
  if (activeTab === 'baddi') {
    displayWrapper.innerHTML = `
      <div class="fee-table-container p-6 bg-white">
        <div class="baddi-grid-layout">
          
          <div class="baddi-info-side">
            <div class="baddi-badge-row">
              <i data-lucide="shield-check"></i>
              <span>UGC & PCI Approved University</span>
            </div>
            <h3 class="baddi-title-text">Baddi University (BUEST)</h3>
            <p class="baddi-desc-text">
              Located in Himachal Pradesh, Baddi University of Emerging Sciences & Technology is certified for PCI & UGC courses. Global Educational Advisor is an officially authorized associate certified to process provisional registrations.
            </p>
            
            <div class="baddi-subcards-grid">
              ${baddiCourses.map(b => `
                <div class="baddi-subcard border-dark">
                  <h4 class="subcard-name">${b.name}</h4>
                  <p class="subcard-desc">${b.details}</p>
                </div>
              `).join('')}
            </div>

            <button onclick="autofillCollegeCourse('Provisional Application', 'Baddi University')" class="neo-btn btn-primary" style="margin-top: 10px;">
              <span>Apply Provisional Admission 2026</span>
              <i data-lucide="arrow-up-right"></i>
            </button>
          </div>

          <div class="certificate-widget-container">
            <div class="certificate-widget-box neo-box bg-white border-dark">
              <div class="cert-border-double">
                <div class="cert-top-title">Certificate of Authorization</div>
                <div class="cert-h-line"></div>
                <div class="cert-clg-name">Baddi University</div>
                <p class="cert-p-small">We hereby authorize</p>
                <div class="cert-p-bold">GLOBAL EDUCATIONAL ADVISOR</div>
                <p class="cert-p-small">C/O Rahul Kr. as our Academic Associate to counsel students & accept provisional registration.</p>
                <div class="cert-h-line"></div>
                <div class="cert-signature">Governing Body - Gaurrav Ram Jhunjhunwala</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // 5. Patna Polytechnic
  if (activeTab === 'polytechnic') {
    displayWrapper.innerHTML = `
      <div class="fee-table-container p-6 bg-white">
        <div class="baddi-grid-layout">
          
          <div class="baddi-info-side">
            <div class="baddi-badge-row bg-primary-light border-dark" style="background-color: var(--color-primary-light);">
              <i data-lucide="landmark"></i>
              <span style="color: var(--color-dark);">Bihar Government Scheme Accepted</span>
            </div>
            <h3 class="baddi-title-text">Patna से Polytechnic करें (Admission 2026-27)</h3>
            <p class="baddi-desc-text">
              10th aur 12th pass students Patna ke top government recognized polytechnic colleges mein standard branches ke sath direct admission pa sakte hain. Bihar Student Credit Card loan processing available hai.
            </p>

            <div class="patna-grid">
              ${polytechnicPatna.map(p => `
                <div class="patna-card neo-box">
                  <div class="patna-card-left">
                    <h4>${p.branch}</h4>
                    <p>Eligibility: ${p.eligibility}</p>
                  </div>
                  <button onclick="autofillCollegeCourse('Polytechnic - ${p.branch}', 'Patna Polytechnic')" class="neo-btn" aria-label="Enquire">
                    <i data-lucide="arrow-up-right"></i>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="certificate-widget-container">
            <div class="certificate-widget-box neo-box bg-primary flex flex-col justify-between" style="background-color: var(--color-primary); max-width: 280px;">
              <div class="cert-border-double" style="background-color: white; border-radius: 12px; padding: 20px;">
                <h4 style="font-family: var(--font-display); font-weight: 900; font-size: 13px;">ADMISSIONS OPEN</h4>
                <div style="font-size: 26px; font-weight: 900; color: var(--color-accent); font-family: var(--font-display);">2026 - 2027</div>
                <div class="cert-h-line" style="margin: 10px 0;"></div>
                <p style="font-size: 9px; font-weight: 700; color: #555;">Complete guidance support for student credit card documents.</p>
              </div>
              <button onclick="autofillCollegeCourse('Polytechnic Admissions', 'Patna Polytechnic')" class="neo-btn btn-dark w-full" style="margin-top: 14px; border-radius: 9999px; padding: 10px;">
                Apply for Polytechnic
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // Re-create icons loaded via JavaScript
  lucide.createIcons();
}

// Switch tabs trigger
window.autofillCollegeCourse = function(course, college) {
  const courseInput = document.getElementById('form-course');
  if (courseInput) {
    courseInput.value = `${course} at ${college}`;
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Search box keyup handler
const searchBoxEl = document.getElementById('fee-search-box');
if (searchBoxEl) {
  searchBoxEl.addEventListener('keyup', (e) => {
    searchWord = e.target.value;
    renderCollegesData();
  });
}

// Hostel check toggle handler
const hostelCheckbox = document.getElementById('hostel-fee-checkbox');
if (hostelCheckbox) {
  hostelCheckbox.addEventListener('change', (e) => {
    includeHostelState = e.target.checked;
    renderCollegesData();
  });
}

// Initialize rendering on load
renderCollegesData();

// ==========================================
// NAVIGATION & SCROLL EVENTS
// ==========================================

// Navbar Scroll Effect
const navbarEl = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbarEl.classList.add('scrolled');
  } else {
    navbarEl.classList.remove('scrolled');
  }
});

// Mobile menu drawer toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('nav-drawer-mobile');
const menuIcon = document.getElementById('menu-icon');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    const isActive = mobileDrawer.classList.toggle('active');
    if (isActive) {
      menuIcon.setAttribute('data-lucide', 'x');
    } else {
      menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  });
}

// Close drawer when clicking a mobile link
document.querySelectorAll('.nav-drawer-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileDrawer.classList.remove('active');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Set current copyright year
const yearEl = document.getElementById('current-year');
if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}

// Global WhatsApp redirect helper
window.openWhatsAppChat = function(textStr) {
  const waUrl = `https://wa.me/917041053589?text=${encodeURIComponent(textStr)}`;
  window.open(waUrl, '_blank');
};

// ==========================================
// CONTACT FORM VALIDATION & WHATSAPP
// ==========================================

const consultForm = document.getElementById('consultation-form');

if (consultForm) {
  consultForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Inputs
    const nameVal = document.getElementById('form-name').value.trim();
    const phoneVal = document.getElementById('form-phone').value.trim();
    const streamVal = document.getElementById('form-stream').value;
    const courseVal = document.getElementById('form-course').value.trim();
    const locationVal = document.getElementById('form-location').value.trim() || 'Not specified';
    const messageVal = document.getElementById('form-message').value.trim() || 'Looking for details';

    // Errors labels
    const errName = document.getElementById('err-name');
    const errPhone = document.getElementById('err-phone');
    const errStream = document.getElementById('err-stream');
    const errCourse = document.getElementById('err-course');

    // Reset errors
    let isValid = true;
    [errName, errPhone, errStream, errCourse].forEach(el => {
      el.style.display = 'none';
      el.innerText = '';
    });

    // Validations
    if (!nameVal) {
      errName.innerText = 'Name is required';
      errName.style.display = 'block';
      isValid = false;
    }

    const cleanPhone = phoneVal.replace(/\D/g, '');
    if (!phoneVal) {
      errPhone.innerText = 'Phone number is required';
      errPhone.style.display = 'block';
      isValid = false;
    } else if (cleanPhone.length !== 10) {
      errPhone.innerText = 'Please enter a valid 10-digit phone number';
      errPhone.style.display = 'block';
      isValid = false;
    }

    if (!streamVal) {
      errStream.innerText = 'Please select your stream';
      errStream.style.display = 'block';
      isValid = false;
    }

    if (!courseVal) {
      errCourse.innerText = 'Preferred course is required';
      errCourse.style.display = 'block';
      isValid = false;
    }

    if (!isValid) return;

    // Build WhatsApp message
    const formattedMsg = 
`Hi, I need admission guidance. Here are my details:
*Name:* ${nameVal}
*Phone:* ${phoneVal}
*Last Education / Stream:* ${streamVal}
*Preferred Course:* ${courseVal}
*Preferred State/City:* ${locationVal}
*Message:* ${messageVal}`;

    const waLink = `https://wa.me/917041053589?text=${encodeURIComponent(formattedMsg)}`;

    // Show Success Panel
    const successOverlay = document.getElementById('form-success-overlay');
    successOverlay.style.display = 'flex';

    // Reset Form
    consultForm.reset();

    // Redirect to WhatsApp after delay
    setTimeout(() => {
      window.open(waLink, '_blank');
      successOverlay.style.display = 'none';
    }, 1500);
  });
}

// Initialize Lucide Icons at boot
lucide.createIcons();
