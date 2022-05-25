import { Router } from "express";
import productsRoute from "~/routes/products";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

router.use("/products", productsRoute);

export default router;
