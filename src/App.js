import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Avatar = (props) => (
  <div>
    <input type="text" name="username" placeholder="Username"
      value={props.username} onChange={props.onUsernameChange} /><br />
    <input type="range" min="50" max="200" name="size"
      value={props.size} onChange={props.onBananaFalls} /> {props.size} px <br />
    <img src={`https://api.adorable.io/avatars/${props.size}/${props.username}.png`} alt="Avatar" />
  </div>
);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: 100,
      username: "Pavol"
    }
  }

  usernameChanged = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  sizeChanged = (event) => {
    this.setState({
      size: event.target.value
    });
  }

  render() {
    return (
      <div className="App ">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Workshop</h1>
        </header>
        <div className="App-intro">
          <Avatar
            size={this.state.size}
            username={this.state.username}
            onUsernameChange={this.usernameChanged}
            onBananaFalls={this.sizeChanged}
          />
        </div>
      </div>
    );
  }
}

export default App;
