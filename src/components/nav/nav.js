import React from 'react';

import generateKey from '../../utils/generate-key';

const renderItems = (items) => items.map(({ label, url }) => (
  <li key={generateKey({ key: label, prefix: 'item' })}>
    <a href={url}>{label}</a>
  </li>
));

export default ({ items }) => (
  <nav>
    <ul>
      {renderItems(items)}
    </ul>
  </nav>
);
