let currentNum = "";
let previousNum = "";
let operator = "";

const currentDispnUM = document.querySelector(".currentNumber");
const prevDispNum = document.querySelector(".previousNumber");

const equal = document.querySelector(".equal");
equal.addEventListener("click", calculate);


const decbtn = document.querySelector(".decimal");

const operatorBTn = document.querySelectorAll(".operator");

const clear = document.querySelector(".clear");


const nUMbtN = document.querySelectorAll(".number");

nUMbtN.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
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
    operator += op;
   previousNum = currentNum;
   prevDispNum.textContent = previousNum + " " + operator;
   currentNum = "";
   currentDispnUM.textContent = "";
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
    prevDispNum.textContent = "";
    operator = "";
    if (previousNum.length < 11) {
        currentDispnUM.textContent = previousNum;
    } else {
        currentDispnUM.textContent = previousNum.slice(0, 11) + "..."
    }
}