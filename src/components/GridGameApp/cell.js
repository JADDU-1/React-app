import React from "react"
import levels from './../../stores/level.json'
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import {CellButton} from "./gridCss"

@observer
class Cell extends React.Component{

    @observable shouldShowHiddenCells =true

    componentDidMount() {
        const {level}=this.props
        this.timeOutId = setTimeout(() => this.shouldShowHiddenCells = false, (1000*level + 3000));
    }
    @action.bound
    onCellClicked = (event) => {
        event.target.disabled =true;
        const {eachCell,onCellClick,themeObject}=this.props
        if(themeObject.text==="Dark Mode"){
        eachCell.isHidden === true ? event.target.style.backgroundColor = '#90cdf4' : event.target.style.backgroundColor = 'red'
        }
        else{
        eachCell.isHidden === true ? event.target.style.backgroundColor = '#48bb78' : event.target.style.backgroundColor = 'red'
        }
        onCellClick(eachCell.isHidden)
    }
    
    render(){
        const {level,eachCell,themeObject}=this.props;
        let backgroundColor=''
        if(themeObject.text==="Dark Mode")
        {
            backgroundColor=eachCell.isHidden===true && this.shouldShowHiddenCells===true? '#90cdf4':'#2a4365'
        }
        else{
           backgroundColor= eachCell.isHidden===true && this.shouldShowHiddenCells===true? '#48bb78':'#2a4365'
        }
        return(
             <CellButton onClick={this.onCellClicked} id={eachCell.id} disabled={this.shouldShowHiddenCells} backgroundColor={backgroundColor} background={eachCell.isHidden} timer={this.shouldShowHiddenCells} width={levels[level].cellWidth}></CellButton>
            );
    }
}
export default Cell;