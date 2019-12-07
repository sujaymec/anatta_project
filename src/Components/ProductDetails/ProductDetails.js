import React, {Component} from 'react';
import ProductOptions from './ProductOptions'
import Slider from '../ImageGallery/Slider';

export default class ProductDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            product_list: ['one', 'two']
        }
    }

    render(){
        return(
            <div id="product-details" className="display-flex container-m50">
                <ProductOptions />
                <Slider />
            </div>
        )
    }
}