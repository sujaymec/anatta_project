import React, {Component} from 'react'

export default class Footer extends Component{


    render(){
        return(
            <div id="footer">
                <div className="container-m50 display-flex" style={{justifyContent:"end"}}>
                    <ul className="footer-list-block">
                        <li className="list-header">Men</li>
                        <li className="">OCA Low</li>
                        <li className="">OCA High</li>
                        <li className="">CATIBA Low</li>
                        <li className="">CATIBA High</li>
                    </ul>
                    <ul className="footer-list-block">
                        <li className="list-header">Women</li>
                        <li className="">OCA Low</li>
                        <li className="">OCA High</li>
                        <li className="">CATIBA Low</li>
                        <li className="">CATIBA High</li>
                    </ul>
                    <ul className="footer-list-block">
                        <li className="list-header">Support</li>
                        <li className="">FAQ</li>
                        <li className="">Returns</li>
                        <li className="">Live Chat</li>
                    </ul>
                    <ul className="footer-list-block">
                        <li className="list-header">About</li>
                        <li className="">Mission</li>
                        <li className="">Vision</li>
                        <li className="">Future</li>
                    </ul>
                </div>
            </div>
        )
    }
}