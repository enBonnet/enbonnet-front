module.exports = {
  siteMetadata: {
    title: "enBonnet",
    description:
      "Temas de tecnologia que me apasionan como el Frontend, Web, Deploy, Aplicaciones y mas...",
    author: "Ender Bonnet",
    siteUrl: "https://www.enbonnet.me",
    image: "src/images/ender-logo.png",
    author: {
      name: "Ender Bonnet",
    },
    social: {
      twitter: "@enBonnet",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-152357209-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.enbonnet.me",
        sitemap: "https://www.enbonnet.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://enbonnet-cms.herokuapp.com",
        contentTypes: ["article", "category"],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "enBonnet Blog",
        short_name: "enBonnet",
        start_url: "/",
        lang: "es",
        background_color: "#FD8529",
        theme_color: "#b0413e",
        display: "standalone",
        icon: "src/images/ender-logo.png",
      },
    },
  ],
}
