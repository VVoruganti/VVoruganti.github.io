import React from "react"
import { Link } from "gatsby"
import styles from "../styles/navbar.module.css"
import styled from "styled-components"

const Brand = styled(Link)`
  text-decoration: none;
`

const PageLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #dddddd;
  }
`

class Navbar extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <PageLink to="/aboutme">About</PageLink>
        <PageLink to="/">Blog </PageLink>
      </nav>
    )
  }
}

export default Navbar
