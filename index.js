const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if(eval(display.value) == "Infinity") {
            //display.value = "Error";
            throw new Error("You can't divide by zero!");
        }
        else {
            display.value = eval(display.value);  
        }      
    }
    catch(error) {
        display.value = "Error";
    }
}