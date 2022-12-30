function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const inputEl = document.querySelector('input');

const buttonCreate = document.querySelector('button[data-create]');
const buttonDestoy = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('#boxes');

const onButtonCreateBoxes = buttonCreate.addEventListener('click', createBoxes);
const onButtonDestoyBoxes = buttonDestoy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputEl.value);
  let basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const createBox = document.createElement('div');
    createBox.style.width = `${size}px`;
    createBox.style.height = `${size}px`;
    createBox.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.appendChild(createBox);
  }
}

function destroyBoxes() {
  divEl.innerHTML = '';
}
