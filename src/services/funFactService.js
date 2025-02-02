const axios = require("axios");

const getFunFact = async (num) => {
  try {
    const response = await axios.get(
      `http://numbersapi.com/${Math.abs(num)}/math?json`
    );
    return response.data.text || "No fun fact available";
  } catch (error) {
    console.error("Error fetching fun fact:", error);
    return "No fun fact available";
  }
};

module.exports = { getFunFact };
