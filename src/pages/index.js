import React from "react"
import { Link, graphql } from "gatsby"
import { slugify } from "../utils/slugify"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/global.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <p>
      Hola, bienvenid(a), soy nerd, frontend developer, me encanta colaborar con
      las comunidades de desarrolladores y compartir conocimientos.
      Co-organizador de <a href="https://noders.com">Noders</a> y{" "}
      <a href="https://nodeschool.io/santiago">Nodeschool Santiago</a>. Humano
      de <a href="https://instagram.com/kyratail">@kyratail</a> a tiempo
      completo.
    </p>
    <section>
      <h2 className="section-title">- Blog -</h2>
      <ul className="posts">
        {data.allStrapiArticle.edges.map(document => (
          <li key={document.node.strapiId}>
            <Link
              to={`/article/${document.node.strapiId}/${slugify(
                document.node.title
              )}`}
            >
              <article className="post">
                <h2>{document.node.title}</h2>
                <div className="post-description">
                  <div className="post-image">
                    <img src={document.node.image.publicURL} alt=" " />
                  </div>
                  <p className="description">{document.node.description}</p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
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
            publicURL
          }
          title
          description
        }
      }
    }
  }
`
