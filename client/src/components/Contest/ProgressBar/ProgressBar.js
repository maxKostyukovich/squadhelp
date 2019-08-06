import React from 'react'
import styles from './ProgressBar.module.sass'
import ProgressItem from './ProgressItem/ProgressItem';
export default function ProgressBar (props) {
    const renderBar = () => {
        let res = [];
        if(props.currentIndex === 0){
            res.push(<ProgressItem status={"In Progress"}/>);
        } else{
            res.push(<ProgressItem status={"Done"}/>);
        }
        for(let i = 1; i<props.steps;i++){
            if(i < props.currentIndex){
                res.push(<><span className={styles.bar}></span>
                    <ProgressItem status={"Done"}/></>)
            }
            if(i === props.currentIndex){
                res.push(<><span className={styles.bar}></span>
                    <ProgressItem status={"In Progress"}/></>)
            }
            if(i > props.currentIndex){
                res.push(<><span className={styles.bar}></span>
                    <ProgressItem/></>)
            }
        }
            return [...res];
    };
    return(
        <div className={styles.container}>
            { renderBar() }
        </div>
    )
}