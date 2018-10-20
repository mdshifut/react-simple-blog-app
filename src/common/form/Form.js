import React, { Component } from 'react';
import InputGroup from './InputGroup';
import SelectInputGroup from './SelectInputGroup';
import RadioButtonGroup from './RadioButtonGroup';
import CheckboxGroup from './CheckboxGroup';
import TextareaGroup from './TextareaGroup';

class Form extends Component {
  render() {
    return (
      <form action="" onSubmit={this.props.submitHandeler}>
        {this.props.fields.map(field => {
          switch (field.type) {
            case 'select':
              return (
                <SelectInputGroup
                  key={field.name}
                  name={field.name}
                  info={field.info}
                  label={field.label}
                  required={field.required}
                  error={field.error}
                  options={field.options}
                  isSelected={field.isSelected}
                  placeholder={field.placeholder}
                  onChange={field.onChange}
                />
              );
              break;
            case 'checkbox':
              return (
                <CheckboxGroup
                  key={field.name}
                  name={field.name}
                  info={field.info}
                  label={field.label}
                  error={field.error}
                  options={field.options}
                  isChecked={field.isChecked}
                  onChange={field.onChange}
                />
              );
              break;
            case 'radio':
              return (
                <RadioButtonGroup
                  key={field.name}
                  name={field.name}
                  info={field.info}
                  label={field.label}
                  error={field.error}
                  options={field.options}
                  isSelected={field.isSelected}
                  onChange={field.onChange}
                />
              );
              break;
            case 'textarea':
              return (
                <TextareaGroup
                  key={field.name}
                  name={field.name}
                  info={field.info}
                  label={field.label}
                  value={field.value}
                  placeholder={field.placeholder}
                  error={field.error}
                  onChange={field.onChange}
                  required={this.required}
                />
              );
              break;
            default:
              return (
                <InputGroup
                  key={field.name}
                  name={field.name}
                  info={field.info}
                  value={field.value}
                  label={field.label}
                  placeholder={field.placeholder}
                  error={field.error}
                  type={field.type}
                  onChange={field.onChange}
                  required={this.required}
                />
              );
              break;
          }
        })}

        {this.props.children}
      </form>
    );
  }
}

export default Form;
