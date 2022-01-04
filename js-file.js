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

console.log(divide(10, 2, 3))