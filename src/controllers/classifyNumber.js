const {
  isPrime,
  isPerfect,
  isArmstrong,
  digitSum,
} = require("../services/numberUtils");
const { getFunFact } = require("../services/funFactService");

const classifyNumber = async (req, res) => {
  //   try {
  //     const { number } = req.query;

  //     // Validate input (accepts integers in any format)
  //     const parsed = Number(number);
  //     if (isNaN(parsed) || !Number.isInteger(parsed)) {
  //       return res.status(400).json({ number, error: true });
  //     }

  //     const num = parsed;

  //     // Calculate properties
  //     // Ensure properties array matches the required combinations
  //     const properties = [];
  //     if (isArmstrong(num)) {
  //       properties.push("armstrong");
  //       properties.push(num % 2 === 0 ? "even" : "odd");
  //     } else {
  //       properties.push(num % 2 === 0 ? "even" : "odd");
  //     }

  //     // Build response
  //     const response = {
  //       number: num,
  //       is_prime: isPrime(Math.abs(num)),
  //       is_perfect: isPerfect(Math.abs(num)),
  //       properties,
  //       digit_sum: digitSum(num),
  //       fun_fact: await getFunFact(num),
  //     };

  //     res.status(200).json(response);
  //   } catch (error) {
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  const number = parseInt(req.query.number);
  if (isNaN(number)) {
    return res.status(400).json({ number: req.query.number, error: true });
  }

  const properties = [];
  if (isArmstrong(number)) {
    properties.push("armstrong");
  }
  properties.push(number % 2 === 0 ? "even" : "odd");

  try {
    //const response = await axios.get(`http://numbersapi.com/${number}/math`);
    res.json({
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties,
      digit_sum: digitSum(number),
      fun_fact: await getFunFact(number),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fun fact" });
  }
};

module.exports = { classifyNumber };
