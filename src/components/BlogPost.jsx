import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/post.module.css"
import Navbar from "./Navbar"
import SEO from "./seo"
import Tags from "./Tags"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <link rel="icon" href="/favicon.ico" />
      <Navbar />
      <div className={styles.main}>
        <h1>{post.frontmatter.title}</h1>
        <div className={styles.info}>
          <p className={styles.date}>{post.frontmatter.date}</p>
          <Tags tags={post.frontmatter.tags} />
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
      excerpt
    }
  }
`
