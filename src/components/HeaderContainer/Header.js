import React, {Component} from 'react';
import './header.css';
import Logo from '../../assets/logo_transparent.png';

export default class Header extends Component{
        render() {
          return (
            <header className="header-section">
           
               <div className="content">
           
                <div className="logo">
                    <img src={'../src/assets/logo_transparent.png'} height="80" alt="Donation Logo"/>
                </div>
               </div>
            </header>
          );
        }
    }