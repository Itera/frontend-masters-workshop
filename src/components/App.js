import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import './App.css';
import { AvatarImage } from './AvatarImage';
import { PartSelection } from './PartSelection';

const App = ({ selected, options, onChange }) => (
  <div className="App ">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Workshop</h1>
    </header>
    <div>
      <PartSelection
        selected={selected.eyes}
        options={options.eyes}
        name="eyes"
        onChange={onChange} />
      <PartSelection
        selected={selected.nose}
        options={options.noses}
        name="nose"
        onChange={onChange} />
      <PartSelection
        selected={selected.mouth}
        options={options.mouths}
        name="mouth"
        onChange={onChange} />
      <br />
      <AvatarImage
        eyes={selected.eyes}
        nose={selected.nose}
        mouth={selected.mouth}
        color="#0034FF"
      />
    </div>
  </div>
);

App.propTypes = {
  selected: PropTypes.shape({
    eyes: PropTypes.string.isRequired,
    nose: PropTypes.string.isRequired,
    mouth: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.shape({
    eyes: PropTypes.arrayOf(PropTypes.string).isRequired,
    noses: PropTypes.arrayOf(PropTypes.string).isRequired,
    mouths: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired
}

export default App;
