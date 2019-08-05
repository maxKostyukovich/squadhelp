import React from 'react';
import styles from './ContestType.module.sass'
import ContestTypeHeader from './ContestTypeHeader/ContestTypeHeader';
import TypeCard from './TypeCard/TypeCard';
export default function ContestType(props){
    return(
        <div className={styles.container}>
            <div className={styles.wrapContainer}>
                <ContestTypeHeader/>
                <div className={styles.cardRow}>
                    <TypeCard img={"https://www.squadhelp.com/story_images/contest_types/Company-Names_grey.png"} title={"Name"} text={"Get up and running with the perfect name."}/>
                    <TypeCard img={"https://www.squadhelp.com/story_images/contest_types/Logos_grey.png"} title={"Logo"} text={"Kickstart your venture with a unique, memorable logo "}/>
                    <TypeCard img={"https://www.squadhelp.com/story_images/contest_types/Taglines_grey.png"} title={"Tagline or Slogan"} text={"Connect deeply with your target audience with an on-target tagline "}/>
                </div>
            </div>
        </div>
    )
}