import React, { useState } from 'react';

import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

import { options } from './data/options';
import { items } from './data/items';


export default () => {
  return (
    <section>
      <Translate />
    </section>
  )
};