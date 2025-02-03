const {
  isPrime,
  isPerfect,
  isArmstrong,
  digitSum,
} = require("../services/numberUtils");
const { getFunFact } = require("../services/funFactService");

const classifyNumber = async (req, res) => {
  const number = parseInt(req.query.number, 10);
  if (isNaN(number)) {
    return res.status(400).json({ number: req.query.number, error: true });
  }

  const prime = isPrime(parsedNumber);
  const perfect = isPerfect(number);
  const armstrong = isArmstrong(number);
  const parity = number % 2 === 0 ? "even" : "odd";

  let properties = [];
  if (prime) {
    properties.push("prime");
  }
  if (perfect) {
    properties.push("perfect");
  }
  if (armstrong) {
    properties.push("armstrong");
  }

  // Add parity (odd/even)
  properties.push(parity);
  const sum = digitSum(number);

  return res.status(200).json({
    number,
    is_prime: prime,
    is_perfect: perfect,
    properties: properties,
    digit_sum: sum,
    fun_fact: await getFunFact(number),
  });
};

module.exports = { classifyNumber };
