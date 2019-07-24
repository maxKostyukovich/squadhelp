import React , { Component } from 'react';
import styles from './Button.module.sass';

class Button extends Component{

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.button}>
                    <span>{this.props.text}</span>
                </div>
            </div>
        );
    }
}
export default Button;