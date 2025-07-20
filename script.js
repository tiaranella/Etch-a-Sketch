
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
  });

  }
}

const newNotebookButton = document.querySelector("#button");

newNotebookButton.addEventListener("click", () => {
  let userInput = prompt("Enter the size of new notebook (min. value – 2, max. value – 100)");

  let gridSize = parseInt(userInput);

  if (!isNaN(gridSize) && gridSize >= 2 && gridSize <= 100) {


    // Update the CSS variable
    document.documentElement.style.setProperty('--notebook-size', gridSize); //size + 'px'

    // document.documentElement.style.setProperty('--div-size-percentage', `calc(100% / ${gridSize})`);


    createGrid(gridSize);
  } else {
    alert("Invalid input. Please enter a number between 2 and 100.");

  }

});

createGrid(16);
  // const enterPixels = getComputedStyle(document.documentElement).getPropertyValue('--enter-pixels');
