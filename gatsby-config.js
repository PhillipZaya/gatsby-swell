/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Barney',
    description: 'Nice and clean dog beds site',
    author: '@Phillip',
    person: {name: 'Phillip', age: 31},
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'Phillip', age: 31 },
      { name: 'Jose', age: 33 }
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
