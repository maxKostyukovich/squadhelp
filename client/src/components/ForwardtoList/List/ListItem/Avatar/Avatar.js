import React, { Component } from 'react'
import styles from './Avatar.module.sass';

class Avatar extends Component {
    backgroundImage = {
        backgroundImage: `url(${this.props.avatarImage })`
    };

    render(){
        return(
            <div className={styles.avatarContainer} style={this.backgroundImage}>

            </div>
        );
    }

}
export default Avatar;