import React, {Component} from 'react';
import profile from '../Assets/images/icon-profile.png'

export default class Navbar extends Component{

    render(){
        return(
            <div id="navbar">
                <ul id="left-nav">
                    <li>Men</li>
                    <li>Women</li>
                </ul>
                <div id="logo"></div>
                <ul>
                    <li>
                        <img src={profile} />
                    </li>
                    <li>
                        <img src="" />
                    </li>
                </ul>
            </div>
        )
    }
}