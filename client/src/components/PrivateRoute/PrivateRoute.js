import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import {STORAGE_KEYS} from "../../constants";
import connect from 'react-redux/es/connect/connect';
import {getAllUserAction, getUserAction} from "../../actions/actionCreator";

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

const PrivateRoute = ({component: Component, ...rest}) => {
    if (isEmpty(rest.user)) {
        rest.getUserAction();
    }
    return (
        <Route
            {...rest}
            render={props => localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE) ? (
                <Component {...props}/>
            ) : (<Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }
                    }
                />
            )
            }
        />);
};

const mapStateToProps = (state) => {
    const { user, error } = state.userReducer;
    return {
        user,
        error,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getUserAction: () => dispatch(getUserAction()),
});


export default connect(mapStateToProps,mapDispatchToProps)(PrivateRoute);
