import React, { Fragment } from "react";

import { graphql } from "gatsby";

import Post from '../components/post';
import Nav from '../components/nav';
import navItems from '../constants/nav';

// data prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  // data.markdownRemark holds our post data
  const { markdownRemark } = data;

  return (
    <Fragment>
      <Post {...markdownRemark} />
      <Nav items={navItems} />
    </Fragment>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        link
      }
    }
  }
`;
