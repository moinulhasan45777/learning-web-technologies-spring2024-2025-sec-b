const display = document.getElementById("display");
let tempValue = 0;
let lastPressed = "";
let resultPressed = false;
let lastNumber = 0;

const number0 = document.getElementById("number-0");
const number1 = document.getElementById("number-1");
const number2 = document.getElementById("number-2");
const number3 = document.getElementById("number-3");
const number4 = document.getElementById("number-4");
const number5 = document.getElementById("number-5");
const number6 = document.getElementById("number-6");
const number7 = document.getElementById("number-7");
const number8 = document.getElementById("number-8");
const number9 = document.getElementById("number-9");
const addButton = document.getElementById("addition");
const divButton = document.getElementById("division");
const multiButton = document.getElementById("multiplication");
const subButton = document.getElementById("subtraction");
const cancelButton = document.getElementById("cancel");
const resultButton = document.getElementById("result");

display.readOnly = true;
display.value = 0;

document.addEventListener("keydown", function (e) {
  if (e.key === "c" || e.key === "C") {
    display.value = 0;
    tempValue = 0;
    resultPressed = true;
  }
});

cancelButton.addEventListener("click", function () {
  display.value = 0;
  tempValue = 0;
  resultPressed = false;
});

number0.addEventListener("click", function () {
  if (display.value !== "0" && display.value.length <= 7) {
    display.value = display.value + "0";
  }
  resultPressed = false;
});

number1.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "1";
  } else if (display.value.length <= 7) {
    display.value = display.value + "1";
  }
  resultPressed = false;
});
number2.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "2";
  } else if (display.value.length <= 7) {
    display.value = display.value + "2";
  }
  resultPressed = false;
});
number3.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "3";
  } else if (display.value.length <= 7) {
    display.value = display.value + "3";
  }
  resultPressed = false;
});
number4.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "4";
  } else if (display.value.length <= 7) {
    display.value = display.value + "4";
  }
  resultPressed = false;
});
number5.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "5";
  } else if (display.value.length <= 7) {
    display.value = display.value + "5";
  }
  resultPressed = false;
});
number6.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "6";
  } else if (display.value.length <= 7) {
    display.value = display.value + "6";
  }
  resultPressed = false;
});
number7.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "7";
  } else if (display.value.length <= 7) {
    display.value = display.value + "7";
  }
  resultPressed = false;
});
number8.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "8";
  } else if (display.value.length <= 7) {
    display.value = display.value + "8";
  }
  resultPressed = false;
});
number9.addEventListener("click", function () {
  if (display.value === "0") {
    display.value = "9";
  } else if (display.value.length <= 7) {
    display.value = display.value + "9";
  }
  resultPressed = false;
});

addButton.addEventListener("click", function () {
  if (resultPressed) {
    tempValue = tempValue;
  } else {
    tempValue = tempValue + Number(display.value);
  }
  display.value = "0";
  lastPressed = "addition";
});

subButton.addEventListener("click", function () {
  if (resultPressed) {
    tempValue = tempValue;
  } else {
    tempValue = Number(display.value);
  }
  display.value = "0";
  lastPressed = "subtraction";
});
multiButton.addEventListener("click", function () {
  if (tempValue === 0) {
    tempValue += 1;
  }

  if (resultPressed) {
    tempValue = tempValue;
  } else {
    tempValue = tempValue * Number(display.value);
  }
  display.value = "0";
  lastPressed = "multiplication";
});
divButton.addEventListener("click", function () {
  tempValue = Number(display.value);
  display.value = "0";
  lastPressed = "division";
});
resultButton.addEventListener("click", function () {
  if (lastPressed === "addition") {
    if (resultPressed === false) {
      lastNumber = Number(display.value);
    }
    tempValue = tempValue + lastNumber;
    display.value = tempValue;
    resultPressed = true;
  } else if (lastPressed === "subtraction") {
    if (resultPressed === false) {
      lastNumber = Number(display.value);
    }
    tempValue = tempValue - lastNumber;
    display.value = tempValue;
    resultPressed = true;
  } else if (lastPressed === "multiplication") {
    if (resultPressed === false) {
      lastNumber = Number(display.value);
    }
    tempValue = tempValue * lastNumber;
    display.value = tempValue;
    resultPressed = true;
  } else if (lastPressed === "division") {
    if (resultPressed === false) {
      lastNumber = Number(display.value);
    }
    tempValue = tempValue / lastNumber;
    display.value = tempValue;
    resultPressed = true;
  }
});
