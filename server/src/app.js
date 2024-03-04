const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");
const calculatorRouter = require("./routers/calculatorData");

app.use(cors());
app.use(express.json());
app.use(calculatorRouter);

app.get("/", (req, res) => {
  res.send("hello from the server");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
