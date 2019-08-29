import React from 'react'
import styles from './ContestForm.module.sass'
import connect from 'react-redux/es/connect/connect'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import Input from '../Inputs/Input/Input';
import { isRequireValidation } from '../../../utils/validation/validationFields';
import Buttons from "../Buttons/Buttons";

function ContestForm(props){
  const renderFields = () => {

  };
  return(
    <div>

    </div>
  )
}

const mapStateToProps = (state) => {
  const { contestType } = state.contestReducer;
  return {
    contestType,

  }
};

export default compose(connect(mapStateToProps), reduxForm({
  form: 'contestForm',
}))(ContestForm)