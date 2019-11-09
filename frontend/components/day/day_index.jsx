import React from "react";
import NavBar from "../nav_bar/nav_bar";
import { Link } from "react-router-dom";

class DayIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.showDays = this.showDays.bind(this);
    this.renderDays = this.renderDays.bind(this);
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
    for (let i = 0; i < 4; i++) {
      let found = false;
      for (let j = 0; j < Object.values(this.props.days).length; i++) {
        debugger;
        if (i === this.props.days[j].day_index) {
          dayList.push(<li>WE FOUND ONE!</li>);
          found = true;
          break;
        }
      }
      if (found === false) {
        dayList.push(<li>THIS IS AN LI</li>);
      }
    }
    debugger;
    return dayList;
  }

  renderDays() {
    return this.showDays().map(ele => {
      return ele;
    });
  }

  render() {
    debugger;
    if (!this.props.days) {
      return null;
    }

    debugger;
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
