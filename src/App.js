import React, { useState } from 'react';

import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown'

import { options } from './data/options';
import { items } from './data/items';


export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
      <Dropdown 
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      ): null } 
    </div>
  )
};