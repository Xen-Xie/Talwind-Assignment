//Toggle Bar
const navLinks = document.querySelector('.nav-links'); 
function ontoggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[5%]');
}