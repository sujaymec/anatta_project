import React, {Component} from 'react';
import Navbar from './Navbar'

export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            dummyvalue: 'dummy value'
        }
    }

    render(){
        return(
            <React.Fragment>
                <div id="top-black-banner">FREE US SHIPPING AND RETURN </div>
                <Navbar />
            </React.Fragment>
        )
    }
}