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

//document.querySelector('.holding-box').appendChild(make1Square());

// create document fragment so whatever inside stays in memory



// now that 1 square div is created i need to create 16 rows of 16 boxes
// this means multiply the element by itself 16 times by 16 times
// so create a function



let gridSize = 16;

function makeBox() {
     
//console.log(gridSize);
   const totalBoxes = gridSize * gridSize;
  // console.log(totalBoxes); 256
  const tempHoldingBox = document.createDocumentFragment();

    for (let j = 0; j < totalBoxes; j++) { // this means i should loop 16 times, or 16 rows
        const repeatBoxes = make1Square();
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

makeBox();


// Set up a “hover” effect so that the grid divs change color when your 
// mouse passes over them, leaving a (pixelated) trail through your grid

// Hint: “Hovering” is what happens when your mouse enters a div and ends when 
// your mouse leaves it. You can set up event listeners for either of those events 
// as a starting point.

// add an event listener to squareDiv inside a function called hovering
// if mouse enters squareDiv, change color to black using repeatBoxes class & Changing 
// the div’s background color using JavaScript
// if mouse leaves squareDiv, add a mouse pixel trail effect - 3 black squares decreasing in size

// The mouseenter fires when the mouse cursor is outside of an element and then moves 
// inside the boundaries of the element. doesn't affect child elements

//The mouseleave fires when the mouse cursor is over an element and then moves to the 
// outside of the element’s boundaries. doesn't affect child elements

// The mouseover fires when the mouse cursor is outside of the element and then moves 
// inside the boundaries of the element. but affects child elements

// The mouseout fires when the mouse cursor is over an element and then moves another element.
// affects child elements


//function hovering() {

 let changeSquareColours = document.querySelectorAll(".repeat-boxes");

 //console.log(changeSquareColour);

 changeSquareColours.forEach(changeSquareColour => {

  changeSquareColour.addEventListener('mouseover', (e) => {
                
   // console.log(e.target); // shows which divs are being hovered on
   
    e.target.style.backgroundColor = "black"; // working. had color instead of backgroundColor


  });

  changeSquareColour.addEventListener('mouseout', (e) => {
                
   // console.log(e.target);
   e.target.style.backgroundColor = "white"; // working. 
// add mouse pixel trail here
// create 3x3 grid of square divs with class name mini-square-div

const tempPixelBox = document.createDocumentFragment();
//tempPixelBox.classList.add("temp-pixel-box");

let pixelGridSize = 3;
let totalPixelBoxSize = pixelGridSize * pixelGridSize;

for (let k = 0; k < totalPixelBoxSize; k++) { 
const miniSquareDiv = document.createElement("div");
miniSquareDiv.setAttribute("id", "mini-square-div");
miniSquareDiv.textContent = "";
miniSquareDiv.style.flexBasis = `calc(100% / ${pixelGridSize})`;
  
        tempPixelBox.appendChild(miniSquareDiv);
        changeSquareColour.appendChild(tempPixelBox);

}


  });

}); // end of for loop

//}
//hovering();

