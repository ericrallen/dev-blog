import React from 'react';

import { Link } from 'gatsby';

export default ({ posts, show = 0 }) => {
  const renderedProjects = posts
    .filter(post => post.node.frontmatter.title.length > 0)
    .map(({ node: post }) => (
      <article className="project-post-preview" key={post.id}>
        <h3>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h3>
        <p>{post.frontmatter.blurb}</p>
      </article>
    ))
  ;

  if (show) {
    return renderedProjects.slice(0, show);
  }

  return renderedProjects;
}
