import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// importing action creator
import { signup, login } from './../actions/index';

import './../styles/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this._handleUsername = this._handleUsername.bind(this);
    this._handlePassword = this._handlePassword.bind(this);
  }
  _handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }
  _handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

// this is a refactor of the two custom methods
// _handleInput(event) {
  // let obj = {};
  // let key = event.target.name;
  // obj[key] = event.target.value;
  // this.setState(obj);
// }


  render() {
    return (
      <div className="App">
        <h1>Welcome to Batch Maker, a recipe making site!</h1>
        <div className="signup">
          <h2>Sign Up!</h2>
          <form onSubmit={(event)=>{event.preventDefault(); this.props.signup(JSON.stringify(this.state));}}>
            <div>
              <label>Username</label>
              <input type="email" onChange={ this._handleUsername }/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" onChange={ this._handlePassword }/>
            </div>

            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
        <div className="login">
          <h2>Log In!</h2>
          <form onSubmit={(event)=>{event.preventDefault(); this.props.login(this.state)}}>
            <div>
              <label>Username</label>
              <input type="email"  onChange={ this._handleUsername }/>
            </div>
            <div>
              <label>Password</label>
              <input type="password"  onChange={ this._handlePassword } />
            </div>

            <div>
              <input type="submit" />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

// helper function
function mapDispatchToProps(dispatch){
  return bindActionCreators({ signup, login }, dispatch);
}
// the first argument is null because we're not using mapStateToProps, the second parenthesis is the component that you're on, so this is App
export default connect(null, mapDispatchToProps)(App);

// export default App;
