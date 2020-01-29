import React from 'react';

export default class ParkingForm extends React.Component {

    handleSubmit = () => {
        const data = {
            parkingDistance: document.querySelector('select').value
        };
        this.props.handleData(data);
    }

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form" onSubmit={this.props.handleData}>
                    <label className="formDiv__form--label">
                        Where will M.M.S. be able to park during your move?
                        <select className="formDiv__form--select">
                            <option value="driveway">In the driveway</option>
                            <option value="10-20">On the street, 10-20 feet away</option>
                            <option value="30-40">On the street, 30-40 feet away</option>
                            <option value="farther">Farther</option>
                        </select>
                    </label>
                    <button className="formDiv__form--button" onClick={this.handleSubmit}>Next</button>
            </form>
            </div>
        )
    }
}