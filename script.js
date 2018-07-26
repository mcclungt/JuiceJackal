const listItem = document.querySelectorAll("li");
let itemArray = [];
let myvar;

for (i = 0; i < listItem.length/2; i++) {
	let item = [listItem[i], listItem[i+listItem.length/2]];
	itemArray.push(item);
}

//	assign mouseover and mouseout functions to lis
for (i=0; i < itemArray.length; i++) {
	(	function() {																// syntax here allows the
		let item = itemArray[i][0];													// event listener to pass
		let cursor = itemArray[i][1];												// a parameter to the addCursor
		item.addEventListener("mouseover", () => {addCursor(cursor);}, false);		// and removeCursor functions
		item.addEventListener("mouseout", () => {removeCursor(cursor);}, false);
	}());
}

const addCursor = (cursor) => {
	myvar = setInterval(() => {cursor.classList.toggle('invisible');}, 300);		// cursor blinks every 0.3 seconds
}

const removeCursor = (cursor) => {
	cursor.classList.add('invisible');												
	clearInterval(myvar);
}