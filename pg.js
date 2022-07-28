const psdEl = document.getElementById('psd')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const lenEl = document.getElementById('len')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const btnEl = document.getElementById('btn')

const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&* ()_+='?/";
 
function getUpperCase() {

    return upperLetter[Math.floor(Math.random() *  upperLetter.length)];
}
function getLowerCase() {
    return lowerLetter[Math.floor(Math.random() *  lowerLetter.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random()   *  numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generate(){
    const len= lenEl.value;

    let password= '';

    if(upperEl.checked){
        password +=getUpperCase();
    }
    if(lowerEl.checked){
        password +=getLowerCase();
    }
    if(symbolEl.checked){
        password +=getSymbol();
    }
    if(numberEl.checked){
        password +=getNumber();
    }
    for(let i=password.length; i<len;i++){
const v = generatePassword();
password += v;
    }


    

    psdEl.innerText= password;

}







function generatePassword(){
const x=[];

if(upperEl.checked){
    x.push(getUpperCase());
} 
if(lowerEl.checked){
    x.push(getLowerCase());
}
if(numberEl.checked){
    x.push(getNumber());

if(symbolEl.checked){
    x.push(getSymbol());
}
}
if(x.length===0) return "";

 return x[Math.floor(Math.random() * x.length)];
}

btnEl.addEventListener('click', generate);