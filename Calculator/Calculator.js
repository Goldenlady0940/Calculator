document.addEventListener("DOMContentLoaded", function() {
  let input = document.getElementById("input");
  let result = document.getElementById("result");
  let clearBtn = document.getElementById("clear");
  let sqrtBtn = document.getElementById("sqrt");
  let divideBtn = document.getElementById("divide");
  let multiplyBtn = document.getElementById("multiply");
  let subtractBtn = document.getElementById("subtract");
  let addBtn = document.getElementById("add");
  let equalBtn = document.getElementById("equal");
  let backBtn = document.getElementById("back");
  let decimalBtn = document.getElementById("decimal");
  let numberButtons = document.querySelectorAll(".buttons button[id]:not(#clear):not(#sqrt):not(#divide):not(#multiply):not(#subtract):not(#add):not(#equal):not(#back):not(#decimal)");

  let currentInput = "";
  let currentOperator = "";

  for (let button of numberButtons) {
    button.addEventListener("click", function() {
      currentInput += button.textContent;
      input.value = currentInput;
    });
  }

  clearBtn.addEventListener("click", function() {
    clearAll();
  });

  sqrtBtn.addEventListener("click", function() {
    if (currentInput !== "") {
      let sqrtValue = Math.sqrt(parseFloat(currentInput));
      result.value = sqrtValue.toString();
      currentInput = sqrtValue.toString();
      input.value = '';
    }
  });

  divideBtn.addEventListener("click", function() {
    handleOperator("/");
  });

  multiplyBtn.addEventListener("click", function() {
    handleOperator("*");
  });

  subtractBtn.addEventListener("click", function() {
    handleOperator("-");
  });

  addBtn.addEventListener("click", function() {
    handleOperator("+");
  });

  equalBtn.addEventListener("click", function() {
    calculate();
  });

  backBtn.addEventListener("click", function() {
    removeLastCharacter();
  });

  decimalBtn.addEventListener("click", function() {
    handleDecimal();
  });

  function handleOperator(operator) {
    if (currentInput !== "") {
      currentOperator = operator;
      currentInput += operator;
      input.value = currentInput;
    }
  }

  function calculate() {
    if (currentInput !== "") {
      try {
        let resultValue = eval(currentInput);
        result.value = resultValue.toString();
        input.value = '';
        currentInput = resultValue.toString();
      } catch (error) {
        result.value = "Error";
      }
    }
  }

  function clearAll() {
    currentInput = "";
    currentOperator = "";
    input.value = "";
    result.value = "";
  }

  function removeLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    input.value = currentInput;
  }

  function handleDecimal() {
    if (!currentInput.includes(".")) {
      currentInput += ".";
      input.value = currentInput;
    }
  }
});