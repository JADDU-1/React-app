import { observable, action, computed } from 'mobx';

import EventModel from '../Models/eventModel';

class EventStore {
    //  count=0;
    @observable events = [];
    
    @action.bound
    onAddEvent(eventName,eventLocation) {
        // count+=1;
        let addingEachEvent = {
            id:Math.floor(Math.random() * 10000),
            name: eventName,
            location: eventLocation
        };
        const eventObject =new EventModel(addingEachEvent)
        this.events.push(eventObject);
    }
 
    @action.bound   
    onDeleteEvent(id) {
        const display=this.events.filter(item=>item.id!==id)
        this.events=display
    }
    @action.bound   
    onEditEvent(id) {
        this.events.forEach(item=>{
            if(item.id===id)
            item.onEditEvent=!item.onEditEvent
        })
    }
    @action.bound
    onUpdateEventName(id,newName) {
        this.events.forEach(item=>{
            if(item.id===id)
            item.name=newName
        })
    }
    @action.bound
    onUpdateEventLocation(id,newLocation) {
        this.events.forEach(item=>{
            if(item.id===id)
            item.location = newLocation;
        })
        
    }
    @computed get noOfEvents() {
        return this.events.length;
    }
}

const eventStores  = new EventStore();
export{eventStores};