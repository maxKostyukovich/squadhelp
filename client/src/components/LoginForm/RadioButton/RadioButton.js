import React from 'react';
import styles from './RadioButton.module.sass';

export default function InputRadio({ input, type, meta, ...props}) {
    return (
        <div className={styles.wrap}>
        <div className={styles.container}>
            <input type={type} className={styles.inputRadio} id={props.id} {...input}/>
            <div className={styles.label}>
                <span className={styles.title}>
                     {props.title}
                </span>
                <span className={styles.description}>
                    {props.description}
                </span>
            </div>
        </div>
        </div>
    );
}