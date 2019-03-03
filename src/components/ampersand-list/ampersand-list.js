import React from 'react';

import generateKey from '../../utils/generate-key';

import styles from './ampersand-list.module.scss';

const renderItems = (items) => items.map((item) => (
  <li className={styles.item} key={`${generateKey({ key: item, prefix: 'item' })}}`}>{item}</li>
));

export default ({ items }) => (
  <ol className={styles.list}>
    {renderItems(items)}
  </ol>
);
