/*



*/

function pickANumber(numberLowerLimit, numberUpperLimit) {
  return (
    Math.floor(Math.random() * (numberUpperLimit - numberLowerLimit + 1)) +
    numberLowerLimit
  );
}

function pickASubtractionRegroupingNumber(firstNumber) {
  const firstOnesPlace = firstNumber % 10;
  const firstTensPlace = Math.floor(firstNumber / 10);
  const secondOnesPlace = pickANumber(firstOnesPlace + 1, 9);
  const secondTensPlace = pickANumber(1, firstTensPlace - 1);
  return secondTensPlace * 10 + secondOnesPlace;
}

function pickASubtractionNonRegroupingNumber(firstNumber) {
  const firstOnesPlace = firstNumber % 10;
  const firstTensPlace = Math.floor(firstNumber / 10);
  const secondOnesPlace = pickANumber(0, firstOnesPlace);
  const secondTensPlace = pickANumber(0, firstTensPlace);
  return secondTensPlace * 10 + secondOnesPlace;
}

function generateSubtractionProblem(regrouping = true) {
  if (regrouping) {
    const tens = pickANumber(2, 9);
    const ones = pickANumber(0, 8);
    const firstNumber = tens * 10 + ones;
    const secondNumber = pickASubtractionRegroupingNumber(firstNumber);
    return { firstNumber, secondNumber };
  } else {
    const firstNumber = pickANumber(11, 99);
    const secondNumber = pickASubtractionNonRegroupingNumber(firstNumber);
    return { firstNumber, secondNumber };
  }
}

export async function main() {
  // Main function implementation

  const problem = generateSubtractionProblem(false);
  const firstNumber = problem.firstNumber;
  const secondNumber = problem.secondNumber;

  const answer = firstNumber - secondNumber;

  console.log(firstNumber, secondNumber, answer);
}

main();
