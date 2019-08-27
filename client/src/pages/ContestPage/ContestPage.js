import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../../history/'
import styles from './ContestPage.module.sass';
import ContestType from '../../components/ContestType/ContestType';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/Contest/ProgressBar/ProgressBar';
function ContestPage(props) {
    return (
      <div>
        <Header/>
        <ProgressBar steps={6} currentIndex={3} />
        <ContestType/>
      </div>
    );
}

export default ContestPage;