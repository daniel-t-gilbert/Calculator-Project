// display number in text box
function displayNumber(num){
    result.value += num
}


// clear text box
function clearBox() {
    result.value = "";
}


// remove last item
function goBack(){
    string1 = result.value;
    result.value=string1.slice(0,-1);
}


// evaluate answer
function evaluateExpression(){
    expression = result.value;
    output = eval(expression);
    result.value = output;
}
