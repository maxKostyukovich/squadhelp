import React from 'react'
import styles from "./ContestHeaderWithProgressBar.module.sass";
import ProgressBar from "../ProgressBar/ProgressBar";
import headerData from '../../../constants/TextForContestHeaders'

function ContestHeaderWithProgressBar (props) {
  let data;
  headerData.map((value) => {
    if(value.page === props.page)
      data = value;
  });
  return(
  <div className={styles.container}>
    <div className={styles.containerText}>
      <h2>{data.title}</h2>
      <span>{data.description}</span>
    </div>
    <ProgressBar steps={props.steps} currentIndex={props.currentStepIndex}/>
  </div>
  )
}
export default ContestHeaderWithProgressBar;