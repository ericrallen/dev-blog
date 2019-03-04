import React from 'react';

import { Helmet } from 'react-helmet';

import styles from './post.module.scss';

export default ({ frontmatter, html }) => (
  <main className="blog-post-container">
    <Helmet title={`${frontmatter.title} | Eric Allen`} />
    <section className="blog-post">
      <header>
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && <p className={styles.date}>Posted on <date>{frontmatter.date}</date></p>}
      </header>
      <article
        className={`blog-post-content ${styles.post}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer>
        {frontmatter.link && <a href={frontmatter.link}>View the Project</a>}
      </footer>
    </section>
  </main>
)
