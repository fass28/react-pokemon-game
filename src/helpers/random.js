const getRandomNumbers = (amountNumbers, bottomRange, topRange) => {
  let randomNumbers = []

  while (randomNumbers.length < amountNumbers) {
    let randomNum = Math.floor(Math.random() * (topRange - bottomRange + 1)) + bottomRange;
    if (!randomNumbers.includes(randomNum)) {
      randomNumbers.push(randomNum)
    }
  }
  return randomNumbers
}

export {
  getRandomNumbers
}
