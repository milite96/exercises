function randomNumbers(maxDigits) {
    const randomNumber = Math.random();
    const randomLimitedNumber = randomNumber.toFixed(maxDigits);
    console.log(randomLimitedNumber);
}

export default randomNumbers;