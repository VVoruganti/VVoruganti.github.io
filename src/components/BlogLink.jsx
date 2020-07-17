import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from "../styles/blog-link.module.css"
import Tags from "./Tags"

const PageLink = styled(Link)`
  text-decoration: none;
`

function BlogLink(props) {
  const { tags, to, postTitle, date } = props
  return (
    <PageLink to={to}>
      <div className={styles.post}>
        <div className={styles.leftPost}>
          <p>{postTitle}</p>
        </div>
        <div className={styles.rightPost}>
          <Tags tags={tags} />
          <p className={styles.postDate}>{date}</p>
        </div>
      </div>
    </PageLink>
  )
}

export default BlogLink
