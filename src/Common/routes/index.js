import React from "react";
import { Route } from "react-router-dom";
import { PracticeAdvancedConceptsRoute } from "./practiceAdvancedConceptsRoute";
import { PRACTICE_ADVANCED_CONCEPTS } from "../../constants/RouteConstants";

const PracticeAdvancedConceptRoutes = [
  <Route
    key={PRACTICE_ADVANCED_CONCEPTS}
    path={PRACTICE_ADVANCED_CONCEPTS}
    component={PracticeAdvancedConceptsRoute}
  />,
];

export default PracticeAdvancedConceptRoutes;
