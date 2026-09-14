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
    {
      title: "🚀 Code Autopsy: Gamified debugging",
      photos: ["../static/events/code autopsy.jpeg"],
      description: "An interactive coding challenge to solve real-world problems. Debug and analyze complex code to identify errors and improve problem-solving skills.",
      date: "2026-03-16",
      winner: "🥇 1st Place: XYZ (PCE)" // Optional
    },
    {
      title: "Cognithon 2026: AI & ML Hackathon",
      photos: ["../static/events/Cognithon 2026.jpeg", "../static/events/Cognithon(2).jpeg"],
      description: "COGNITION 2026 was a one-day AI Hackathon organized by the IEEE PCE Student Branch,bringing together 30 teams to develop innovative solutions for real-world industry problem statement with support and mentorship from TCS. The event provided students with a platform to showcase their technical skills,creativity, collaboration, and problem-solving abilities.",
      date: "2026-07-18",
      winner: "🏆 Winner: Team XYZ & Team XYZ",
      highlights: [
        "30 teams collaborated on industry-inspired AI and ML problem statements.",
        "120 Students participated, showcasing their technical skills and creativity.",
        "TCS industry support and mentorship provided valuable guidance to the teams.",
        "Expert jury evaluated the solutions based on innovation, feasibility, and impact.",
      ]
    },
  ],
  2025: [ 
    { 
      title: "🎨✨ Photoshop Workshop", 
      photos: ["../static/events/Poster Designing.jpg"], 
      description: "IEEE presents “Zero to Hero”, a Photoshop Poster Designing Workshop & Competition! 🚀", 
      date: "2025-08-15",
      winner: "Best Poster Design: XYZ"
    },
    { 
      title: "🔐 Cyber Security Workshop", 
      photos: ["../static/events/Ethical Hacking.jpg"], 
      description: "Unlock the secrets of cybersecurity and ethical hacking! Learn, explore, and safeguard the digital world. 🚀💻", 
      date: "2025-02-02"
    },
    { 
      title: "Machine Minds", 
      photos: ["../static/events/machine minds.jpeg"], 
      description: "Dive into the world of AI and Machine Learning with IEEE's 'Machine Minds' workshop! 🤖✨", 
      date: "2025-10-06" 
    },
    { 
      title: "🔒 Encrypt-O-Code", 
      photos: ["../static/events/encryptocode.png"], 
      description: "Decode the mystery, crack the code! Join Encrypt-O-Code, the ultimate coding challenge where every line of code brings you closer to victory. 🕵️‍♂️", 
      date: "2025-10-07",
      winner: "XYZ(Fastest Decode)"
    },
    { 
      title: "Phishnet", 
      photos: ["../static/events/phishnet.jpeg"], 
      description: "Dive into the world of cybersecurity with PhishNet! Learn to identify and combat phishing attacks in this interactive workshop. 🛡️💻", 
      date: "2025-10-08" 
    },
    { 
      title: "No Escape Room 🔒", 
      photos: ["../static/events/poster no escape.png"], 
      description: "A national-level Workshop exploring Artificial Intelligence and Robotics. 🤖✨", 
      date: "2025-10-09" 
    }
  ],
  2024: [
    { 
      title: "CODE CONQUEST", 
      photos: ["../static/events/Code Conquest.jpeg"], 
      description: "Put your DSA and problem-solving skills to the test with exciting coding challenges designed to sharpen your logic, creativity, and programming skills.", 
      date: "2024-10-14",
      winner: "Team XYZ"
    },
    { title: "DATA NEXUS", photos: ["../static/events/Data Nexus.23.jpg"], description: "An immersive Data Science and Machine Learning workshop designed to turn curiosity into practical skills through hands-on learning, real-world insights, and exciting challenges. ", date: "2024-10-15" },
    { title: "TECH HUNT", photos: ["../static/events/Tech hunt.jpg"], description: "Get ready for a twist on the classic treasure hunt with Tech Hunt!", date: "2024-03-16" },
    { title: "NO ESCAPE", photos: ["../static/events/no escape.jpg"], description: "A thrilling escape room experience that tests your problem-solving skills and teamwork!", date: "2024-10-16" }
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

// Load the static workshop archive cards and show the workshop section in the UI.
function loadPastWorkshops() {
  showSection("pastWorkshops"); 
  const pastWorkshops = [
    { title: "GD Workshop", photos: ["../static/events/Poster Designing.jpg"], description: "Hands-on GD and Graphic design workshop." },
    { title: "Crafting Circuits", photos: ["../static/events/Tech hunt.jpg"], description: "Building circuit hardware fundamentals." }
  ];

  const container = document.getElementById("past-workshops");
  container.innerHTML = ""; 

  pastWorkshops.forEach(workshop => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <div class="card-img-wrapper">
            <img src="${workshop.photos[0]}" alt="${workshop.title}" />
          </div>
        </div>
        <div class="card-back">
          <div class="card-content">
            <h3 style="margin: 0; text-align: center;">${workshop.title}</h3>
            <p style="text-align: center; margin-top: 10px;">${workshop.description}</p>
            <div class="card-back-footer">
              <button class="btn-view-details" type="button">
                <span>View Workshop Details</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    applyMobileCardFlip(card, () => openEventDetails(workshop));

    container.appendChild(card);
  });
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