import React, { Component } from 'react'
import { observer } from "mobx-react"
import levels from './../../stores/level.json'
import {CellContainer} from "./gridCss"
import Cell from './cell'
//import { GridCells } from './styleComponent'

@observer
class GameField extends Component {

  render() {
  const {level,onCellClick,cellsArray,themeObject} = this.props
    return ( 
        <CellContainer width={levels[level].gridWidth}>
        {cellsArray.map(eachCell => 
          <Cell key={eachCell.id} onCellClick={onCellClick} eachCell={eachCell} themeObject={themeObject} level={level}/>
        )}
        </CellContainer>
    );
  }
}
 
export default GameField;