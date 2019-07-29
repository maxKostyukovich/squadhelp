import React , { Component } from 'react';
import styles from './AdminPage.module.sass';
import {getUserAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
class AdminPage extends Component{

    render(){
        return(
            <div>
                {console.log(this.props)}
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
