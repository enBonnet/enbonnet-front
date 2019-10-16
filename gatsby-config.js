module.exports = {
  siteMetadata: {
    title: "enBonnet",
    description:
      "Temas de tecnologia que me apasionan como el Frontend, Web, Deploy, Aplicaciones y mas...",
    author: "Ender Bonnet",
    siteUrl: "https://www.enbonnet.me",
    image: "public/icons/icon-512x512.png",
    author: {
      name: "Ender Bonnet",
    },
    social: {
      twitter: "@enBonnet",
    },
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: true,
              },
            },
          },
        ],
      },
    },
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
        icon: `src/images/favicon-32x32.png`,
        icons: [
          {
            src: `icons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `icons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}
