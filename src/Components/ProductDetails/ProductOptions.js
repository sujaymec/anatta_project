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
                        <span className="color white"></span>
                        <span className="color navy"></span>
                        <span className="color black"></span>
                        <span className="color red"></span>
                        <span className="color yellow"></span>
                        <span className="color darkgrey"></span>
                        <span className="color green"></span>
                        <span className="color dual"></span>
                        <span className="color pink"></span>
                        <span className="color skyblue"></span>
                        <span className="color brown"></span>
                    </div>
                </div>

                <div id="select-size" className="w-100 p-15">
                    <p className="mb-15 fs-12">SELECT SIZE</p>
                    <div id="sizes" className="display-flex w-100 flex-wrap">
                        <span className="size-box active">5</span>
                        <span className="size-box">5.5</span>
                        <span className="size-box active">6</span>
                        <span className="size-box">6.5</span>
                        <span className="size-box">7</span>
                        <span className="size-box active">7.5</span>
                        <span className="size-box active">8</span>
                        <span className="size-box">8.5</span>
                        <span className="size-box">9</span>
                        <span className="size-box active">9.5</span>
                        <span className="size-box">10</span>
                        <span className="size-box">10.5</span>
                        <span className="size-box">11</span>
                    </div>
                </div>


            </div>
                <button id="add-to-bag">ADD TO BAG</button>
        </div>
    )
}