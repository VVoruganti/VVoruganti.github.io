import React from "react";
import { Link } from "gatsby";
import styles from "../styles/navbar.css";
import styled from "styled-components";

const Brand = styled(Link)`
    text-decoration:none;

`

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
                    <Brand to="/">Vineeth Voruganti</Brand>
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
