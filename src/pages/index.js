import React from 'react'

import { graphql } from 'gatsby';

import Helmet from 'react-helmet';

import Intro from '../components/intro';
import PostListing from '../components/post/listing';
import ProjectListing from '../components/project/listing';
import Nav from '../components/nav';
import AmpersandList from '../components/ampersand-list';

import navItems from '../constants/nav';
import shuffle from '../utils/shuffle-array';

import styles from '../styles/home.module.scss';

const typeList = [
  '.html',
  '.css',
  '.js',
  '.ts',
  '.jsx',
  '.tsx',
  '.scss',
  '.sh',
  '.md',
];

const lastType = 'a11y';

const technologyList = [
  'JavaScript',
  'React',
  'Webpack',
  'TypeScript',
  'HTML',
  'CSS',
  'A11y',
];

const professionalList = [
  'Developer',
  'Mentor',
  'Teacher',
  'Generalist',
];

const personalList = [
  'Dungeon Master',
  'Beer Lover',
  'Internet Alchemist',
  'Developer Advocate',
  'Runner',
];

const showType = Math.random();

let listItems = [];

if (showType > 0.85) {
  listItems = [...shuffle(typeList).slice(0, 3), lastType];
} else if (showType < 0.15) {
  listItems = shuffle(technologyList).slice(0, 4);
} else {
  listItems = [...shuffle(professionalList).slice(0, 3), shuffle(personalList)[0]];
}

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const { siteMetadata } = data.site;

  const featuredPosts = posts.filter(post => post.node.frontmatter.postType === 'blogPost');
  const featuredProjects = shuffle(posts.filter(post => post.node.frontmatter.postType === 'projectPost'));

  return (
    <main className={styles.container}>
      <Helmet title={siteMetadata.title} />
      <Intro>
        <AmpersandList items={listItems} />
      </Intro>
      <aside className={styles.aside}>
        <h3>Featured Posts</h3>
        <PostListing posts={featuredPosts} show={2} />
        <h3>Featured Projects</h3>
        <section className={styles.projectGrid}>
          <ProjectListing posts={featuredProjects} show={2} />
        </section>
      </aside>
      <footer>
        <Nav items={navItems} />
      </footer>
    </main>
  );
}

export const pageQuery = graphql`
  query FeaturedPostQuery {
    site {
      siteMetadata {
        title
      }
    }
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
