import React from "react"
import { graphql } from "gatsby"
import styles from "../styles/post.css"


export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
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
        }
    }
`

