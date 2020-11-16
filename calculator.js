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

// ____________________

const currOperand = document.createElement('div');
currOperand.className = "current-operand";

// ____________________


let tab = ["(", ")", "%", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

let line;

let button;

calcAll.appendChild(calcResult);
calcResult.appendChild(prevOperand);
calcResult.appendChild(currOperand);

for (let i = 0; i < tab.length; i++){
    button = document.createElement("div");
    button.textContent = tab[i];
    button.className = "btn";

if(i <= 3){
    button.className = "btnOpp"
}
if(i % 4 === 3){
    button.className = "btnOpp"
}

if(i%4===0){
    line = document.createElement("div");
    line.className = "calc-cont"
}
    calcAll.appendChild(line);
    body.appendChild(calcAll);
    line.appendChild(button);
}

