import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo.png';

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <img src={Logo} alt="Logo" className="header__logo" />
                <p className="header__p">Intro text for estimate tool. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Suscipit adipiscing bibendum est ultricies integer. Libero nunc consequat interdum varius sit amet mattis vulputate.</p>
            <button className="header__btn"><Link to="/form">Get Started</Link></button>
        </div>
        );
    }
}
