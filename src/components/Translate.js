import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import { options } from '../data/languages'

//API KEY only work if app is on localhost:3000 
//

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
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert
        language={language}
        text={text}
      />
    </section>
  );
}

export default Translate;