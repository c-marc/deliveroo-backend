const express = require("express");
const router = express.Router();

const fetchMockedDeliveroo = require("../services/mocked_api");
const translate = require("../utils/translate");

router.get("/bonus", async (req, res) => {
  try {
    let result = await fetchMockedDeliveroo();
    // console.log(result);
    result = translate(result);
    // console.log(result);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
