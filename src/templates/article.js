import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeBlock from "../components/CodeBlock"
import { BackButton } from "../components/backButton"
import { ButtonNav } from "../components/ButtonNav"

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
    <BackButton />
    <h1>{data.strapiArticle.title}</h1>
    <Img
      className="post-image"
      fluid={data.strapiArticle.image.childImageSharp.fluid}
    />
    <article className="post-content">
      <ReactMarkdown
        source={data.strapiArticle.content}
        renderers={{ code: CodeBlock }}
      />
    </article>
    <ButtonNav />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
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
