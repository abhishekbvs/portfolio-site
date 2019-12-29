module.exports = {
  siteMetadata: {
    title: `InCTF`,
    description: `InCTF19 Code Breaker Challenges.`,
    author: `@abhishekbvs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `InCTF19`,
        short_name: `InCTF`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/my-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ],
}
