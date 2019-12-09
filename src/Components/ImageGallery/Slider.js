import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios'

import '../../Slider.css';
 
export default class Slider extends Component {
    constructor(props){
        super();
        this.state={
            infinite: false,
            imagesAquired: false,
            imageArray: []
        }
    }

  fetchImages(){
    var self = this;

    axios.get('https://anatta-demo-app.herokuapp.com/api/images')
      .then(function (response) {
        // handle success
        var imageArray = []
        response.data.forEach(function(ele){
          var obj = {};
          obj.original = ele.url;
          obj.thumbnail = ele.url;
          imageArray.push(obj);
        })
        self.setState({
          imageArray: imageArray
        })
      });
      this.setState({
        imagesAquired: true
      })
    }
  
  componentDidMount(){
    if(!this.state.imagesAquired){
      this.fetchImages()
    }

  }
 
  render() {
 
    return (
        <div id="slider-container">
            <ImageGallery 
                showFullscreenButton= {false}
                showGalleryFullscreenButton= {false}
                showPlayButton= {false}
                showGalleryPlayButton= {false}
                items={this.state.imageArray} 
            />            
        </div>

    );
  }
 
}