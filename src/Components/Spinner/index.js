import React from 'react';

import styles from './styles.module.scss';

const Spinner = () => (
  <div className={styles.wrappedSpinner}>
    <div className={styles.spinner} />
  </div>
);

export default Spinner;
