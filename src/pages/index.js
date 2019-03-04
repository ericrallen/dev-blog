import React from 'react'

import { graphql } from 'gatsby';

import Intro from '../components/intro';
import PostListing from '../components/post/listing';

import styles from '../styles/home.module.scss';

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const featuredPosts = posts.filter(post => post.node.frontmatter.postType === 'blogPost');
  const featuredProjects = posts.filter(post => post.node.frontmatter.postType === 'projectPost');

  return (
    <main className={styles.container}>
      <Intro />
      <aside className={styles.aside}>
        <h3>Featured Post</h3>
        <PostListing posts={featuredPosts} show={1} />
        <h3>Featured Project</h3>
        <PostListing posts={featuredProjects} show={1} />
      </aside>
    </main>
  );
}

export const pageQuery = graphql`
  query FeaturedPostQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { postType: { in: [ "blogPost", "projectPost" ] }, featured: { eq: true }}},
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            link
            path
            postType
          }
        }
      }
    }
  }
`;
