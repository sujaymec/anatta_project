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
      {
        original: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
        thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
      }
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