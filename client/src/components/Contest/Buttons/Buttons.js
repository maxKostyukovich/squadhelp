import React from 'react'
import styles from './Buttons.module.sass';

function Buttons(props) {
  return (
    <div className={styles.container}>
      <span>{props.text}</span>
      <div className={styles.buttons}>
        <div className={[styles.button, styles.backButton].join(' ')}>
          <span>Back</span>
        </div>
        <div className={[styles.button, styles.nextButton].join(' ')} onClick={props.onNextSubmit}>
          <span>Next</span>
        </div>
      </div>
    </div>
  )
}
export default Buttons;