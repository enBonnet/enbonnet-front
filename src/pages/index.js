import React from "react"
import { Link, graphql } from "gatsby"
import { slugify } from "../utils/slugify"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "../styles/global.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <p className="biography">
      Hola, bienvenid(a), soy nerd, frontend developer, me encanta colaborar con
      las comunidades de desarrolladores y compartir conocimientos.
      Co-organizador de <a href="https://noders.com">Noders</a> y{" "}
      <a href="https://nodeschool.io/santiago">Nodeschool Santiago</a>. Humano
      de <a href="https://instagram.com/kyratail">@kyratail</a> a tiempo
      completo.
    </p>
    <section>
      <div className="section-title">
        - <h2 className="blog-title">Blog</h2> -
      </div>
      <div className="posts">
        {data.allStrapiArticle.edges.map(({ node }) =>
          node.publico ? (
            <div key={node.strapiId}>
              <Link to={`/article/${node.strapiId}/${slugify(node.title)}`}>
                <article className="post">
                  <div className="title">{node.title}</div>
                  <div className="post-description">
                    <div className="post-image">
                      <Img fluid={node.image.childImageSharp.fluid} />
                    </div>
                    <p className="description">{node.description}</p>
                  </div>
                </article>
              </Link>
            </div>
          ) : null
        )}
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle(sort: { order: DESC, fields: strapiId }) {
      edges {
        node {
          strapiId
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
              original {
                src
              }
            }
          }
          title
          description
          publico
        }
      }
    }
  }
`
