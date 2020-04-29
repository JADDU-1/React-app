import React from "react";
import { Route } from "react-router-dom";
import {
  PRODUCT_PATH
} from "../constants/RouteConstants";
import ProductPage from "../components/ProductPage";

const ProductRoutes = [
  <Route key={PRODUCT_PATH} path={PRODUCT_PATH} component={ProductPage} />
];

export default ProductRoutes;