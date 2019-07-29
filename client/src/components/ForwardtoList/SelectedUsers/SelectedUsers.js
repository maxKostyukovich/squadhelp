import React, { Component } from 'react'
import styles from './SelectedUsers.module.sass';

class SelectedUsers extends Component {

    render(){
        return(
            <div className={styles.container}>
                <span >To:</span>
            </div>
        );
    }
}
export default SelectedUsers;