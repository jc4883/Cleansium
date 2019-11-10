import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';


class DayIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { toShow: false };
  } 

  handleClick() {
    this.setState({toShow: true});
  }

  render() {
    let buttonHTML = "";
    if (this.props.submitted === "true") {
        buttonHTML = "Edit"
    } else {
        buttonHTML = "Submit"
    }

    return (
        <div className="index_item" onClick={this.handleClick}>
            <button>{buttonHTML}</button>
            <h2>Day {this.props.dayIndex}</h2>
        </div>
    )
  }
}


export default DayIndexItem;