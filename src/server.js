require("dotenv").config();
const express = require("express");
const cors = require("cors");
const numberRoutes = require("./routes/numberRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", numberRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
