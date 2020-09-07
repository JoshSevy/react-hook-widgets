import React, { useState } from 'react';

import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown'

import { options } from './data/options';
import { items } from './data/items';


export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown 
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  )
};