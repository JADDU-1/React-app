import React from "react";
import {
  Link
} from "react-router-dom";

class Home extends React.Component{
    render(){
    return(
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
        <Link to="/mobxtodos">MObxTodos</Link>
        </li>
    </ul>
</nav>
</div>
)
}
}
export{Home}
