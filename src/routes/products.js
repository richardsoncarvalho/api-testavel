import { Router } from "express";
import ProductController from "controllers/products";

const router = Router();

router.get("/", ProductController.handle);

export default router;
