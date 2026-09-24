// 1. IEEE PCE EVENTS DATA
// IMPORTANT MAINTENANCE NOTE:
// Add new events here by year inside eventsData.
// Keep the event title, photos, description, date, and optional winner/highlights fields
// consistent with the event cards and any modal/detail rendering in this file.
// If you add a new event structure, update the normal card and workshop render paths too.
// FUTURE REFERENCE:
// Every event object should carry the same public fields for the website to render cards,
// archive filters, and detail popups safely: title, photos, description, date, and optionally
// winner/highlights. New years should be inserted as keys like 2027 while keeping existing
// rendering templates unchanged.
const eventsData = {
  2026: [
    /*{
      title: "🔐 UI/UX Design Workshop",
      photos: ["../static/events/UIUX.jpg","../static/events/UIUX(1).jpg", "../static/events/UIUX(2).jpg","../static/events/UIUX(3).jpg"],
      description: "An engaging one-day workshop organized by IEEE PCE in collab with Alegria that introduced students to the fundamental principles of User Interface (UI) and User Experience (UX) design. Led by expert Ms. Sejal, the session blended theory with practice, covering core concepts like typography and color selection before transitioning into a comprehensive hands-on Figma demonstration. Participants gained practical exposure by editing a dynamic car design model and exploring interactive UI elements like the Mirror Font Effect. The insightful event concluded with a creative design competition and a Vote of Thanks by Swastik, successfully equipping attendees with essential industry-standard design skills.",
      date: "2026-01-29"
    },*/
   
    {
      title: "🚀 Code Autopsy: Gamified debugging",
      photos: ["../static/events/code autopsy.jpeg","../static/events/code autopsy(1).png","../static/events/code autopsy(2).png","../static/events/code autopsy(3).png"],
      description: "An intensive two-day gamified debugging competition organized by IEEE PCE that challenged 32 students to become elite code diagnosticians. Led by Ajinkya Katke and Disha Shelar, the event featured hands-on Bug Hunts and Memory Challenges to extract code errors and resolve memory inefficiencies, progressing into autonomous complex problem-solving and algorithmic optimization on the second day. Concluding with a high-pressure lightning quiz showdown and participant reflections supervised by Dr. Karpagavalli S, the event successfully bridged classroom theory with production-ready code investigation skills essential for modern software engineering.",
      date: "2026-03-16"
    },
    
    {
      title: "Cognithon 2026: AI & ML Hackathon",
      photos: ["../static/events/Cognithon 2026.jpeg", "../static/events/Cognithon(2).jpeg"],
      description: "COGNITION 2026 was a one-day AI Hackathon organized by the IEEE PCE Student Branch,bringing together 30 teams to develop innovative solutions for real-world industry problem statement with support and mentorship from TCS. The event provided students with a platform to showcase their technical skills,creativity, collaboration, and problem-solving abilities.",
      date: "2026-07-18",
      highlights: [
        "30 teams collaborated on industry-inspired AI and ML problem statements.",
        "120 Students participated, showcasing their technical skills and creativity.",
        "TCS industry support and mentorship provided valuable guidance to the teams.",
        "Expert jury evaluated the solutions based on innovation, feasibility, and impact.",
      ]
    },
    {
      title:"Celestia 2.0",
      photos: ["../static/events/celestia2.jpg","../static/events/celestia2(1).png","../static/events/celestia2(2).png","../static/events/celestia2(3).png","../static/events/celestia2(4).png"],
      description: "An enriching one-day event organized by the IEEE-PCE Student Branch that brought together 32 participants for the official launch of the IEEE magazine, Reverie, while maintaining a strong focus on Artificial Intelligence and Machine Learning. Following motivating addresses from faculty and Dr. Sameer Nanivadekar on the professional benefits of IEEE membership, the session transitioned into an engaging technical deep-dive. Guest speaker Mr. Jigar Parekh led an interactive AI session, exploring its fundamentals, emerging career opportunities, and its critical integration into the modern Software Development Life Cycle (SDLC). The successful event concluded with the awarding of Letters of Appreciation to senior members, fostering collaboration and technical growth within the community.",
      date: "2026-04-04"
    },
  ],
  2025: [ 
    { 
      title: "Phishnet", 
      photos: ["../static/events/phishnet.jpeg","../static/events/phishnet(1).jpg","../static/events/phishnet(2).jpg","../static/events/phishnet(3).jpg"], 
      description: "An engaging two-day workshop and competition that immersed 65 participants in the critical fields of Cybersecurity and Digital Forensics. Led by Mr. Kshitij Singh and Mr. Sayank Basak, the event featured hands-on FTP Forensics Lab Exercises and timed competitive challenges where students investigated simulated breaches and traced digital footprints. This IEEE PCE event concluded with a gamified quiz, successfully providing practical exposure to forensic tools and empowering participants to navigate the complex challenges of the modern digital landscape. 🛡️💻", 
      date: "2025-10-08" ,
      winner: "🏆 Hareshwar Patil and Samarth Ratnaparkhi"

    },
    { 
      title: "🎨✨ Photoshop Workshop", 
      photos: ["../static/events/Poster Designing.jpg","../static/events/Poster Designing(1).jpg","../static/events/Poster Designing(2).jpg"], 
      description: "IEEE presents “Zero to Hero”, An intensive four-hour graphical workshop that equipped 39 participants with foundational and advanced Adobe Photoshop skills. Led by design experts Aaryan and Shlok, the comprehensive session covered everything from basic canvas setups and text tools to advanced layer management, blending modes, and gradients. The event concluded in a 45-minute hands-on design competition where students applied their newly acquired skills in real time. Winners were recognized for their creativity, leaving attendees inspired and well-prepared to pursue opportunities in graphic design.🚀", 
      date: "2025-08-15",
         },
    {
      title: " Matlab Simulink Workshop",
      photos: ["../static/events/Matlabsimulink.jpg","../static/events/Matlabsimulink(1).jpg","../static/events/Matlabsimulink(2).jpg"],
      description: "​A full-day technical workshop organise by IEEE-PCE x AESA MESA in collaboration with MathWorks and competition that engaged 28 participants in the practical application of MATLAB and Simulink for drone path planning. Following an introduction by Dr. Karpagavalli S, experts from MathWorks led a live session covering AI-based path planning algorithms and image processing. Students then collaborated in small teams to tackle a real-world engineering problem statement, applying their newly acquired skills in advanced computational tools and autonomous navigation to develop a complete solution. 🚀",
      date: "2025-08-08"
    },
    { 
      title: "🔐 Ethical Hacking Workshop", 
      photos: ["../static/events/Ethical Hacking.jpg","../static/events/Ethical Hacking(1).jpg"], 
      description: "​An engaging technical session organised by IEEE-PCE x Alegria that introduced 75 participants to the practical world of cybersecurity. Led by industry experts Rutvik Magarde and Sayan Basak, the comprehensive workshop covered foundational hacking tools, real-world incident analysis, advanced OSINT techniques, and future career opportunities. Featuring hands-on demonstrations and interactive quizzes to reinforce learning, the event successfully equipped students with valuable real-world insights into modern ethical hacking, concluding with a celebration of the top quiz performers. 🚀💻", 
      date: "2025-02-02"
    },
    { 
      title: "Machine Minds", 
      photos: ["../static/events/machine minds.jpeg","../static/events/machine minds(1).jpg","../static/events/machine minds(2).jpg","../static/events/machine minds(3).jpg"], 
      description: "An engaging technical seminar that immersed 52 students in the intersection of theoretical knowledge and real-world applications. Led by guest speaker Rahul Sakpal, the session seamlessly wove academic concepts with authentic industry anecdotes, demonstrating how companies balance innovation with practical constraints. This inaugural IEEE Week event by IEEE PCE concluded with a highly interactive Q&A, equipping attendees with valuable industry insights and renewed motivation to pursue technical excellence.      🤖✨", 
      date: "2025-10-06" 
    },
    {
      title: "Neural Nexus",
      photos: ["../static/events/neuralnexus.jpg","../static/events/neuralnexus(1).jpg","../static/events/neuralnexus(2).jpg"],
      description: "An engaging two-hour workshop that introduced 35 teams to the fundamentals of Artificial Intelligence, Machine Learning, and Neural Networks. Guided by Mr. Sujay Nanaware's insights on the ethical aspects of AI and Mr. Vishwaneel Vhatkar's hands-on model training demonstrations, the session successfully bridged theoretical concepts with practical industry applications. This insightful IEEE PCE event concluded with an interactive Q&A discussing career and research prospects, leaving students motivated to explore responsible AI innovation.", 
      date: "2025-10-08",
      winner: "🏆 Winner: Medha Bhoir <br> 🥈1st Runner-up: Neha Pravin Sali"

    },
    { 
      title: "🔒 Encrypt-O-Code", 
      photos: ["../static/events/encryptocode.png","../static/events/encryptocode(1).png","../static/events/encryptocode(2).png"], 
      description: "An engaging one-day technical workshop and competition where 42 participants designed ESP32-based cipher machines to convert plaintext into Morse Code. Guided by IEEE Technical Head Mr. Ajinkya Katke, teams tackled hardware interfacing and Caesar Cipher implementation to successfully display encrypted messages. This hands-on IEEE PCE event concluded with remarks from Dr. Karpagavalli S and Chairperson Rutvik Magarde, successfully fostering collaboration and practical skills in embedded technology and cryptographic programming. 🕵️‍♂️", 
      date: "2025-10-07",
    },
   
    { 
      title: "No Escape Room 🔒", 
      photos: ["../static/events/poster no escape.png","../static/events/poster no escape(1).png","../static/events/poster no escape(2).png"], 
      description: "An exciting one-day competition organized by IEEE PCE that challenged 75 participants to test their teamwork, coordination, and problem-solving skills in a thrilling escape room environment. Navigating a dark, immersive setup with just a single torch, teams of four raced against an 8-minute clock to solve a unique mix of technical quizzes and physical mini-games, including a tense round of Red Light-Green Light. Facing the pressure of elimination, students experienced an adrenaline-filled adventure that perfectly blended mental agility with high-stakes gameplay, concluding with memorable moments captured at the event's photo booth. 🤖✨", 
      date: "2025-10-09" 
    }
  ],
  2024: [
    { 
      title: "CODE CONQUEST", 
      photos: ["../static/events/Code Conquest.jpeg","../static/events/Code Conquest(1).jpg","../static/events/Code Conquest(2).jpg"], 
      description: "A challenging three-round technical competition that tested the programming skills of 17 participants under strict time limits. Following inspiring opening remarks from faculty and a celebratory cake-cutting ceremony, students tackled escalating coding problems ranging from rapid-fire questions to a complex final challenge. The first-place winner secured a cash prize, while the runners-up were awarded certificates. This engaging event celebrated technical excellence, awarding e-certificates to all attendees for their competitive spirit.", 
      date: "2024-10-14",
      winner: "🥇 1st Place : Saket Singh <br>🥈 2nd Place : Shridhar Khare <br>🥉 3rd Place : Ibrahim kadiri"
    },
    { title: "DATA NEXUS", photos: ["../static/events/Data Nexus.23.jpg","../static/events/Data Nexus23(1).jpg","../static/events/Data Nexus23(2).jpg"],
       description: "An engaging Info-tech session that immersed 40 participants in the fundamentals of data science and machine learning. Led by Mr. Sujay Nanawre and guest speaker Mr. Shree, the workshop seamlessly connected complex technical theories to real-world industry applications and case studies. This comprehensive IEEE Week event concluded with an interactive Q&A, equipping attendees with valuable insights into modern data analytics and future career opportunities. ",
        date: "2024-10-15" },
    { title: "TECH HUNT", photos: ["../static/events/Tech hunt.jpg","../static/events/TechHunt(1).jpg","../static/events/TechHunt(2).jpg","../static/events/TechHunt(3).jpg"], 
      description: "An electrifying campus-wide scavenger hunt where teams of four raced against the clock to solve clues, find hidden circuit components, and assemble them. This flagship IEEE Week event blended physical challenges with engineering strategy, testing both technical skills and flawless teamwork in a high-energy competition.",
       date: "2024-03-16", winner: "Rajdeep Maity, Aadhir Pandey, Anuj Meher, and Pradyum Vishwakarma" },
    { title: "NO ESCAPE ROOM - MANSION MAYHEM", photos: ["../static/events/no escape.jpg","../static/events/no escape(1).jpg","../static/events/no escape(2).jpg"], 
      description: "​A thrilling, spooky challenge where 16 teams navigated a dark escape room using only a torch. With just 10 minutes on the clock, participants had to rely on critical thinking and teamwork to solve hidden puzzles and escape. This suspenseful IEEE Week event concluded with e-certificates for all, memorable photo booth moments, and a ₹1,000 prize pool for the winning team.",
       date: "2024-10-16" }
  ],
  2023: [
    { title: "TECH HUNT", photos: ["../static/events/Tech hunt.jpg"], description: "Get ready for a twist on the classic treasure hunt with Tech Hunt!", date: "2023-03-11" },
    { title: "CODE WAR", photos: ["../static/events/Code Conquest.jpeg"], description: "Put your coding skills to the test with exciting challenges designed to sharpen your logic and problem-solving abilities.", date: "2023-03-12" }
  ]
};

