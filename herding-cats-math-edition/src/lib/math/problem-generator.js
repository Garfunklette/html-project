// problem-generator.js
import { calculateSolution } from "./regrouping.js";

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

  if (validProblems.length === 0) {
    throw new Error("No problems match the requested constraints.");
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
