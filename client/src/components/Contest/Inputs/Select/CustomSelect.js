import React from 'react'
import styles from './CustomSelect.module.sass'
import Select from 'react-select'
function CustomSelect (props){
  return (
    <div className={props.className}>
      <label>{ props.label }</label>
      <Select  value={{label: 'Accounting', value: 'Accounting'}} {...props.input} {...props} onBlur={() => { return props.input.onBlur() }} className={styles.select}/>
    </div>
  )
}
export default CustomSelect;