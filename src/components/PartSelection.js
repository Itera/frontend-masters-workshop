import React from 'react';
import PropTypes from 'prop-types';

export const PartSelection = ({ name, selected, options, onChange }) => (
  <select name={name} value={selected}
    onChange={onChange}>
    {options && options.map(option =>
      <option key={option} value={option}>{option}</option>)}
  </select>
);

PartSelection.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}