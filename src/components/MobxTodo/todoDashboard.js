import React from "react";
import {Todoinput} from "./userInput.js";
import {Footer} from "./footer.js";
import { observer} from 'mobx-react';
import {observable,action,computed} from 'mobx';
import {TodoPage,TitleText,UserInput} from'./css.js';
//import './index.css';



@observer
class Todo extends React.Component {
 @observable todos=[]
 @observable selectedFilter="All"
 count=0
 
 @action.bound
  onAddTodo(event){
    if(event.keyCode===13 && event.target.value!==''){
      const object={
        id:this.count+=1,
        text:event.target.value,
        status:false
      };
      this.todos.push(object);
      event.target.value='';
    }
  }
  
  addTodo(){
    if(this.selectedFilter==="All"){
      const maps = this.todos.map((item)=>
        <Todoinput key={item.id} object={item} checks={this.onCompleteTodo} remove={this.remove} />);
      return maps;
    }
    else if(this.selectedFilter==="Active"){
      const filter=this.todos.filter(item=>item.status===false)
      const maps = filter.map((item)=>
      <Todoinput key={item.id} object={item} checks={this.onCompleteTodo} remove={this.remove} />);
      return maps;
    }
    else if(this.selectedFilter==="Completed"){
      const filter=this.todos.filter(item=>item.status===true)
      const maps =filter.map((item)=>
        <Todoinput key={item.id} object={item} checks={this.onCompleteTodo} remove={this.remove} />);
      return maps;
    }
  }
  
  @action.bound
  onCompleteTodo(id){
    const copyTodoList=this.todos.slice(0);
    copyTodoList.forEach(item=>{
    if(item.id===Number(id)){
      item.status=!(item.status);
    }
    this.todos=copyTodoList;
  });
  }
  
  @action.bound
  remove(id){
    const copyTodoList=this.todos.filter(item=>item.id!==id)
    this.todos=copyTodoList;
  }
  
  @action.bound
  allItem(){
    this.selectedFilter="All";
    this.addTodo();
  }
  
  @action.bound
  active(){
    this.selectedFilter="Active";
    this.addTodo();
  }
  
  @action.bound
  completed(){
    this.selectedFilter="Completed";
    this.addTodo();
  }
  
  @action.bound
  allClear(){
    const display=this.todos.filter((item,index)=>(!item.status));
    this.todos=display;
  }
  @computed get counter() {
    let count=0;
    this.todos.forEach((item,index)=>{if(item.status===false){count++}});
    return count;
  }
  
  render(){
    const todos=this.addTodo()
    const count=this.counter
  return (
    <TodoPage>
      <TitleText>todos</TitleText>
      <UserInput onKeyDown={this.onAddTodo}  type="text" placeholder="Type something"></UserInput>
      {todos}
      <Footer todosCount={count} allItems={this.allItem} active={this.active} completed={this.completed} allClear={this.allClear}/>
    </TodoPage>
  );
}
}
export {Todo};