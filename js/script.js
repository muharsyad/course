const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const themeIcon = toggleButton.querySelector("i");

// Cek preferensi dark mode dari localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill");
}

// Toggle Dark Mode
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("ri-moon-fill", "ri-sun-fill"); // Ganti ikon ke matahari
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("ri-sun-fill", "ri-moon-fill"); // Ganti ikon ke bulan
    }
});

function toggleNavbar() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

const courses = [
    {
        title: "Pemrograman Python",
        description: "Pelajari pemrograman python dari dasar hingga mahir dengan kurikulum terstruktur!",
        format: "Online Course + Jupyter Notebook",
        img: "assets/python.png"
    },{
        title: "Statistik untuk Machine learning",
        description: "Pelajari statistika dari dasar hingga mahir dengan kurikulum terstruktur!",
        format: "Online Course + Jupyter Notebook",
        img: "assets/statistics.png"
    },{
        title: "Natural Language Processing",
        description: "Pelajari NLP dari dasar hingga mahir dengan kurikulum terstruktur!",
        format: "Online Course + Jupyter Notebook",
        img: "assets/nlp.png"
    },{
        title: "Matematika untuk Machine Learning",
        description: "Pelajari matematika dari dasar hingga mahir dengan kurikulum terstruktur!",
        format: "Online Course + Jupyter Notebook",
        img: "assets/math.png"
    },{
        title: "Jaringan Saraf Tiruan (Pendahuluan)",
        description: "Pelajari JST dari dasar hingga mahir dengan kurikulum terstruktur!",
        format: "Online Course + Jupyter Notebook",
        img: "assets/intro-ann.png"
    },{
        title: "Sistem Manajemen Database (SQL)",
        description: "Pelajari sistem manajemen database dengan SQL dari dasar hingga mahir dengan kurikulum terstruktur!",
        format: "Online Course + Jupyter Notebook",
        img: "assets/dbms-sql.png"
    },{
        title: "Visualisasi Data",
        description: "Pelajari visualisasi data dari dasar hingga mahir dengan kurikulum terstruktur!",
        format: "Online Course + Jupyter Notebook",
        img: "assets/data-visualization.png"
    },
    // Tambahkan course lain jika ada
];


const options = {
    keys: ["title", "description"],
    threshold: 0.3 // Semakin kecil, semakin ketat pencariannya
};

const fuse = new Fuse(courses, options);


document.getElementById("search").addEventListener("input", function () {
    const query = this.value.trim(); // Hapus spasi di awal & akhir input
    const container = document.querySelector(".card-container");
    container.innerHTML = ""; // Bersihkan kontainer sebelum menampilkan hasil

    // Jika input kosong, tampilkan semua kursus
    const filteredCourses = query ? fuse.search(query).map(r => r.item) : courses;

    filteredCourses.forEach(course => {
        container.innerHTML += `
            <div class="card-item flx-cl">
                <img src="${course.img}" alt="">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p><b>Format:</b> ${course.format}</p>
                <div class="cta-btn">
                    <a href="#" class="btn-1"><i class="ri-play-fill"></i> Mulai Kursus</a>
                </div>
            </div>
        `;
    });
});

