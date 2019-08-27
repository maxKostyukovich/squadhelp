import React, { useEffect } from 'react'
import styles from './StartContestPage.module.sass'
import queryString from 'query-string';
import history from '../../history';
import { CONTEST_TYPE } from "../../constants";
import _ from 'lodash'
import { Redirect } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import Header from "../../components/Header/Header";
import { selectContestTypeAction } from '../../actions/actionCreator';
function StartContestPage (props) {
  useEffect(() => {
    const typeFromQuery = queryString.parse(history.location.search).type;
    console.log(CONTEST_TYPE[typeFromQuery]);
    if(CONTEST_TYPE[typeFromQuery]){
      props.selectContestType(typeFromQuery);
    } else{
      history.replace({pathname: '/contest'});
    }
  });

  return(
    <div className={styles.container}>
      <Header/>

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