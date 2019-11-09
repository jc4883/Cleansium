import React from 'react';
import NavBar from '../nav_bar/nav_bar';


class DayIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  componentDidMount() {
    this.props.fetchDays();  
  }

  handleLogout(){
    this.props.logout();
  }

  // dayIncude?(arr) {
  //   let include = false;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].day_index)
  //   }
  // }

  render() {
    if (!this.props.days) {
      return null;
    }
    let days = Object.values(this.props.days);
    debugger
    return (
      <>
        <div>
          HERE
          <button onClick={this.handleLogout}></button>
        </div>
        <div>
          
        </div>
      </>
    )
  }
}

export default DayIndex;



