import React from 'react';

import { Helmet } from 'react-helmet';

export default ({ frontmatter, html }) => {
  return (
    <main className="blog-post-container">
      <Helmet title={`${frontmatter.title} | Eric Allen`} />
      <article className="blog-post">
        <header>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
