const iconMenu = document.querySelector('.menu');
const sidebar = document.querySelector('.navbar');
const cardItem = document.querySelectorAll('.card');

iconMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  iconMenu.classList.toggle('fa-bars');
  iconMenu.classList.toggle('fa-x');
});
