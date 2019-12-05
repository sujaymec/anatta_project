import React, {Component} from 'react'
import StarRatings from 'react-star-ratings'

export default class RatingStars extends Component {
    constructor(props){
        super(props);
        this.state={
            rating: 3
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
            starRatedColor="gold"
            starEmptyColor="grey"
            starHoverColor="gold"
            starDimension="15px"
            starSpacing="3px"
            numberOfStars={5}
            name='rating'
          />
        );
      }
}