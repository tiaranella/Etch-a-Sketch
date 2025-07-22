function createGrid(size) {
  const containerEl = document.getElementById('container');
  containerEl.innerHTML = '';

  const totalPixelAmount = size * size;

  for (let i = 0; i < totalPixelAmount; i++) { 
      const newDiv = document.createElement('div');
      newDiv.classList.add('divList');
      containerEl.appendChild(newDiv);

  newDiv.addEventListener('mouseover', () => {
      newDiv.style.backgroundColor = 'violet';
    }
  );

  }
}

function calculateBorderWidth(gridSize) {
  const scale = 3 / Math.sqrt(gridSize); // You can tweak this
  return Math.max(0.5, scale + 1).toFixed(2);
}

const newNotebookButton = document.querySelector("#new-notebook");

newNotebookButton.addEventListener("click", () => {
  let userInput = prompt("Enter the size of new notebook (min. value – 2, max. value – 100)");

  let gridSize = parseInt(userInput);

  if (!isNaN(gridSize) && gridSize >= 2 && gridSize <= 100) {

    // Update the CSS variable
    document.documentElement.style.setProperty('--notebook-size', gridSize); //size + 'px'

    const borderWidth = calculateBorderWidth(gridSize);
    document.documentElement.style.setProperty('--border-width', `${borderWidth}px`);

    createGrid(gridSize);
  } else {
    alert("Invalid input. Please enter a number between 2 and 100.");

  }

});

createGrid(16);

const gridRemover = document.querySelector("#remove-grid");
let isGridRemoved = false;

gridRemover.addEventListener("click", () => {

  const divs = document.querySelectorAll("#container div");

  if (!isGridRemoved) {
    // Remove the grid: change border to yellow
    divs.forEach(div => {
      div.style.borderColor = "whitesmoke";
    });
    isGridRemoved = true;
  } else {
    // Restore the grid: change border back to original color
    divs.forEach(div => {
      div.style.borderColor = "rgb(229, 233, 236)"; // or use a CSS variable
    });
    isGridRemoved = false;
  }
});

const clearNotebook = document.querySelector("#clear-notebook");

clearNotebook.addEventListener("click", () => {

  const divs = document.querySelectorAll("#container div");
  divs.forEach(div => {
    div.style.backgroundColor = '';
  });

  document.documentElement.style.setProperty('--div-color', 'whitesmoke');

});

const eraseDivs = document.querySelector('#eraser');

eraseDivs.addEventListener("click", () => {

  // const divs = container.querySelectorAll("#container div");
  // // const isEraseButtonActive = true;

  //   divs.forEach(div => {
  isErasing = !isErasing; // Toggle eraser mode
      // div.addEventListener('mouseover', () => {
      //   isErasing = true;
      //   div.style.backgroundColor = 'whitesmoke';
      // });

  });


