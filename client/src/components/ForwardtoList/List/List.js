import React, { Component } from 'react'
import styles from './List.module.sass';
import ListItem from './ListItem/ListItem';


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
export default List;