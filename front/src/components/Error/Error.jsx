import React from 'react';
import styles from './Error.module.css';
import errorImage from '../../assets/2ejm.gif';

export const Error = () => {
  return (
    <div className={styles.errorContainer} style={{ backgroundImage: `url(${errorImage})` }}>
      <h1 className={styles.text_color}>Error 404 not found</h1>
    </div>
  );
};

