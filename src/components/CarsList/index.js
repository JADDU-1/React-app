import React from "react";
import "./index.css"
let count=0;
class Carslist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            car:[]
        };
    }
    addCarToCarsList=()=>{
        count=count+1;
        const copy=this.state.car.slice(0);
        const object={
        id:count,
        engine : true,
        speed:0,
        carSpeedStatus : 'Status: Stopped',
        accelerateButton : false,
        decelerateButton : false,
        };
        copy.push(object);
        this.setState({
            car:copy
        });
    }
    newCar=()=>{
        console.log(this.state.id);
        const carList = this.state.car
        const maps = carList.map((item)=>  <Car key={item.id} id={item.id}
        accelerate={item.accelerateButton} deaccelerate={item.decelerateButton}
        start={item.engine} status={item.carSpeedStatus}
        remove={this.remove} accelerate={this.accelerate} deaccelerate={this.deaccelerate} startOrStop={this.startStop}/>);
        return maps;
    }
    startStop=(event)=>{
       const display=this.state.car.slice(0);
        display.forEach(item=>{
            if(item.id===parseInt(event.target.id)){
                item.engine = (!item.engine);
                item.carSpeedStatus = 'Status: Running';
                item.accelerateButton = (!item.accelerateButton);
                item.decelerateButton = (!item.decelerateButton);
            }
            
        });
        this.setState({car:display});
    }
    accelerate=(event)=>{
        const display=this.state.car.slice(0);
        display.forEach(item=>{
            if(item.id===parseInt(event.target.id)){
                item.speed +=10
                item.carSpeedStatus = (`Status: ${item.speed} kmph`);
            }
            
        });
        this.setState({car:display});
    }
    deaccelerate=(event)=>{
        const display=this.state.car.slice(0);
        display.forEach(item=>{
            if(item.id===parseInt(event.target.id) && item.speed >10){
                item.speed-=10
                item.carSpeedStatus = (`Status: ${item.speed} kmph`);
            }
            else if(item.id===parseInt(event.target.id)){
                item.carSpeedStatus = ('Status: Running kmph');
            }
            
        });
        this.setState({car:display});
    }
    
    remove=(event)=>{
    const copyCarList=this.state.car.slice(0);
    const removeId=event.target.id;
    this.count -=1;
    copyCarList.forEach((item,index)=>{
    if(item.id===parseInt(removeId)) copyCarList.splice(index,1);
  });
  this.setState({car:copyCarList});
    }
    
    render(){
        return(
            <div>
              <button class="buyCar" onClick={this.addCarToCarsList}>Add Car</button>
              {this.newCar()}
            </div>
    );
        
    }
}
class Car extends React.Component{
    render(){
        return(
            <div className="totalCar">
            <p>Car-{this.props.id}</p>
            <button id={this.props.id} onClick={this.props.startOrStop} className="startOrStopButton">{(this.props.start)? 'Start':'Stop'}</button>
            <button id={this.props.id} className="removeButton" onClick={this.props.remove}>X</button>
            <div id={this.props.id}  className="status" value={this.props.status}>{this.props.status}</div>
            <button id={this.props.id} onClick={this.props.accelerate} className={(!this.props.start)? 'accelerateOn':'accelerateOff'} disabled={this.props.start}>Accelerate</button>
            <button id={this.props.id} onClick={this.props.deaccelerate} className={(!this.props.start)? 'deaccelerateOn':'deaccelerateOff'} disabled={this.props.start?true:false}>Decelerate</button>
        </div>
            );
    }
}


// let speed
// class cars extends React.Component{
//     Constructor() {
//         this.engine = 'ON';
//         this.carSpeedStatus = 'Status: Stopped';
//         this.accelerateButton = 'OFF';
//         this.decelerateButton = 'OFF';
//     }
//     startButton() {
        // this.engine = 'OFF';
        // this.carSpeedStatus = speed;
        // this.accelerateButton = 'ON';
        // this.decelerateButton = 'ON';
//     }
//     stopButton() {
//         this.engine = 'ON';
//         this.carSpeedStatus = 'stopped';
//         this.accelerateButton = 'OFF';
//         this.decelerateButton = 'OFF';
//     }
//     accelerateButtonCall() {
//         this.carSpeedStatus = this.carSpeedStatus + 10;
//     }
//     decelerateButtonCall() {
//         this.carSpeedStatus = this.carSpeedStatus - 10;
//     }
// }


 export {Carslist};
