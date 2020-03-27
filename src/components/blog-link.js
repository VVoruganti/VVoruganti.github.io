import React from "react"

class BlogLink extends React.Component() {
    render() {
        const tags = this.props.tags.map((tag =>
            <p className="tag">{tag}<p>
        );
        return (
            <div className="post">
               <div className="left-post">
                  <p>{this.props.postTitle}</p> 
               </div>
               <div className="right-post"></div> 
                  <div className="tags">
                    {tags}
                  </div>
                  <p>{this.props.date}</p>
            </div>
        )
    }
}


export default () => BlogLink;

