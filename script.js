const toggleMenu = () => {
  document.querySelector('#header-links-menu').classList.toggle('show');
  document.querySelectorAll('.menu-button').forEach(e => e.classList.toggle('disabled'));
}