import React from 'react';
import RatingStars from '../StarRatings/StarRatings'

export default function ProductOptions(){
    return(
        <div id="product-options" className="display-flex grey-background">
            <div className="w-50">
                <p id="product-name">Red Canvas</p>
                <p id="product-type">OCA LOW</p>
            </div>
            <div className="w-50">
                <p id="product-price" className="text-align-right">&#36;79 USD</p>
                <div id="product-reviews" className="text-align-right"><RatingStars /> 154 Reviews</div>
            </div>

        </div>
    )
}