import React from 'react';
import { Redirect } from 'react-router-dom';

import LocationForm from '../components/LocationForm';
import BedroomsForm from '../components/BedroomsForm';
import ParkingForm from '../components/ParkingForm';
import CustomerContactForm from '../components/CustomerContactForm';
//import Estimate from '../components/Estimate';

export default class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            currentStep: 1,
            startingZip: '',
            destinationZip: '',
            elevator: '',
            numOfBedrooms: 0,
            parkingDistance: '',
            numOfFloors: 0,
            customerName: '',
            customerPhone: '',
            customerEmail: '',
            formComplete: false
        };
    }

    handleData = data => {
        if (data.startingZip) {
            this.setState({ startingZip: data.startingZip });
        }
        if (data.destinationZip) {
            this.setState({ destinationZip: data.destinationZip });
        }
        if (data.numOfBedrooms) {
            this.setState({ numOfBedrooms: data.numOfBedrooms });
        }
        if (data.numOfFloors) {
            this.setState({ numOfFloors: data.numOfFloors });
        }
        if (data.elevator) {
            this.setState({ elevator: data.elevator });
        }
        if (data.parkingDistance) {
            this.setState({ parkingDistance: data.parkingDistance });
        }

        this.setState(prevState => ({
            currentStep: prevState.currentStep + 1
        }));
    }

    completeForm = data => {
        //connect to redux store
        //redirect to /estimate, will load Estimate component
        this.setState({
            customerName: data.customerName,
            customerEmail: data.customerEmail,
            customerPhone: data.customerPhone
        })
        .then(state => {
            return <Redirect to="/estimate" />
        })
    }

    render() {
        console.log('form container state', this.state)

        switch(this.state.currentStep) {
            case 1:
                return <LocationForm handleData={this.handleData} />
            case 2:
                return <BedroomsForm handleData={this.handleData} />
            case 3:
                return <ParkingForm handleData={this.handleData} />
            case 4:
                return <CustomerContactForm completeForm={this.completeForm} />
            default: 
                return <p>An error occurred.</p>
            }
       
    }
}

