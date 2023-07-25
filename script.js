let inputHeightVector = document.querySelector(".bevel-vector");
let inputQuantityJumpers = document.querySelector(".quantity-jumpers");
// let boxConclusion = document.querySelector(".quantity-jumpers");
let windowSize = document.querySelector(".answer");
let buttonConclusion = document.querySelector(".button-conclusion");



let valueGlasses_ONE = 22;
let valueGlasses_TWO = 25;
let valueGlasses_THREE = 15;
let valueGlasses_FOUR = 22;

let theThicknessOfTheJumper = 0; // толщина перемычки


const listOfGlasses = document.querySelector(".list-of-glasses");
const selectList = document.querySelectorAll(".glasse");

let arrList = Array.from(selectList);
// console.log(arrList[0].value);


// for (let list of selectList) {
// 	list.addEventListener("change", () => {
// 		for(let i = 0; i < arrList; i++) {
// 			theThicknessOfTheJumper = arrList[i].value;
// 		}
// 	})
// }

for(let i = 0; i < arrList; i++) {
	theThicknessOfTheJumper = arrList[i].value;
	console.log(theThicknessOfTheJumper = arrList[i].value); 
}




buttonConclusion.addEventListener("click", function() {
  // формула
  let d = theThicknessOfTheJumper * +inputQuantityJumpers.value;
  let x = (+inputHeightVector.value - d) / +inputQuantityJumpers.value + theThicknessOfTheJumper;
  windowSize.textContent = x;
  // console.log(d);
});


