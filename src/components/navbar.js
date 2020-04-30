import React from "react";
import { Link } from "gatsby";
import styles from "../styles/navbar.css";
import styled from "styled-components";


const PageLink = styled(Link)`
    text-decoration:none;
    &:hover {
        background-color:#DDDDDD;
    }
`

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div id={"navLeft"}>
                    <p>Vineeth Voruganti</p>
                </div>
                <div id={"navRight"}>
                    <PageLink to="/">Blog </PageLink> 
                    <PageLink to="/aboutme">About Me </PageLink> 
                    <PageLink to="/projects">Projects </PageLink> 
                </div>
            </nav>
        ) 
    }
}

export default Navbar;
