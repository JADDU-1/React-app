import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Carslist} from "./components/CarsList/index.js";
import {Todos} from "./components/TodoList/todo.js";
import {AllComponents} from "./components/FormComponents/allComponents.js";
import {CountriesDashboard} from "./components/CountriesList/countriesDashboard.js";
import {EmojiDashboard} from "./components/EmojiGame/emojiDashboard.js";
import "./components/CarsList/index.css";
import "./components/TodoList/index.css";
import "./components/CountriesList/index.css";
import {Home} from "./home.js";
import CountryCard from './components/CountriesList/countryCard.js';

class App extends React.Component{
  mode={
    light: {
            id: "0",
            background: "#fff",
            text:"Light Mode",
            textColor:"black",
            cardColor:"white",
            emojisBackground:"#e2e8f0;"
        },
    dark: {
            id: "1",
            background: "#2b3945",
            text:"Dark Mode",
            textColor:"white",
            cardColor:"#2b6cb0",
            emojisBackground:"#1a202c"
        }
  }
  state={
    changeTheme:"light"
  }
   theme=(event)=>{
        if(this.state.changeTheme==="light"){
            this.setState({changeTheme:"dark"});
        }
        else{
          this.setState({changeTheme:"light"});
        }
     
    }
    render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route path="/car">
          <Carslist />
          </Route>
          <Route path="/todo">
          <Todos />
          </Route>
          <Route path="/form">
          <AllComponents />
          </Route>
          <Route path="/country">
          <CountriesDashboard themeObject={this.mode[this.state.changeTheme]}change={this.theme} />
          </Route>
          <Router path="/countryCard" children={<CountryCard themeObject={this.mode[this.state.changeTheme]}change={this.theme}/>}/>
          <Route path="/emojigame">
          <EmojiDashboard themeObject={this.mode[this.state.changeTheme]} change={this.theme}/>
          </Route>
          <Route path='/'>
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}
export{App}

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;



