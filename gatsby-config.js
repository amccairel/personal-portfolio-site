/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    charset: `utf-8`,
    title: `Alex McCairel`,
    author: `Alex McCairel`,
    description: `A software development portfolio site for, and by, Alex McCairel.`,
    siteUrl: `https://alexmccairel.gatsbyjs.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/posts`,
      }
    },
    "gatsby-transformer-sharp"
  ],
}
