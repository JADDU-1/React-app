import React from 'react';
import {Todoinput} from "./index";
//import {Footer} from "./components/TodoList/footer";
class TodoWorking extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }
    
    render(){
        return(
            <div class='addUserInputClass'>
                <input type="checkBox" className = 'checkClass'/>
                <input type='text'className = 'textClass'/>
                <button className = 'closeClass'>X</button>
            </div>
            );
    }
}
export {TodoWorking};
//  value={Todoinput.value}