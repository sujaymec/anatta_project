import React, {Component} from 'react'
import Slider from "react-slick";
import placeholder from '../../Assets/images/cropped_placeholder.png'

export default class Carousel extends Component{
    render() {
        var settings = {
          dots: false
        };
        return (
          <div className="container">
            <Slider {...settings}>

              <div className="slide-div">
                <div className="slide-div-content">
                    <img src={placeholder} />
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;79 USD</p>                      
                </div>
                <div className="slide-div-content">
                    <img src={placeholder} /> 
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;98 USD</p>                      
                </div>
                <div className="slide-div-content">
                    <img src={placeholder} />
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;128 USD</p>                       
                </div>
                <div className="slide-div-content">
                    <img src={placeholder} />
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;54 USD</p>                       
                </div>
              </div>

              <div className="slide-div">
                <div className="slide-div-content">
                    <img src={placeholder} />
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;179 USD</p>                      
                </div>
                <div className="slide-div-content">
                    <img src={placeholder} /> 
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;68 USD</p>                      
                </div>
                <div className="slide-div-content">
                    <img src={placeholder} />
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;121 USD</p>                       
                </div>
                <div className="slide-div-content">
                    <img src={placeholder} />
                    <p className="recommended-name">White Canvas</p>                      
                    <p className="recommended-price">&#36;84 USD</p>                       
                </div>
              </div>

            </Slider>
          </div>
        );
      }    
}