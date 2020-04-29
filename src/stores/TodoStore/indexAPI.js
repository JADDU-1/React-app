/* eslint-disable default-case */
import { observable, action, computed} from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import ToDoModel from "../Models"

class TodoStores {
    
  @observable todos
  @observable selectedFilter
  @observable getTodosApiStatus
  @observable getTodosApiError
  todoService
  
  constructor(todoService) {
    this.todoService = todoService
    this.init()
  }

  @action.bound
  getTodosAPI() {
    const todosPromise = this.todoService.getTodosAPI()
    return bindPromiseWithOnSuccess(todosPromise)
    .to(this.setTodosApiStatus,this.setTodosApiResponse)
    .catch(this.getTodosApiError)
  }
  @action.bound
  init() {
    this.getTodosApiStatus = API_INITIAL
    this.getTodosApiError = null
    this.todos = []
    this.selectedFilter = 'All'
  }

  @action.bound
  setTodosApiResponse(todosResponse) {
    todosResponse.map(eachTodo => this.onAddJsonData(eachTodo))
  }

  @action.bound
  setTodosApiError(error) {
    this.getTodosApiError = error
  }

  @action.bound
  setTodosApiStatus(apiStatus) {
    this.getTodosApiStatus = apiStatus
  }
  @action.bound
  onAddTodo(event) {
    if (event.keyCode === 13 && event.target.value !== '') {
      let value = event.target.value;
      let addingEachTodo = {
        id: Math.random().toString(),
        title: value,
        isCompleted: false,
      };
      const todoObject=new ToDoModel(addingEachTodo)
      this.todos.unshift(todoObject)
      event.target.value = ''
    }
  }

  @action.bound
  onAddJsonData(element) {
    let addingEachTodo = {
      id: element.id,
      title: element.title,
      isCompleted: element.completed,
    };
    const todoObject=new ToDoModel(addingEachTodo)
    this.todos.push(todoObject)
  }
 
  @action.bound
  onRemoveTodo(id) {
    let filteredTodos = this.todos.filter(item => item.id !== id)
    this.todos = filteredTodos
  }

  @action.bound
  onChangeSelectedFilter(filter){
    this.selectedFilter = filter
  }

  @action.bound
  onClearCompleted(filter) {
    const clearTodos = this.todos.filter(item => !item.isCompleted)
    this.todos = clearTodos
    this.selectedFilter = filter
  }

  @computed get activeTodosCount() {
    let activeCount = this.todos.filter(item => item.isCompleted === false);
    return activeCount.length;
  }

  @computed get filteredTodos() {
    let filterOption = this.selectedFilter;
    let filteredTodos = this.todos.filter(eachTodo => {
      switch (filterOption) {
        case 'All':
          return true;
        case 'Active':
          return eachTodo.isCompleted === false;
        case 'Completed':
          return eachTodo.isCompleted === true;
        case 'ClearCompleted':
          return null;
      }
    });
    return filteredTodos;
  }

  clearStore = () => {
    this.init()
  }
}

export default TodoStores;