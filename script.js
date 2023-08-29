const buttonConclusion = document.querySelector(".button-conclusion");
const btnToChange = document.querySelector(".btn-to-change");
const listOfGlasses = document.querySelector(".list-of-glasses");


let theThicknessOfTheJumper = listOfGlasses[0].value; // толщина перемычки
let listValues = listOfGlasses.addEventListener("change", function() {
  theThicknessOfTheJumper = this.value;
  console.log(theThicknessOfTheJumper);
});


let newValue = btnToChange.addEventListener("click", function() {
  let makeChanges = document.querySelector(".make-changes");
  // измение значения стекла
  let option = listOfGlasses.options[4];
  option.value = makeChanges.value;
  theThicknessOfTheJumper = makeChanges.value;
});


let calculateByTheFormula = buttonConclusion.addEventListener("click", function() {
    let windowSize = document.querySelector(".answer");
    let quantityJumpers = document.querySelector(".quantity-jumpers");
    let heightVector = document.querySelector(".bevel-vector");
    let quantityWindow = document.querySelector(".quantity-windows");
    // формула
    let d = +theThicknessOfTheJumper * +quantityJumpers.value;
    let x = (+heightVector.value - d) / quantityWindow.value + +theThicknessOfTheJumper;
    if(+quantityJumpers.value > +quantityWindow.value) {
      windowSize.textContent = "Ошибка";
    }
    windowSize.textContent = x.toFixed(3);
    
  });
  

// glassSelectionAndItsValues(),  addANewValueForTheJumper()