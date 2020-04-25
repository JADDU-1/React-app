import React from "react";
import { observer} from 'mobx-react';
import {observable,action,computed} from 'mobx';
import {Buttons,CounterPage,Input,TotalPage} from'./styles.js';

@observer
class Counter extends React.Component{
 onchange=(event)=>{
  counterStore.onChangeCount(event.target.value) 
 }
    render(){
     return(
      <TotalPage>
      <h1>Counter</h1>
      <CounterPage>
      <Buttons onClick={counterStore.IncrementCounter}>+</Buttons>
      <Input onChange={this.onchange} value={counterStore.count}></Input>
      <Buttons onClick={counterStore.DecrementCounter}>-</Buttons>
      </CounterPage>
      </TotalPage>
      )
    }
}
export{Counter}

class CounterStore extends React.Component{
 @observable count=0
 
 @action.bound
 IncrementCounter(){
      this.count+=1;
 }
 @action.bound
 DecrementCounter(){
  if(this.count>0)
      this.count-=1;
 }
 @action.bound
 onChangeCount(userCount){
    this.count=Number(userCount);
 }
 
 }
 
const counterStore=new CounterStore();
export default counterStore;




