import React from 'react';

import AmpersandList from '../ampersand-list';
import Nav from '../nav';

const navItems = [
  {
    label: 'Home',
    url: 'https://ericrallen.dev',
  },
  {
    label: 'Blog',
    url: '/blog',
  },
  {
    label: 'Archives',
    url: '/archive'
  }
];

const listItems = ['Developer', 'Mentor', 'Teacher', 'Generalist'];

export default () => (
  <header>
    <h1>Eric Allen</h1>
    <AmpersandList items={listItems} />
    <Nav items={navItems} />
  </header>
)
