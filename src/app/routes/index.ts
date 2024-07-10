import express from "express";
import { productsRoute } from "../modules/Products/products.routes";
import { userRoutes } from "../modules/user/user.routes";

const router = express.Router();

const allRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/products",
    route: productsRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
