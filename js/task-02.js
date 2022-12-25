const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulEl = document.querySelector('#ingredients');
// for (const ingridient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingridient;
//   liEl.classList.add('item');
//   const addElements = ulEl.prepend(liEl);
// }

const createEl = ingredients.map(element => {
  let liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = element;

  return liEl;
});

const addElements = ulEl.prepend(...createEl);

// const potatoes = document.createElement('li');
// potatoes.textContent = 'Potatoes';
// potatoes.classList.add('item');

// const mushrooms = document.createElement('li');
// mushrooms.textContent = 'Mushrooms';
// mushrooms.classList.add('item');

// const garlic = document.createElement('li');
// garlic.textContent = 'Garlic';
// garlic.classList.add('item');

// const tomatos = document.createElement('li');
// tomatos.textContent = 'Tomatos';
// tomatos.classList.add('item');

// const herbs = document.createElement('li');
// herbs.textContent = 'Herbs';
// herbs.classList.add('item');

// const condiments = document.createElement('li');
// condiments.textContent = 'Condiments';
// condiments.classList.add('item');

// const addElements = ulEl.prepend(potatoes, mushrooms, garlic, tomatos, herbs, condiments);
