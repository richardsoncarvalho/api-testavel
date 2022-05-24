"use strict";

import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("Lançado o Erro");
});

app.get("/products", (req, res) => {
  return res.json([
    {
      name: "Default product",
      description: "product description",
      price: 100,
    },
  ]);
});

export default app;
