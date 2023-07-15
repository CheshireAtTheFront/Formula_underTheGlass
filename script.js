const thicknessOfTheJumper_Glasses_ONE = document.querySelector(".glasse1");
const thicknessOfTheJumper_Glasses_TWO = document.querySelector(".glasse2");
const thicknessOfTheJumper_Glasses_THREE = document.querySelector(".glasse3");
const thicknessOfTheJumper_Glasses_FOUR = document.querySelector(".glasse4");
let inputHeightVector = document.querySelector(".bevel-vector");
let inputQuantityJumpers = document.querySelector(".quantity-jumpers");
let boxConclusion = document.querySelector(".quantity-jumpers");
const buttonConclusion = document.querySelector(".box-conclusion");

// let valueGlasses_ONE = 22;
// let valueGlasses_TWO = 25;
let valueGlasses_THREE = 15;
let valueGlasses_FOUR = 22;


let valueGlasses_ONE = {
    height: inputHeightVector.value,
    width: 22,
    quantityJumpers: inputQuantityJumpers.value * this.width,
}

// формула
// объект1.высота - расположение перемычек / кол-во перемычек + объект1.width
let conclusion = ((valueGlasses_ONE.height - valueGlasses_ONE.quantityJumpers) / inputQuantityJumpers) + valueGlasses_ONE.width

buttonConclusion.addEventListener("click", () => {
    boxConclusion.textContent = conclusion;
})




// let valueGlasses_TWO = {}