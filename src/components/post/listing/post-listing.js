import React from 'react';

import { Link } from 'gatsby';

import styles from './post-listing.module.scss';

export default ({ posts, show = 0 }) => {
  const renderedPosts = posts
    .filter(post => post.node.frontmatter.title.length > 0)
    .map(({ node: post }) => (
      <article className="blog-post-preview" key={post.id}>
        <header>
          <h4 className={styles.title}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h4>
          {post.frontmatter.date && <p className={styles.date}>Posted on <date>{post.frontmatter.date}</date></p>}
        </header>
        <p className={styles.excerpt}>{post.frontmatter.blurb || post.excerpt}</p>
      </article>
    ))
  ;

  if (show) {
    return renderedPosts.slice(0, show);
  }

  return renderedPosts;
}
