import React from 'react';

import AmpersandList from '../ampersand-list';
import Nav from '../nav';

import navItems from '../../constants/nav';

import styles from './intro.module.scss';

const listItems = ['Developer', 'Mentor', 'Teacher', 'Generalist'];

export default () => (
  <header>
    <h1 className={styles.title}>Eric Allen</h1>
    <AmpersandList items={listItems} />
    <Nav items={navItems} />
  </header>
)
