function isOdd(number) {
  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
let number = 11;
let resultOdd = isOdd(number);
if (resultOdd) {
  console.log(`${number} is odd`);
} else {
  console.log(`${number} is even`);
}

console.log(`${isOdd(10)}`);

function squareOrDouble(number) {
  if (resultOdd) {
    console.log(number ** 2);
  } else {
    console.log(number * 2);
  }
}
squareOrDouble(number);
