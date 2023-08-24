let heightVector = document.querySelector(".bevel-vector");
let quantityJumpers = document.querySelector(".quantity-jumpers");
let windowSize = document.querySelector(".answer");
let makeChanges = document.querySelector(".make-changes");
let quantityWindow = document.querySelector(".quantity-windows");
const buttonConclusion = document.querySelector(".button-conclusion");
const btnToChange = document.querySelector(".btn-to-change");
const listOfGlasses = document.querySelector(".list-of-glasses");


function mainFunction() {
  let theThicknessOfTheJumper = listOfGlasses[0].value; // толщина перемычки
  listOfGlasses.addEventListener("change", function() {
    theThicknessOfTheJumper = this.value;
    console.log(theThicknessOfTheJumper);
  });
  
  btnToChange.addEventListener("click", function() {
    // измение значения стекл
    let option = listOfGlasses.options[4];
    option.value = makeChanges.value;
    theThicknessOfTheJumper = makeChanges.value;
   });
   
   
  buttonConclusion.addEventListener("click", function() {
    // формула
    let d = +theThicknessOfTheJumper * +quantityJumpers.value;
    let x = (+heightVector.value - d) / quantityWindow.value + +theThicknessOfTheJumper;
    windowSize.textContent = x;
  });
    
}
mainFunction();