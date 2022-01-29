import React from 'react';

const image = require('../../../static/assets/avatar.png');

export default ({ items }) => (
  <article>
    <img src={image} alt=" " aria-hidden="true" />
    <p>
      A Web Developer currently in Boston, MA constantly working to improve developer
      experience and user experience.
    </p>
  </article>
);
