import React from 'react'
import styles from './ProgressItem.module.sass'

export default function ProgressBar (props) {

    const initialStyle = [styles.item];
    if(!props.status){
        initialStyle.push(styles.progressItem);
    }
    if(props.status === "In Progress"){
        initialStyle.push(styles.inProgress)
    }
    if(props.status === "Done"){
        initialStyle.push(styles.isDone);
    }
    let finallyStyle = initialStyle.join(' ');
    return(
        <div className={finallyStyle}>
            <span className={styles.label} ><i className="fas fa-check"></i></span>
        </div>
    )
}