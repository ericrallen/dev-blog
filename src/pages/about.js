import React from 'react'

import { graphql } from 'gatsby';

import Helmet from 'react-helmet';

import Intro from '../components/intro';
import Nav from '../components/nav';
import PhotoBlurb from '../components/photo-blurb';

import navItems from '../constants/nav';

import styles from '../styles/home.module.scss';

export default ({ data }) => {
  const { siteMetadata } = data.site;

  return (
    <main className={styles.container}>
      <Helmet title={siteMetadata.title} />
      <Intro>
        <PhotoBlurb />
      </Intro>
      <aside className={styles.aside}>
        <h3>About</h3>
        <p>
          I like to solve problems, break things, and then fix them. I have a
          passion for standards and digital craftsmanship.
        </p>
        <p>
          I've been an individual contributor, a team lead, a manager, and a teacher.
          I want to continue sharpening my skills as a developer and mentor, but
          not end up in middle management.
        </p>
        <h3>License</h3>
        <p className={styles.license}>
          Cpyright &copy; 2019 Eric Allen.
        </p>
        <p className={styles.license}>
          The content of this website is licensed
          under the&nbsp;
          <a href="https://creativecommons.org/licenses/by-nc/4.0/">
            <abbr title="Attribution-NonCommercial 4.0 International license">
              CC BY-NC 4.0
            </abbr>
          </a>,
          and the underlying source code used to format and display this site, as
          well as any code included in the content, is licensed under the&nbsp;
          <a href="https://github.com/ericrallen/dev-blog/blob/master/LICENSE">
            <abbr title="Massachusetts Institute of Technology">
              MIT
            </abbr>
          </a>
          &nbsp;license.
        </p>
      </aside>
      <footer>
        <Nav items={navItems} />
      </footer>
    </main>
  );
}

export const pageQuery = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
