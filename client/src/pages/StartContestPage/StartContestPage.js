import React, { useEffect } from 'react'
import styles from './StartContestPage.module.sass'
import queryString from 'query-string';
import history from '../../history';
import { CONTEST_TYPE } from "../../constants";
import { Redirect } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import Header from "../../components/Header/Header";
import BundleForm from '../../components/Contest/BundleForm/BundleForm';
import ContestForm from '../../components/Contest/ContestForm/ContestForm';
import { selectContestTypeAction } from '../../actions/actionCreator';
function StartContestPage (props) {
  useEffect(() => {
    const typeFromQuery = queryString.parse(history.location.search).type;
    if(CONTEST_TYPE[typeFromQuery]){
      props.selectContestType(typeFromQuery);
    } else{
      history.replace({pathname: '/contest'});
    }
  });

  return(
    <div className={styles.container}>
      <Header/>
      <BundleForm/>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { user } = state.userReducer;
  const { contestType } = state.contestReducer;
  return {
    user,
    contestType,
  }
};
const mapDispatchToProps = (dispatch) => ({
  selectContestType: (type) => dispatch(selectContestTypeAction(type))
});

export default connect(mapStateToProps,mapDispatchToProps)(StartContestPage);