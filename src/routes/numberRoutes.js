const express = require("express");
const router = express.Router();
const { classifyNumber } = require("../controllers/classifyNumber");

// Define API route
router.get("/classify-number", classifyNumber);

module.exports = router;
