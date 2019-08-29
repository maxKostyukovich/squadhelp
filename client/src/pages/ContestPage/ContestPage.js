import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../../history/'
import styles from './ContestPage.module.sass';
import ContestType from '../../components/ContestType/ContestType';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/Contest/ProgressBar/ProgressBar';
import connect from 'react-redux/es/connect/connect';

function ContestPage(props) {

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h2>START A CONTEST</h2>
          <span>Launching a contest on Squadhelp is very simple. Select the type of contest
            you would like to launch from the list below. Provide a detailed brief and select
            a pricing package. Begin receiving submissions instantly!</span>
        </div>
        <ProgressBar steps={props.steps} currentIndex={props.currentStepIndex}/>
      </div>
      <ContestType/>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {steps, currentStepIndex} = state.contestReducer;
  return {
    steps,
    currentStepIndex,
  }
};

export default connect(mapStateToProps)(ContestPage);