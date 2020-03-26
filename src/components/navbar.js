import React from "react"
import { Link } from "gatsby"

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <Link>Blog</Link> 
                <Link>About Me</Link> 
                <Link>Projects</Link> 
            </nav>
        ) 
    }
}

export default () => Navbar;