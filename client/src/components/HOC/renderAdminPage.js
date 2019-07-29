import  React, { Component }  from 'react';
import connect from 'react-redux/es/connect/connect';
import { ROLE } from "../../constants";
import history from '../../history';
import { Redirect } from 'react-router-dom'
import {getUserAction, getAllUserAction} from '../../actions/actionCreator';
export default function (ComposedComponent) {
    class Authenticate extends Component {
        initUser = () => {
            if(!this.props.user.email) {
                this.props.getUserAction();
            }

            // if(this.props.user.role !== ROLE.ADMIN){
            //     console.log(this.props.user.role);
            //     history.push('/');
            // }
        };
        componentDidMount() {
            try {
                this.initUser();
                this.props.getAllUserAction();
            }catch (e) {
                console.log(e);
            }
        }

        renderPage(){
            if(this.props.user){
                if(this.props.user.role === ROLE.ADMIN ) {
                    return <ComposedComponent {...this.props}/>
                }else
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
        const { user, error, users } = state.userReducer;
        return {
            user,
            error,
            users
        }
    };
    const mapDispatchToProps = (dispatch) => ({
        getUserAction: () => dispatch(getUserAction()),
        getAllUserAction: () => dispatch(getAllUserAction()),
    });


    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Authenticate);
}