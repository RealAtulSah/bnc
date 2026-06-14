document.addEventListener('DOMContentLoaded', function() {
  injectHeader();
  injectFooter();
  setupMobileMenu();
  makeTablesResponsive();
});

function injectHeader() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (!headerPlaceholder) return;

  const headerHTML = `
    <!-- Topbar -->
    <div class="topbar">
      <div class="container topbar-wrapper">
        <div class="topbar-links">
          <a href="gallery.html">Gallery</a>
          <a href="anunaad.html">Anunaad</a>
          <a href="anveshika.html">Anveshika</a>
          <a href="literary-pearls.html">Literary Pearls</a>
          <a href="publications.html">Publications</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <div>
          <a href="admissions.html" style="color: var(--accent); font-weight: 600;">Apply for Admission 2026-30</a>
        </div>
      </div>
    </div>

    <!-- Main Branding Header -->
    <div class="header-main">
      <div class="container header-wrapper">
        <div class="logo-container">
          <!-- We represent the logo with a stylized icon and text, since the actual logo might not load locally -->
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color: var(--primary); padding: 8px; border-radius: var(--radius);">
            <path d="M24 4L4 14L24 24L44 14L24 4Z" fill="#b59410"/>
            <path d="M4 14V34L24 44V24L4 14Z" fill="#0f172a"/>
            <path d="M44 14V34L24 44V24L44 14Z" fill="#1e293b"/>
          </svg>
          <div class="logo-text">
            <h1>BIHAR NATIONAL COLLEGE</h1>
            <p>B.N. College Patna • Constituent Unit of Patna University</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="main-nav">
      <div class="container nav-container">
        <button class="hamburger" id="hamburger-btn" aria-label="Toggle Navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" id="nav-links-menu">
          <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
          
          <!-- About Mega Menu -->
          <li class="nav-item megamenu-fw">
            <a href="#" class="nav-link">About Us ▾</a>
            <div class="megamenu-content">
              <div class="megamenu-grid">
                <div class="megamenu-column">
                  <h3>Overview</h3>
                  <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="heritage.html">Our Heritage</a></li>
                    <li><a href="college_details.html">College Details</a></li>
                    <li><a href="non-teaching-staff.html">Non-Teaching Staff</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Administration</h3>
                  <ul>
                    <li><a href="finance.html">Finance</a></li>
                    <li><a href="download_form.html">Downloads</a></li>
                    <li><a href="governing_acts.html">Governing Acts</a></li>
                    <li><a href="biometric.html">Biometric Attendance</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Student Activities</h3>
                  <ul>
                    <li><a href="ragging.html">Anti-Ragging Cell</a></li>
                    <li><a href="cultural.html">Cultural Activities</a></li>
                    <li><a href="sports.html">Sports Activities</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Committees</h3>
                  <ul>
                    <li><a href="training_placement.html">Training & Placement</a></li>
                    <li><a href="academics_research_department.html">Research Activity</a></li>
                    <li><a href="hostel_warden.html">Hostel Facility</a></li>
                    <li><a href="grievances_redressal.html">Grievance Redressal</a></li>
                    <li><a href="college-committee.html">College Committees</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Alumni Mega Menu -->
          <li class="nav-item megamenu-fw">
            <a href="#" class="nav-link">Alumni ▾</a>
            <div class="megamenu-content">
              <div class="megamenu-grid">
                <div class="megamenu-column">
                  <h3>Information</h3>
                  <ul>
                    <li><a href="brief_introduction.html">A Brief Introduction</a></li>
                    <li><a href="alumnae-meet-invitation-letter.html">Alumni Meet Invitation</a></li>
                    <li><a href="programme-details.html">Programme Details</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Engage</h3>
                  <ul>
                    <li><a href="alumni-appeal-for-donation.html">Appeal for Donation</a></li>
                    <li><a href="alumni_profile_list.html">List of Registered Alumni</a></li>
                    <li><a href="alumnae-meet-photo-gallery.html">Meet Photo Gallery</a></li>
                    <li><a href="feedback_alumni.html">Alumni Feedback</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Departments Mega Menu -->
          <li class="nav-item megamenu-fw">
            <a href="departments.html" class="nav-link">Departments ▾</a>
            <div class="megamenu-content">
              <div class="megamenu-grid">
                <div class="megamenu-column">
                  <h3>Science</h3>
                  <ul>
                    <li><a href="department.html?dept=physics">Physics</a></li>
                    <li><a href="department.html?dept=chemistry">Chemistry</a></li>
                    <li><a href="department.html?dept=mathematics">Mathematics</a></li>
                    <li><a href="department.html?dept=botany">Botany</a></li>
                    <li><a href="department.html?dept=zoology">Zoology</a></li>
                    <li><a href="department.html?dept=geology">Geology</a></li>
                    <li><a href="department.html?dept=statistics">Statistics</a></li>
                    <li><a href="department.html?dept=electronics">Electronics</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Social Science</h3>
                  <ul>
                    <li><a href="department.html?dept=geography">Geography</a></li>
                    <li><a href="department.html?dept=history">History</a></li>
                    <li><a href="department.html?dept=economics">Economics</a></li>
                    <li><a href="department.html?dept=politicalscience">Political Science</a></li>
                    <li><a href="department.html?dept=psychology">Psychology</a></li>
                    <li><a href="department.html?dept=philosophy">Philosophy</a></li>
                    <li><a href="department.html?dept=sociology">Sociology</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Language</h3>
                  <ul>
                    <li><a href="department.html?dept=hindi">Hindi</a></li>
                    <li><a href="department.html?dept=english">English</a></li>
                    <li><a href="department.html?dept=sanskrit">Sanskrit</a></li>
                    <li><a href="department.html?dept=urdu">Urdu</a></li>
                    <li><a href="department.html?dept=maithili">Maithili</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Vocational</h3>
                  <ul>
                    <li><a href="department.html?dept=biotechnology">Biotechnology</a></li>
                    <li><a href="department.html?dept=functionalenglish">Functional English</a></li>
                    <li><a href="department.html?dept=gemmology">Gemmology</a></li>
                    <li><a href="department.html?dept=bba">BBA</a></li>
                    <li><a href="department.html?dept=bca">BCA</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Faculty -->
          <li class="nav-item">
            <a href="#" class="nav-link">Faculty ▾</a>
            <ul class="dropdown-menu">
              <li><a href="facuilty-profile-list.html">Teaching Staff</a></li>
              <li><a href="teacher_appraisal.html">Teacher's Appraisal</a></li>
            </ul>
          </li>

          <!-- Students Mega Menu -->
          <li class="nav-item megamenu-fw">
            <a href="#" class="nav-link">Students ▾</a>
            <div class="megamenu-content">
              <div class="megamenu-grid">
                <div class="megamenu-column">
                  <h3>Academics</h3>
                  <ul>
                    <li><a href="ug_program.html">UG Programmes</a></li>
                    <li><a href="teaching_evaluation.html">Teaching & Evaluation</a></li>
                    <li><a href="student_attendance.html">Attendance Policy</a></li>
                    <li><a href="internal_assessment.html">Internal Assessment</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Exams & Results</h3>
                  <ul>
                    <li><a href="exam_control.html">Examination Control</a></li>
                    <li><a href="schedule_form.html">Examination Schedule</a></li>
                    <li><a href="student_result_form.html">Examination Result</a></li>
                    <li><a href="result_analysis_form.html">Result Analysis</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Activities & Life</h3>
                  <ul>
                    <li><a href="life_at_bncollege.html">Life at B.N. College</a></li>
                    <li><a href="student_council.html">Student's Council</a></li>
                    <li><a href="nss.html">NSS</a></li>
                    <li><a href="ncc.html">NCC</a></li>
                  </ul>
                </div>
                <div class="megamenu-column">
                  <h3>Regulations</h3>
                  <ul>
                    <li><a href="rules_regulations.html">Rules & Regulations</a></li>
                    <li><a href="student_list.html">Student List</a></li>
                    <li><a href="achievements.html">Achievements</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!-- Admissions -->
          <li class="nav-item">
            <a href="#" class="nav-link">Admissions ▾</a>
            <ul class="dropdown-menu">
              <li><a href="ug_admission.html">UG Courses</a></li>
              <li><a href="vocational_couces.html">Vocational Courses</a></li>
              <li><a href="schorership.html">Scholarships</a></li>
            </ul>
          </li>

          <!-- Research & Facilities -->
          <li class="nav-item">
            <a href="#" class="nav-link">Research & facilities ▾</a>
            <ul class="dropdown-menu">
              <li><a href="research_overview.html">Research Overview</a></li>
              <li><a href="recent_publications.html">Recent Publications</a></li>
              <li><a href="accomodation.html">Accommodation</a></li>
            </ul>
          </li>

          <!-- IQAC / NIRF -->
          <li class="nav-item"><a href="naac.html" class="nav-link">NAAC</a></li>
          <li class="nav-item"><a href="nirf.html" class="nav-link">NIRF</a></li>
          <li class="nav-item"><a href="e-resources.html" class="nav-link">E-Resources</a></li>
        </ul>
      </div>
    </nav>
  `;
  headerPlaceholder.outerHTML = headerHTML;
}

function injectFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  const footerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3>Bihar National College</h3>
          <p>
            Bihar National College (B.N. College) was established in 1889 by Babu Bisheswar Singh and Shaligram Singh. 
            It is one of the oldest constituent colleges of Patna University, offering premium undergraduate, postgraduate, 
            and vocational courses in a modern, minimalistic academic setting.
          </p>
          <div class="footer-info">
            <div class="footer-info-item">
              <span>📍</span>
              <span>Ashok Rajpath, Near Gandhi Maidan, Patna, Bihar - 800004</span>
            </div>
            <div class="footer-info-item">
              <span>📞</span>
              <span>0612-22677619</span>
            </div>
            <div class="footer-info-item">
              <span>✉️</span>
              <span>info@bncollegepatna.com</span>
            </div>
          </div>
        </div>
        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="heritage.html">Our Heritage</a></li>
            <li><a href="departments.html">Departments</a></li>
            <li><a href="ug_admission.html">Admissions</a></li>
            <li><a href="tenders.html">Tender Notices</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Student Portal</h3>
          <ul class="footer-links">
            <li><a href="schedule_form.html">Examination Schedule</a></li>
            <li><a href="student_result_form.html">Result Portal</a></li>
            <li><a href="download_form.html">Forms Download</a></li>
            <li><a href="e-resources.html">E-Resources (NDL/N-List)</a></li>
            <li><a href="biometric.html">Biometric Attendance</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>&copy; 2026 Bihar National College Patna. All Rights Reserved.</p>
        <p>Visitor Counter: <span style="color: var(--accent); font-weight: 600;">350,680</span></p>
      </div>
    </footer>
  `;
  footerPlaceholder.outerHTML = footerHTML;
}

function setupMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinksMenu = document.getElementById('nav-links-menu');
  
  if (hamburgerBtn && navLinksMenu) {
    hamburgerBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinksMenu.classList.toggle('active');
    });

    // Expand mobile dropdowns on tap/click for mobile screens
    const navItemsWithDropdown = navLinksMenu.querySelectorAll('.nav-item');
    navItemsWithDropdown.forEach(item => {
      const link = item.querySelector('.nav-link');
      if (item.querySelector('.dropdown-menu') || item.querySelector('.megamenu-content')) {
        link.addEventListener('click', function(e) {
          if (window.innerWidth <= 991) {
            e.preventDefault();
            e.stopPropagation();
            item.classList.toggle('active');
          }
        });
      }
    });

    document.addEventListener('click', function() {
      if (window.innerWidth <= 991) {
        navLinksMenu.classList.remove('active');
        navItemsWithDropdown.forEach(item => item.classList.remove('active'));
      }
    });
  }
}

function makeTablesResponsive() {
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    if (table.parentElement.classList.contains('table-responsive')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}
