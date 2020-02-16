import React from 'react';
import { connect } from 'react-redux';

import LocationForm from '../components/LocationForm';
import BedroomsForm from '../components/BedroomsForm';
import ParkingForm from '../components/ParkingForm';
import CustomerContactForm from '../components/CustomerContactForm';
import saveData from '../actions/saveData';
import getEstimate from '../actions/getEstimate';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1
        }
    }

   updateStep = () => {
       this.setState(prevState => {
           return { step: prevState.step + 1 }
       })
   }

    render() {
        switch(this.state.step){
            case 1:
                return <LocationForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 2:
                return <BedroomsForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 3:
                return <ParkingForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 4:
                return <CustomerContactForm updateStep={this.updateStep} saveData={this.props.saveData} />
            case 5:
                this.props.postDataToGetEstimate(this.props.completeState);
            case 6:
                return <p>Form complete!</p>
            default:
                return <h3>An error occurred.</h3>
        }
       
    }
}

const mapStateToProps = state => {
    return { completeState: state };
}

const mapDispatchToProps = dispatch => {
    return {
        saveData: customerInfo => dispatch(saveData(customerInfo)),
        postDataToGetEstimate: completeState => dispatch(getEstimate(completeState))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
