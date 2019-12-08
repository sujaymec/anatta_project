import React, {Component} from 'react'
import Slider from "react-slick";

export default class Carousel extends Component{
    render() {
        var settings = {
          dots: false
        };
        return (
          <div className="container">
            <Slider {...settings}>
              <div>
                <div style={{float:'left'}}><img src="http://placekitten.com/g/400/200" /></div>
                <div style={{float:'left'}}><img src="http://placekitten.com/g/400/200" /></div>
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
            </Slider>
          </div>
        );
      }    
}