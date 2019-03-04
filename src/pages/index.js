import React from 'react'

import { graphql } from 'gatsby';

import Intro from '../components/intro';
import PostListing from '../components/post/listing';
import ProjectListing from '../components/project/listing';

import shuffle from '../utils/shuffle-array';

import styles from '../styles/home.module.scss';

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const featuredPosts = posts.filter(post => post.node.frontmatter.postType === 'blogPost');
  const featuredProjects = shuffle(posts.filter(post => post.node.frontmatter.postType === 'projectPost'));

  return (
    <main className={styles.container}>
      <Intro />
      <aside className={styles.aside}>
        <h3>Featured Post</h3>
        <PostListing posts={featuredPosts} show={2} />
        <h3>Featured Projects</h3>
        <section className={styles.projectGrid}>
          <ProjectListing posts={featuredProjects} show={2} />
        </section>
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
            blurb
            path
            postType
          }
        }
      }
    }
  }
`;
