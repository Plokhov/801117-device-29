const catalogButton = document.querySelector('.site-list__catalog-button');
const menuCatalog = document.querySelector('.catalog-list');

catalogButton.addEventListener('click', () => {
  if (menuCatalog.classList.contains('catalog-list--close')) {
    menuCatalog.classList.remove('catalog-list--close');
  } else {
    menuCatalog.classList.add('catalog-list--close');
  }
});
