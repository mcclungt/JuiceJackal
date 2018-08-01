// TODO
// fix variable names
// clean up current js
// get rid of hardcode
// fix callback function for second cursor

const listItem = document.querySelectorAll("li");
let itemArray = [];
let myvar;
let letter;
const cursorChar = document.createTextNode("|"); // for later
const twitter = "https://twitter.com/juicejackal";
let twitterFlag = false;

// for (i = 0; i < listItem.length/2; i++) {
// 	let item = [listItem[i], listItem[i+listItem.length/2]];
// 	itemArray.push(item);
// }

// //	assign mouseover and mouseout functions to lis
// for (i=0; i < itemArray.length; i++) {
// 	(	function() {																// syntax here allows the
// 		let item = itemArray[i][0];													// event listener to pass
// 		let cursor = itemArray[i][1];												// a parameter to the addCursor
// 		item.addEventListener("mouseover", () => {addCursor(cursor);}, false);		// and removeCursor functions
// 		item.addEventListener("mouseout", () => {removeCursor(cursor);}, false);
// 	}());
// }

// const addCursor = (cursor) => {
// 	myvar = setInterval(() => {cursor.classList.toggle('invisible');}, 300);		// cursor blinks every 0.3 seconds
// }

// const removeCursor = (cursor) => {
// 	cursor.classList.add('invisible');												
// 	clearInterval(myvar);
// }

const changeToolTip = () => {
	let tooltip = document.getElementById("myToolTip");
	tooltip.innerHTML = "Copied";
}

const revertToolTip = () => {
	let tooltip = document.getElementById("myToolTip");
	tooltip.innerHTML = "Copy to Clipboard";
}

// FOR LATER
// const printSentence = (id, sentence) => {
//   for(var i = 0; i < sentence.length; i++){
//     ((index) => {
//       setTimeout(() => {
//       	letter = document.createTextNode(sentence[index]);
//         document.getElementById(id).appendChild(letter); 
//       }, 80 * i);
//     })(i);
//   }
// }
// const sentenceCursor = (id, sentence, callback) => {
// 	printSentence(id, sentence);
// 	callback();
// }
// const hardCodePrint = () => {
// 	if (twitterFlag === false) {
// 		printSentence("text-parser", twitter);
// 		twitterFlag = true;
// 	}
// }
// sentenceCursor("text-parser", twitter, () => {
// 	console.log(document.getElementById('text-parser').childNodes);
// 	document.getElementById("text-parser").appendChild(cursorChar);
// });