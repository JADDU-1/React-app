import React from "react";
import {FooterStyles,FooterHeading,FooterText} from'./emojiCss.js';


class EmojiFooter extends React.Component{
    render(){
        return(
            <FooterStyles>
              <FooterHeading>How to play?</FooterHeading>
              <FooterText>Get points by clicking on an image but don't click on any image more than once!</FooterText>
            </FooterStyles>
            );
    }
}
export{EmojiFooter};