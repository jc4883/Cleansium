import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class DayIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { toCreate: false, toShow: false };
  } 

  handleClick() {
      if (this.props.submitted === "true") {
          this.setState({toShow: true});
      } else {
          this.setState({toCreate: true});
      }
  }

  render() {
    if (this.state.toShow) {
        return <Redirect to={`/days/${this.props.dayId}/updateForm`}/>
    } else if (this.state.toCreate) {
        return <Redirect to={`/days/${this.props.dayIndex}/createForm`}/>
    }



    let buttonHTML = "";
    let comment = "";
    let rating = "";

    if (this.props.submitted === "true") {
        buttonHTML = "Edit";
        comment = this.props.comment;
        rating = `Rating: ${this.props.rating}`;
        if (this.props.rating == null) {
            rating = 'Rating: none';

        }
    } else {
        buttonHTML = "Submit";
    }

    let ratingColor = "";
    switch (this.props.rating) {
        case 1:
            ratingColor = "green";
            break;
        case 2:
            ratingColor = "yellow";
            break;
        case 3:
            ratingColor = "orange";
            break;
        case 4:
            ratingColor = "indianred";
            break;
        case 5:
            ratingColor = "maroon";
            break;
        default:
            break;
    }

    return (
        <div className={`index-item ${ratingColor}`} onClick={this.handleClick}>
            <h2>Day {this.props.dayIndex}</h2>
            <h4 className="rating-dynamic">{rating}</h4>
            <button>{buttonHTML}</button>
        </div>
    )
  }
}


export default DayIndexItem;