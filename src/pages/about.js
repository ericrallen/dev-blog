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
          I'm a Senior Full Stack Developer with over a decade of professional experience,
          very strong Front End skills, and a love for TypeScript, CSS, a11y, and good automation.
        </p>
        <p>
          I care about Developer Experience almost as much as User Experience and
          am hoping to eventually combine my love of writing code with my love for
          teaching and mentoring and move into a Developer Advocate or Developer
          Evangelist role.
        </p>
        <p>
          I have experience leading teams, steering initiatives, implementing standards,
          and mentoring junior talent at a diverse group of companies that includes tiny
          (~5 people) design firms, fast-growing startups, mid-size consulting firms
          (150-500 people) and massive (100k+ people) Fortune 50 financial institutions.
        </p>
        <p>
          My primary goals are to help innovate rapidly, improve Developer Experience
          whenever possible, spread knowledge, and codify practices in organizations
          that need help bridging the gap between seniors and juniors, designers
          and developers, technology and business, or developers and customers.
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
