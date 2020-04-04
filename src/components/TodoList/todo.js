import React from "react";
import {Todoinput} from "./index.js";
import {Footer} from "./footer.js";
import "./index.css";

class Todos extends React.Component {
  constructor(props){
    super(props);
    this.count=0;
    this.state={
      todoList:[],
      todo:[]
    };
  }
  inputText=(event)=>{
    if(event.keyCode===13 && event.target.value!==''){
      const copyTodoList=this.state.todo.slice(0);
      const object={
        id:this.count,
        text:event.target.value,
        status:false
      };
      event.target.value='';
      copyTodoList.push(object);
      this.count+=1;
        this.setState({
            todoList:copyTodoList,
            todo:copyTodoList
        });
    }
  }
  addTodo=()=>{
      const maps = this.state.todoList.map((item)=>
        <Todoinput key={item.id} id={item.id} text={item.text} value={this.value} checks={this.checkBox} status={item.status} remove={this.remove} />);
      return maps;
  }
  value=(event)=>{
    const copyTodoList=this.state.todo.slice(0);
    const checkId=event.target.id;
    copyTodoList.forEach(item=>{
    if(item.id===parseInt(checkId)){
      item.text=event.target.value;
    }
  });
  this.setState({todoList:copyTodoList,todo:copyTodoList});
  }
  
  checkBox=(event)=>{
    const copyTodoList=this.state.todo.slice(0);
    const checkId=event.target.id;
    copyTodoList.forEach(item=>{
    if(item.id===parseInt(checkId)){
      item.status=!(item.status);
      this.count=(item.status)? this.count-=1:this.count+=1;
    }
  });
  this.setState({todoList:copyTodoList,todo:copyTodoList});
  }
   
  remove=(event)=>{
    const copyTodoList=this.state.todo.slice(0);
    const removeId=event.target.id;
    this.count -=1;
    copyTodoList.forEach((item,index)=>{
    if(item.id===parseInt(removeId)) copyTodoList.splice(index,1);
  });
    this.setState({todoList:copyTodoList,todo:copyTodoList});
  }
  
  allItem=()=>{
    const display=this.state.todo.filter((item)=>item);
    this.setState({todoList:display});
  }
  
  active=()=>{
    const display=this.state.todo.filter((item)=>(!item.status));
    this.setState({todoList:display});
  }
  
  completed=()=>{
    const display=this.state.todo.filter((item)=>(item.status));
    this.setState({todoList:display});
  }
  
  allClear=()=>{
    const display=this.state.todo.filter((item,index)=>(!item.status));
    this.setState({todoList:display,todo:display});
  }
  
  render(){
  return (
    <div class="total-list">
      <p class="backgroundText">todos</p>
      <div class="todo-list-page">
        <div id="main">
            <input onKeyDown={this.inputText}  type="text" class="input" placeholder="Type something" />
        </div>
        {this.addTodo()}
        <Footer value={this.count} allItems={this.allItem} active={this.active} completed={this.completed} allClear={this.allClear}/>
      </div>
    </div>
  );
}
}
export {Todos};