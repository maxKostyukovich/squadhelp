import React from 'react';
import styles from './RadioButton.module.sass';

export default function InputRadio({ input, type, meta, ...props}) {
    return (
        <div className={styles.wrap}>
        <div className={styles.container}>
            <label className={styles.title} htmlFor={props.id}>
                {props.title}
                <span>
                    {props.description}
                </span>
            </label>
            <input type={type} className={styles.inputRadio} id={props.id} {...input}/>

        </div>
        </div>
    );
}