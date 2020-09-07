import React from 'react';

const Dropdown = ( { options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
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
    <section className="ui form">
      <article className="field">
        <label 
          className="label"
        >
        Select a Color:
        </label>
        <article 
          className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <article 
            className="text"
          >
            {selected.label}
          </article>
          <article 
            className="menu visible transition"
          >
            {renderedOptions}
          </article>
        </article>
      </article>
    </section>
    )
};

export default Dropdown;