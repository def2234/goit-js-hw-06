function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');

const buttonEl = document.querySelector('.change-color');

const onButtonEventChangeColor = buttonEl.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
