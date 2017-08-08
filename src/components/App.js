import React, { Component } from 'react';
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
  render() {
    return (
      <div className="App">
        <h1>Welcome to Batch Maker, a recipe making site!</h1>
        <div className="signup">
          <h2>Sign Up!</h2>
          <form>
            <div>
              <label>Username</label>
              <input type="text" value={ this.state.username } onChange={ this._handleUsername }/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" value={ this.state.password } onChange={ this._handlePassword }/>
            </div>
          </form>
        </div>
        <div className="login">
          <h2>Log In!</h2>
          <form>
            <div>
              <label>Username</label>
              <input type="text" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
