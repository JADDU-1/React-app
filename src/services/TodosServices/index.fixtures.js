import todoResponse from '../../fixtures/getTodosResponse.json'
class TodoService {

  getUserAPI() {
    return new Promise((resolve,reject) => {
      resolve(todoResponse)
    })
  }
}

export default TodoService;