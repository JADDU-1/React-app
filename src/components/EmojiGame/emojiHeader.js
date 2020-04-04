import React from "react";
import {HeaderStyles,ThemeButtonStyles,HeaderName,HeaderUpdateStyles} from'./emojiCss.js';


class EmojiHeader extends React.Component{
    render(){
        //change={this.props.change} theme={this.props.themeObject}
        return(
            <HeaderStyles>
              <HeaderName>Emoji Game</HeaderName>
              <HeaderUpdateStyles>
                 <p>Score:{this.props.score}</p>
                 <p>Top Score:{this.props.topScore}</p>
                 <ThemeButtonStyles onClick={this.props.change}>{this.props.theme.text}</ThemeButtonStyles>
              </HeaderUpdateStyles>
            </HeaderStyles>
            );
    }
}
export{EmojiHeader};