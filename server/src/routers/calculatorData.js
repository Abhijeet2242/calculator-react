const express = require("express");
const router = new express.Router();
const data = require("../model/data");

router.post("/data", async (req, res) => {
  try {
    const calculatorData = new data(req.body);
    const createData = await calculatorData.save();
    res.status(201).send(createData);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/data", async (req, res) => {
  try {
    const calData = await data.find();
    res.status(200).send(calData);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