// 2. HELPER FUNCTIONS

// Convert an ISO event date string into a friendly long-form date shown on the UI.
function formatDate(dateStr) {
  if (!dateStr) return "";
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', options); 
}

// Highlight the selected year toggle button and clear the active class from the others.
function setActiveBtn(clickedBtn) {
  document.querySelectorAll('.tech-btn').forEach(btn => btn.classList.remove('active'));
  clickedBtn.classList.add('active');
}

// Detect whether the current device or pointer mode needs the card-flip touch behavior.
function isTouchCardViewport() {
  return window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches;
}

// Apply the mobile-friendly press-to-flip interaction pattern to event and workshop cards.
// Mobile thumb-pressure flip contract:
// On touch/coarse-pointer devices, the card should flip while the user presses on the card.
// The details button on the back face remains the only control that opens the event modal.
// Keep this helper and the CSS is-flipped state in sync whenever card markup or visuals change.
// FUTURE REFERENCE:
// If a new event page or workshop card is added in this file, route it through applyMobileCardFlip()
// so the flip experience remains consistent across every event and workshop card.
// Attach pointer events so cards flip on touch devices while a detail button opens the modal.
function applyMobileCardFlip(card, openCardDetails) {
  if (!isTouchCardViewport()) {
    card.onclick = () => openCardDetails();
    return;
  }

  card.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.btn-view-details')) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    card.classList.add('is-flipped');
  });

  card.addEventListener('pointerup', () => card.classList.remove('is-flipped'));
  card.addEventListener('pointerleave', () => card.classList.remove('is-flipped'));
  card.addEventListener('pointercancel', () => card.classList.remove('is-flipped'));

  card.addEventListener('click', (e) => {
    if (e.target.closest('.btn-view-details')) {
      e.stopPropagation();
      openCardDetails();
    }
  });
}

