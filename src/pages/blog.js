import React from "react";

import { graphql, Link } from "gatsby";

import Helmet from 'react-helmet';

import PostListing from '../components/post/listing';
import Nav from '../components/nav';
import navItems from '../constants/nav';

import styles from '../styles/blog.module.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <main className="blog-posts">
      <Helmet title="Blog | Eric Allen" />
      <h1>Blog</h1>
      <PostListing posts={posts} />
      <p className={styles.archiveMessage}>Looking for an older post? Maybe it's in the <Link to="/archive">Archives</Link>.</p>
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
