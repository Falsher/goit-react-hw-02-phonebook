import React from 'react';
import './css/filter.css';
const Filter = ({ value, onChange }) => (
  <div className="filter">
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
