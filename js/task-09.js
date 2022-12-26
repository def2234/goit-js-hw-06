function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');

const buttonEl = document.querySelector('.change-color');

const spanEl = document.querySelector('.color');

const onButtonEventChangeColor = buttonEl.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor() {
  const addRandomColor = (bodyEl.style.backgroundColor = getRandomHexColor());
  spanEl.textContent = addRandomColor;
}
