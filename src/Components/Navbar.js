import React, {Component} from 'react';
import profilePic from '../Assets/images/icon-profile.png'
import shoppingBag from '../Assets/images/icon-shopping-bag.png'

export default class Navbar extends Component{

    render(){
        return(
            <div id="navbar">
                <div className="container-m50 display-flex">
                    <div id="hamburger-menu" className="hide-on-desktop">
                        <div className="hamburger-menu-icon"></div>
                        <div className="hamburger-menu-icon"></div>
                        <div className="hamburger-menu-icon"></div>
                    </div>
                    <ul id="left-nav">
                        <li>Men</li>
                        <li>Women</li>
                    </ul>
                    <div id="logo"></div>
                    <ul id="right-nav">
                        <li>
                            <img src={shoppingBag} />
                        </li>
                        <li>
                            <img src={profilePic} />
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}