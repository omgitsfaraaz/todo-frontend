import React from 'react';
import styles from './styles.module.css';

const DummyCard = ({ title }) => {
  return (
      <div className={styles.mainDiv}>
        <input type="checkbox"></input>
        <p className={styles.taskTitle}>{title}</p>
      </div>
  )
}

export default DummyCard;
