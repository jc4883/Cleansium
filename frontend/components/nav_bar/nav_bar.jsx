import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  handleDropDown() {
    document.getElementById("avatar-dropdown").classList.toggle("show");
    //document.getElementById("triangle-boy").classList.toggle("show-triangle-boy")
  }
  render() {
    return (
      <nav className="navbar">
        <div>
          <img src={window.broom} alt=""/>
          <h1>Cleansium</h1>
        </div>
        <button onClick={this.handleLogout}>Logout</button>
      </nav>
    )
  }
}


export default NavBar;


