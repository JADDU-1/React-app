import CounterStore from './CounterStore'
import TodoStores from './TodoStore/indexAPI'
import TodoService from '../services/TodosServices/index.api'
import Authstores from '../Authentication/stores'
import ProductStores from '../Products/stores'
const counterStore = new CounterStore()
const todoService = new TodoService()
const todoStores  = new TodoStores(todoService)
export default {
  ...Authstores,
  ...ProductStores,
  counterStore,
  todoStores
}
