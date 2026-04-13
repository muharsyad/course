// Toggle Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close menu on link click (untuk navigasi mobile agar menu menutup saat di klik)
document.querySelectorAll('.mobile-menu-panel a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('active');
    });
});

// Smooth Scroll untuk link internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Logic Filter Kategori
function filterCourses(category) {
    // Update tombol aktif
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    document.getElementById(`btn-${category}`).classList.add("active");

    // Logic hide/show cards
    const cards = document.querySelectorAll(".course-card");
    let hasVisible = false;

    cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
            card.classList.remove("hidden");
            hasVisible = true;
        } else {
            card.classList.add("hidden");
        }
    });

    toggleEmptyState(hasVisible);
}

// Logic Search (Realtime)
function searchCourses() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".course-card");
    let hasVisible = false;

    // Reset tombol filter ke 'All' jika user mengetik
    if (input.length > 0) {
        document
            .querySelectorAll(".filter-btn")
            .forEach((btn) => btn.classList.remove("active"));
        document.getElementById("btn-all").classList.add("active");
    }

    cards.forEach((card) => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const desc = card.querySelector("p").innerText.toLowerCase();

        if (title.includes(input) || desc.includes(input)) {
            card.classList.remove("hidden");
            hasVisible = true;
        } else {
            card.classList.add("hidden");
        }
    });

    toggleEmptyState(hasVisible);
}

function toggleEmptyState(visible) {
    const noResults = document.getElementById("noResults");
    if (visible) {
        noResults.classList.add("hidden");
    } else {
        noResults.classList.remove("hidden");
    }
}