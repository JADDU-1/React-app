import React from 'react'
import { observer } from 'mobx-react'
import {CheckBox,TodoText,Button,TodoSet} from'./css';


@observer class AddTodo extends React.Component {

  onCompleted = () => {
    const {AddingEachTodo}=this.props
    AddingEachTodo.onCompleted()
  }

  onRemoveTodo = () => {
    const {AddingEachTodo,onRemoveTodo} = this.props
    onRemoveTodo(AddingEachTodo.id)
  }

  onUpdateTodoTitle = (event) => {
    this.props.AddingEachTodo.onUpdateTodoTitle(event.target.value);
  }

  render() {
    const {AddingEachTodo} = this.props;
    return (
        <TodoSet>
        <CheckBox type="checkBox" onChange={this.onCompleted} checked={AddingEachTodo.isCompleted}></CheckBox>
        <TodoText disabled={AddingEachTodo.isCompleted} isCompleted={AddingEachTodo.isCompleted} defaultValue={AddingEachTodo.title} onChange={this.onUpdateTodoTitle}></TodoText>
        <Button type="button" value="X" onClick={this.onRemoveTodo}></Button>
    </TodoSet>
    );
  }
}

export default AddTodo;