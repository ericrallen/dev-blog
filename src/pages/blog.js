import React from "react";

import { graphql } from "gatsby";

import PostListing from '../components/post/listing';
import Nav from '../components/nav';
import navItems from '../constants/nav';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <main className="blog-posts">
      <h1>Blog</h1>
      <PostListing posts={posts} />
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
