const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

const onInputevent = inputEl.addEventListener('input', onInputChangeRange);

function onInputChangeRange(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}
