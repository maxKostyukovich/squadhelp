import React , { Component } from 'react';
import styles from './LoginForm.module.sass';
import LoginHeader from './LoginHeader/LoginHeader';
import Form from './Form/Form';
import { loginAction } from "../../actions/actionCreator";

class LoginForm extends Component{

    render(){
        return(
            <div className={styles.container}>
                <LoginHeader link={"/signup/"} text={"Signup"}/>
                <Form/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginAction(data)),
});

const mapStateToProps = (state) => {
    const { user, isFetching, error } = state.loginReducer;
    return {
        user,
        isFetching,
        error
    }
};
        export default LoginForm;