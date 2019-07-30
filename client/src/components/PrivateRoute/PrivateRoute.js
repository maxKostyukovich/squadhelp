import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import {STORAGE_KEYS} from "../../constants";
import connect from 'react-redux/es/connect/connect';
import {getAllUserAction, getUserAction} from "../../actions/actionCreator";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN_TYPE)? (
            <Component {...props}/>
        ): (<Redirect
                to={{
                    pathname: "/login",
                    state: {from: props.location}
                }
                }
        />
        )
        }
    />
);

const mapStateToProps = (state) => {
    const { user, error, users } = state.userReducer;
    return {
        user,
        error,
        users
    }
};

return connect(
    mapStateToProps,
)(PrivateRoute);
