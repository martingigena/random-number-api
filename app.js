const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("index page");
});

app.get("/random/:initNumber/:endNumber", (req, res) => {
  const min = parseInt(req.params.initNumber);
  const max = parseInt(req.params.endNumber);

  if (isNaN(min) || isNaN(max)) {
    res.status(404);
    res.json({ error: "Bad Request" });
    return;
  }
  const random = Math.floor(Math.random() * (max - min) + min);

  res.json({ randomNumber: random });
});

app.post("/", (req, res) => {
  res.send("Guardando");
});

app.put("/", (req, res) => {
  res.send("Actualizando");
});

app.delete("/", (req, res) => {
  res.send("Eliminando");
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
