import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "../styles/index.module.css";
import BlogLink from "../components/BlogLink.js";
import { graphql } from "gatsby"; 
import SEO from "../components/seo"
// https://presstige.io/populartoday            


export default ({ data }) => {
    const blogTitles = data.allMarkdownRemark.edges.map(({ node }) => {
        console.log(node);
       return (<BlogLink to={node.fields.slug} postTitle={node.frontmatter.title} tags={node.frontmatter.tags} date={node.frontmatter.date} />); 
    })
    return (
    <div>
        <SEO />
        <Navbar />
        <div className={styles.main}>
            <h1>Some of My Thoughts</h1> 
            <div id="posts">
                {blogTitles}
            </div>
        </div>
    </div>
)}

export const query = graphql`
    query {
       allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              tags
            }
            fields {
                slug
            }
          }
        }
      }
    } 
`
