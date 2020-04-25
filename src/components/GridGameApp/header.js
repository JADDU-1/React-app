import React from "react";
import levels from './../../stores/level.json'
import {Header,LevelAndThemeStyles,Button,TopLevel,Level} from "./gridCss"
// import themeStore from './../../stores/themeStore'

class EmojiHeader extends React.Component{
    onChangeSelectedTheme=()=>{
        this.props.changeTheme()
    }
    render(){
        const {level,topLevel,themeObject}=this.props;
        return(
            <Header >
                <TopLevel>Top Level:{topLevel}</TopLevel>
                <LevelAndThemeStyles width={levels[level].gridWidth}>
                    <Level>Level:{level}</Level>
                    <Button onClick={this.onChangeSelectedTheme} themeObject={themeObject}>Mode:{(themeObject.text!=="Light Mode"?"Dark":"Light")}</Button>
                </LevelAndThemeStyles>
            </Header>
            );
    }
}
export default EmojiHeader;