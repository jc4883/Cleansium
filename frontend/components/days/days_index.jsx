import React from "react";
import NavBar from "../nav_bar/nav_bar";

class ThingsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  componentDidMount() {}

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <>
        <div>HERE AT THINGS INDEX</div>
        <button onClick={this.handleLogout}></button>
      </>
    );
  }
}

export default ThingsIndex;
