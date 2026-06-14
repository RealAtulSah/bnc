// Main interactive scripts for B.N. College website

document.addEventListener('DOMContentLoaded', function() {
  setupHeroSlider();
  setupTabs();
  setupDepartmentDetails();
});

// Minimalistic Hero Carousel Slider
function setupHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  
  if (!slider || slides.length === 0) return;
  
  let currentSlide = 0;
  const slideCount = slides.length;
  let slideInterval;

  function goToSlide(index) {
    currentSlide = (index + slideCount) % slideCount;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function stopAutoplay() {
    clearInterval(slideInterval);
  }

  // Set up dot click events
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      goToSlide(idx);
      startAutoplay();
    });
  });

  // Start autoplay
  startAutoplay();
  
  // Pause on hover
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
  }
}

// Tab switcher component utility
function setupTabs() {
  const tabsNavs = document.querySelectorAll('.tabs-nav');
  
  tabsNavs.forEach(nav => {
    const buttons = nav.querySelectorAll('.tab-btn');
    const container = nav.closest('.tabs-container');
    if (!container) return;
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        
        // Deactivate all buttons in this nav
        buttons.forEach(b => b.classList.remove('active'));
        
        // Hide all tab content under this container
        const contents = container.querySelectorAll('.tab-content');
        contents.forEach(c => c.classList.remove('active'));
        
        // Activate target
        btn.classList.add('active');
        const targetContent = container.querySelector(`#${targetId}`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
}

// Dynamic Department details loader for department.html
function setupDepartmentDetails() {
  const deptContent = document.getElementById('department-detail-content');
  if (!deptContent) return;

  // Get department name from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const dept = urlParams.get('dept');

  if (dept) {
    loadDepartmentInfo(dept);
  } else {
    deptContent.innerHTML = `<p style="padding: 40px 0; text-align: center; color: var(--text-muted);">Please select a department from the main menu.</p>`;
  }
}

// Simulated department details DB
const departmentData = {
  physics: {
    title: 'Department of Physics',
    established: '1892',
    hod: 'Dr. Sardar Singh Rao',
    desc: 'The Department of Physics at B.N. College Patna has a proud history of academic excellence and research. It offers undergraduate Honors and elective courses, emphasizing both theoretical understanding and hands-on laboratory experience.',
    syllabus: 'Undergraduate BSc Honors in Physics (CBCS framework covering Classical Mechanics, Electrodynamics, Quantum Mechanics, Solid State Physics, Electronics, and Thermodynamics).',
    staff: ['Dr. Sardar Singh Rao (Professor & HOD)', 'Dr. R. K. Prasad (Associate Professor)', 'Dr. S. K. Sharma (Assistant Professor)']
  },
  chemistry: {
    title: 'Department of Chemistry',
    established: '1892',
    hod: 'Dr. Ramesh Chandra',
    desc: 'The Department of Chemistry provides deep knowledge in Organic, Inorganic, and Physical Chemistry. It is equipped with spacious laboratories to facilitate student experiments and research activities.',
    syllabus: 'B.Sc. Chemistry Honors with specializations in Synthesis, Analytical Chemistry, and Material Science.',
    staff: ['Dr. Ramesh Chandra (Professor & HOD)', 'Dr. Anjali Verma (Associate Professor)', 'Dr. Vinod Kumar (Assistant Professor)']
  },
  mathematics: {
    title: 'Department of Mathematics',
    established: '1889',
    hod: 'Dr. M. P. Singh',
    desc: 'Mathematics is one of the founding departments of B.N. College. It trains students in logical thinking, analysis, and problem-solving, producing multiple Patna University gold medalists.',
    syllabus: 'B.Sc. & B.A. Honors in Mathematics covering Algebra, Real Analysis, Differential Equations, Mechanics, and Numerical Methods.',
    staff: ['Dr. M. P. Singh (Professor & HOD)', 'Dr. S. N. Roy (Associate Professor)']
  },
  biotechnology: {
    title: 'Department of Biotechnology (Vocational)',
    established: '2001',
    hod: 'Dr. Rajeev Kumar',
    desc: 'Supported by UGC, the Biotechnology program at B.N. College is a leading vocational course. It is designed to prepare students for careers in research, healthcare, and industrial biotechnology.',
    syllabus: 'B.Sc. (Vocational) Honors in Biotechnology covering Cell Biology, Genetics, Biochemistry, Microbiology, Recombinant DNA Technology, and Bioinformatics.',
    staff: ['Dr. Rajeev Kumar (Coordinator & HOD)', 'Dr. Shweta Pathak (Assistant Professor)', 'Dr. Amit Sinha (Assistant Professor)']
  },
  bca: {
    title: 'Department of Computer Applications (BCA)',
    established: '2000',
    hod: 'Dr. Abhishek Kumar Sharma',
    desc: 'The BCA department equips students with state-of-the-art software skills. It offers dedicated computer labs with high-speed internet connectivity, hosting regular guest lectures by industry experts.',
    syllabus: 'B.C.A. (Vocational) Honors covering Programming (C++, Java, Python), Database Management, Software Engineering, Web Development, and Artificial Intelligence.',
    staff: ['Dr. Abhishek Kumar Sharma (Coordinator & HOD)', 'Mrs. Dolly Bharti (Lecturer)', 'Mr. Rajesh Kumar (Lab Assistant)']
  },
  bba: {
    title: 'Department of Business Administration (BBA)',
    established: '2002',
    hod: 'Dr. Murari Sharan Manglik',
    desc: 'The BBA department focuses on creating corporate leaders. It emphasizes case studies, industrial visits, presentations, and mock group discussions to build corporate readiness.',
    syllabus: 'B.B.A. (Vocational) Honors covering Principles of Management, Marketing, Financial Accounting, Human Resource Management, and Business Law.',
    staff: ['Dr. Murari Sharan Manglik (Coordinator & HOD)', 'Mrs. Ritu Raj (Lecturer)', 'Mr. Vikash Kumar (Lecturer)']
  }
};

// Default fallback for any other department
function loadDepartmentInfo(deptName) {
  const contentDiv = document.getElementById('department-detail-content');
  if (!contentDiv) return;

  const data = departmentData[deptName.toLowerCase()] || {
    title: `Department of ${deptName.charAt(0).toUpperCase() + deptName.slice(1)}`,
    established: '1889',
    hod: 'Senior Faculty Member',
    desc: `The Department of ${deptName} at B.N. College Patna offers undergraduate courses with a focus on comprehensive learning, academic discipline, and student growth.`,
    syllabus: `Undergraduate Honors and General courses aligned with the Patna University CBCS curriculum.`,
    staff: ['HOD & Department Faculty']
  };

  let staffListHTML = data.staff.map(s => `<li>${s}</li>`).join('');

  contentDiv.innerHTML = `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border); padding-bottom: 16px; margin-bottom: 24px;">
        <h2 style="font-size: 28px; color: var(--primary);">${data.title}</h2>
        <span style="font-size: 13px; font-weight: 600; color: var(--accent); background-color: var(--primary); padding: 6px 12px; border-radius: var(--radius);">Est. ${data.established}</span>
      </div>
      
      <div class="grid grid-2" style="margin-bottom: 30px;">
        <div>
          <h3 style="font-size: 16px; margin-bottom: 8px;">Head of Department</h3>
          <p style="color: var(--text-main); font-weight: 500;">${data.hod}</p>
        </div>
        <div>
          <h3 style="font-size: 16px; margin-bottom: 8px;">Academic Stream</h3>
          <p style="color: var(--text-muted);">${deptName.toLowerCase() === 'bca' || deptName.toLowerCase() === 'bba' || deptName.toLowerCase() === 'biotechnology' || deptName.toLowerCase() === 'functionalenglish' || deptName.toLowerCase() === 'gemmology' ? 'Vocational / Self-Financing' : 'Regular Program'}</p>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 18px; margin-bottom: 12px; position: relative; padding-left: 12px;"><span style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background-color: var(--accent);"></span>About the Department</h3>
        <p style="color: var(--text-muted); line-height: 1.7;">${data.desc}</p>
      </div>

      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 18px; margin-bottom: 12px; position: relative; padding-left: 12px;"><span style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background-color: var(--accent);"></span>Syllabus & Curriculum</h3>
        <p style="color: var(--text-muted);">${data.syllabus}</p>
      </div>

      <div>
        <h3 style="font-size: 18px; margin-bottom: 12px; position: relative; padding-left: 12px;"><span style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background-color: var(--accent);"></span>Department Faculty & Staff</h3>
        <ul style="list-style: none; padding-left: 12px; color: var(--text-muted); display: grid; gap: 8px;">
          ${staffListHTML}
        </ul>
      </div>
    </div>
  `;
}
