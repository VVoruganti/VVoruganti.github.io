import React from "react";
import Navbar from "../components/Navbar.js";
import SEO from "../components/seo.js";
import { Helmet } from "react-helmet";
import styles from "../styles/404.module.css";

export default () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Vineeth Voruganti</title>
                <link rel="canonical" href="https://www.vineeth.io/404" />
            </Helmet>
            <SEO />
            <Navbar />
            <div class={styles.main}>
                <h1>Page Not Found</h1>
            </div>
        </div>
    )
}
