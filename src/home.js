import React from "react";
import {
  Link,Redirect
} from "react-router-dom";
import {ACCESS_TOKEN,getCookie} from './utils/StorageUtils'

class Home extends React.Component{
    goToLoinPage=()=><Redirect to={{pathname:'/signin'}}/>
    goToProductPage=()=><Redirect to={{pathname:'/productpage'}}/>
    render(){
        const{goToLoinPage,goToProductPage}=this;
      return  (getCookie(ACCESS_TOKEN===undefined)?goToLoinPage():goToProductPage());
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
        <Link to="/signin">E-Commerse</Link>
        </li>
    </ul>
</nav>
</div>
)
}
}
export{Home}
