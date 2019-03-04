import React from "react";

import { graphql } from "gatsby";

import ProjectListing from '../components/project/listing';
import Nav from '../components/nav';
import navItems from '../constants/nav';

import styles from '../styles/projects.module.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <main className="blog-posts">
      <header>
        <h1>Projects</h1>
        <p>A small assortment of things I've been working on recently. You can find more on <a href="https://github.com/ericrallen/">my GitHub profile</a>.</p>
      </header>
      <section className={styles.projectGrid}>
        <ProjectListing posts={posts} />
      </section>
      <footer>
        <Nav items={navItems} />
      </footer>
    </main>
  );
}

export const pageQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { postType: { eq: "projectPost" }}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            blurb
          }
        }
      }
    }
  }
`;
