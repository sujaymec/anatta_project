import React, {Component} from 'react'

export default class Footer extends Component{


    render(){
        return(
            <div>
                <div id="features-strip">
                    <span className="hide-on-mobile"><i class="fas fa-plane"></i>Secure Payment</span>
                    <span>Express Shipping</span>
                    <span>Free Returns</span>
                </div>
            </div>
        )
    }
}