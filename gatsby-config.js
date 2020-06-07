module.exports = {
  siteMetadata: {
    title: 'Adin Jesuha',
    description: 'Portafolio',
    author: '@adinjesuha',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-modal-routing',
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          works: require.resolve(`./src/templates/layout.js`),
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'works',
        path: `${__dirname}/src/works/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/works`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'adinjesuha-portfolio',
        short_name: 'adinjesuha',
        start_url: '/',
        background_color: '#FF2848',
        theme_color: '#FF2848',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
}
