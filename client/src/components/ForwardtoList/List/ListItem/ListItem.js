import React, { Component } from 'react'
import styles from './ListItem.module.sass';
import Avatar from "./Avatar/Avatar";
import CustomCheckBox from './CustomCheckBox/CustomCheckBox';

class ListItem extends Component {

    constructor(props){
        super(props);
    }
    onChange = () => {
        this.props.clickHandler(this.props.user)
    };
    fullName(firstName, lastName){
        return firstName + " " + lastName;
    }
    render(){
        const { user } = this.props;
        return(
            <div className={styles.itemListContainer}>
                <div style={{display: "flex"}}>
                    <Avatar avatarImage={"https://cdn2.stylecraze.com/wp-content/uploads/2013/07/6.-Liza-Soberano.jpg"}/>
                    <div className={styles.personalInfo}>
                        <span className={styles.fullName}>{this.fullName(user.firstName, user.lastName)}</span>
                        <span className={styles.level}>Role: {user.role}</span>
                    </div>
                </div>
                <CustomCheckBox clickHandler={this.onChange} isChecked={user.isBanned}/>
            </div>
        );
    }
}
export default ListItem;