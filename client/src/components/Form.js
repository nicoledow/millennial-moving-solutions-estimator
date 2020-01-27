import React from 'react';
import { connect } from 'react-redux';

import TextFieldForm from './TextFieldForm';
import submitForm from '../actions/submitForm';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            formValue: ''
        }
    }

    handleSubmit = e => {
       e.preventDefault();
       let formData = {
           infoType: this.props.currentSection,
           data: this.state.formValue
       };
       console.log('formData in handleSubmit', formData);
       this.props.submitForm(formData);
    }


    render() {
        switch(this.props.currentSection) {
            case 'Starting Zip Code':
            case 'Destination Zip Code':
            case 'Number of Bedrooms':
                return <TextFieldForm currentSection={this.props.currentSection} handleSubmit={this.handleSubmit} />;
            default:
                return <p>An error occurred. Please try again.</p>;
        }
    }
}

const mapStateToProps = state => {
    return { currentSection: state.currentSection }
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: formData => dispatch(submitForm(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);