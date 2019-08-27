import React from 'react'
import styles from './BundleForm.module.sass'
import connect from 'react-redux/es/connect/connect'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'

function BundleForm(props){
  return (
    <div className={styles.container}>

    </div>
  )
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => ({

});

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
  form: 'bundleForm',
}))(BundleForm);