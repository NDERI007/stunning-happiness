const bodyclass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector("body");
//The split converts a string into an array//
//Every time there's a space in the string it's going to create a new element in that array//
bodyclass.split(" ").forEach((cls) => bdy.classList.add(cls));

const calcBdyCL =
 "max-w-lg rounded overflow-hidden shadow-2xl bg-fuchsia-600 bg-opacity-55 bg-gradient-to-tr from-pink-800 flex";
const calc = document.querySelector(".calc");
calcBdyCL
.split(" ")
.forEach((cls) => calc.classList.add(cls));

const outputCLa = "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-slate-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const output = document.querySelector(".output");
outputCLa
.split(" ")
.forEach((cls) => output.classList.add(cls));

const prevNumCLA = "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs";
const prevNum = document.querySelector(".previousNumber");
prevNumCLA
.split(" ")
.forEach((cls) => prevNum.classList.add(cls));

const currNumCLa = "flex max-w-lg h-2/3 pb-2 text-xl";
const currNum = document.querySelector(".currentNumber");
currNumCLa
.split(" ")
.forEach((cls) => currNum.classList.add(cls));

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => addClasses(btn));

function addClasses(button) {
    const NumberClass = "hover:bg-neutral-700 border-zinc-800";
    const btncLEarClass = "hover:bg-fuchsia-700 border-pink-600";
    const btnOpclass = "hover:bg-slate-400 border-stone-900";
    const equalBtn = "hover:bg-fuchsia-700 border-rose-800";
    const decBtn = "hover:bg-red-900 border-fuchsia-900";

    if (button.classList.value === "number" ) {
        NumberClass.split(' ').forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "operator")  {
        btnOpclass.split(' ').forEach((cls) => button.classList.add(cls));
    }
    else if (button.classList.value === "clear")  {
        btncLEarClass.split(' ').forEach((cls) => button.classList.add(cls));
    }
    else if (button.classList.value === "equal")  {
        equalBtn.split(' ').forEach((cls) => button.classList.add(cls)); 
    }
    else if (button.classList.value === "decimal")  {
        decBtn.split(' ').forEach((cls) => button.classList.add(cls));
    }
    const baseClass = "number flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl";
    baseClass.split(' ').forEach((cls) => button.classList.add(cls));
    }
    