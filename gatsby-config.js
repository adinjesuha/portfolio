module.exports = {
  siteMetadata: {
    title: `Adin Jesuha Portafolio`,
    description: `Portafolio`,
    author: `@adinjesuha`,
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
        name: `adinjesuha-portfolio`,
        short_name: `adinjesuha`,
        start_url: `/`,
        background_color: `#FF2848`,
        theme_color: `#FF2848`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
