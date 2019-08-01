import  React, { Component }  from 'react';
import connect from 'react-redux/es/connect/connect';
import { ROLE } from "../../constants";
import history from '../../history';
import { Redirect } from 'react-router-dom'
import {getUserAction, getAllUserAction} from '../../actions/actionCreator';
import { STORAGE_KEYS } from "../../constants";

export default function (ComposedComponent) {
    class Authenticate extends Component {
        renderPage(){
            if(this.props.user.role){
                if(this.props.user.role === ROLE.ADMIN ) {
                    return <ComposedComponent {...this.props}/>
                } else
                    return <Redirect to="/"/>
            }
            return null;
        }

        render() {
            return (
                <div>
                    { this.renderPage() }
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        const { user } = state.userReducer;
        return {
            user,
        }
    };



    return connect(mapStateToProps)(Authenticate);
}