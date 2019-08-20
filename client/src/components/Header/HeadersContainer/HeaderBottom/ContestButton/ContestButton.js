import React from 'react';
import styles from './ContestButton.module.sass';
import { Link } from 'react-router-dom';
export default function ContestButton(props){
    return(
      <Link to={props.link}>
        <div className={styles.container}>
            <span>{props.text}</span>
        </div>
      </Link>
    )
}