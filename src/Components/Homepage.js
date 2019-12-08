import React, {Component} from 'react';
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import ProductDetails from './ProductDetails/ProductDetails'
import FeatureStrip from './FeatureStrip';

export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            dummyvalue: 'dummy value'
        }
    }

    render(){
        return(
            <React.Fragment>
                <div id="top-black-banner">FREE US SHIPPING AND RETURN </div>
                <Navbar />
                <ProductDetails />
                <FeatureStrip />
                <Footer />
            </React.Fragment>
        )
    }
}