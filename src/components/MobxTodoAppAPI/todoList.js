import React, { Component } from 'react'
import { observer, inject } from "mobx-react"
//import NoDataView from "./../common/NoDataView"
import AddTodo from './addTodo'
import Footer from './todoFooterAPI'
import {TodoPage,TitleText,UserInput} from'./css';
import { action } from "mobx"

@inject('todoStores')
@observer class TodoList extends Component {

  @action.bound
  getTodoStore() {
    return this.props.todoStores
  }
  
  render() { 
    const {onRemoveTodo,onAddTodo,activeTodosCount,filteredTodos, onClearCompleted,onChangeSelectedFilter} = this.getTodoStore()
    return (
        <TodoPage>
        <TitleText>todos</TitleText>
        <UserInput onKeyDown={onAddTodo}  type="text" placeholder="Type something"></UserInput>
        {filteredTodos.map((EachTodo)=>
            <AddTodo AddingEachTodo={EachTodo} key={EachTodo.id} onRemoveTodo = {onRemoveTodo}/>)}
        <Footer getActiveTodosCount={activeTodosCount} onClearCompleted={onClearCompleted} onChangeSelectedFilter={onChangeSelectedFilter}/>
      </TodoPage>
     );
  }
}
 
export default TodoList;