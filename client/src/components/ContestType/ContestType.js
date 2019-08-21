import React from 'react';
import styles from './ContestType.module.sass'
import ContestTypeHeader from './ContestTypeHeader/ContestTypeHeader';
import TypeCard from './TypeCard/TypeCard';
import { contestTypes } from '../../constants/contestTypeText';
export default function ContestType(props){
    return(
        <div className={styles.container}>
            <div className={styles.wrapContainer}>
                <ContestTypeHeader/>
                <div className={styles.cardRow}>
                    {contestTypes.map(value => (
                      <TypeCard key={value.title} title={value.title} text={value.text} img={value.img} search={value.search}/>
                    ))}
                </div>
            </div>
        </div>
    )
}