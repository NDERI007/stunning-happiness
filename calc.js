let currentNum = "";
let previousNum = "";
let operator = "";

window.addEventListener("keydown", handleKEyPress);

const currentDispnUM = document.querySelector(".currentNumber");
const prevDispNum = document.querySelector(".previousNumber");

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        calculate();
    }
});

const decbtn = document.querySelector(".decimal");
decbtn.addEventListener("click", () => {
    addDEc();
});

const operatorBTn = document.querySelectorAll(".operator");

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalc);

const nUMbtN = document.querySelectorAll(".number");

nUMbtN.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if (currentNum != "" && previousNum != "" && operator === "") {
        previousNum = "";
        currentDispnUM.textContent = currentNum;
    }
    if (currentNum.length <= 12) {
    currentNum += number;
    currentDispnUM.textContent = currentNum;
    }
}

operatorBTn.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        handleOper(e.target.textContent);
    });
});

function handleOper(op) {
   if (previousNum === "") {
       previousNum = currentNum;
       operatorCheck(op);
   } else if (currentNum === "") {
       operatorCheck(op);
   }  else{
      calculate();
      operator = op;
      prevDispNum.textContent = previousNum + " " + operator;
      currentDispnUM.textContent = "0";
   }
}

function operatorCheck(text) {
    operator = text;
    prevDispNum.textContent = previousNum + " " + operator;
    currentDispnUM.textContent = "0";
    currentNum = "";
}

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if (operator === "+") {
        previousNum += currentNum;
    }
    else if (operator === "-") {
        previousNum -= currentNum;
    }
    else if (operator === "*"){
        previousNum *= currentNum;
    }
    else if (operator === "/") {
        if (currentNum <= 0) {
            previousNum = "Error";
            displayResult()
            return;
        }
        previousNum  /= currentNum;
        
    }
    previousNum = RoundNum(previousNum);
    previousNum = previousNum.toString();
    displayResult();
}

function RoundNum(num) {
    return Math.round(num * 100000) / 100000;
}
function displayResult() {
    if (previousNum.length < 11) {
        currentDispnUM.textContent = previousNum;
    } else {
        currentDispnUM.textContent = previousNum.slice(0, 11) + "...";
    }
    prevDispNum.textContent = "";
    operator = "";
    currentNum = "";
}

function clearCalc() {
    previousNum = "";
    currentNum = "";
    operator = "";
    currentDispnUM.textContent = "";
    prevDispNum.textContent = "";
}

function addDEc() {
    if (!currentNum.includes(".")) {
        currentNum += ".";
        currentDispnUM.textContent = currentNum;
    }
}
function handleKEyPress(e) {
    e.preventDefault()
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key)
    }
    if (
        e.key === "Enter" || 
        (e.key === "=" && previousNum != "" && currentNum != "")
     ) {
        calculate();
    }
    if (e.key === "-" || e.key === "+" || e.key === "/") {
        handleOper(e.key);
    }
    if (e.key === "*") {
        handleOper(e.key);
    }
    if (e.key === ".") {
        addDEc(e.key);
    }
    if (e.key === "Backspace") {
        HandlDel();
    }
}

function HandlDel() {
    if (currentNum != "") {
        currentNum = currentNum.slice(0, -1);
        currentDispnUM.textContent = currentNum;
    }
    if (currentNum === "") {
        currentNum = "0";
    }
    if (currentNum === "" && previousNum !== "" && operator === "") {
        previousNum = previousNum.slice(0, -1);
        currentDispnUM.textContent = previousNum;
    }
}