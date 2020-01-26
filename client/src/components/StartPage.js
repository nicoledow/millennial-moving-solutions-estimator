import React from 'react';
import Logo from './logo.png';

export default class StartPage extends React.Component {

    handleClick = () => {
        console.log('clicked')
        React.unmountComponentAtNode()
    }

    render() {
        return (
            <div className="header">
                <img src={Logo} alt="Logo" className="header__logo" />
                <p className="header__p">Intro text for estimate tool. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Suscipit adipiscing bibendum est ultricies integer. Libero nunc consequat interdum varius sit amet mattis vulputate.</p>
                <button className="header__btn" onClick={this.handleClick}>Get Started</button>
            </div>
        );
    }
}
