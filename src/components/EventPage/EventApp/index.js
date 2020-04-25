import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import {eventStores} from '../../../stores/EventStore/index';
import {Event} from '../Event/index';

import {Wrapper,EventTitle,AddEvent,EventDetails,EventName,EventLocation,AddEventButton,RenderingEventsList,NumberOfEvents,EventsList,
    NoEvents} from './eventStroreCss';

@observer class EventApp extends React.Component {

    @observable eventName;
    @observable eventLocation;

    constructor(props) {
        super(props);
        this.eventName = '';
        this.eventLocation = '';
    }

    @action.bound
    onAddEvent(event) {    
        eventStores.onAddEvent(this.eventName,this.eventLocation);
    }

    @action.bound
    onChangeEventName(event) {
        this.eventName = event.target.value;
    }

    @action.bound
    onChangeEventLocation(event) {
        this.eventLocation = event.target.value;
    }

    render() {
        return (
            <Wrapper>
               <EventTitle>Events List</EventTitle>
               <form className="w-10/12">
                    <AddEvent>
                        <EventDetails>
                            <EventName type='text' placeholder='Event name' 
                                onChange={this.onChangeEventName}>
                            </EventName>
                            <EventLocation type='text' placeholder='Event Location'
                                onChange={this.onChangeEventLocation}>
                            </EventLocation>
                        </EventDetails>
                        <AddEventButton type='reset' onClick={this.onAddEvent}>Add Event</AddEventButton>
                    </AddEvent>
               </form>
               <RenderingEventsList>
                   {eventStores.noOfEvents !== 0 ?
                    <EventsList>
                    <NumberOfEvents>Number of Events: {eventStores.noOfEvents}</NumberOfEvents>
                    {eventStores.events.map((item)=>
                    <Event eachEvent={item} key={item.id} deleteEvent={eventStores.onDeleteEvent} editEvent={eventStores.onEditEvent} updateName={eventStores.onUpdateEventName}
                     updateLocation={eventStores.onUpdateEventLocation}/>
                    )}</EventsList>:<NoEvents>No Events...</NoEvents>}
               </RenderingEventsList>
            </Wrapper>
        );
    }
}

export default EventApp;