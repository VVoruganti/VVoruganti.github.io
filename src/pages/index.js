import React from "react"
// import { Link } from "gatsby"
import Navbar from "../components/navbar.js"
import styles from "../styles/index.css"
import BlogLink from "../components/blog-link.js"

// TODO need to use gatsby to pull in all of the blog posts from markdown files

// https://presstige.io/populartoday            

export default () => (
<div>
    <Navbar />
    <div id="main">
        <h1>Some of My Thoughts</h1> 
        <div id="posts">
            <BlogLink postTitle={"Notion Formulas"} tags={["JavaScript", "Games"]} date={"4/20/2020"} />
            <BlogLink postTitle={"Using Go instead of bash scripts"} tags={["C", "Lua", "Python"]} date={"5/5/2020"} />
        </div>
    </div>
</div>
)
