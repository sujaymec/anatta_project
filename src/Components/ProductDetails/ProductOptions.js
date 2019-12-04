import React, {Component} from 'react'

export default function ProductOptions(){
    return(
        <div id="product-options" className="display-flex">
            <div className="w-50">
                <p id="product-name">Red Canvas</p>
                <p id="product-type">OCA LOW</p>
            </div>
            <div className="w-50">
                <p id="product-price">&#36; 179 USD</p>
                <p id="product-reviews">OCA LOW</p>
            </div>

        </div>
    )
}