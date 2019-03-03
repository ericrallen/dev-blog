import React from "react";

import { graphql } from "gatsby";
import { Helmet } from 'react-helmet';

import Nav from '../components/nav';
import navItems from '../constants/nav';

// data prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  // data.markdownRemark holds our post data
  const { markdownRemark } = data;

  const { frontmatter, html } = markdownRemark;

  return (
    <main className="blog-post-container">
      <Helmet title={`${frontmatter.title} | Eric Allen`} />
      <Nav items={navItems} />
      <article className="blog-post">
        <header>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
      }
    }
  }
`;
