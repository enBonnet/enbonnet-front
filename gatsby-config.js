module.exports = {
  siteMetadata: {
    title: "enBonnet",
    description:
      "Un blog de TI con articulos y apuntes que puedo usar en mi día a día",
    author: "Ender Bonnet",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://thawing-mountain-36898.herokuapp.com",
        contentTypes: ["article", "category"],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "enBonnet Blog",
        short_name: "enBonnet",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#b0413e",
        display: "minimal-ui",
        icon: `src/images/favicon.ico`,
        icons: [
          {
            src: `src/images/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/images/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}
