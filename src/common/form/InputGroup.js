import React from "react";
import shortid from "shortid";
import classnames from "classnames";
import propTypes from "prop-types";

const InputGroup = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
  info,
  error,
  required
}) => {
  let id = shortid.generate();
  return (
    <div className="form-group">
      <label htmlFor="{id}">{label}</label>
      <input
        id={id}
        type={type}
        className={classnames("form-control", { "is-invalid": error })}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  label: propTypes.string,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  required: propTypes.string
};
InputGroup.defaultProps = {
  type: "text",
  placeholder: "Enter Your Text",
  value: ""
};
export default InputGroup;
