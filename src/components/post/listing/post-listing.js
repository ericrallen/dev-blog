import React from 'react';

import { Link } from 'gatsby';

export default ({ posts, show = 0 }) => {
  const renderedPosts = posts
    .filter(post => post.node.frontmatter.title.length > 0)
    .map(({ node: post }) => (
      <article className="blog-post-preview" key={post.id}>
        <header>
          <h1>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h1>
          <h2>{post.frontmatter.date}</h2>
        </header>
        <p>{post.excerpt}</p>
      </article>
    ))
  ;

  if (show) {
    return renderedPosts.slice(0, show);
  }

  return renderedPosts;
}
