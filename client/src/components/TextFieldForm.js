//has props "handleSubmit" and "currentSection"

import React from 'react';

export default class TextFieldForm extends React.Component {
    constructor() {
        super();

        this.state = {
            fieldValue: ''
        }
    }

    handleChange = e => {
        this.setState({ fieldValue: e.target.value })
    }

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form" onSubmit={e => this.props.handleSubmit(e)}>
                    <label className="formDiv__form--label">{this.props.currentSection}</label>
                    <input type="text"
                        name={this.props.currentSection}
                        onChange={e => this.handleChange(e)}
                        value={this.state.fieldValue} />
                    <input type="submit" className="form__button" value="Next" />
                </form>
            </div>
        );
    }
}

