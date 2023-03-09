console.log('functions.js');

function addNums(num1=1, num2=1){
    return num1+num2;
}

// arrow function
const subNums = (num1=1, num2=1) => {
    return num1-num2;
}

// one line arrow function
const multiplyNums = (num1=1, num2=1) => num1*num2;

const divideNums = num1 => num1/4;

// takes defaults
console.log(addNums());
console.log(subNums());
console.log(multiplyNums());
console.log(divideNums());


// overrides defaults
console.log(addNums(8,4));
console.log(subNums(8,4));
console.log(multiplyNums(8,4));
console.log(divideNums(8));


// TODO look up lexical THIS