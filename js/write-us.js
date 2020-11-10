const writeUsButton = document.querySelector('.contacts__button');
const writeUsPopap = document.querySelector('.modal-write');
const writeUsCloseButton = document.querySelector('.modal-close');
const writeUsForm = document.querySelector('.modal-write__form');
const nameInput = document.querySelector('.modal-write__input--name');
const emailInput = document.querySelector('.modal-write__input--email');
const letterInput = document.querySelector('.modal-write__letter');

let isStorageSupport = true;
let storageName = '';
let srorageEmail = '';

console.log(letterInput);

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

writeUsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  writeUsPopap.classList.add('modal-show');

  if (storageName) {
    nameInput.value = storageName;
    emailInput.focus();
  }

  if (storageEmail) {
    emailInput.value = storageEmail;
    letterInput.focus();
  }
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
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', nameInput.value);
      localStorage.setItem('email', emailInput.value);
    }
  }
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (writeUsPopap.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopap.classList.remove("modal-show");
      writeUsPopap.classList.remove('modal-error');
    }
  }
});