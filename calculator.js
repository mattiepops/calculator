const body = document.querySelector("body");
body.className = "body";
// ____________________

const container = document.createElement("div");
container.className = "container";

// ____________________

const calcAll = document.createElement("div");
calcAll.className = "calc-all";

// ____________________

const calcResult = document.createElement("div");
calcResult.className = "result";
// ____________________

const prevOperandText = document.createElement("div");
prevOperandText.className = "previous-operand";
prevOperandText.textContent = "";

// ____________________

const currOperandText = document.createElement('div');
currOperandText.className = "current-operand";
currOperandText.textContent = "";

// ____________________


let tab = ["(", ")", "DEL", "AC", "7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+"];

let line;

let button;

calcAll.appendChild(calcResult);
calcResult.appendChild(prevOperandText);
calcResult.appendChild(currOperandText);

for (let i = 0; i < tab.length; i++) {
    button = document.createElement("div");
    button.textContent = tab[i];
    button.className = "btn";

    if (i <= 1) {
        button.className = "btnOpp";
    }

    if ((i == 7) || (i == 11) || (i == 15) || (i == 19)) {
        button.className = "operators";
    }
    if (i == 2) {
        button.className = "delete";

    }
    if (i == 18) {
        button.className = "equal";
    }
    if (i % 4 === 3) {
        button.className = "btnOpp";
    }
    if (i == 3) {
        button.className = "allclear";
    }

    if (i % 4 === 0) {
        line = document.createElement("div");
        line.className = "calc-cont"
    }
    calcAll.appendChild(line);
    container.appendChild(calcAll);
    body.appendChild(container);
    line.appendChild(button);
}

// END OF CALCULATOR CREATION CODE 

// START OF JS FUNCTIONALITY CODE


class Calculator {
    constructor(prevOperandText, currOperandText) {
        this.prevOperandText = prevOperandText;
        this.currOperandText = currOperandText;
        this.readyToReset = false;
        this.clear()

    }

    clear() {
        this.currOperand = "";
        this.prevOperand = "";
        this.operation = undefined;

    }

    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1)
      }


    appendNumber(number) {
        if (number === "." && (this.currOperand.includes("."))) return;
        this.currOperand = this.currOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currOperand === "") return;
        if (this.prevOperand !== "") {
            this.compute()
        }
        this.operation = operation;
        this.prevOperand = this.currOperand;
        this.currOperand = "";
    }

    compute() {
        let computation;
        let prev = parseFloat(this.prevOperand);
        let current = parseFloat(this.currOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "x":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;
            default:
                return;
        }
        this.readyToReset = true;
        this.currOperand = computation;
        this.operation = undefined;
        this.prevOperand = "";
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ""
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        }   else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currOperandText.innerText = this.getDisplayNumber(this.currOperand);

        if (this.operation != null) {
            this.prevOperandText.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
        }   else {
            this.prevOperandText.innerText = ""
        }

    }

}

const numberButtons = document.querySelectorAll(".btn");

const oppButtons = document.querySelectorAll(".btnOpp");

const equalButton = document.querySelector(".equal");

const acButton = document.querySelector(".allclear");

const delButton = document.querySelector(".delete");

const calculator = new Calculator(prevOperandText, currOperandText);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        if(calculator.prevOperand === "" &&
        calculator.currOperand !== "" &&
    calculator.readyToReset) {
            calculator.currOperand = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

oppButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


equalButton.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

acButton.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})

delButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

body.addEventListener("keypress", function(e) {

    if(e.code === "Enter"){
    currOperandText.innerHTML = updateDisplay();
    prevOperandText.innerHTML += " = ";
    prevOperandText.innerHTML += currOperandText.innerHTML = Function('return ' + currOperandText.innerHTML)();
    
    }
})