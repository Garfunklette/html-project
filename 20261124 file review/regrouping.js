//regrouping.js

// -----------Place Value ----------

/** @param {number} number   */
export function tensAndOnesPlace(number) {
  return {
    tens: Math.floor(number / 10),
    ones: number % 10,
  };
}

// -----------Regrouping ----------

/** @param {number} number   */
export function regroup(number) {
  const { tens, ones } = tensAndOnesPlace(number);
  if (tens < 1) {
    throw new Error("Cannot reegroup a number with no tens.");
  }
  return {
    originalTens: tens,
    originalOnes: ones,
    regroupedTens: tens - 1,
    regroupedOnes: ones + 10,
  };
}

// -----------Worked Solution ----------

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 */
export function calculateSolution(firstNumber, secondNumber) {
  const first = tensAndOnesPlace(firstNumber);
  const second = tensAndOnesPlace(secondNumber);

  const requiresRegrouping = first.ones < second.ones;

  let workingTens = first.tens;
  let workingOnes = first.ones;

  const steps = [
    {
      type: "start",
      description: `Start with ${first.tens} tens and ${first.ones} ones.`,
      tens: workingTens,
      ones: workingOnes,
    },
  ];

  if (requiresRegrouping) {
    workingTens -= 1;
    workingOnes += 10;
    steps.push({
      type: "exchange",
      description: `Exchange 1 ten for 10 ones. Now there are ${workingTens} tens and ${workingOnes} ones.`,
      tens: workingTens,
      ones: workingOnes,
    });
  }

  const remainingOnes = workingOnes - second.ones;
  const remainingTens = workingTens - second.tens;

  steps.push({
    type: "subtract-ones",
    description: `Subtract ${second.ones} ones. ${workingOnes} - ${second.ones} = ${remainingOnes}.`,
    tens: workingTens,
    ones: remainingOnes,
  });

  steps.push({
    type: "subtract-tens",
    description: `Subtract ${second.tens} tens. ${workingTens} - ${second.tens} = ${remainingTens}.`,
    tens: remainingTens,
    ones: remainingOnes,
  });

  const answer = firstNumber - secondNumber;

  steps.push({
    type: "answer",
    description: `The answer is ${answer}.`,
    tens: remainingTens,
    ones: remainingOnes,
  });

  return {
    answer,
    requiresRegrouping,
    steps,
  };
}
