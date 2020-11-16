const promoSliderButtons = document.querySelectorAll('.promo__slider-button');
const promoSlids = document.querySelectorAll('.promo__item');
const promoActiveSliderButtonsClass = 'promo__slider-button--current';
const promoActiveSlidClass = 'promo__item--active';

const servicesSliderButtons = document.querySelectorAll('.services__slider-button');
const servicesSlids = document.querySelectorAll('.services__item');
const servicesActiveSliderButtonsClass = 'services__slider-button--current';
const servicesActiveSlidClass = 'services__item--active';

const onSliderButtonClick = (button, slid, activeButtonClass, activeSlidClass) => {
  const currentSlidButton = document.querySelector('.' + activeButtonClass);
  const currentSlid = document.querySelector('.' + activeSlidClass);
 
  currentSlidButton.classList.remove(activeButtonClass);
  currentSlid.classList.remove(activeSlidClass);

  button.classList.add(activeButtonClass);
  slid.classList.add(activeSlidClass);
};

promoSliderButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    onSliderButtonClick(
      button,
      promoSlids[index],
      promoActiveSliderButtonsClass,
      promoActiveSlidClass
    );
  });
});

servicesSliderButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    onSliderButtonClick(
      button,
      servicesSlids[index],
      servicesActiveSliderButtonsClass,
      servicesActiveSlidClass
    );
  });
});
