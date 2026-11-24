/*



*/

export function pickANumber(numberLowerLimit, numberUpperLimit) {
  return (
    Math.floor(Math.random() * (numberUpperLimit - numberLowerLimit + 1)) +
    numberLowerLimit
  );
}

export async function main() {
  // Main function implementation

  const firstNumber = pickANumber(11, 99);
  const secondNumberLowerLimit = Math.floor(firstNumber / 10) * 10;
  const secondNumber = pickANumber(
    secondNumberLowerLimit,
    secondNumberLowerLimit + 9,
  );
  let answer = firstNumber - secondNumber;

  console.log(firstNumber, secondNumber, answer);
}
