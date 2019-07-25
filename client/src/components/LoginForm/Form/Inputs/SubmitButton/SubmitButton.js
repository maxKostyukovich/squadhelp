import React , { Component } from 'react';
import styles from './SubmitButton.module.sass';

class SubmitButton extends Component{

    render(){
        return(
            <div >
                <div onClick={this.props.onClick} className={styles.button}><span>{this.props.submitText}</span></div>
            </div>
        );
    }
}
export default SubmitButton;