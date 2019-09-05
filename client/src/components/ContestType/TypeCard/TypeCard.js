import React from 'react';
import styles from './TypeCard.module.sass'
import history from '../../../history';
import {Link} from 'react-router-dom'
import {nextContestStepAction} from '../../../actions/actionCreator'
import connect from 'react-redux/es/connect/connect'

function ContestType(props) {
  const clickHandler = () => {
    props.setNextStep(props.currentStepIndex + 1);
    const location = {
      pathname: props.to,
      search: props.search,
    };
    history.push(location);
  };
  return (
    <div className={styles.container} style={props.background} onClick={clickHandler}>
      <div>
        {props.img.map(value => <img key={value} alt={"icons"} src={value}/>)}
      </div>
      <h5>{props.title}</h5>
      <hr/>
      <span>{props.text}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setNextStep: (nextStep) => dispatch(nextContestStepAction(nextStep))
});
const mapStateToProps = (state) => {
  const {currentStepIndex} = state.contestReducer;
  return {
    currentStepIndex,
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(ContestType);