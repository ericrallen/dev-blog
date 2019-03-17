import React from 'react';

import AmpersandList from '../ampersand-list';

import shuffle from '../../utils/shuffle-array';

import styles from './intro.module.scss';

const typeList = [
  '.html',
  '.css',
  '.js',
  '.ts',
  '.jsx',
  '.tsx',
  '.scss',
  '.sh',
  '.md',
];

const lastType = 'a11y';

const technologyList = [
  'JavaScript',
  'React',
  'Webpack',
  'TypeScript',
  'HTML',
  'CSS',
  'A11y',
];

const professionalList = [
  'Developer',
  'Mentor',
  'Teacher',
  'Generalist',
];

const personalList = [
  'Dungeon Master',
  'Internet Alchemist',
  'Bike Commuter',
  'Runner',
];

const showType = Math.random();

let listItems = [];

if (showType > 0.85) {
  listItems = [...shuffle(typeList).slice(0, 3), lastType];
} else if (showType < 0.15) {
  listItems = shuffle(technologyList).slice(0, 4);
} else {
  listItems = [...shuffle(professionalList).slice(0, 3), shuffle(personalList)[0]];
}

export default () => (
  <header>
    <h1 className={styles.title}>Eric Allen</h1>
    <AmpersandList items={listItems} />
  </header>
);
