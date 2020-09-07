import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { options } from '../data/languages'

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <section>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language" 
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </section>
  );
}

export default Translate;