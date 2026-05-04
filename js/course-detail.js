/* Mobile Menu */
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("active");
}

/* Accordion untuk Kurikulum */
function toggleModule(headerElement) {
    const moduleItem = headerElement.parentElement;
    const content = headerElement.nextElementSibling;

    // Toggle Class untuk rotasi panah
    moduleItem.classList.toggle("active");

    // Slide Up / Slide Down Manual
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
