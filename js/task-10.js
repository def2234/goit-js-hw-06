function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestoy = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('#boxes');

const onButtonCreate = buttonCreate.addEventListener('click', createBoxes);
const onInputValue = inputEl.addEventListener('input', createBoxes);

function createBoxes(amount) {
  amount.value = bodyEl.insertAdjacentHTML('beforeend', '<div id="boxes"></div>');
}
