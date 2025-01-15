//Toggle Bar//
const navLinks = document.querySelector('.nav-links'); // Fixed variable name
function ontoggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[5%]'); // Corrected variable and class name
}