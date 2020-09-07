import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ( { options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    }

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  },[])

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <article 
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </article>
    )
  });

  return (
    <section ref={ref} className="ui form">
      <article className="field">
        <label 
          className="label"
        >
          {label}
        </label>
        <article 
          className={`ui selection dropdown ${open ?'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <article 
            className="text"
          >
            {selected.label}
          </article>
          <article 
            className={`menu ${open ? 'visible transition' : ''}`}
          >
            {renderedOptions}
          </article>
        </article>
      </article>
    </section>
    )
};

export default Dropdown;