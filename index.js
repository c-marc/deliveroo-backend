const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());

const defaultRoute = require("./routes/default");
const bonusRoute = require("./routes/bonus");

app.use(defaultRoute);
app.use(bonusRoute);

app.all("*", async (req, res) => {
  return res.status(404).json({ message: "Not found" });
});

// Northflank va nous fournir une variable process.env.PORT
app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
