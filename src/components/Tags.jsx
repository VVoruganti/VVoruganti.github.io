import React from "react"
import styles from "../styles/tags.module.css"

const tagMap = {
  JavaScript: "#FAC863",
  Lua: "#C594C5",
  Web: "#C594C5",
  C: "#6699CC",
  "C++": "#6699CC",
  Games: "#99C794",
  Python: "#EC5F67",
  DevOps: "#F99157",
  WSL: "rgba(155, 154, 151, 0.4)",
  Dreams: "#eb349b",
}

function Tags(props) {
  const { tags } = props
  console.log(tags)
  const tagComponents = tags.map(tag => (
    <p className={styles.tag} style={{ backgroundColor: tagMap[tag] }}>
      {tag}
    </p>
  ))
  return <div className={styles.tags}>{tagComponents}</div>
}

export default Tags
