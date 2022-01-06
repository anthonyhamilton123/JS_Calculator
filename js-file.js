const subtract = function(...num) {
    let calcSum = num[0];
    for (i = 1; i < num.length; i++){
        calcSum -= num[i];
    }
    return calcSum;
};

const sum = function(...num) {
    let calcSum = num[0];
    for (i = 1; i < num.length; i++){
        calcSum += num[i];
    }
    return calcSum;
};

const multiply = function(...num) {
  let calcSum = num[0];
  for (i = 1; i < num.length; i++){
    calcSum *= num[i];
    };
  return calcSum;
};

const divide = function(...num) {
    let calcSum = num[0];
    for (i=1; i<num.length; i++){
        calcSum /= num[i];
    };
    return calcSum;
}

const operate = ((operator, a, b) => operator(a,b));

let resultsBox = document.querySelector("#results");
let displayVariable = "";

const oneBtn = document.querySelector('#one');
oneBtn.addEventListener('click', () => {displayVariable += '1'; resultsBox.textContent = displayVariable});

const twoBtn = document.querySelector('#two');
twoBtn.addEventListener('click', () => {displayVariable += '2'; resultsBox.textContent = displayVariable});

const threeBtn = document.querySelector('#three');
threeBtn.addEventListener('click', () => {displayVariable += '3'; resultsBox.textContent = displayVariable});

const fourBtn = document.querySelector('#four');
fourBtn.addEventListener('click', () => {displayVariable += '4'; resultsBox.textContent = displayVariable;});

const fiveBtn = document.querySelector('#five');
fiveBtn.addEventListener('click', () => {displayVariable += '5'; resultsBox.textContent = displayVariable});

const sixBtn = document.querySelector('#six');
sixBtn.addEventListener('click', () => {displayVariable += '6'; resultsBox.textContent = displayVariable});

const sevenBtn = document.querySelector('#seven');
sevenBtn.addEventListener('click', () => {displayVariable += '7'; resultsBox.textContent = displayVariable});

const eightBtn = document.querySelector('#eight');
eightBtn.addEventListener('click', () => {displayVariable += '8'; resultsBox.textContent = displayVariable;});

const nineBtn = document.querySelector('#nine');
nineBtn.addEventListener('click', () => {displayVariable += '9'; resultsBox.textContent = displayVariable;});

const zeroBtn = document.querySelector('#zero');
zeroBtn.addEventListener('click', () => {displayVariable += '0'; resultsBox.textContent = displayVariable});