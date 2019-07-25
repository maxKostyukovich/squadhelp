import React , { Component } from 'react';
import styles from './Form.module.sass';
import Header from './Header/Header';
import Inputs from './Inputs/Inputs';
class Form extends Component{

    render(){
        return(
            <div className={styles.container}>
                <Header title={"LOGIN TO YOUR ACCOUNT"}/>
                <Inputs submitHandler={this.props.submitHandler}/>
            </div>
        );
    }
}
export default Form;