const writeUsButton = document.querySelector('.contacts__button');
const writeUsPopap = document.querySelector('.modal-write');
const writeUsCloseButton = document.querySelector('.modal-close');
const writeUsForm = document.querySelector('.modal-write__form');
const nameInput = document.querySelector('.modal-write__input--name');
const emailInput = document.querySelector('.modal-write__input--email');

writeUsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  writeUsPopap.classList.add('modal-show');
  nameInput.focus();
});

writeUsCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  writeUsPopap.classList.remove('modal-show');
  writeUsPopap.classList.remove('modal-error');
});

writeUsForm.addEventListener('submit', (evt) => {
  if(!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    writeUsPopap.classList.remove('modal-error');
    writeUsPopap.offsetWidth = writeUsPopap.offsetWidth;
    writeUsPopap.classList.add('modal-error');
  }
});

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (writeUsPopap.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopap.classList.remove("modal-show");
      writeUsPopap.classList.remove('modal-error');
    }
  }
});