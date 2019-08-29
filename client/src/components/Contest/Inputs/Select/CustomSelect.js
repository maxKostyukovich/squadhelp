import React from 'react'
import styles from './CustomSelect.module.sass'
import Select from 'react-select'

function CustomSelect(props) {
  const renderError = () => {
    if (props.meta.touched && props.meta.error) {
      return (
        <span>{props.meta.error}</span>
      );
    }
  };
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <Select
        {...props.input}
        {...props}
        onBlur={() => {
          return props.input.onBlur()
        }}
        className={styles.select}/>
      {renderError()}
    </div>
  )
}

export default CustomSelect;