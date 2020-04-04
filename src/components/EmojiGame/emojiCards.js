import React from "react";
import {EmojiCardStyle,Image} from'./emojiCss.js';

class EmojiCard extends React.Component{
    render(){
        return(
            <EmojiCardStyle id={this.props.object.id} theme={this.props.theme}>
              <Image src={this.props.object.image}></Image>
              <p>{this.props.object.name}</p>
            </EmojiCardStyle>
            );
    }
}
export{EmojiCard};