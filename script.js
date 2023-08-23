let inputHeightVector = document.querySelector(".bevel-vector");
let inputQuantityJumpers = document.querySelector(".quantity-jumpers");
let windowSize = document.querySelector(".answer");
let quantityWindow = document.querySelector(".quantity-windows");
let buttonConclusion = document.querySelector(".button-conclusion");
const listOfGlasses = document.querySelector(".list-of-glasses");


function mainFunction() {
  let theThicknessOfTheJumper = listOfGlasses[0].value; // толщина перемычки
  listOfGlasses.addEventListener("change", function() {
    theThicknessOfTheJumper = this.value;
    console.log(theThicknessOfTheJumper);
    listOfGlasses.oncontextmenu = function() {
      const el = document.createElement("input");
      el.value = theThicknessOfTheJumper;
    }
  });
  
// контекстное меню
  // function contextMenu() {
  //   listOfGlasses.oncontextmenu = function() {
  //     const el = document.createElement("input");
  //     el.value = theThicknessOfTheJumper;
  //   }
  // }
  // contextMenu();
  
  
  buttonConclusion.addEventListener("click", function() {
    // формула
    let d = +theThicknessOfTheJumper * +inputQuantityJumpers.value;
    let x = (+inputHeightVector.value - d) / quantityWindow.value + +theThicknessOfTheJumper;
    windowSize.textContent = x;
  });
    
}
mainFunction();
