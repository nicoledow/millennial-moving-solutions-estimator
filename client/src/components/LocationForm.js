import React from 'react';

export default class LocationForm extends React.Component {

    constructor() {
        super();
        this.state = {
            startingZip: '',
            destinationZip: ''
        }
    }

    handleChange = e => {
       e.target.name === 'startingZip' ? this.setState({ startingZip: e.target.value }) : this.setState({ destinationZip: e.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" name="startingZip" placeholder="Starting zip code" value={this.state.startingZip} onChange={e => this.handleChange(e)} />
                <input type="text" name="destinationZip" placeholder="Destination zip code" value={this.state.startingZip} onChange={e => this.handleChange(e)} />
            </React.Fragment>
        )
    }
}