import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Greeting} from "./greeting.js";
import {Favourite} from "./favourite.js";
import {Visited} from "./visited.js";
import {YourState} from "./yourState.js";
import {DisableButton} from "./disableButton.js";


export default function AllComponents() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/greetings">Greetings</Link>
            </li>
            <li>
            <Link to="/favourite">Favourite Dessert</Link>
            </li>
            <li>
            <Link to="/visited">Visited Cities</Link>
            </li>
            <li>
            <Link to="/state">Your State</Link>
            </li>
            <li>
            <Link to="/disableButton">Disable Button</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/greetings">
            <Greeting />
          </Route>
          <Route path="/favourite">
            <Favourite items={['Vanilla','Butterscotch','Gulab Jamum','Yoghurt Pots','Backed Banana','Chocolate']}/>
          </Route>
          <Route path="/visited">
            <Visited cities={['Hyderabad','Chennai','Banglore','Pune','Mumbai','Delhi']}/>
          </Route>
          <Route path="/state">
          <YourState states={['Andhra Pradesh','Telangana','Tamil Nadu','Kerala','Karnataka','Haryana']}/>
          </Route>
          <Route path="/disableButton">
          <DisableButton />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export{AllComponents};
