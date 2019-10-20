const path = require(`path`)
const { slugify } = require("./src/utils/slugify")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiArticle(sort: {order: DESC, fields: strapiId}, limit: 10) {
        edges {
          node {
            title
            strapiId
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    console.info("🥐 Creando articulos")
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      console.info(`${node.strapiId} - ${node.title}`)
      createPage({
        path: `article/${node.strapiId}/${slugify(node.title)}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.strapiId,
          title: node.title,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return getArticles
}
