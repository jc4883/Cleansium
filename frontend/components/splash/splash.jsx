import React from "react";
import Greeting from "../greeting/greeting";
import { Redirect } from "react-router-dom";
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signup: false, login: false };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleSignup() {
    this.setState({ signup: true });
  }

  handleLogin() {
    this.setState({ login: true });
  }

  render() {
    if (this.state.signup) {
      return <Redirect to="/signup" />;
    } else if (this.state.login) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="splash-page">

          <header>
            <div className="logo">
              <h1>Cleansium</h1>
            </div>
            <Greeting />
          </header>
          <img class="vege-background" src={window.background}/>
          <div className="root-page-text" >
            <h1>
              We're glad you could make it.
                    <br />
              Stay as long as you need
            </h1>

            <p>
                <strong>Trying to be healthier?</strong>&nbsp; 40% of American adults are obese, and we think <br />fast foods aren't helping. &nbsp;<strong>Try Cleansium:</strong> Feel livelier,
              stronger, better.<br />Try our 4 week challenge.
            </p>
            <button onClick={this.handleSignup}>Give Cleansium a Try</button>
          </div>
        </div>
      );
    }
  }
}

export default Splash;
