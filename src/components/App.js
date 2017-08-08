import React, { Component } from 'react';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Batch Maker, a recipe making site!</h1>
        <div className="signup">
          <h2>Sign Up!</h2>
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
