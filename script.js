// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
