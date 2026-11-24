import { test, describe } from "node:test";
import assert from "node:assert/strict";
import {
  tensAndOnesPlace,
  regroup,
  calculateSolution,
  generateSubtractionProblem,
} from "./math-engine.js";

describe("Place Value & Regrouping", () => {
  test("tensAndOnesPlace splits two-digit and single-digit numbers", () => {
    assert.deepEqual(tensAndOnesPlace(47), { tens: 4, ones: 7 });
    assert.deepEqual(tensAndOnesPlace(8), { tens: 0, ones: 8 });
  });

  test("regroup borrows 1 ten for 10 ones", () => {
    assert.deepEqual(regroup(42), {
      originalTens: 4,
      originalOnes: 2,
      regroupedTens: 3,
      regroupedOnes: 12,
    });
  });

  test("regroup throws an error when number is less than 10", () => {
    assert.throws(() => regroup(9), {
      message: /Cannot reegroup a number with no tens/, // Note: matches your current typo in math-engine.js
    });
  });
});

describe("Worked Solution (calculateSolution)", () => {
  test("solves subtraction without regrouping", () => {
    const result = calculateSolution(58, 23);
    assert.equal(result.answer, 35);
    assert.equal(result.requiresRegrouping, false);
    assert.equal(result.steps.length, 4); // start, subtract-tens, answer
  });

  test("solves subtraction with regrouping and includes exchange step", () => {
    const result = calculateSolution(52, 18);
    assert.equal(result.answer, 34);
    assert.equal(result.requiresRegrouping, true);
    assert.equal(result.steps[1].type, "exchange");
    assert.equal(result.steps[1].tens, 4);
    assert.equal(result.steps[1].ones, 12);
  });
});

describe("Problem Generation", () => {
  test("generates valid problems when regrouping is required", () => {
    for (let i = 0; i < 50; i++) {
      const problem = generateSubtractionProblem({ regrouping: "required" });
      assert.equal(problem.requiresRegrouping, true);
      assert.ok(problem.firstNumber >= problem.secondNumber);
      assert.equal(problem.answer, problem.firstNumber - problem.secondNumber);
    }
  });

  test("generates valid problems when regrouping is forbidden", () => {
    for (let i = 0; i < 50; i++) {
      const problem = generateSubtractionProblem({ regrouping: "forbidden" });
      assert.equal(problem.requiresRegrouping, false);
      assert.ok(problem.firstNumber >= problem.secondNumber);
    }
  });

  test("throws error on invalid regrouping mode", () => {
    assert.throws(() => generateSubtractionProblem({ regrouping: "invalid" }), {
      message: /Invalid regrouping mode/,
    });
  });
});

describe("Specific Problem Cases (calculateSolution)", () => {
  const testCases = [
    {
      firstNumber: 64,
      secondNumber: 38,
      expectedAnswer: 26,
      expectedRegrouping: true,
    },
    {
      firstNumber: 52,
      secondNumber: 27,
      expectedAnswer: 25,
      expectedRegrouping: true,
    },
    {
      firstNumber: 70,
      secondNumber: 46,
      expectedAnswer: 24,
      expectedRegrouping: true,
    },
    {
      firstNumber: 83,
      secondNumber: 21,
      expectedAnswer: 62,
      expectedRegrouping: false,
    },
    {
      firstNumber: 50,
      secondNumber: 50,
      expectedAnswer: 0,
      expectedRegrouping: false,
    },
    {
      firstNumber: 42,
      secondNumber: 9,
      expectedAnswer: 33,
      expectedRegrouping: true,
    },
  ];

  for (const {
    firstNumber,
    secondNumber,
    expectedAnswer,
    expectedRegrouping,
  } of testCases) {
    test(`${firstNumber} − ${secondNumber} = ${expectedAnswer} (Regrouping: ${expectedRegrouping ? "Yes" : "No"})`, () => {
      const result = calculateSolution(firstNumber, secondNumber);

      // 1. Check final answer and regrouping flag
      assert.equal(result.answer, expectedAnswer);
      assert.equal(result.requiresRegrouping, expectedRegrouping);

      // 2. Check that the exchange step appears if and only if regrouping is required
      const hasExchangeStep = result.steps.some(
        (step) => step.type === "exchange",
      );
      assert.equal(hasExchangeStep, expectedRegrouping);

      // 3. Check that the final step's tens and ones match the expected answer
      const finalStep = result.steps.at(-1);
      assert.equal(finalStep.tens, Math.floor(expectedAnswer / 10));
      assert.equal(finalStep.ones, expectedAnswer % 10);
    });
  }
});
