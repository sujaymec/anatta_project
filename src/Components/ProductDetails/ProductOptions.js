import React from 'react';
import RatingStars from '../StarRatings/StarRatings'

export default function ProductOptions(){
    return(
        <div id="product-options" className="">
            <div id="product-info"  className="display-flex w-100">
                <div className="w-50">
                    <p id="product-name">Red Canvas</p>
                    <p id="product-type">OCA LOW</p>
                </div>
                <div className="w-50">
                    <p id="product-price" className="text-align-right">&#36;79 USD</p>
                    <div id="product-reviews" className="text-align-right">
                        <RatingStars /> 154 Reviews
                    </div>
                </div>
            </div>

            <div id="product-select" className="display-flex flex-wrap w-100">
                <div className="gender-tab text-align-center active">MEN</div>
                <div className="tab-divider"></div>
                <div className="gender-tab text-align-center">WOMEN</div>
                <div id="select-color" className="w-100 p-15">
                    <p className="mb-15 fs-12">SELECT COLOR</p>
                    <div id="colors" className="display-flex w-100 flex-wrap">
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                        <span className="color"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}