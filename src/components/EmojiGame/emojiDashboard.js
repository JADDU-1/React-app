import React from "react";
import {EmojiHeader} from "./emojiHeader.js";
import {EmojiFooter} from "./emojiFooter.js";
import {EmojiPage,EmojiListStyles,GameStatusDispaly,PlayAgain,GameState} from'./emojiCss.js';
import {EmojiCard} from'./emojiCards.js';
import "./index.css";

class EmojiDashboard extends React.Component{
    state={
        emojies:[
            {id:"1",isClicked:false,name:"Exploding Head",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png"},
            {id:"2",isClicked:false,name:"Grinning Face with Sweat",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png"},
            {id:"3",isClicked:false,name:"Smiling Face with Heart-Eyes",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png"},
            {id:"4",isClicked:false,name:"Smirking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png"},
            {id:"5",isClicked:false,name:"Thinking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png"},
            {id:"6",isClicked:false,name:"Winking Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png"},
            {id:"7",isClicked:false,name:"Grinning Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png"},
            {id:"8",isClicked:false,name:"Crying Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png"},
            {id:"9",isClicked:false,name:"Astonished Face",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png"},
            {id:"10",isClicked:false,name:"Face with Tears of Joy",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png"},
            {id:"11",isClicked:false,name:"Star-Struck",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png"},
            {id:"12",isClicked:false,name:"Winking Face with Tongue",image:"https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png"},
            ],
        score:0,
        topScore:0,
        gameState:"PLAYING"
    }
    
    createEmojiCards=()=>{
        const {gameState,emojies,score}=this.state;
        if(gameState==="PLAYING"){
          const emojiCards=emojies.map((item,index)=>
          <EmojiCard key={index} object={item} theme={this.props.themeObject} onclick={this.onEmojiClick}/>);
          return emojiCards;
        }
        else{
          return(
              <GameStatusDispaly>
                 <p>{score}</p>
                 <GameState text={gameState}>{gameState}</GameState>
                 <PlayAgain onClick={this.resetGame}>Play Again</PlayAgain>
              </GameStatusDispaly>
            );
        }
        
    }
    
    onEmojiClick=(emojiCard)=>{
       // const {score}=this.state;
        if(!emojiCard.isClicked){
            this.shuffleEmojis();
            this.incrementScore();
            emojiCard.isClicked=true;
        }
        
        else {
            this.setState({gameState:"You Lose!"});
            this.setTopScore();
        }
        
    }
    
    shuffleEmojis=()=>{
    const {emojies}=this.state;
    let length=Number(emojies.length-1);
    for (; length > 0; length--) {
        const shuffled = Math.floor(Math.random() * (length + 1));
        const temp = emojies[length];
        emojies[length] = emojies[shuffled];
        emojies[shuffled] = temp;
      }
      this.setState({emojies:emojies});
    }
    
    incrementScore=()=>{
        const {score}=this.state;
        this.setState({score:score+1});
        if(score===11)
        this.setTopScore();
        
    }
    
    setTopScore=()=>{
        const {score,topScore}=this.state; 
        
        if(score>topScore)
        //   this.setState(prev=>{topScore:score});
        this.setState((prevState) => {
            return { topScore:prevState.score}
          })
        if(score===11)
            this.setState({gameState:"You Won"});
    }
    
    resetGame=()=>{
        const {emojies,gameState}=this.state;
        const emojiCopy=emojies.forEach(item=>{
            item.isClicked=false;
        });
        if(gameState==="You Won")
        {
            this.setState({score:0,gameState:"PLAYING",emojies:emojies});
        }
        else{
        this.setState({score:0,gameState:"PLAYING",emjies:emojiCopy});
        }
    }
    
    render(){
        const {score,topScore}=this.state;
        const {themeObject,change}=this.props;
        return(
            <EmojiPage theme={themeObject}>
              <EmojiHeader  score={score} topScore={topScore} change={change} theme={themeObject} />
              <EmojiListStyles theme={themeObject}>
                {this.createEmojiCards()}
              </EmojiListStyles>
              <EmojiFooter/>
            </EmojiPage>
            );
    }
}
export{EmojiDashboard};