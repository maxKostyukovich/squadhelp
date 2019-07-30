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
    render(){
        return(
            <div className={styles.itemListContainer}>
                <div style={{display: "flex"}}>
                    <Avatar avatarImage={"https://steemitimages.com/640x0/https://1.bp.blogspot.com/-opIakmvbnQY/WkskMkCOKiI/AAAAAAAAAEk/V5-vaRcOXXARPz_iZUncqcmpFUkSHWGCgCEwYBhgL/s1600/1-75.jpg"}/>
                    <div className={styles.personalInfo}>
                        <span className={styles.fullName}>{this.props.user.firstName + " " + this.props.user.lastName}</span>
                        <span className={styles.level}>Role: {this.props.user.role}</span>
                    </div>
                </div>
                <CustomCheckBox clickHandler={this.onChange} isChecked={this.props.user.isBanned}/>
            </div>
        );
    }
}
export default ListItem;