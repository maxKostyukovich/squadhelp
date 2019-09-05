import React from 'react';
import styles from './ContestType.module.sass'
import ContestTypeHeader from './ContestTypeHeader/ContestTypeHeader';
import TypeCard from './TypeCard/TypeCard';
import { contestTypes, headerTypeCardsText, inBundleTypes } from '../../constants/contestTypeText';
export default function ContestType(props){
    return(
      <div>
        <div className={styles.container}>
            <div className={styles.wrapContainer}>
                <ContestTypeHeader {...headerTypeCardsText.get('categories')}/>
                <div className={styles.cardRow}>
                    {contestTypes.map(value => (
                      <TypeCard key={value.title} {...value}/>
                    ))}
                </div>
            </div>
        </div>
        <div className={styles.container} style={{backgroundColor: 'white'}}>
          <div className={styles.wrapContainer}>
           <ContestTypeHeader {...headerTypeCardsText.get('bundle')} style={{color: '#333'}} hrStyle={{border: '1px solid #28d2d1'}}/>
            <div className={styles.cardRow}>
              {inBundleTypes.map(value => (
                <TypeCard key={value.title} background={{backgroundColor: '#f5f5f5'}} {...value}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}