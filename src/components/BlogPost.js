import React from "react"
import { graphql } from "gatsby"
import styles from "../styles/post.module.css";
import Navbar from "../components/Navbar"
import SEO from "./seo"
import Img from "gatsby-image"

export default ({ data }) => {
    const post = data.markdownRemark
    const tags = post.frontmatter.tags.reduce((acc, cur) => {
        return  acc + " " + cur;
    })
    return (
        <div>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <Navbar />
            <div className={styles.main}>
                <h1>{post.frontmatter.title}</h1>
                <p id="date">{post.frontmatter.date} {tags}</p>
                <hr />
                <div dangerouslySetInnerHTML={{__html: post.html}} />
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

