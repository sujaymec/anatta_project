import React, {Component} from 'react'
import Carousel from './Carousel'

export default class Recommended extends Component{
    render(){
        return(
            <div id="recommended-section">
                <div className="container-m50">
                    <h1 className="mb-30">You'll Also Like</h1>
                    <Carousel />
                </div>
            </div>
        )
    }
}