import React from 'react';
import TextField from './TextField';

export default class Form extends React.Component {

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form">
                    <label className="formDiv__form--label">
                        Starting Zip Code:
                        <TextField name="startingZip" />
                    </label>
                </form>
            </div>
        )
    }
}
