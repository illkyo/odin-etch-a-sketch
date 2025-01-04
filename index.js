// const h1 = document.querySelector(".header-red");

// h1.addEventListener('click', () => {
//   if (h1.classList.contains('header-red')) {
//     h1.classList.remove('header-red');
//     h1.classList.add('header-blue');
//   } else {
//     h1.classList.remove('header-blue');
//     h1.classList.add('header-red');
//   }
// })
const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let j = 0; j < 16; j++){
    const square = document.createElement('div');
    square.classList.add('square');

    row.appendChild(square);
  }

  container.appendChild(row);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('square-colored');
  })
})

