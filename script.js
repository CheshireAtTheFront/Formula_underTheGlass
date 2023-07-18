const thicknessOfTheJumper_Glasses_ONE = document.querySelector(".glasse1");
const thicknessOfTheJumper_Glasses_TWO = document.querySelector(".glasse2");
const thicknessOfTheJumper_Glasses_THREE = document.querySelector(".glasse3");
const thicknessOfTheJumper_Glasses_FOUR = document.querySelector(".glasse4");
const listOfGlasses = document.querySelector(".list-of-glasses");

let inputHeightVector = document.querySelector(".bevel-vector");
let inputQuantityJumpers = document.querySelector(".quantity-jumpers");
// let boxConclusion = document.querySelector(".quantity-jumpers");
let windowSize = document.querySelector(".answer");
let buttonConclusion = document.querySelector(".button-conclusion");

let valueGlasses_ONE = 22;
let valueGlasses_TWO = 25;
let valueGlasses_THREE = 15;
let valueGlasses_FOUR = 22;

let theThicknessOfTheJumper; // толщина перемычки

for (list of listOfGlasses) {
    list.addEventListener("click", () => {
        if (list[0]) {
            list.value = valueGlasses_ONE;
            theThicknessOfTheJumper = valueGlasses_ONE;
            console.log(theThicknessOfTheJumper);
        } else if (list[1]) {
            theThicknessOfTheJumper = valueGlasses_TWO;
            console.log(list[1]);
        } else if (list[2]) {
            theThicknessOfTheJumper = valueGlasses_THREE;
            console.log(list[2]);
        } else if (list[3]) {
            theThicknessOfTheJumper = valueGlasses_FOUR;
            console.log(list[3]);
        }
    })
    
}

buttonConclusion.addEventListener("click", function() {
    // формула
    let d = theThicknessOfTheJumper * +inputQuantityJumpers.value;
    let x = (+inputHeightVector.value - d) / +inputQuantityJumpers.value + theThicknessOfTheJumper;
    windowSize.textContent = x;
    console.log(d);
});


