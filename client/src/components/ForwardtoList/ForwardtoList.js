import React, { Component } from 'react'
import styles from './ForwardtoList.module.sass';
import SelectedUsers from './SelectedUsers/SelectedUsers';
import List from "./List/List";
import _ from 'lodash'


class ForwardtoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedUsers: [],
        };
        this.onCheckBoxClickHandler = this.onCheckBoxClickHandler.bind(this);
    }

    findIndexUserById(users,id){
        return users.findIndex(x => x.id == id);
    }
    onCheckBoxClickHandler(user){
        const newUsers = _.cloneDeep(this.props.users);
        const indexSelectedUser = this.findIndexUserById(newUsers,user.id);
        if(indexSelectedUser>-1){
            newUsers[indexSelectedUser].isBanned = !newUsers[indexSelectedUser].isBanned;
        }
        //this.setState({users: newUsers});
        const selected = newUsers.filter(u => u.isBanned );
        this.setState({selectedUsers: selected});
    }
    render(){
        return(
          <div className={styles.container}>
              <SelectedUsers selectedUsers={this.state.selectedUsers}/>
              <List clickHandler={this.onCheckBoxClickHandler} users={this.props.users}/>
          </div>
        );
    }
}
export default ForwardtoList;