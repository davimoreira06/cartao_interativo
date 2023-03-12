const pNumber = document.getElementById("user-number");
const inpNumber = document.getElementById("card-number");

const pName = document.getElementById("user-name");
const inpName = document.getElementById("card-name");

const pMonth = document.getElementById("user-exp-date-m");
const selMonth = document.getElementById("exp-date-m");

const pYear = document.getElementById("user-exp-date-y");
const selYear = document.getElementById("exp-date-y");

const pCvc = document.getElementById("user-cvc");
const inpCvc = document.getElementById("cvc");


function receiveName() {
    pName.innerHTML = inpName.value;
} 

function receiveNumber() {
    pNumber.innerHTML = format(inpNumber.value);
}
function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function receiveMonth() {
    pMonth.innerHTML = selMonth.value;
}

function receiveYear() {
    pYear.innerHTML = selYear.value;
}

function receiveCvc() {
    pCvc.innerHTML = inpCvc.value;
}
