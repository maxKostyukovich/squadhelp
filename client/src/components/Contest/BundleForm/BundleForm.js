import React from 'react'
import styles from './BundleForm.module.sass'
import connect from 'react-redux/es/connect/connect'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
//import Select from 'react-select'
import CustomSelect from '../Inputs/Select/CustomSelect'
import { typeOfIndustry } from '../../../constants/optionsForSelect';
import Input from '../Inputs/Input/Input';
import { isRequireValidation } from '../../../utils/validation/validationFields';
import Buttons from "../Buttons/Buttons";

function BundleForm(props){
  const clickHandler = (data) => {
    console.log(data);
  };
  const createOptions = (arrOfOptions) => {
    return arrOfOptions.map(value => {
        return { value: value, label: value }
      }
    )
  };
  const bundleTitle = props.contestType.replace(/_/g,'+');
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Field className={styles.field} name={'bundleTitle'} type={'text'} placeholder={bundleTitle} label={'Title of your bundle'} validate={[isRequireValidation]} component={Input}  />
          <Field className={styles.field} label={"Select the industry associated with their venture"} name={'typeOfIndustry'} type={'select'} options={createOptions(typeOfIndustry)} validate={[isRequireValidation]} component={CustomSelect} />
        </div>
      </div>
      <Buttons onNextSubmit={props.handleSubmit(clickHandler)} text={'You almost finished contest creation'}/>
    </div>
  )
}

const mapStateToProps = (state) => {
const { contestType } = state.contestReducer;
return {
  contestType,
}
};

const mapDispatchToProps = (dispatch) => ({

});

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
  form: 'bundleForm',
}))(BundleForm);