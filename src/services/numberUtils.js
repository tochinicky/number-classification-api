// Helper functions
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const digitSum = (num) => {
  // Convert to string and remove any negative sign
  const absNumStr = Math.abs(num).toString();
  // Calculate the sum of digits
  return absNumStr.split("").reduce((acc, digit) => acc + Number(digit), 0);
};

const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};
const isPerfect = (num) => {
  if (num < 1) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

module.exports = { isPrime, isPerfect, isArmstrong, digitSum };
