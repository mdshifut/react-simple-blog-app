import React from 'react';
import shortid from 'shortid';
import propTypes from 'prop-types';

const RadioButtonGroup = ({ label, name, onChange, info, error, options }) => {
  let id = shortid.generate();

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div>
        {options.map(option => {
          let id = shortid.generate();
          return (
            <div
              key={option.value}
              className="custom-control custom-radio custom-control-inline"
            >
              <input
                type="radio"
                id={id}
                name={name}
                className="custom-control-input"
                value={option.value}
                selected={option.isSelected}
              />
              <label className="custom-control-label" htmlFor={id}>
                {option.text}
              </label>
            </div>
          );
        })}
      </div>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

RadioButtonGroup.propTypes = {
  label: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  required: propTypes.string,
  options: propTypes.array.isRequired
};

export default RadioButtonGroup;
