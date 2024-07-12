import { Router } from "express";
import { productsController } from "./products.controller";

const router = Router();

router.patch("/:treeId", productsController.updateTree);
router.get("/", productsController.getAllTrees);

export const productsRoute = router;
