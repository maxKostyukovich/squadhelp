import React , { Component } from 'react';
import styles from './TextBox.module.sass';

class TextBox extends Component{

    renderError = () => {
        if (this.props.meta.touched && this.props.meta.error) {
            return (
                <span>{this.props.meta.error}</span>
            );
        }
    };
    render(){
        return(
            <div className={styles.container}>
                <input {...this.props.input} placeholder={this.props.label} />
                {this.renderError()}
            </div>
        );
    }
}
export default TextBox;