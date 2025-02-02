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

    // Enhanced validation: Allow integers in any format (including negatives and decimals)
    const parsed = parseFloat(number);
    if (isNaN(parsed) || !Number.isInteger(parsed)) {
      return res.status(400).json({
        number: number,
        error: true,
      });
    }

    const num = parseInt(number);

    // Calculate properties
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    // Create response
    const response = {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum(num),
      fun_fact: await getFunFact(num),
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { classifyNumber };
