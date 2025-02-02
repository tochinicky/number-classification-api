const {
  isPrime,
  isPerfect,
  getNumberProperties,
  getDigitSum,
} = require("../services/numberUtils");
const { getFunFact } = require("../services/funFactService");

exports.classifyNumber = async (req, res) => {
  const number = parseInt(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({ number: req.query.number, error: true });
  }

  const properties = getNumberProperties(number);
  const digitSum = getDigitSum(number);
  const funFact = await getFunFact(number);

  res.json({
    number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: digitSum,
    fun_fact: funFact,
  });
};
