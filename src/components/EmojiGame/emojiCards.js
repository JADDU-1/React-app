import React from "react";
import {EmojiCardStyle,Image} from'./emojiCss.js';

class EmojiCard extends React.Component{
    
    clicked=()=>{
        const {object,onclick}=this.props;
        onclick(object);
    }
    render(){
        const {object,theme}=this.props;
        return(
            <EmojiCardStyle id={object.id} theme={theme} onClick={this.clicked}>
              <Image src={object.image}></Image>
              <p>{object.name}</p>
            </EmojiCardStyle>
            );
    }
}
export{EmojiCard};