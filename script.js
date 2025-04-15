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

let gridSize = 16;

function makeBox() {
     
//console.log(gridSize);
   const totalBoxes = gridSize * gridSize;
  // console.log(totalBoxes); 256
  

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




//function hovering() {

 let changeSquareColours = document.querySelectorAll(".repeat-boxes");

 //console.log(changeSquareColour);

 
  let miniSquareDiv;

 changeSquareColours.forEach(changeSquareColour => {

 

  changeSquareColour.addEventListener('mouseover', (e) => {
                
   // console.log(e.target); // shows which divs are being hovered on
   
    e.target.style.backgroundColor = "black"; // working. had color instead of backgroundColor

    const miniSquareDiv = document.createElement("div");
    miniSquareDiv.classList.add("mini-square-div");
  
    const containerRect = document.querySelector('.holding-box').getBoundingClientRect();
    miniSquareDiv.style.left = `${e.clientX - containerRect.left}px`;
    miniSquareDiv.style.top = `${e.clientY - containerRect.top}px`;
  
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

//}
//hovering();

