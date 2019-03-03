module.exports = {
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
        path: `${__dirname}/archive`,
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
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
  ],
};
