import React from 'react';

import { Link } from 'gatsby';

import generateKey from '../../utils/generate-key';

import styles from './nav.module.scss';

const renderItems = (items) => items.map(({ label, url }) => (
  <li key={generateKey({ key: label, prefix: 'item' })}>
    <Link to={url}>{label}</Link>
  </li>
));

export default ({ items }) => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      {renderItems(items)}
    </ul>
  </nav>
);
