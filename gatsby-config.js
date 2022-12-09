/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Swell",
        fieldName: "swelltest",
        url: "https://excedetest.swell.store/graphql",
        
        headers : {
          Authorization: "pk_aTyyvBu01nCfmx10uYkljQbrOjrpZwpP",
        }
      },
    },
  ],
}
