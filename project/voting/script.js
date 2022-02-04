var s = 0;
var v = 0;
var x = 0;

const svalue =document.querySelector('.container .info .q .value')
const vvalue =document.querySelector('.container .info .v .value')
const xvalue =document.querySelector('.container .info .x .value')

const agreeButton = document.querySelector('.container .tombol .agree')
agreeButton.addEventListener('click',function(){
    s += 1;
    svalue.innerHTML = s;
    v += 1;
    vvalue.innerHTML = v;
});
const disagreeButton = document.querySelector('.container .tombol .disagree')
disagreeButton.addEventListener('click',function(){
    s += 1;
    svalue.innerHTML  = s;
    x += 1;
    xvalue.innerHTML  = x;
});