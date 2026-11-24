/*
- [x] Implement problem generation for non-negative answers.
- [x] Support subtraction with and without regrouping.
- [x] Add a mode that specifically generates regrouping problems.
- [x] Track tens and ones separately.
- [ ] Represent the exchange of one ten for ten ones explicitly.
- [ ] Calculate and expose each step of a worked solution.
- [ ] Add difficulty settings and problem constraints.
- [ ] Add automated tests for arithmetic, regrouping, and edge cases.
*/

// -----------Place Value ----------

export function tensAndOnesPlace(number) {
  return {
    tens: Math.floor(number / 10),
    ones: number % 10,
  };
}

// -----------Regrouping ----------

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

// -----------Problem Generation ----------

export function generateSubtractionProblem({
  minMinuend = 10,
  maxMinuend = 99,
  minSubtrahend = 10,
  maxSubtrahend = 99,
  regrouping = "either",
} = {}) {
  if (!["required", "forbidden", "either"].includes(regrouping)) {
    throw new Error(
      "Invalid regrouping mode. Must be 'required', 'forbidden', or 'either'.",
    );
  }

  const validProblems = [];

  for (let firstNumber = minMinuend; firstNumber <= maxMinuend; firstNumber++) {
    for (
      let secondNumber = minSubtrahend;
      secondNumber <= maxSubtrahend;
      secondNumber++
    ) {
      if (secondNumber > firstNumber) continue; // Ensure non-negative answers

      const requiresRegrouping = firstNumber % 10 < secondNumber % 10;

      if (regrouping === "required" && !requiresRegrouping) continue; // Skip problems that don't match the regrouping requirement
      if (regrouping === "forbidden" && requiresRegrouping) continue; // Skip problems that don't match the regrouping requirement

      validProblems.push({ firstNumber, secondNumber });
    }
  }

  const selected =
    validProblems[Math.floor(Math.random() * validProblems.length)];

  const solution = calculateSolution(
    selected.firstNumber,
    selected.secondNumber,
  );

  return {
    ...selected,
    ...solution,
  };
}

function testProblemGeneration() {
  const problem1 = generateSubtractionProblem({ regrouping: "required" });
  calculateSolution(problem1.firstNumber, problem1.secondNumber);
}
