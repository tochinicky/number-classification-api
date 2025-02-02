const {
  isPrime,
  isPerfect,
  isArmstrong,
  digitSum,
} = require("../services/numberUtils");
const { getFunFact } = require("../services/funFactService");

const classifyNumber = async (req, res) => {
  try {
    const { number } = req.query;

    // Validate input (accepts integers in any format)
    const parsed = Number(number);
    if (isNaN(parsed) || !Number.isInteger(parsed)) {
      return res.status(400).json({ number, error: true });
    }

    const num = parsed;

    // Calculate properties
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(Math.abs(num) % 2 === 0 ? "even" : "odd");

    // Build response
    const response = {
      number: num,
      is_prime: isPrime(Math.abs(num)), // Primes are absolute
      is_perfect: isPerfect(Math.abs(num)), // Perfect numbers are positive
      properties,
      digit_sum: digitSum(num),
      fun_fact: await getFunFact(num),
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { classifyNumber };
