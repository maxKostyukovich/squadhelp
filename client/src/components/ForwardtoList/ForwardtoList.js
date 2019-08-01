import React, { Component } from 'react'
import styles from './ForwardtoList.module.sass';
import SelectedUsers from './SelectedUsers/SelectedUsers';
import List from "./List/List";
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import { getAllUserAction, bannedUserAction } from "../../actions/actionCreator";


class ForwardtoList extends Component {
    constructor(props){
        super(props);
        this.onCheckBoxClickHandler = this.onCheckBoxClickHandler.bind(this);
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    onCheckBoxClickHandler(user){
        this.props.bannedUserAction(user.id, user.isBanned);

        // const newUsers = _.cloneDeep(this.props.users);
        // const indexSelectedUser = this.findIndexUserById(newUsers,user.id);
        // if(indexSelectedUser>-1){
        //     newUsers[indexSelectedUser].isBanned = !newUsers[indexSelectedUser].isBanned;
        // }
        // //this.setState({users: newUsers});
        // const selected = newUsers.filter(u => u.isBanned );
        // this.setState({selectedUsers: selected});
    }
    render(){
        if(this.props.error){
            console.log(this.props.error);
        }
        return(
          <div className={styles.container}>

              <List clickHandler={this.onCheckBoxClickHandler} />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { users, error } = state.userReducer;
    return {
        error,
        users,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUserAction()),
    bannedUserAction: (id,isBanned) => dispatch(bannedUserAction(id, isBanned)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ForwardtoList);