import React from 'react';
import styles from './SocialButton.module.sass';

export default function SocialButton(props){
    const containerStyle = [styles.container];
    let iconName;
    if(props.type === "google"){
        iconName = "fab fa-google";
        containerStyle.push(styles.google);
    }
    if(props.type === "facebook"){
        iconName = "fab fa-facebook-f";
        containerStyle.push(styles.faceBook);
    }
    const joinedClasses = containerStyle.join(' ');
    return(
        <div className={joinedClasses}>
            <span className={iconName} style={{fontSize: "14px", margin: "0 4px"}}></span>
            {props.text}
        </div>
    )
}