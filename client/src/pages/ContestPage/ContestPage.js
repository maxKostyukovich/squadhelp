import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import history from '../../history/'
import styles from './ContestPage.module.sass';
import ContestType from '../../components/ContestType/ContestType';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/Contest/ProgressBar/ProgressBar';
import connect from 'react-redux/es/connect/connect';
import ContestHeaderWithProgressBar
  from "../../components/Contest/ContestHeaderWithProgressBar/ContestHeaderWithProgressBar";

function ContestPage(props) {
  return (
    <div>
      <Header/>
      <ContestHeaderWithProgressBar
        steps={props.steps}
        currentStepIndex={props.currentStepIndex}
        page={'select'}
      />
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