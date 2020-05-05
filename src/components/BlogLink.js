import React from "react"
import styles from "../styles/blog-link.module.css"
import { Link } from "gatsby";
import styled from "styled-components";

const PageLink = styled(Link)`
    text-decoration:none;
`

class BlogLink extends React.Component {
    render() {
        const tagMap ={
            "JavaScript": "#FAC863",
            "Lua": "#C594C5",
            "Web": "#C594C5",
            "C" : "#6699CC",
            "C++" : "#6699CC",
            "Games": "#99C794",
            "Python": "#EC5F67",
            "DevOps":"#F99157",
            "WSL":"rgba(155, 154, 151, 0.4)",
        }
        const tags = this.props.tags.map(tag => (<p className={styles.tag} style={{backgroundColor: tagMap[tag]}}> {tag}</p>));
        return (
            <div className={styles.post}>
               <div className={styles.leftPost}>
                  <PageLink to={this.props.to}>{this.props.postTitle}</PageLink> 
               </div>
               <div className={styles.rightPost}> 
                  <div className={styles.tags}>
                    {tags}
                  </div>
                  <p className={styles.postDate}>{this.props.date}</p>
                </div>
            </div>
        )
    }
}


export default BlogLink;
