import React from 'react';

export default class CustomerContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            customerName: '',
            customerEmail: '',
            customerPhone: ''
        }
    }

    handleNameChange = e => {
        let name = e.target.value;
        this.setState({ customerName: name });
    }

    handleEmailChange = e => {
        let email = e.target.value;
        this.setState({ customerEmail: email });
    }

    handlePhoneChange = e => {
        let phoneNum = e.target.value;
        this.setState({ customerPhone: phoneNum });
    }

    handleSubmit = () => {
        console.log('submitted');
        const data = {
            customerName: this.state.customerName,
            customerEmail: this.state.customerEmail,
            customerPhone: this.state.customerPhone
        };
        this.props.completeForm(data);
    }

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form" onSubmit={this.handleSubmit}>
                    <label className="formDiv__form--label">
                        How can M.M.S. contact you?
                        <input type="text" name="customerName" value={this.state.customerName} placeholder="Name" onChange={e => this.handleNameChange(e)} />
                        <input type="text" name="customerEmail" value={this.state.customerEmail} placeholder="Email address" onChange={e => this.handleEmailChange(e)} />
                        <input type="text" name="customerPhone" value={this.state.customerPhone} placeholder="Phone number" onChange={e => this.handlePhoneChange(e)} />
                    </label>
                </form>
            </div>
        )
    }
}