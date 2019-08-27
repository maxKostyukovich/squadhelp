import React from 'react';
import styles from './TypeCard.module.sass'
import history from '../../../history';
import { Link } from 'react-router-dom'
export default function ContestType(props){
  const clickHandler = () => {
    const location = {
      pathname: props.to,
      search: props.search,
    };
    history.push(location);
  };
    return(
        <div className={styles.container} onClick={clickHandler}>
            <img alt={"icons"} src={props.img}/>
            <h5>{props.title}</h5>
            <hr/>
            <span>{props.text}</span>
        </div>
    )
}