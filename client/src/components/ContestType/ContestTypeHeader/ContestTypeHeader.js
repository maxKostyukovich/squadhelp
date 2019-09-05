import React from 'react';
import styles from './ContestTypeHeader.module.sass'

export default function ContestType(props){
    return(
        <div className={styles.container} style={props.style}>
            <h3>{props.title.text}<span style={{fontWeight: "600"}}>{props.title.highlightText}</span></h3>
            <span className={styles.subText}>{props.description}</span>
            <hr style={props.hrStyle}/>
        </div>
    )
}