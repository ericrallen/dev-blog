import React from 'react';

import styles from './intro.module.scss';

export default ({ children }) => (
  <header className={styles.container}>
    <h1 className={styles.title}>Eric Allen</h1>
    {children}
  </header>
);
