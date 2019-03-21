import React from 'react';

const image = require('../../../static/assets/avatar.png');

export default ({ items }) => (
  <article>
    <img src={image} alt=" " aria-hidden="true" />
    <p>
      A Web Developer from Charlotte, NC currently a consultant for&nbsp;
      <a href="https://skookum.com/">
        Skookum
      </a>
      .
    </p>
  </article>
);
