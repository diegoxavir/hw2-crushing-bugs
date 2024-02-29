// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page 
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	reset = document.querySelector('#resetBut'),
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	draggedPiece;

// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?
function changeBGImage() {
	// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	// bug fix #2 should go here. it's at most 3 lines of JS code.
	//puzzlePieces
	//if (draggedPiece) {
	//	return
	//}

//	function handleStartDrag() {
//		requestIdleCallback;
//	}

//if (this.handleDrop) {
//	draggedPiece = null;
//}

	//puzzlePieces.forEach() {
	//	if (this.parent)
	//	return;
	//}

	//puzzlePieces.forEach(piece => {
	//	if (this.parent)
	//	return;
	//)}

	puzzlePieces.forEach(piece => {
        document.querySelector(".puzzle-pieces").appendChild(piece);
		console.log('pieces reset');
    });

	
    
	
	 puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;



	 	/*Bonus bug
	if (url(images/backGround1.jpg)) {
		puzzlePieces = `url(images/bottomLeft${this.id}.jpg)`;
	}
	*/

	let bgImageID = this.id;
	
	 puzzlePieces.forEach(piece => {

        if (piece.alt === "top left") {
            piece.src = `images/topLeft${bgImageID}.jpg`;
        }
        if (piece.alt === "top right") {
            piece.src = `images/topRight${bgImageID}.jpg`;
        }
        if (piece.alt === "bottom left") {
            piece.src = `images/bottomLeft${bgImageID}.jpg`;
        }
        if (piece.alt === "bottom right") {
            piece.src = `images/bottomRight${bgImageID}.jpg`;
        }

		
    });

}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(event) {
	event.preventDefault();
	console.log('dragged over a zone');
}

function handleDrop(event) {
	event.preventDefault();
	console.log('dropped on the zone')
	
//	if (puzzlePieces ) 
//	if (handleDrop) {
//		draggedPiece = null;
//	}
	//if (handleDrop) {
	//	return;
	//}
//	if (child) {
//	return
//	}
//	if (this.child > 0) {
//		return;
///	}

//	if (firstChild > 0) {
//		return;
//	}
//	if (this.firstElementChild > 0 ) {
//		return;
//	}
	if (this.firstElementChild) {
		return;
	}
//bug fix here-check condition

this.appendChild(draggedPiece)

}

function resetButton(event) {
	puzzlePieces.forEach(piece => {
        document.querySelector(".puzzle-pieces").appendChild(piece);
		console.log('pieces reset');
    });
}

// 1 to many event handling
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));


//Bonus Bug 2
//reset.forEach(reset => reset.addEventListener('click', resetButton))

reset.addEventListener('click', resetButton);