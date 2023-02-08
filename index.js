const lang = require("./dataLang");
const cors = require("cors");

const express = require("express");
const app = express();
const port = 2929;

app.use(cors());

app.get("/lang/get", (req, res) => {
  var details = lang.lang.filter((item) => {
    return item.code.trim() === req.query.code.trim();
  });

  if (details.length) {
    res.json(details[0]);
  } else {
    res.json({ err: "no data" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
