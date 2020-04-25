import React from 'react';
import { observable, action } from 'mobx';
import {observer} from 'mobx-react';

@observer
class EventModel extends React.Component {
    id;
    @observable name;
    @observable location;
    @observable onEditEvent;

    constructor(eventObject) {
        super(eventObject);
        this.id = eventObject.id;
        this.name = eventObject.name;
        this.location = eventObject.location;
        this.onEditEvent=true;
    }
 
}

export default EventModel;