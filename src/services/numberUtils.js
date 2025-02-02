exports.isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

exports.isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i + (i !== num / i ? num / i : 0);
    }
  }
  return sum === num && num !== 1;
};

exports.getDigitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
};

exports.getNumberProperties = (num) => {
  const isArmstrong =
    num
      .toString()
      .split("")
      .reduce(
        (sum, digit) => sum + Math.pow(parseInt(digit), num.toString().length),
        0
      ) === num;
  return [
    isArmstrong ? "armstrong" : null,
    num % 2 === 0 ? "even" : "odd",
  ].filter(Boolean);
};
