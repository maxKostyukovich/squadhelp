import React , { Component } from 'react';
import styles from './LoginPage.module.sass';
import LoginForm from '../../components/LoginForm/LoginForm';
import {loginAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';

class LoginPage extends Component{
    render() {
        return (
            <div className={styles.container}>
                <LoginForm/>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     loginAction: (data) => dispatch(loginAction(data)),
// });
//
// const mapStateToProps = (state) => {
//     const { user, isFetching, error } = state.userReducer;
//     return {
//         user,
//         isFetching,
//         error
//     }
// };
export default LoginPage;