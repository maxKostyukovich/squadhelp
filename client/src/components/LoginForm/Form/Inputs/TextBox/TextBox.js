import React , { Component } from 'react';
import styles from './TextBox.module.sass';

class TextBox extends Component{

    render(){
        return(
            <div className={styles.container}>
                <input {...this.props.input} placeholder={this.props.label} />
            </div>
        );
    }
}
export default TextBox;