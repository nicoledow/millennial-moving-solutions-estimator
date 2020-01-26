import React from 'react';
import { connect } from 'react-redux';

import submitForm from '../actions/submitForm';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            formValue: ''
        }
    }

    handleChange = e => {
        this.setState({ formValue: e.target.value });
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
                return (
                    <div className="formDiv">
                        <form className="formDiv__form" onSubmit={e => this.handleSubmit(e)}>
                            <label className="formDiv__form--label">{this.props.currentSection}</label>
                                <input type="text"
                                    name={this.props.currentSection}
                                    value={this.state.formValue}
                                    onChange={e => this.handleChange(e)} />
                                <input type="submit" className="form__button" value="Next" />
                        </form>
                    </div>
                );
            default:
                return <p>An error occurred.</p>
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