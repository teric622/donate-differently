import React, { Component } from 'react';
import LogoTransparent from '../../images/LogoTransparent.png';


export default class Welcome extends Component {
    render() {

        return (
            <div className="welcome">
                <div className="welcome-info">
                    <center>
                    <h1>Donate-Differently</h1>
                    </center>
                    <div>
                    <center>
                    <img src={LogoTransparent} alt="logo" className="welcomelogo" />
                    </center>
                </div>
                </div>
            </div>
        );



    }
}