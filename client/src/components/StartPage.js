import React from 'react';
import Header from './Header';
import Form from './Form';

export default class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            formBegun: false
        }
    }

    begin = () => {
        this.setState({ formBegun: true });
    }

    render() {
        if (this.state.formBegun) {
            return <Form />
        } else {
            return <Header begin={this.begin}/>
        }
    }
}
