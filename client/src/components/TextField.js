import React from 'react';

export default class TextField extends React.Component {
    constructor() {
        super();

        this.state = {
            fieldValue: ''
        }
    }

    handleChange = e => {
        this.setState({ fieldValue: e.target.value })
    }

    render(){
        return (
            <input type="text" 
            name={this.props.name} 
            value={this.state.fieldValue} 
            onChange={e => this.handleChange(e)} />
        )
    }
}

