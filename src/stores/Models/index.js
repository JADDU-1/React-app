import React from 'react';
import { observable, action } from 'mobx';
import {observer} from 'mobx-react';

@observer
class ToDoModel extends React.Component {
    id
    @observable title
    @observable isCompleted

    constructor(todoObject) {
        super(todoObject)
        this.id = todoObject.id
        this.title = todoObject.title
        this.isCompleted = todoObject.isCompleted
    }

    @action.bound
    onCompleted() {
        this.isCompleted = !this.isCompleted
    }
 
    @action.bound
    onUpdateTodoTitle(updatedTitle) {
        this.title = updatedTitle
    }
}


export default ToDoModel;