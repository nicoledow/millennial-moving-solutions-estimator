import React from 'react';
import getEstimate from '../actions/getEstimate';

export default class CalculatingMessage extends React.Component {

    componentDidMount() {
        getEstimate(this.props.data);
    }

    render() {
        return (
            <div className="formDiv">
                <h3 className="header__p">Calculating your estimate...</h3>
            </div>
        )
    }
}