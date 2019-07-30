import React , { Component } from 'react';
import styles from './AdminPage.module.sass';
import {getUserAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import List from '../../components/ForwardtoList/ForwardtoList';

class AdminPage extends Component{

    render(){
        return(
            <div>
                <List users={this.props.users}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserAction: () => dispatch(getUserAction()),
});

const mapStateToProps = (state) => {
    const { users, isFetching, error } = state.userReducer;
    return {
        users,
        isFetching,
        error
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AdminPage);
