/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`)
module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `excedetest`,
        fieldName: `excedetest`,
        url: `https://excedetest.swell.store/graphql`,
      },
    },
  ],
}
