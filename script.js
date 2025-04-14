const holdingBox = document.querySelector(".holding-box");

// create a 16x16 grid of square divs inside holding div

// remember to make each task a function

function make1Square() {
// so first i need to create 1 square div.

const squareDiv = document.createElement("div");
squareDiv.setAttribute("id", "square-div");

return squareDiv;

};
//make1Square();

//document.querySelector('.holding-box').appendChild(make1Square());

// create document fragment so whatever inside stays in memory



// now that 1 square div is created i need to create 16 rows of 16 boxes
// this means multiply the element by itself 16 times by 16 times
// so create a function called makeRows

// not sure if i need this now
/*
function makeRowsAcross(a) {
// i need a Math.something method
// Math.imul does multiplication

a = 16;
//b = 16;

let repeatAcross;

//let rowByRows = Math.imul(a, b); // should = 256

//console.log(rowByRows); // prints 256 so this method is right but not sure how to use it

// now create a loop where sqaureDiv is created 

for (let i = 0; i < a; i++) { // this means i should loop 16 times, or 16 rows across
  repeatAcross = make1Square(); // this makes the make square function run i times
  //make1Square();
//fragment.appendChild(repeatAcross);
//document.querySelector('.holding-box').appendChild(make);
//console.log(repeatAcross); // prints sqaureDiv 16 times if no return statement
// don't put return inhere or it doesn't loop;
}

//return document.querySelector('.holding-box'); // have to return what it is
//return fragment;
//console.log(repeatAcross); //coming back 16 times
return repeatAcross;
}
//makeRowsAcross();


//console.log(makeRowsAcross()); // returns undefined if nothing is returned

//fragment.appendChild(makeRowsAcross()); // doesn't work
//document.querySelector('.holding-box').appendChild(makeRowsAcross());
*/


/* don't need a rows DOWN
// now make rowsDown

function makeRowsDown(b) {

b = 16;

for (let j = 0; j < b; j++) { // this means j should loop 16 times, or 16 rows down
    const repeatDown = make1Square(); // this makes the make square function run i times
fragment.appendChild(repeatDown);
}
 return fragment

}
//makeRowsDown(); // do not run this while running document.append

//document.querySelector('.holding-box').appendChild(makeRowsDown());

*/

// now make multiplyRows - or in this case without a rows down, make add rows by self

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

}

makeBox();
//console.log(addRowsBySelf());

//document.querySelector('.holding-box').appendChild(addRowsBySelf());



//fragment.appendChild(makeRowsAcross());
// append fragment to holding box
//document.querySelector('.holding-box').appendChild(fragment);