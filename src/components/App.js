import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { AvatarImage } from './AvatarImage';
import { PartSelection } from './PartSelection';

class App extends Component {

  componentDidMount() {
    fetch('http://api.myjson.com/bins/9jbc6')
      .then(response => response.json())
      .then(json => this.setState({
        options: {
          eyes: json.face.eyes,
          mouths: json.face.mouth,
          noses: json.face.nose
        }
      }))
      .catch(error => console.error(error));
  }

  constructor(props) {
    super(props);

    this.state = {
      size: 100,
      username: "Pavol",
      selected: {
        eyes: 'eyes1',
        nose: 'nose2',
        mouth: 'mouth1'
      },
      options: {
        eyes: [],
        mouths: [],
        noses: []
      }
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

  onChange = (event) => {
    this.setState({
      selected: {
        ...this.state.selected,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="App ">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Workshop</h1>
        </header>
        <div>
          <PartSelection selected={this.state.selected.eyes}
            options={this.state.options.eyes}
            name="eyes"
            onChange={this.onChange} />
          <PartSelection selected={this.state.selected.nose}
            options={this.state.options.noses}
            name="nose"
            onChange={this.onChange} />
          <PartSelection selected={this.state.selected.mouth}
            options={this.state.options.mouths}
            name="mouth"
            onChange={this.onChange} />
          <br />
          <AvatarImage
            eyes={this.state.selected.eyes}
            nose={this.state.selected.nose}
            mouth={this.state.selected.mouth}
            color="#0034FF"
          />
        </div>
      </div>
    );
  }
}

export default App;
