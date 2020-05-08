import React from "react";
import { Route } from "react-router-dom";
import {
  PRODUCT_PATH
} from "../constants/RouteConstants";
import ProductRouts from "./productRouts";
import ProtectedRoute from "../../components/ProtectorRoute"

const ProductRoutes = [
  <ProtectedRoute key={PRODUCT_PATH} path={PRODUCT_PATH} component={ProductRouts} />
];

export default ProductRoutes;
