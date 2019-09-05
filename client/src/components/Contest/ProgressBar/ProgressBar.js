import React from 'react'
import styles from './ProgressBar.module.sass'
import ProgressItem from './ProgressItem/ProgressItem';
export default function ProgressBar (props) {
    const renderBar = () => {
        let res = [];
        if(props.currentIndex === 0){
            res.push(<ProgressItem key={0} status={"In Progress"}/>);
        } else{
            res.push(<ProgressItem key={0} status={"Done"}/>);
        }
        for(let i = 1; i<props.steps;i++){
            if(i < props.currentIndex){
                res.push(<React.Fragment key={i}><span className={styles.bar}></span>
                    <ProgressItem status={"Done"}/></React.Fragment>)
            }
            if(i === props.currentIndex){
                res.push(<React.Fragment key={i}><span className={styles.bar}></span>
                    <ProgressItem status={"In Progress"}/></React.Fragment>)
            }
            if(i > props.currentIndex){
                res.push(<React.Fragment key={i}><span className={styles.bar}></span>
                    <ProgressItem/></React.Fragment>)
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