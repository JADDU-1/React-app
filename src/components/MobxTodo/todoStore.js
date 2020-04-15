import React from "react";
import {observable,action} from 'mobx';

class TodoStore extends React.Component{
 @observable todos=[]
 @observable selectedFilter="All"
 count=0
 
 @action.bound
 onAddTodo(userInput){
  alert("hi")
     const object={
        id:this.count+=1,
        text:userInput,
        status:false
      };
      this.todos.push(object);
 }
 onRemoveTodo(){
     
 }
 onCompleteTodo(){
     
 }
 
 
 
}
const todoStore=new TodoStore();
export {todoStore};


