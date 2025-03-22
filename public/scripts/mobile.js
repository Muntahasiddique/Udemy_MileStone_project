// const MobilemenuButtonElement = document.getElementById('mobile-menu-btn');
// const MobileMenuElement = document.getElementById('mobile-menu');

// function toggleMobileMenu() {
//     MobileMenuElement.classList.toggle('open');
// }
// MobilemenuButtonElement.addEventListener('click', toggleMobileMenu);

const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
