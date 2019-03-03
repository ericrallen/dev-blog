import React from "react";

import { Link, graphql } from "gatsby";

import Nav from '../components/nav';
import navItems from '../constants/nav';

const renderPosts = (posts) => posts
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

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <main className="blog-posts">
      <h1>Blog</h1>
      {renderPosts(posts)}
      <Nav items={navItems} />
    </main>
  );
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { postType: { eq: "blogPost" }}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
          }
        }
      }
    }
  }
`;