// Hide all event section containers and reveal only the requested one.
function showSection(section) {
  const sections = {
    current: document.getElementById("current-events"),
    pastEvents: document.getElementById("past-events"),
    pastWorkshops: document.getElementById("past-workshops"),
  };
  Object.keys(sections).forEach(id => {
    if (sections[id]) sections[id].style.display = "none";
  });
  if (sections[section]) sections[section].style.display = "grid";
}

 //3. FLIP CARD BUILDER LOGIC
 
// Build a reusable flip-style event card from a single event data object.
function createFlipCard(event) {
  const div = document.createElement("div");
  div.className = "event-card";
  div.innerHTML = `
    <div class="card-inner">
      <!-- Front of Card: Poster -->
      <div class="card-front">
        <div class="card-img-wrapper">
          <img src="${event.photos[0]}" alt="${event.title}" />
        </div>
      </div>
      <!-- Back of Card: Description & Details Button -->
      <div class="card-back">
        <div class="card-content">
          <div>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
          </div>
          <div class="card-back-footer">
            <span class="event-date">${formatDate(event.date)}</span>
            <button class="btn-view-details" type="button">
              <span>View Event Details</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  applyMobileCardFlip(div, () => openEventDetails(event));

  return div;
}

// 4. GRID RENDERING
// Render every event from a specific year into the requested HTML container.
function renderEvents(year, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = ""; 

  const events = eventsData[year];
  if (!events || events.length === 0) {
    container.innerHTML = `
      <div class="no-events">
        <div class="radar-scan"></div>
        <p class="typewriter-text">> SYSTEM_STATUS: Archival records for ${year} not found<span class="cursor"></span></p>
      </div>
    `;
    return;
  }

  events.forEach(event => {
    container.appendChild(createFlipCard(event));
  });

  // Fill empty grid slots with Encrypted Ghost Cards
  const minCards = 4;
  if (events.length < minCards) {
    for (let i = 0; i < minCards - events.length; i++) {
      const ghost = document.createElement("div");
      ghost.className = "ghost-card";
      ghost.innerHTML = `
        <i class="fa-solid fa-lock ghost-icon"></i>
        <p class="ghost-text">ENCRYPTED_FILE</p>
        <p class="ghost-subtext">Awaiting Declassification</p>
      `;
      container.appendChild(ghost);
    }
  }
}

// Switch the page to the archive view and render the selected historical event year.
function loadPastEvents(year) {
  showSection("pastEvents");
  renderEvents(year, "past-events");
}

// Render upcoming event cards from the current year calendar data and date filter.
function renderUpcomingEvents(year = 2026) {
  const container = document.getElementById("event-calendar");
  if (!container) return;
  container.innerHTML = ""; 

  const today = new Date();
  const events = eventsData[year]?.filter(ev => new Date(ev.date) >= today) || [];

  if (events.length === 0) {
    container.innerHTML = `
      <div class="no-events">
        <div class="radar-scan"></div>
        <p class="typewriter-text">> SYSTEM_STATUS: Awaiting next Event Dates<span class="cursor"></span></p>
      </div>
    `;
    return;
  }

  events.forEach(event => {
    container.appendChild(createFlipCard(event));
  });
}

// Detect workshop events from explicit metadata or their text content.
function isWorkshopEvent(event) {
  return event.isWorkshop === true
    || event.category === 'workshop'
    || event.title?.toLowerCase().includes('workshop')
    || /\bworkshop\b/i.test(event.description || '');
}

// Load workshop archive cards from the event data and show the workshop section in the UI.
function loadPastWorkshops() {
  showSection("pastWorkshops");
  const container = document.getElementById("past-workshops");
  if (!container) return;
  container.innerHTML = "";

  const workshops = Object.keys(eventsData)
    .sort((a, b) => Number(b) - Number(a))
    .flatMap(year => eventsData[year].filter(isWorkshopEvent));

  if (workshops.length === 0) {
    container.innerHTML = `
      <div class="no-events">
        <div class="radar-scan"></div>
        <p class="typewriter-text">> SYSTEM_STATUS: Workshop records not found<span class="cursor"></span></p>
      </div>
    `;
    return;
  }

  workshops.forEach(workshop => {
    container.appendChild(createFlipCard(workshop));
  });

  const minCards = 4;
  if (workshops.length < minCards) {
    for (let i = 0; i < minCards - workshops.length; i++) {
      const ghost = document.createElement("div");
      ghost.className = "ghost-card";
      ghost.innerHTML = `
        <i class="fa-solid fa-lock ghost-icon"></i>
        <p class="ghost-text">ENCRYPTED_FILE</p>
        <p class="ghost-subtext">Awaiting Declassification</p>
      `;
      container.appendChild(ghost);
    }
  }
}

// 5. MODAL & PHOTO LIGHTBOX LOGIC
// Build and open the event details modal with winner, highlight, and gallery photo content.
function openEventDetails(event) {
  const modal = document.getElementById("eventDetailsModal");
  const content = document.getElementById("modal-details-content");
  if (!modal || !content) return;

  // Optional Winner Banner
  const winnerHtml = event.winner ? `
    <div class="details-winner-banner">
      <div style="font-size: 1.8rem; line-height: 1;">🏆</div>
      <div>
        <div class="winner-badge-title">Official Winner</div>
        <div class="winner-badge-name">${event.winner}</div>
      </div>
    </div>
  ` : "";

  // Highlight section for events with curated showcase moments
  const highlightsHtml = (event.highlights && event.highlights.length > 0) ? `
    <div class="details-highlights-section">
      <div class="details-gallery-title">
        <span>Event Highlights</span>
      </div>
      <div class="details-highlights-list">
        ${event.highlights.map(item => `
          <div class="details-highlight-item">
            <span class="details-highlight-icon">✦</span>
            <span>${item}</span>
          </div>
        `).join("")}
      </div>
    </div>
  ` : "";

  // Photos Gallery with Click-to-Enlarge
  const photosHtml = (event.photos && event.photos.length > 0) ? `
    <div class="details-gallery-title">
      <span>Event Photos</span>
      <span style="font-size: 0.75rem; color: var(--accent-primary); font-family: var(--font-mono); font-weight: normal;">
        (Click photo to enlarge 🔍)
      </span>
    </div>
    <div class="details-photos-grid">
      ${event.photos.map((src, index) => `
        <div class="details-photo-item" data-photo-src="${src}" data-photo-index="${index}" title="Click to view full size">
          <img src="${src}" alt="${event.title}" loading="lazy" />
        </div>
      `).join("")}
    </div>
  ` : "";

  content.innerHTML = `
    <div style="margin-bottom: 15px;">
      ${event.date ? `<span class="event-date" style="margin-bottom: 10px;">${formatDate(event.date)}</span>` : ''}
      <h2 style="font-family: var(--font-heading, 'Space Grotesk'); font-size: clamp(1.5rem, 3vw, 2rem); color: #fff; margin-top: 8px;">
        ${event.title}
      </h2>
    </div>

    ${winnerHtml}

    <p style="color: var(--text-muted, #94a3b8); font-size: 0.98rem; line-height: 1.7; margin-bottom: 20px;">
      ${event.description || ''}
    </p>

    ${highlightsHtml}

    ${photosHtml}
  `;

  // Send the clicked photo plus the gallery list/index so the same image can
  // be opened as a full lightbox and navigated by previous/next arrows.
  content.querySelectorAll(".details-photo-item").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.dataset.photoSrc;
      const index = Number(item.dataset.photoIndex || 0);
      enlargePhoto(src, event.photos, index);
    });
  });

  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show-modal"), 10);
}

// Hide the event details modal after the configured CSS transition finishes.
function closeDetailsModal() {
  const modal = document.getElementById("eventDetailsModal");
  if (!modal) return;
  modal.classList.remove("show-modal");
  setTimeout(() => { modal.style.display = "none"; }, 300);
}

let currentLightboxPhotos = [];
let currentLightboxIndex = 0;

// Open the photo lightbox for a clicked event image and remember the current image gallery sequence.
function enlargePhoto(src, photos = [], index = 0) {
  const lightbox = document.getElementById("photoLightbox");
  const img = document.getElementById("lightboxImg");
  if (!lightbox || !img) return;

  if (Array.isArray(photos) && photos.length > 0) {
    currentLightboxPhotos = photos;
    currentLightboxIndex = Math.max(0, Math.min(index, photos.length - 1));
  } else {
    currentLightboxPhotos = [src];
    currentLightboxIndex = 0;
  }

  img.src = src;
  lightbox.style.display = "flex";
  setTimeout(() => lightbox.classList.add("show-lightbox"), 10);
}

// Move the lightbox preview to either the previous or next photo in the current gallery.
function navigateLightbox(step) {
  const lightbox = document.getElementById("photoLightbox");
  const img = document.getElementById("lightboxImg");
  if (!lightbox || !img || currentLightboxPhotos.length < 2) return;

  currentLightboxIndex += step;
  if (currentLightboxIndex < 0) currentLightboxIndex = currentLightboxPhotos.length - 1;
  if (currentLightboxIndex >= currentLightboxPhotos.length) currentLightboxIndex = 0;

  img.src = currentLightboxPhotos[currentLightboxIndex];
}

// Hide the photo lightbox after its transition animation finishes.
function closeLightbox() {
  const lightbox = document.getElementById("photoLightbox");
  if (!lightbox) return;
  lightbox.classList.remove("show-lightbox");
  setTimeout(() => { lightbox.style.display = "none"; }, 300);
}

// Create the event detail and photo lightbox HTML containers only when the page HTML does not already include them.
function ensureModalDOM() {
  if (!document.getElementById("eventDetailsModal")) {
    const detailsModal = document.createElement("div");
    detailsModal.id = "eventDetailsModal";
    detailsModal.className = "event-details-modal";
    detailsModal.onclick = closeDetailsModal;
    detailsModal.innerHTML = `
      <div class="event-details-box" onclick="event.stopPropagation()">
        <span class="close-details-btn" onclick="closeDetailsModal()">&times;</span>
        <div id="modal-details-content"></div>
      </div>
    `;
    document.body.appendChild(detailsModal);
  }

  if (!document.getElementById("photoLightbox")) {
    const lightbox = document.createElement("div");
    lightbox.id = "photoLightbox";
    lightbox.className = "photo-lightbox";
    lightbox.onclick = closeLightbox;
    lightbox.innerHTML = `
      <span class="close-lightbox-btn" onclick="closeLightbox()">&times;</span>
      <button class="lightbox-arrow lightbox-prev" aria-label="Previous photo" onclick="event.stopPropagation(); navigateLightbox(-1)">&lsaquo;</button>
      <div class="lightbox-image-container" onclick="event.stopPropagation()">
        <img id="lightboxImg" class="lightbox-image" src="" alt="Enlarged Event Photo" />
      </div>
      <button class="lightbox-arrow lightbox-next" aria-label="Next photo" onclick="event.stopPropagation(); navigateLightbox(1)">&rsaquo;</button>
    `;
    document.body.appendChild(lightbox);
  }
}

// 6. INITIALIZATION & LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  ensureModalDOM();
  renderUpcomingEvents(); 
  renderEvents(2026, "current-events");
  showSection("current"); 
});

// Close lightbox on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeDetailsModal();
  }
});

// Mobile Navbar toggles
document.addEventListener('DOMContentLoaded', () => {
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const navLinks = document.getElementById('nav-links');

  if (openMenu && closeMenu && navLinks) {
    openMenu.addEventListener('click', () => { navLinks.classList.add('active'); });
    closeMenu.addEventListener('click', () => { navLinks.classList.remove('active'); });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { navLinks.classList.remove('active'); });
    });
  }
});

// BULLETPROOF SCROLL TO ARCHIVES (WORKS ACROSS ALL BROWSERS)
// FUTURE REFERENCE:
// This function reads ?year=..., ?event=..., and ?view=archive from the URL,
// activates the matching year button, renders the correct archive section,
// scrolls to the archive area, and opens the matching event details modal.
// Use URL parameters to restore the requested archive year, scroll to the archive section, and reopen the right event popup.
function scrollToArchiveSection() {
  const urlParams = new URLSearchParams(window.location.search);
  const isArchiveView = urlParams.get("view") === "archive" || window.location.hash.includes("archive");
  const targetYear = urlParams.get("year");
  const targetEvent = urlParams.get("event");

  if (!isArchiveView && !targetYear) return;

  // 1. Disable browser's memory scroll so it doesn't force you to top
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  const yearToLoad = targetYear || "2026";

  // 2. Activate the right year button (2026, 2025, etc.)
  const yearBtns = document.querySelectorAll(".year-toggles .tech-btn");
  yearBtns.forEach(btn => {
    if (btn.textContent.trim() === yearToLoad) {
      setActiveBtn(btn);
    }
  });

  if (yearToLoad === "2026") {
    showSection("current");
    renderEvents(2026, "current-events");
  } else {
    loadPastEvents(yearToLoad);
  }

  // 3. Find the Archives section automatically
  const archiveTarget = document.getElementById("event-archives") 
                     || document.querySelector(".year-toggles") 
                     || Array.from(document.querySelectorAll("h2")).find(h => h.textContent.includes("Event Archives"));

  if (archiveTarget) {
    // Wait a brief 250ms for the cards to finish rendering height
    setTimeout(() => {
      const navbarHeight = 90; // Accounts for fixed navbar
      const targetTop = archiveTarget.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });
    }, 250);
  }

  // 4. Automatically open that event's details popup
  if (targetEvent && eventsData[yearToLoad]) {
    const match = eventsData[yearToLoad].find(ev => 
      ev.title.toLowerCase().includes(targetEvent.toLowerCase())
    );
    if (match && typeof openEventDetails === "function") {
      setTimeout(() => {
        openEventDetails(match);
      }, 600);
    }
  }
}

// Trigger as soon as window and images load
window.addEventListener("load", scrollToArchiveSection);
