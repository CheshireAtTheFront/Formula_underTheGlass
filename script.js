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

// let ArrlistOfGlasses = listOfGlasses.children;
// console.log(ArrlistOfGlasses.value);
// let arrList = Array.from(listOfGlasses.children);
// console.log(arrList[0].value);

// theThicknessOfTheJumper = arrList[0].value;

// if (arrList[0].change) {
// 		console.log(true);	
// }


function selectingGlassesFromTheList () {
	const listOfGlasses = document.querySelectorAll(".glasse");
	 for(let list of listOfGlasses) {
		list.addEventListener("click", () => {
			this.value = "получилось"
		})
	 }
}
selectingGlassesFromTheList();

// for(let list of arrList) {
	
// 	if (list[1].change) {
// 		theThicknessOfTheJumper = valueGlasses_ONE;
// 	} else if(list[2].change) {
// 		theThicknessOfTheJumper = valueGlasses_TWO;
// 	} else if(list[3].change) {
// 		theThicknessOfTheJumper = valueGlasses_THREE;
// 	} else if(list[4].change) {
// 		console.log(theThicknessOfTheJumper = valueGlasses_FOUR);
// 	}

// }


buttonConclusion.addEventListener("click", function() {
  // формула
  let d = theThicknessOfTheJumper * +inputQuantityJumpers.value;
  let x = (+inputHeightVector.value - d) / +inputQuantityJumpers.value + theThicknessOfTheJumper;
  windowSize.textContent = x;
  // console.log(d);
});


