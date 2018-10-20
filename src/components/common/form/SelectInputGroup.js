import React from 'react';
import shortid from 'shortid';
import propTypes from 'prop-types';

const selectInputGroup = ({
  label,
  name,
  onChange,
  info,
  error,
  required,
  options,
  placeholder
}) => {
  let id = shortid.generate();
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="custom-select"
        id={id}
        name={name}
        onChange={onChange}
        required={required}
      >
        {placeholder && <option>{placeholder}</option>}
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            selected={option.isSelected}
          >
            {option.text}
          </option>
        ))}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

selectInputGroup.propTypes = {
  label: propTypes.string,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  required: propTypes.string,
  options: propTypes.array.isRequired
};
selectInputGroup.defaultProps = {
  type: 'text',
  value: ''
};
export default selectInputGroup;
