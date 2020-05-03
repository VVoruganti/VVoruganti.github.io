import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "../styles/index.css";
import BlogLink from "../components/BlogLink.js";
import { graphql } from "gatsby"; 
// TODO need to use gatsby to pull in all of the blog posts from markdown files

// https://presstige.io/populartoday            


export default ({ data }) => {
    const blogTitles = data.allMarkdownRemark.edges.map(({ node }) => {
        console.log(node);
       return (<BlogLink to={node.fields.slug} postTitle={node.frontmatter.title} tags={node.frontmatter.tags} date={node.frontmatter.date} />); 
    })
    return (
    <div>
        <Navbar />
        <div id="main">
            <h1>Some of My Thoughts</h1> 
            <div id="posts">
                {blogTitles}
                <BlogLink postTitle={"Notion Formulas"} tags={["JavaScript", "Games"]} date={"4/20/2020"} />
                <BlogLink postTitle={"Using Go instead of bash scripts"} tags={["C", "Lua", "Python"]} date={"5/5/2020"} />
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
