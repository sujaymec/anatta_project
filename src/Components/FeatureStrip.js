import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faBox, faPlane } from '@fortawesome/free-solid-svg-icons'

export default class FeatureStrip extends Component{


    render(){
        return(
                <div id="features-strip">
                    <span className="hide-on-mobile"><FontAwesomeIcon icon={faLock} />Secure Payment</span>
                    <span><FontAwesomeIcon icon={faPlane} />Express Shipping</span>
                    <span><FontAwesomeIcon icon={faBox} />Free Returns</span>
                </div>
        )
    }
}