import React from 'react';
import styles from './ContestButton.module.sass';

export default function ContestButton(props){
    return(
        <div className={styles.container}>
            <span>{props.text}</span>
        </div>
    )
}