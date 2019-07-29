import React, { Component } from 'react'
import styles from './ForwardtoList.module.sass';
import SelectedUsers from './SelectedUsers/SelectedUsers';
import List from "./List/List";
import _ from 'lodash'
// import usersFromDb from '../../users';
// const users = usersFromDb.map(user=> (
//         {
//             ...user,
//             isChecked: false
//         }
//     )
// );
const users = {};
class ForwardtoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedUsers: [],
            users: users
        };
        this.onCheckBoxClickHandler = this.onCheckBoxClickHandler.bind(this);

    }

    findIndexUserById(users,id){
        return users.findIndex(x => x.id==id);
    }
    onCheckBoxClickHandler(user){
        const newUsers = _.cloneDeep(this.state.users);
        const indexSelectedUser = this.findIndexUserById(newUsers,user.id);
        if(indexSelectedUser>-1){
            newUsers[indexSelectedUser].isChecked = !newUsers[indexSelectedUser].isChecked;
        }
        this.setState({users: newUsers});
        const selected = newUsers.filter(u => u.isChecked );
        this.setState({selectedUsers: selected});

}
    render(){
        return(
            <div className={styles.container}>
                <SelectedUsers selectedUsers={this.state.selectedUsers}/>
                <List clickHandler={this.onCheckBoxClickHandler} users={this.state.users}/>
            </div>
        );
    }

}
export default ForwardtoList;