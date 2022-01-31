var a = 0, b = 0;
var current = 'a'
var operation = null;
var result;
function add(){
    return a + b;
}
function subtract(){
    return a - b;
}
function multiply(){
    return a * b;
}
function divide(){
    return a / b;
}
function update(str){
    document.getElementById('display').innerHTML = str;
}
function append(str){
    document.getElementById('display').append(str);
}
function setDefault(){
    a = 0;
    b = 0;
    update('0');
    current = 'a';
    operation = null;
}
function number(num){
    
    if(current == 'a'){
        if(operation != null){
            setDefault();
            number(num);
            return;
        }
        numberA(num);
        console.log('a = ' + a);
        if(document.getElementById('display').innerHTML == '0'){
            update('');
        }
        append(num.toString());
    }
    else{
        if(b == 0 && num == 0)
            return;
        numberB(num);
        console.log('b = ' + b);
        append(String(num));
    }    
}
function setOperation(op){
    if(current == 'b' && b != 0 ){
        calculate();
        return;
    }
    operation = op;
    append(' ' + operation + ' ');
    changeCurrent();
    
}

function calculate(){
    
    switch(operation){
        case '+' : result = add();break;
        case '-' : result = subtract();break;
        case 'x' : result = multiply();break;
        case '/' : result = divide();break;
    }
    update(String(result));
    a = result;
    console.log('a = ' + a);
    b = 0;
    current = 'a';
    operation = null;
}
function changeCurrent(){
    if(current == 'a'){
        current = 'b';
    }
    else{
        current = 'a';
    }
}
function numberA(num){
    a = parseInt(String(a) + num);
}
function numberB(num){
    b = parseInt(String(b) + num);
}