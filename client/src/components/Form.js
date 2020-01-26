import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {

    render() {
        return (
            <p>Form</p>
        )
    }
}

const mapStateToProps = () => {
    return { currentSection: state.currentSection };
}

export default connect(mapStateToProps)(Form);