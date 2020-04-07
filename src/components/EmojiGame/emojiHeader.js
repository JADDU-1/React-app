import React from "react";
import {HeaderStyles,ThemeButtonStyles,HeaderName,HeaderUpdateStyles} from'./emojiCss.js';


class EmojiHeader extends React.Component{
    render(){
        const {score,topScore,theme,change}=this.props;
        return(
            <HeaderStyles>
              <HeaderName>Emoji Game</HeaderName>
              <HeaderUpdateStyles>
                 <p>Score:{score}</p>
                 <p>Top Score:{topScore}</p>
                 <ThemeButtonStyles onClick={change} theme={theme} >{theme.text}</ThemeButtonStyles>
              </HeaderUpdateStyles>
            </HeaderStyles>
            );
    }
}
export{EmojiHeader};