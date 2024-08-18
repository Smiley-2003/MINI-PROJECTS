//Calculator base on JavaScript 

function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,operator){
    return operator(num1,num2);
}
console.log(calculator(8,4,add));
console.log(calculator(8,4,subtract));
console.log(calculator(8,4,multiply));
console.log(calculator(8,4,divide));
