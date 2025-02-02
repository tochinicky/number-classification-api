const {
  isArmstrong,
  isPrime,
  isPerfect,
  digitSum,
} = require("../services/numberUtils");

const classifyNumber = (req, res) => {
  const { number } = req.query;

  // Check for valid number input
  const num = parseInt(number, 10);
  if (isNaN(num)) {
    return res.status(400).json({
      number: number,
      error: true,
      message: "Invalid input. Please provide a valid number.",
    });
  }

  const properties = [];

  // Check classifications
  if (isArmstrong(num)) properties.push("armstrong");
  if (isPrime(num)) properties.push("prime");
  if (isPerfect(num)) properties.push("perfect");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  // Prepare fun fact
  const funFact = `The number ${num} is classified as ${properties.join(
    ", "
  )}.`;

  return res.status(200).json({
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: properties,
    digit_sum: digitSum(num),
    fun_fact: funFact,
  });
};

module.exports = { classifyNumber };
