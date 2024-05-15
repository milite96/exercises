function sumUntil(maxValue) {
  let result = 0;
  for (let i = 0; i <= maxValue; i++) {
    result += i;
    // result = result + i; y lo de arriba es lo mismo
  } return result; 
}

console.log(sumUntil(5));
