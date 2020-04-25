import React from 'react';
import { observer } from "mobx-react";
import {EachEvent,EventDetails,EventName,EventLocation,AddEventButtons,EditButton,DeleteButton,UpdateButton} from "./eventCss";

@observer class Event extends React.Component{
    
    onDelete=()=>{
        const {eachEvent,deleteEvent}=this.props
        deleteEvent(eachEvent.id)
    }
    onEdit=()=>{
        const {eachEvent,editEvent}=this.props
        editEvent(eachEvent.id)
    }
    onChangeName=(event)=>{
        const {eachEvent,updateName}=this.props
        updateName(eachEvent.id,event.target.value)
    }
    onChangeLocation=(event)=>{
        const {eachEvent,updateLocation}=this.props
        updateLocation(eachEvent.id,event.target.value)
    }
    
    render() {
        const {eachEvent}=this.props;
        return(
            <EachEvent>
                    <EventDetails>
                        <EventName type='text' placeholder='Event name' defaultValue={eachEvent.name} onChange={this.onChangeName} disabled={eachEvent.onEditEvent}></EventName>
                        <EventLocation type='text' placeholder='Event Location'defaultValue={eachEvent.location} onChange={this.onChangeLocation} disabled={eachEvent.onEditEvent}></EventLocation>
                    </EventDetails>
                    <AddEventButtons>
                        <EditButton type='reset' onClick={this.onEdit} hide={eachEvent.onEditEvent}>Edit</EditButton>
                        <DeleteButton type='reset' onClick={this.onDelete} hide={eachEvent.onEditEvent}>Delete</DeleteButton>
                        <UpdateButton type='reset' onClick={this.onEdit} hide={eachEvent.onEditEvent}>Update</UpdateButton>
                    </AddEventButtons>
            </EachEvent>
        )
    }
}


export {Event};