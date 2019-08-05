import React from 'react';
import styles from './ContestTypeHeader.module.sass'

export default function ContestType(props){
    return(
        <div className={styles.container}>
            <h3>Our Most Popular <span style={{fontWeight: "600"}}>Categories</span></h3>
            <span className={styles.subText}>Pick from our most popular categories, launch a contest and begin receiving submissions right away</span>
            <hr/>
        </div>
    )
}