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
const grid = document.querySelector('.grid');

function makeGrid(numOfSquares) {

  for (let i = 0; i < numOfSquares; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
  
    for (let j = 0; j < numOfSquares; j++){
      const square = document.createElement('div');
      square.classList.add('square');

      square.addEventListener('mouseover', () => {
        square.classList.add('square-colored');
      })
  
      row.appendChild(square);
    }
  
    grid.appendChild(row);
  }

}

makeGrid(16);

function changeGrid() {
  let numOfSquares = prompt("How many squares do you want the grid to have?", "16");
  grid.textContent = '';

  makeGrid(numOfSquares);

}
