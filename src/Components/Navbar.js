import React, {Component} from 'react';
import profilePic from '../Assets/images/icon-profile.png'
import shoppingBag from '../Assets/images/icon-shopping-bag.png'

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            menuIsOpen:false
        }
        this.handleMenu = this.handleMenu.bind(this);
    }
    handleMenu(){
        var menuIsOpen = !(this.state.menuIsOpen);
        this.setState({
            menuIsOpen: menuIsOpen
        })
    }

    render(){
        return(
            <div id="navbar">
                <div className="container-m50 display-flex">
                    <div id="hamburger-menu" className="hide-on-desktop" onClick={this.handleMenu}>
                        <div className="hamburger-menu-icon"></div>
                        <div className="hamburger-menu-icon"></div>
                        <div className="hamburger-menu-icon"></div>
                    </div>
                    <ul id="left-nav" className={this.state.menuIsOpen ? "" : "hide-on-mobile"}>
                        <li>Men</li>
                        <li>Women</li>
                    </ul>
                    <div id="logo"></div>
                    <ul id="right-nav">
                        <li>
                            <img src={shoppingBag} alt="" />
                        </li>
                        <li>
                            <img src={profilePic} alt="" />
                        </li>
                        <li className="hide-on-mobile">
                            About
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}