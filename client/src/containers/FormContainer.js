import React from 'react';
import { connect } from 'react-redux';

import LocationForm from '../components/LocationForm';
import BedroomsForm from '../components/BedroomsForm';
import ParkingForm from '../components/ParkingForm';
import CustomerContactForm from '../components/CustomerContactForm';
import saveData from '../actions/saveData';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    updateState = () => {
        //update this component's state
    }

    handleFormSubmit = () => {
        debugger;
        //submit post request to db using this component's state
    }

    render() {
        console.log('form container props', this.props)
        return (
            <div>
                <LocationForm saveData={this.props.saveData} />
                <BedroomsForm saveData={this.props.saveData} />
                <ParkingForm saveData={this.props.saveData} />
                <CustomerContactForm saveData={this.props.saveData} />
                <button className="formDiv__form--button" onClick={this.handleFormSubmit}>Submit</button>
            </div>
        )
       
    }
}

const mapStateToProps = state => {
    return { 
        locationData: state.locationData,
        bedroomData: state.bedroomData,
        parkingInfo: state.parkingInfo,
        contactInfo: state.contactInfo 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveData: customerInfo => dispatch(saveData(customerInfo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
