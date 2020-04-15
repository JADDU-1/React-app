import React from 'react';
import {CheckBox,TodoText,Button,TodoSet} from'./css.js';

class Todoinput extends React.Component{
    
    checkBoxClicked=()=>{
        const {object,checks}=this.props;
        checks(object.id);
    }
    remove=()=>{
        const {object,remove}=this.props;
        remove(object.id);
    }
    
    render(){
        const {object}=this.props;
        return(
            <TodoSet>
                <CheckBox type="checkBox" onChange={this.checkBoxClicked} status={object.status}></CheckBox>
                <TodoText onChange={this.props.value} type='text' defaultValue={object.text} status={object.status}></TodoText>
                <Button type="button" value="X" onClick={this.remove}></Button>
            </TodoSet>
        );
    }
}
export {Todoinput};

