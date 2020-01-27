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

    render() {
        return (
            <div className="formDiv">
                <label className="formDiv__form--label">Where are you moving to and from?</label>
                <form className="formDiv__form" onSubmit={this.handleSubmit}>
                    <LocationForm />
                </form>
            </div>
        )
    }
}

