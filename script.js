let resultEl = document.getElementById("result-el");
let num1 = parseInt(prompt("Enter First Number", ) );
let num2 = parseInt(prompt("Enter Second Number", ));
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

//validation
if (num1,num2 != null){
    
//functions: add(), subtract(), divide(), multiply()
    function add(){
        let add = (num1 + num2);
        resultEl.textContent = "Result: " + add;
    }


    function subtract(){
        let subtract = num1 - num2;
        resultEl.textContent = "Result: " + subtract;
    }


    function divide(){
        let divide = num1 / num2
        resultEl.textContent = "Result: " + divide;
    }


    function multiply(){
        let multiply = num1 * num2;
        resultEl.textContent = "Result: " + multiply;
    }

}

