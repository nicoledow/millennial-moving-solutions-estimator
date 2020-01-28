import React from 'react';

export default class BedroomsForm extends React.Component {

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form" onSubmit={this.props.handleData}>
                    <label className="formDiv__form--label">
                        How many bedrooms are you moving?
                        <select name="numOfBedrooms" className="formDiv__form--select">
                            <option value="1">Studio or one-bedroom apartment</option>
                            <option value="2">Two bedroom home or apartment</option>
                            <option value="3">Three bedroom home or apartment</option>
                            <option value="4">Four or more bedrooms</option>
                        </select>
                    </label>
                    <br/>
                    <label className="formDiv__form--label">
                        How many floors?
                        <input type="number" name="numOfFloors" />
                    </label>
                    <br/>
                    <label className="formDiv__form--label">
                        Is there an elevator?
                        <input type="checkbox" name="elevator" />
                    </label>
                </form>
            </div>
        )
    }
}