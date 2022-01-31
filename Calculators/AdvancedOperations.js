let a = 0, b = 0;
let current = 'a'
let operation = null;
let result;
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
function power(){
    return Math.pow(a, b);
}
function factorial(){
    let fact = 1;
    for(let i = 1; i <= a; i+=1){
        fact *= i;
    }
    return fact;
}
function update(text){
    document.getElementById('display').textContent = text;
}
function getText(){
    return document.getElementById('display').textContent;
}
function appendText(text){
    document.getElementById('display').append(text);
}
function remove(){
    if(a == 0){
        return;
    }
    let text = getText();
    if(operation != null && b == 0){        
        update(text.substring(0, text.length - 3));
        current = 'a';
        console.log('op null');
    }
    else{
        if(current == 'a'){
            a = parseFloat(String(a).substring(0, String(a).length - 1));
            console.log(a);
            update(String(a));
        }
        else{
            b = parseFloat(String(b).substring(0, String(b).length - 1));
            update(text.substring(0, text.length - 1));
        }
    }
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
        a = parseInt(String(a) + num);
        console.log('a = ' + a);
        if(getText() == '0'){
            update(String(num));
        }
        else{
            appendText(num.toString());
        }        
    }
    else{
        if(b == 0 && num == 0)
            return;
        b = parseInt(String(b) + num);
        console.log('b = ' + b);
        appendText(String(num));
    }    
}
function setOperation(op){
    if(op == '!'){
        operation = op;
        calculate();
        return;
    }
    if(current == 'b' && b != 0 ){
        calculate();
        return;
    }
    operation = op;
    appendText(' ' + operation + ' ');
    changeCurrent();
    
}

function calculate(){
    
    switch(operation){
        case '+' : result = add();break;
        case '-' : result = subtract();break;
        case 'x' : result = multiply();break;
        case '/' : result = divide();break;
        case '^' : result = power();break;
        case '!' : {
            if(!Number.isInteger(a)){
                alert('Number is not an integer');
                return;
            }
            else{
                result = factorial();
            }
        }
        
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