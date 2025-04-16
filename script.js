// Add a button on the top of the screen to regenerate grid

const container = document.querySelector(".container");

const btnDiv = document.createElement("div");
btnDiv.classList.add("btn-div");

const newGridButton = document.createElement("button");
newGridButton.setAttribute("id", "reset-grid-btn");
newGridButton.textContent = "Reset Grid";

btnDiv.appendChild(newGridButton);

container.appendChild(btnDiv);



//send the user a popup asking for the number of squares per side for 
// the new grid once button is pressed. Once entered, the existing grid 
// should be removed, and a new grid should be generated in the same total space as before 
// (e.g., 960px wide) so that you’ve got a new sketch pad.

// tip: Set the limit for the user input to a maximum of 100.
// make a function that runs when button is clicked
// use a prompt





/* no this is a function with a button listener in it?
function newGrid() {

  // first i need a listener on the button

  newGridButton.addEventListener("click", (e) => {
  // console.log(e.target); // yes this is the button
  


  });

}
newGrid();
*/


const holdingBox = document.querySelector(".holding-box");


// create a 16x16 grid of square divs inside holding div

// remember to make each task a function

function make1Square() {
// so first i need to create 1 square div.

const squareDiv = document.createElement("div");
squareDiv.setAttribute("id", "square-div");
squareDiv.textContent = "";

return squareDiv;

};
//make1Square();

// make grid

const tempHoldingBox = document.createDocumentFragment();

let defaultBoxSize = 16;

let gridSize = defaultBoxSize;  
//console.log(gridSize);
   const totalBoxes = gridSize * gridSize;
  // console.log(totalBoxes); 256
  let repeatBoxes;


function makeBox(gridSize) {
  
 
  holdingBox.replaceChildren();

    for (let j = 0; j < totalBoxes; j++) { // this means i should loop 16 times, or 16 rows
        repeatBoxes = make1Square();
        repeatBoxes.classList.add("repeat-boxes");
       // repeatBoxes.style.height = `calc(100% / ${gridSize})`;
       // console.log(repeatBoxes.style.height);
       // repeatBoxes.style.width = `calc(100% / ${gridSize})`;
      // console.log(repeatBoxes.style.width);
      repeatBoxes.style.flexBasis = `calc(100% / ${gridSize})`;
      
        //console.log(repeatBoxes);
        tempHoldingBox.appendChild(repeatBoxes);
      
}

//console.log(repeatBoxes); // this only makes one single div?
document.querySelector('.holding-box').appendChild(tempHoldingBox);



return tempHoldingBox;
}

makeBox(gridSize);




function hovering() {

 let changeSquareColours = document.querySelectorAll(".repeat-boxes");

 //console.log(changeSquareColour);

 
  //let miniSquareDiv;

 changeSquareColours.forEach(changeSquareColour => {

 

  changeSquareColour.addEventListener('mouseover', (e) => {
                
   // console.log(e.target); // shows which divs are being hovered on
   
    e.target.style.backgroundColor = "black"; // working. had color instead of backgroundColor

    const miniSquareDiv = document.createElement("div");
    miniSquareDiv.classList.add("mini-square-div");
  
    //const containerRect = document.querySelector('.holding-box').getBoundingClientRect()//
    miniSquareDiv.style.left = `${e.clientX}px`; //- containerRect.left
    miniSquareDiv.style.top = `${e.clientY}px`; // - containerRect.top
  
    document.querySelector('.holding-box').appendChild(miniSquareDiv);
  
    setTimeout(() => {
      miniSquareDiv.style.opacity = "0";
    }, 10);
  
    setTimeout(() => {
      miniSquareDiv.remove();
    }, 500);




 }); // listener end

  changeSquareColour.addEventListener('mouseout', (e) => {
                
   // console.log(e.target);
   e.target.style.backgroundColor = "white"; // working. 
   //document.holdingBox.removeChild(tempPixelBox);

  //document.querySelectorAll(".mini-square-div");
  //miniSquareDiv.remove();
  // remove square after fade completes





  });

}); // end of for loop

}
hovering();


// button click event listener to apply function
newGridButton.addEventListener("click", function() {
  // your function code here
// now that the button has been clicked, ask for a prompt
let resetGrid = parseInt(prompt("Please enter the amount of squares of your grid", "20"), 10);

if (resetGrid > 100) {
 
  text = "Please enter a number under 100";
}

gridSize = resetGrid;
makeBox(gridSize);

});

container.appendChild(holdingBox);