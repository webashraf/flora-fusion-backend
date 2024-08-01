import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router();

router.get("/", categoryController.getAllCategory);
router.put("/:id", categoryController.updateCategory);

export const categoryRoute = router;
