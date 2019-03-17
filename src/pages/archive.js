import React from "react";

import { graphql } from "gatsby";

import Helmet from 'react-helmet';

import PostListing from '../components/post/listing';
import Nav from '../components/nav';
import navItems from '../constants/nav';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <main className="blog-posts">
      <Helmet title="Archived Posts | Eric Allen" />
      <header>
        <h1>Archived Posts</h1>
        <p>This page contains posts from various past incarnations of my blogging saved here for posterity.</p>
      </header>
      <PostListing posts={posts} />
      <footer>
        <Nav items={navItems} />
      </footer>
    </main>
  );
}

export const pageQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { postType: { eq: "archivedPost" }}}
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
