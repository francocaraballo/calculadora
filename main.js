let visor = document.querySelector('.visor');
let clearButton = document.querySelector('.clear-button');


function addArgument(n) {
    visor.value += n;
}

function result() {
    let result;
    if(visor.value === '') { 
        visor.value = 'Enter an operation'; 
    } else {
        result = eval(visor.value);
        visor.value = result;
    }
}

clearButton.addEventListener('click', () => visor.value = '')
