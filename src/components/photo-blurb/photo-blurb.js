import React from 'react';

const image = require('../../../static/assets/headshot.jpeg');

export default ({ items }) => (
  <article>
    <img src={image} alt=" " aria-hidden="true" />
    <p>
      Developer Advocate<br />
      Boston, MA
    </p>
  </article>
);
