import React, { Component } from 'react'
import { observer } from "mobx-react"
import gridGameStore from './../../stores/GridGameStore/gameStore'
import GameField from './gameField'
//import levels from './../../stores/level.json'
import Header from './header'
import {GameResult} from './result'
import {GridGamePage} from "./gridCss"

@observer
class GridMemoryGame extends Component {

    componentDidMount() {
      gridGameStore.setGridCells()
    }
  
    render() {
        const {changeTheme,themeObject} =this.props
        return(
            <GridGamePage themeObject={themeObject}>
                <Header changeTheme={changeTheme} level={gridGameStore.level} topLevel={gridGameStore.topLevel} themeObject={themeObject} />
               {gridGameStore.isGameCompleted===false ?
                <GameField level={gridGameStore.level} onCellClick={gridGameStore.onCellClick} cellsArray={gridGameStore.currentLevelGridCells}themeObject={themeObject} /> :  <GameResult  changeTheme={changeTheme} gameStore={gridGameStore}/>}
            </GridGamePage>
        )
    }
}

export default GridMemoryGame;