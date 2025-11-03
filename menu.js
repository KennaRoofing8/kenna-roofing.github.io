document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    if (menu && navLinks) {
      menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
  });