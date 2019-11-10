import React from "react";
import NavBar from "../nav_bar/nav_bar";
import DayIndexItem from "./day_index_item";
import { Link } from "react-router-dom";

class DayIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.showDays = this.showDays.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.initialRendered = false;
  }

  handleLogout() {
    this.props.logout();
  }

  componentDidMount() {
    this.props.fetchDays();
  }

  handleLogout() {
    this.props.logout();
  }

  // dayIncude?(arr) {
  //   let include = false;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].day_index)
  //   }
  // }

  showDays() {
    let dayList = [];
    for (let i = 1; i <= 10; i++) {
      let found = false;
      let dayVals = Object.values(this.props.days);
      for (let j = 0; j < dayVals.length; j++) {
        if (i === dayVals[j].day_index) {
          let comment = dayVals[j].comment;
          let rating = dayVals[j].rating;
          let dayIndex = dayVals[j].day_index;
          dayList.push(
            <DayIndexItem
              comment={comment}
              rating={rating}
              dayIndex={dayIndex}
              submitted="true"
            />
          );
          found = true;
          break;
        }
      }
      if (found === false) {
        dayList.push(<DayIndexItem dayIndex={i} submitted="false" />);
      }
    }

    return dayList;
  }

  renderDays() {
    return this.showDays().map(ele => {
      return ele;
    });
  }

  render() {
    if (!this.initialRendered) {
      this.initialRendered = true;
      return null;
    }

    return (
      <>
        <div>
          <Link to="/days/form">This is a link to the create form</Link>
          HERE
          <button onClick={this.handleLogout}></button>
        </div>
        <ul>{this.renderDays()}</ul>
      </>
    );
  }
}

export default DayIndex;
