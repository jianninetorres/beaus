import React from 'react';
import '../css/logo.css';

const Logo = (props) => {
    return (
        <div className="logo-box">
            <h1 className="title">
                <a href="">Beau's Seasonal</a>
                <img src={props.logo} className="logo"/>
            </h1>
            <p>We are an award-winning, local, family-run, organic, and independent brewery.</p>
            <br />
            <br />
        </div>
    );
}

export default Logo;