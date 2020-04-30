import React from "react"
import styles from "../styles/blog-link.css"

class BlogLink extends React.Component {
    render() {
        const tags = this.props.tags.map(tag => (<p className="tag">{tag}</p>));
        return (
            <div className="post">
               <div className="left-post">
                  <p>{this.props.postTitle}</p> 
               </div>
               <div className="right-post"> 
                  <div className="tags">
                    {tags}
                  </div>
                  <p className="post-date">{this.props.date}</p>
                </div>
            </div>
        )
    }
}


export default BlogLink;
