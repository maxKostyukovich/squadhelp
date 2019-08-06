import React from 'react';
import styles from './ContestTypePage.module.sass';
import ContestType from '../../components/ContestType/ContestType';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/Contest/ProgressBar/ProgressBar';
function ContestTypePage(props) {
    return (
      <div>
          <Header/>
          <ProgressBar steps={6} currentIndex={3} />
          <ContestType/>
      </div>
    );
}

export default ContestTypePage;