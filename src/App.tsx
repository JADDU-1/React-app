import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {observer} from 'mobx-react';

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
import CounterPage from './components/CounterPage/index.js';
import themeStore from './stores/themeStore';
import {Counter} from "./components/CounterPage/counter.js";
//import {configure} from 'mobx';
import {Todo} from "./components/MobxTodo/todoDashboard.js";
import EventApp from './components/EventPage/EventApp/index';
import GridMemoryGame from './components/GridGameApp/gridMemoryGame';

@observer
class App extends React.Component{
  
  getCurrentTheme=()=>{
    return themeStore.selectedTheme;
  }
  mode={
    light: {
            id: "0",
            background: "#fff",
            text:"Light Mode",
            textColor:"black",
            cardColor:"white",
            emojisBackground:"#e2e8f0;",
            gridGameBackground:"#fff"
        },
    dark: {
            id: "1",
            background: "#2b3945",
            text:"Dark Mode",
            textColor:"white",
            cardColor:"#2b6cb0",
            emojisBackground:"#1a202c",
            gridGameBackground:"#1a202c"
        }
  }
  
  setCurrentTheme=(theme)=>{
    themeStore.setCurrentTheme();
  }
    render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
        <Route path="/counter-page">
          <CounterPage />
          </Route>
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
          <CountriesDashboard themeObject={this.mode[this.getCurrentTheme()]} change={this.setCurrentTheme} />
          </Route>
          <Router path="/countryCard" children={<CountryCard themeObject={this.mode[this.getCurrentTheme()]} change={this.setCurrentTheme}/>}/>
          <Route path="/emojigame">
          <EmojiDashboard themeObject={this.mode[this.getCurrentTheme()]}  change={this.setCurrentTheme}/>
          </Route>
          <Route path="/counter">
           <Counter/>
          </Route>
          <Route path="/mobxtodos">
          <Todo />
          </Route>
          <Route path='/events-app'>
          <EventApp />
          </Route>
          <Route path="/gridGame">
            <GridMemoryGame themeObject={this.mode[this.getCurrentTheme()]} changeTheme={this.setCurrentTheme}/>
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

