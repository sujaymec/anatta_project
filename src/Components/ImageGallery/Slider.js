import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery'

import '../../Slider.css';
 
export default class Slider extends Component {
    constructor(props){
        super();
        this.state={
            infinite: false
        }
    }
 
  render() {
 
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];
 
    return (
        <div id="slider-container">
            <ImageGallery 
                showFullscreenButton= {false}
                showGalleryFullscreenButton= {false}
                showPlayButton= {false}
                showGalleryPlayButton= {false}
                items={images} 
            />            
        </div>

    );
  }
 
}