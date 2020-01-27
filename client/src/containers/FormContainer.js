import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LocationForm from '../components/LocationForm';

export default class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentStep: 1,
            startingZip: '',
            destinationZip: '',
            elevator: '',
            numOfBedrooms: 0,
            parking: '',
            numOfFloors: 0,
            customerName: '',
            customerPhone: '',
            customerEmail: ''
        };
    }

    handleData = data => {
        //update this.state to reflect data typed into form
        if (data.startingZip) {
            this.setState({ startingZip: data.startingZip });
        }
        if (data.destinationZip) {
            this.setState({ destinationZip: data.destinationZip });
        }

        this.setState(prevState => ({
            currentStep: prevState.currentStep + 1
        }));
    }

    render() {
        console.log('form container state', this.state)
        switch(this.state.currentStep) {
            case 1:
                return <LocationForm handleData={this.handleData} />
            default: 
                return <p>An error occurred.</p>
        }
    }
}

