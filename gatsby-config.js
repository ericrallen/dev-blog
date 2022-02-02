module.exports = {
  siteMetadata: {
    title: 'Eric Allen | Internet Alchemist',
    siteUrl: 'https://ericrallen.dev/'
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/project`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("dart-sass"),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: '›',
              aliases: {
                sh: 'bash',
                js: 'javascript',
              },
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes
                .map(node => {
                  return Object.assign({}, node.frontmatter, {
                    description: node.frontmatter.blurb || node.excerpt,
                    date: node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + node.frontmatter.path,
                    custom_elements: [{ "content:encoded": node.html }],
                  })
                })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { postType: { eq: "blogPost" }}}
                ) {
                  nodes {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            `,
            output: "/rss",
            title: "RSS Feed: https://ericrallen.dev/",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
  ],
};
