const express = require("express");
const { Cat } = require("./models/cat");

const app = express();

app.use(express.json());

app.post("/cats", async (req, res) => {
  await Cat.create(req.body);
  res.status(201).json(req.body);
});

app.get("/cats", async (req, res) => {
  const cats = await Cat.findAll();
  //const cats = await Cat.findAll({ where: req.query })
  res.status(200).json(cats);
});

app.get("/cats/:catId", async (req, res) => {
  const cats = await Cat.findByPk(req.params.catId);
  res.status(200).json(cats);
});

app.patch("/cats/:catId", async (req, res) => {
  const cats = await Cat.update(req.body, { where: { id: req.params.catId } });
  res.status(200).json(cats);
});

module.exports = app;
