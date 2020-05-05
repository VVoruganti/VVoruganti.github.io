import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "../styles/about.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/seo" 
import { Helmet } from "react-helmet"

library.add(fab, faEnvelope)


export default () => (
<div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Vineeth Voruganti</title>
        <link rel="canonical" href="https://www.vineeth.io/aboutme" />
    </Helmet>
    <SEO />
    <Navbar />
    <div className={styles.main}>
        <h1>About me</h1>
        <div className={styles.contactCard}>
            <img src="/square-headshot.jpg" alt="me"></img>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="mailto:vvoruganti@gatech.edu"><FontAwesomeIcon icon="envelope" /> vvoruganti@gatech.edu</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/VVoruganti"><FontAwesomeIcon icon={['fab', 'github']} /> @VVoruganti</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vineethvoruganti/"><FontAwesomeIcon icon={['fab' ,'linkedin']} /> in/vineethvoruganti</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vvoruganti42"><FontAwesomeIcon icon={['fab' ,'twitter']} /> @VVoruganti42</a></li>
            </ul>
        </div>
        <p>
            Hi, my name is Vineeth Voruganti. I am currently an underraduate student at the Georgia
            Institute of Technology, studying Electrical Engineering.
        </p>
        <p>
            I love working on personal projects, making games, traveling, and reading.
        </p>
        <p>
            feel free to contact me if you want to work together, hire me, or just recommend a game to play
        </p>
        <h2>Projects</h2>
        <ul>
            <li><a href="https://github.com/arnavgrg/Cosine">Cosine</a> - don't sign contracts alone</li>
            <li><a href="https://github.com/VVoruganti/repo-link-tester">Repo Link Tester</a> - utility for auditing large repos</li>
            <li><a href="https://github.com/VVoruganti/savestates">Save States</a> stores browser sessions for the future</li>
        </ul>
        <h2>Publications</h2>
        <ul>
            <li><a href="https://patents.google.com/patent/US10284752B1">Method for determining a start offset between a video recording device and an inertial measurement unit for use in synchronizing motion data of an object collected by the inertial measurement unit attached to the object with video frames captured by an image sensor of the video recording device of the object in motion</a></li>
            <li><a href="https://patents.google.com/patent/US10469750B1">Method for embedding motion data of an object into a video file to allow for synchronized visualization of the motion data upon playback of the video file</a></li>
        </ul>
    </div>
</div>
)
