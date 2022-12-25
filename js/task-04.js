let counterValue = 0;

const allBtn = document.querySelectorAll('button');

const value = document.querySelector('#value');

const targetButtonClickHandlerDecrement = allBtn[0].addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

const targetButtonClickHandlerIncrement = allBtn[1].addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
