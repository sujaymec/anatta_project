import React, {Component} from 'react'
import facebookLogo from '../../Assets/images/facebook-logo.png'

export default class Footer extends Component{


    render(){
        return(
            <div id="footer">
                <div className="container-m50 display-flex" id="footer-inner" style={{justifyContent:"end"}}>
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
                    <ul className="footer-list-block">
                        <li className="list-header">Pop up stories</li>
                        <li className="">Find near you</li>
                        <li className="">Register</li>
                        <li className="mt-30">
                            <input type="text" placeholder="Find your sneakers here" />
                        </li>
                    </ul>
                    <ul className="footer-list-block">
                        <li className="list-header">Newsletter</li>
                        <li className="">
                            <input type="text" placeholder="Enter email" />
                            <button id="join-us-btn">JOIN US</button>
                        </li>
                        <li className="mt-30">
                            <img src={facebookLogo} style={{marginTop:"25px"}} alt="" />
                        </li>
                    </ul>
                </div>

                <div className="container-m50" style={{marginTop:"50px"}}>
                    <hr style={{border: "1px solid #3a3a3a"}} />
                    <p id="copyright-text" className="text-align-center">Copyright &copy; 2019 CARIUMA. All Rights Reserved. &nbsp;  
                        <a href="#">Terms of use</a> | <a href="#">Privacy Policy</a>
                    </p>
                </div>

            </div>
        )
    }
}