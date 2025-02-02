const axios = require("axios");

exports.getFunFact = async (num) => {
  try {
    const response = await axios.get(
      `http://numbersapi.com/${Math.abs(num)}/math`
    );
    return response.data;
  } catch (error) {
    return "Fun fact not available";
  }
};
