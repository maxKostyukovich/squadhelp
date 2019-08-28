import React from 'react'
import styles from './Input.module.sass'

function Input(props){
  const renderError = () => {
    if (props.meta.touched && props.meta.error) {
      return (
        <span>{props.meta.error}</span>
      );
    }
  };
  return(
    <div className={[styles.container, props.className].join(' ')}>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} placeholder={props.placeholder}/>
      {renderError()}
    </div>
  )
}
export default Input;