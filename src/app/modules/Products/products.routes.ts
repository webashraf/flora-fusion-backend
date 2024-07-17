import { Router } from "express";
import { productsController } from "./products.controller";

const router = Router();

router.post("/add-product", productsController.createProduct);
router.patch("/:treeId", productsController.updateTree);
router.get("/:treeId", productsController.getSingleTree);
router.get("/", productsController.getAllTrees);

export const productsRoute = router;
