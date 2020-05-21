import React from "react";
import { Link, Redirect } from "react-router-dom";
import { PRODUCT_PATH } from "./Products/constants/RouteConstants";
import { ACCESS_TOKEN, getCookie, getAccessToken } from "./utils/StorageUtils";
import { PRACTICE_ADVANCED_CONCEPTS } from "./constants/RouteConstants";

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/car">Cars App</Link>
            </li>
            <li>
              <Link to="/todo">Todos App</Link>
            </li>
            <li>
              <Link to="/form">Form components</Link>
            </li>
            <li>
              <Link to="/country">Countries List</Link>
            </li>
            <li>
              <Link to="/emojigame">Emoji Game</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/mobxtodos">MObx Todos</Link>
            </li>
            <li>
              <Link to="/events-app">Event Page</Link>
            </li>
            <li>
              <Link to="/gridGame">Grid Memory Game</Link>
            </li>
            <li>
              <Link to="/mobxTodoApi">Mobx TodoApp API</Link>
            </li>
            <li>
              <Link to={PRODUCT_PATH}>E-Commerse</Link>
            </li>
            <li>
              <Link to={PRACTICE_ADVANCED_CONCEPTS}>
                PracticeAdvancedConceptsRoute
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export { Home };
