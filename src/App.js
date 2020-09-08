import React, { useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

import { options } from './data/options';
import { items } from './data/items';


//Experimenting with different ways to Route with out using the React router library
// const showAccordian = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname ==='/list') {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// }


export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <section>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </section>
  );
};