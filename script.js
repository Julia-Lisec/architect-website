//loading circles timeout
window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('display');
  }, 4000);
};

//sidebar toggle
document.querySelector('.hamburger-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});

//scroll-up btn
document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = 'smooth';
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = 'unset';
  }, 1000);
});
