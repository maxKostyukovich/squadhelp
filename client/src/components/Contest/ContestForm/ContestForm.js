import React from 'react'
import styles from './ContestForm.module.sass'
import connect from 'react-redux/es/connect/connect'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import Input from '../Inputs/Input/Input';
import { isRequireValidation } from '../../../utils/validation/validationFields';
import Buttons from "../Buttons/Buttons";
import { NAME } from '../../../constants/CotestFormsText'
import CustomSelect from "../Inputs/Select/CustomSelect";

function ContestForm(props){
  const currContestType = props.contestType.split('+')[props.currentStepIndex-2];
  console.log(currContestType);
  const renderFields = () => {
    return NAME.map((value) => {
      if(value.type === 'text'){
        return <Field className={styles.field} name={value.name} placeholder={value.placeholder} label={value.label} validate={value.validate} component={Input}/>
      }
      if(value.type === 'select'){
        return <Field className={styles.field} options={value.options} name={value.name} label={value.label} validate={value.validate} component={CustomSelect} />
      }
      if(value.type === 'textarea'){
        return <Field placeholder={value.placeholder} validate={value.validate} name={value.name} label={value.label} component={'textarea'}/>
      }
    })
  };
  return(
    <div className={styles.container}>
      <div className={styles.wrap}>
        {renderFields()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { contestType, currentStepIndex } = state.contestReducer;
  return {
    contestType,
    currentStepIndex,
  }
};

export default compose(connect(mapStateToProps), reduxForm({
  form: 'contestForm',
}))(ContestForm)