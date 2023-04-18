const linkedinBtn = document.querySelector('.linkedin-btn');

linkedinBtn.addEventListener('click', () => {
  window.location.href = 'https://www.linkedin.com/in/faizmuttaqin/';
});

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight * 0.8) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});