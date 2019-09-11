import React from 'react'
import styles from './MainButton.module.sass'
import { Link } from 'react-router-dom'

function MainButton(props) {
    const classes = [styles.defaultButton];
    switch(props.type){
        case 'transparent':
            classes.push(styles.transparentButton);
            break;
        case 'primary':
            classes.push(styles.primaryButton);
            break;
        case 'viewAll':
            classes.push(styles.viewAllButton);
            break;
    }
    return(
        <Link to={props.link} className={classes.join(' ')}>
           <div>
               <span>{props.text}</span>
           </div>
        </Link>
    )

}

export default MainButton;