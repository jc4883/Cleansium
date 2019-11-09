import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../greeting/greeting'
import { Redirect } from 'react-router-dom';
class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {signup: false, login: false};
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleSignup() {
    this.setState({signup: true});
  }

  handleLogin() {
    this.setState({login: true})
  }

  render() {
    debugger
    if (this.state.signup) {
      return <Redirect to="/signup"/>
    } else if (this.state.login) {
      return <Redirect to="/login"/>
    } else {
      return (
        <nav className="splash-page" >
          <header>
            <div className="logo">
              <h1>Title</h1>
            </div>
            <Greeting/>
          </header>
          <img src={window.bonsai_background}/>
          <div className="root-page-text" >



            <button onClick={this.handleSignup}>Give it a Try</button>
          </div>
          
        </nav>
      )
    }
  }
}


export default Splash;