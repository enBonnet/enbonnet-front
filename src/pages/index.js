import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "../styles/global.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <p>
      Hola, bienvenid(a), soy nerd, frontend developer, me encanta colaborar con
      las comunidades de desarrolladores y compartir conocimientos.
      Co-organizador de <a href="https://noders.com">Noders</a> y{" "}
      <a href="https://nodeschool.io/santiago">Nodeschool Santiago</a>. Humano
      de <a href="https://instagram.com/kyratail">@kyratail</a> a tiemplo
      completo.
    </p>
    <section>
      <h2 className="section-title">- Blog -</h2>
      <ul className="posts">
        {data.allStrapiArticle.edges.map(document => (
          <li key={document.node.id}>
            <article>
              <Link className="post" to={`/article/${document.node.id}`}>
                <h2>{document.node.title}</h2>
                <div className="post-description">
                  <div className="post-image">
                    <Img fluid={document.node.image.childImageSharp.fluid} />
                  </div>
                  <p>{document.node.description}</p>
                </div>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
        }
      }
    }
  }
`
