import React, { Component } from 'react'
import styles from './SelectedUsers.module.sass';

class SelectedUsers extends Component {
    showSelectedUsers(){
        if(this.props.selectedUsers.length>0) {
            return this.props.selectedUsers.map((user, index) => {
                if (this.props.selectedUsers.length - 1 === index) {
                    return user.firstName+" "+user.lastName;
                }
                return user.firstName+" "+user.lastName + ", "
            })
        }
    }

    render(){
        return(
            <div className={styles.container}>
                <span >To:</span>
                <span className={styles.selectedUsers}>{this.showSelectedUsers()}</span>
            </div>
        );
    }
}
export default SelectedUsers;