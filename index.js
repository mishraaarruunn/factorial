let input = prompt('Please enter the number for which you want Factorial', '2/3/4/108');

// alert(factorialByLoop(parseInt(input)));

alert(factorialRecursive(parseInt(input)));

function factorialByLoop(num) {
    let result = 1;

    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(num) {
    return num > 1 ? num * factorialRecursive(num - 1) : 1;
}