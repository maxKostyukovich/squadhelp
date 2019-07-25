import React , { Component } from 'react';
import styles from './LoginPage.module.sass';
import LoginForm from '../../components/LoginForm/LoginForm';
import {loginAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
class LoginPage extends Component{
    constructor(props) {
        super(props);
    this.redirectAfterAuth = this.redirectAfterAuth.bind(this);
    }

    redirectAfterAuth(){
        if(this.props.user){
            this.props.history.push('/');
        }

    }
    render(){
        return(
            <div className={styles.container}>
                <LoginForm redirect={this.redirectAfterAuth} error={this.props.error} isFetching={this.props.isFetching} user={this.props.user} submitHandler={this.props.loginAction}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);