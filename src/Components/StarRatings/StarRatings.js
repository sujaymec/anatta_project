import React, {Component} from 'react'
import StarRatings from 'react-star-ratings'

export default class RatingStars extends Component {
    constructor(props){
        super(props);
        this.state={
            rating: 4
        }
    }

    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }
   
      render() {
        // rating = 2;
        return (
          <StarRatings
            rating={this.state.rating}
            starRatedColor="#7dc242"
            starEmptyColor="grey"
            starHoverColor="#7dc242"
            starDimension="15px"
            starSpacing="1px"
            numberOfStars={5}
            name='rating'
          />
        );
      }
}