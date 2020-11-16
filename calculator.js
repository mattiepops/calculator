class Calculator {
    constructor(prevOperand, currOperand) {
        this.prevOperand = prevOperand;
        this.currOperand = currOperand;
        this.clear()

    }

clear (){
    this.currOperand = "";
    this.prevOperand = "";
    this.operation = "undefined";

}

delete() {

}

appendNumber(number){

}

chooseOperation(operation){

}

compute(){

}

updateDisplay(){

}

}


const body = document.querySelector("body");
body.className = "body";

// ____________________

const calcAll = document.createElement("div");
calcAll.className = "calc-all";

// ____________________

const calcResult = document.createElement("div");
calcResult.className = "result";
// ____________________

const prevOperand = document.createElement("div");
prevOperand.className = "previous-operand";
prevOperand.textContent = "123 +";

// ____________________

const currOperand = document.createElement('div');
currOperand.className = "current-operand";
currOperand.textContent = "432";

// ____________________


let tab = ["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"];

let line;

let button;

calcAll.appendChild(calcResult);
calcResult.appendChild(prevOperand);
calcResult.appendChild(currOperand);

for (let i = 0; i < tab.length; i++){
    button = document.createElement("div");
    button.textContent = tab[i];
    button.className = "btn";

if(i <= 2){
    button.className = "btnOpp";
}

if((i == 7) || (i == 11) || (i == 15) || (i == 19)){
    button.className = "operators";
}
if (i == 18){
    button.className = "equal";
}
if(i % 4 === 3){
    button.className = "btnOpp";
}
if (i == 3){
    button.className = "allclear";
}

if(i%4===0){
    line = document.createElement("div");
    line.className = "calc-cont"
}
    calcAll.appendChild(line);
    body.appendChild(calcAll);
    line.appendChild(button);
}

// END OF CALCULATOR CREATION CODE 

// START OF JS FUNCTIONALITY CODE

const numberButtons = document.querySelectorAll(".btn");

const oppButtons = document.querySelectorAll(".btnOpp");

const equalButton = document.querySelector(".equal");

const acButton = document.querySelector(".allclear");

const calculator = new Calculator(prevOperand, currOperand);

numberButtons.forEach(button => {
    button.addEventListener
})