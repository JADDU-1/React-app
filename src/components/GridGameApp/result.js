import React from "react"
import {ResultStyle,ResultLevel,ResultMessage,PlayAgain} from "./gridCss"

class GameResult extends React.Component {
    
    render(){
        return(
            <ResultStyle>
                <ResultLevel>{this.props.gameStore.level}</ResultLevel>
                <ResultMessage>Congragulations! You have completed all the levels.</ResultMessage>
                <PlayAgain onClick={this.props.gameStore.onPlayAgainClick}> Play Again</PlayAgain>
            </ResultStyle>
        )
    }
}
export {GameResult}

