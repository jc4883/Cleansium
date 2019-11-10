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
        debugger
        return <Redirect to={`/days/${this.props.dayId}/form`}/>
    } else if (this.state.toCreate) {
        debugger
        return <Redirect to={`/days/${this.props.dayIndex}/form`}/>
    }

    let buttonHTML = "";
    let comment = "";
    let rating = "";

    if (this.props.submitted === "true") {
        buttonHTML = "Edit";
        comment = this.props.comment;
        rating = this.props.rating;
    } else {
        buttonHTML = "Submit";
    }

    return (
        <div className="index-item" onClick={this.handleClick}>
            <h2>Day {this.props.dayIndex}</h2>
            <h3>{comment}</h3>
            <h3>{rating}</h3>
            <button>{buttonHTML}</button>
        </div>
    )
  }
}


export default DayIndexItem;