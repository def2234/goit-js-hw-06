const ulEl = document.querySelector('#categories');

const itemsEl = ulEl.children;
const itemsLength = itemsEl.length;
console.log(`Number of categories: ${itemsLength}`);

const title = ulEl.querySelectorAll('h2');

for (const value of title) {
  console.log(`Category: ${value.textContent}`);
}
const ulChild = ulEl.querySelectorAll('ul');

for (const child of ulChild) {
  const liEl = child.querySelectorAll('li');
  console.log(liEl.length);
}
