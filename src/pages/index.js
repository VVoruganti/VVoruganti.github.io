import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "../styles/index.module.css";
import BlogLink from "../components/BlogLink.js";
import { graphql } from "gatsby"; 
import SEO from "../components/seo";
import { Helmet } from "react-helmet";
// https://presstige.io/populartoday            


export default ({ data }) => {
    const nodes = data.allMarkdownRemark.edges.map(({ node }) => node);
    const blogTitles = nodes.sort((a,b) => {
      const dateString1 = a.frontmatter.date.split("/").map(x => parseInt(x));
      const dateString2 = b.frontmatter.date.split("/").map(x => parseInt(x));
      const date1 = new Date(dateString1[2], dateString1[0] - 1, dateString1[1]);
      const date2 = new Date(dateString2[2], dateString2[0] - 1, dateString2[1]);
      return date1 - date2;
    }).reverse().map( node  => {
       return (<BlogLink to={node.fields.slug} postTitle={node.frontmatter.title} tags={node.frontmatter.tags} date={node.frontmatter.date} />); 
    })
    return (
    <div>
        <SEO />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Vineeth Voruganti</title>
            <link rel="canonical" href="https://www.vineeth.io" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
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
