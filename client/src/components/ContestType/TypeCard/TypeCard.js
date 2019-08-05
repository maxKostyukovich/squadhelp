import React from 'react';
import styles from './TypeCard.module.sass'

export default function ContestType(props){
    return(
        <div className={styles.container}>
            <img alt={"icons"} src={props.img}/>
            <h5>{props.title}</h5>
            <hr/>
            <span>{props.text}</span>
        </div>
    )
}