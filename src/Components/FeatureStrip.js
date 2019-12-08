import React, {Component} from 'react'

export default class FeatureStrip extends Component{


    render(){
        return(
                <div id="features-strip">
                    <span className="hide-on-mobile"><i className="fas fa-plane"></i>Secure Payment</span>
                    <span>Express Shipping</span>
                    <span>Free Returns</span>
                </div>
        )
    }
}