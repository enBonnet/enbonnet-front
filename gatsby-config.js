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
        lang: "es",
        background_color: "#ffffff",
        theme_color: "#b0413e",
        display: "fullscreen",
        icon: `src/images/ender-logo.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
