import React , { Component } from 'react';
import styles from './AdminPage.module.sass';
import { getUserAction } from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import List from '../../components/ForwardtoList/ForwardtoList';
import SubmitButton from "../../components/LoginForm/SubmitButton/SubmitButton";
import { Link } from 'react-router-dom';

class AdminPage extends Component{

    render(){
        return(
            <div>
                <List users={this.props.users}/>
                <Link to={'/'}>
                    <SubmitButton submitText={"HOME"}/>
                </Link>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserAction: () => dispatch(getUserAction()),
});

const mapStateToProps = (state) => {
    const { users, isFetching, err } = state.userReducer;
    return {
        users,
        isFetching,
        err
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminPage);
