import React, { Component } from 'react'
import styles from './List.module.sass';
import ListItem from './ListItem/ListItem';
import connect from 'react-redux/es/connect/connect';

class List extends Component {
    showItems(){
        return this.props.users.map((user,index) => {
            return <ListItem key={user.id} clickHandler={this.props.clickHandler} user={user}/>
        });
    }
    render(){
        return(
            <div className={styles.container}>
                {this.showItems()}
            </div>
        );
    }

}
const mapStateToProps = (state) => {
        const { users } = state.userReducer;
        return {
            users,
        }
};
export default connect(mapStateToProps)(List);