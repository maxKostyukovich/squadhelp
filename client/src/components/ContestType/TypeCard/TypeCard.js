import React from 'react';
import styles from './TypeCard.module.sass'
import history from '../../../history';
export default function ContestType(props){
  const clickHandler = () => {
    // console.log(history);
    // const location ={
    //   search: 'qwe=123&q=1'
    // };
    // history.push(location);
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