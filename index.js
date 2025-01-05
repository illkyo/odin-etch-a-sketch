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

function opacityIncrease(rgbaString) {
  let newRgbaString = rgbaString.slice(0, -4);
  let alphaValue = Number(rgbaString.slice(-4).slice(0, 3));
  alphaValue += 0.1;
  return newRgbaString + alphaValue.toString() + ')';
}

function makeGrid(numOfSquares) {

  for (let i = 0; i < numOfSquares; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
  
    for (let j = 0; j < numOfSquares; j++){
      const square = document.createElement('div');
      square.classList.add('square');

      square.addEventListener('mouseover', (event) => {
        if (event.target.style.background && event.target.style.background.includes('rgba')) {
          event.target.style.background = opacityIncrease(event.target.style.background);
          console.log(event.target.style.background);
        } else {
          function random(number) {
            return Math.floor(Math.random() * (number+1));
          }
  
          const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)} / 10%)`;
          event.target.style.background = rndCol;
        }
      })
  
      row.appendChild(square);
    }
  
    grid.appendChild(row);
  }

}

makeGrid(16);

function changeGrid() {
  let numOfSquares;

  while (!numOfSquares || numOfSquares > 100) {
    numOfSquares = prompt("How many squares do you want the grid to have?", "16");
    if (numOfSquares > 100) {
      alert('Number of squares must be below 100 to fit the screen');
    } else if (!numOfSquares) {
      numOfSquares = "16";
    }
  }

  grid.textContent = '';

  makeGrid(numOfSquares);

}
