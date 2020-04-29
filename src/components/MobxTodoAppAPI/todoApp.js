import React from 'react'
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from "./../common/LoadingWrapperWithFailure"
import TodoList from './todoList'
@inject('todoStores')
@observer class TodoAppAPI extends React.Component {

  componentDidMount() {
    this.doNetworkCalls()
  }

  componentWillUnmount() {
    this.getTodoStore().clearStore()
  }

  getTodoStore = () => {
    return this.props.todoStores
  }
  
  doNetworkCalls = () => {
    this.getTodoStore().getTodosAPI()
  }

  renderTodoList = () => {
    return(
      <TodoList />
    )
  }

  render() {
    const { getTodosApiStatus, getTodosApiError } = this.getTodoStore()
    return ( 
      <LoadingWrapperWithFailure 
      apiStatus = {getTodosApiStatus}
      apiError = {getTodosApiError}
      onRetryClick = {this.doNetworkCalls} 
      renderSuccessUI = {this.renderTodoList} />
    );
  }
}

export default TodoAppAPI;
