// import {getUserAction} from '../../actions/actionCreator';
// import connect from 'react-redux/es/connect/connect';
// const renderMainPage = (props) => {
//     console.log(props);
// };
//
// const mapStateToProps = (state) => {
//     const { user } = state.userReducer();
//     return {
//         user,
//     }
// };
// const mapDispatchToProps = (dispatch) => ({
//     getUserAction: () => dispatch(getUserAction()),
// });
//
// export default connect(mapStateToProps,mapDispatchToProps)(renderMainPage);

import  React, { Component }  from 'react';
import connect from 'react-redux/es/connect/connect';
import {getUserAction} from '../../actions/actionCreator';
import { STORAGE_KEYS } from '../../constants';
export default function (ComposedComponent) {
    class Authenticate extends Component {
        initUser(){
            if(!this.props.user.email) {
                this.props.getUserAction();
            }
        }
        componentDidMount() {
            if(localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE)){
                this.initUser();
            }
        }

        render() {
            return (
                <div>
                    { this.props.user.email ? <ComposedComponent isLogin={true} user={this.props.user} {...this.props}/> : <ComposedComponent isLogin={false} {...this.props} /> }
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        const { user, error } = state.userReducer;
        return {
            user,
            error
        }
    };
    const mapDispatchToProps = (dispatch) => ({
        getUserAction: () => dispatch(getUserAction()),
    });


    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Authenticate);
}