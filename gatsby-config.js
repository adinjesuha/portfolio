module.exports = {
  siteMetadata: {
    title: 'Adin Jesuha',
    description: 'Portafolio',
    author: '@adinjesuha',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-modal-routing',
      options: {
        modalProps: {
          style:{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--opacity-65)',
              zIndex: 1200,
            },
            content: {
              position: 'absolute',
              border: 'none',
              background: 'none',
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
            },
          },
          contentLabel: 'Modal',
        }
      }
    },
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
        },
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
        background_color: '#f4f4f4',
        theme_color: '#232323',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
}
