import React from 'react'
import styles from './BundleForm.module.sass'
import connect from 'react-redux/es/connect/connect'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
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
          <Field
            className={styles.field}
            name={'title'}
            type={'text'}
            placeholder={bundleTitle}
            label={'Title of your bundle'}
            validate={[isRequireValidation]}
            component={Input}
          />
          {props.contestType.indexOf('NAME') === -1 &&
          <Field
            className={styles.field}
            name={'name'}
            type={'text'}
            placeholder={'e.g. Marketing Platform for Small businesses'}
            label={'Name of the company / business?'}
            validate={[isRequireValidation]}
            component={Input}
          />
          }
          <Field
            className={styles.field}
            label={"Select the industry associated with their venture"}
            name={'typeOfIndustry'} type={'select'}
            options={createOptions(typeOfIndustry)}
            validate={[isRequireValidation]}
            component={CustomSelect}
          />
          <Field
            className={styles.field}
            name={'targetCustomers'}
            type={'text'}
            placeholder={'i.e designer, developers'}
            label={'Who are your target customers?'}
            validate={[isRequireValidation]}
            component={Input}
          />
        </div>
      </div>
      <div className={styles.container} style={{backgroundColor: '#fff',  borderTop: '1px solid #eee' }}>
        <div className={styles.wrap}>
          <Buttons onNextSubmit={props.handleSubmit(clickHandler)} text={'You almost finished contest creation'}/>
        </div>
      </div>
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