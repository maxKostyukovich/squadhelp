import React , { Component } from 'react';
import styles from './MainPage.module.sass';
import Header from '../../components/Header/Header';
import { getUserAction } from "../../actions/actionCreator";
import { STORAGE_KEYS } from '../../constants/';
import connect from 'react-redux/es/connect/connect';
class MainPage extends Component{

    render(){
        return(
            <div>
                <Header isLogin={this.props.isLogin}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserAction: () => dispatch(getUserAction()),
});

const mapStateToProps = (state) => {
    const { user, isFetching, error } = state.userReducer;
    return {
        user,
        isFetching,
        error
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);