import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import SEO from "../components/seo"
import styles from "../styles/404.module.css"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Vineeth Voruganti</title>
      <link rel="canonical" href="https://www.vineeth.io/404" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <SEO />
    <Navbar />
    <div className={styles.main}>
      <h1>Page Not Found</h1>
    </div>
  </div>
)
