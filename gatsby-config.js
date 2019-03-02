module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
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
    `gatsby-transformer-remark`,
  ],
};
