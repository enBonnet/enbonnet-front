import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <SEO
      isBlogPost
      postData={{
        title: data.strapiArticle.title,
        image: data.strapiArticle.image.childImageSharp.original.src,
        description: data.strapiArticle.description,
      }}
    />
    <h1>{data.strapiArticle.title}</h1>
    <Img
      className="post-image"
      fluid={data.strapiArticle.image.childImageSharp.fluid}
    />
    <ReactMarkdown source={data.strapiArticle.content} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      description
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
    }
  }
`
