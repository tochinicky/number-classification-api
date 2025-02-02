const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  if (num <= 1) return false;
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

const isArmstrong = (num) => {
  const str = Math.abs(num).toString();
  const power = str.length;

  // Exclude single-digit numbers from Armstrong classification
  if (power === 1) return false;

  return (
    num ===
    str
      .split("")
      .reduce((sum, digit) => sum + Math.pow(parseInt(digit), power), 0)
  );
};

const digitSum = (num) => {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
};

module.exports = { isPrime, isPerfect, isArmstrong, digitSum };
