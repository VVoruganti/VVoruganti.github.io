import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "../styles/about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)

// TODO add links to projects

export default () => (
<div>
    <Navbar />
    <div id="main">
        <h1>About me</h1>
        <div id="contact-card">
            <img src="/square-headshot.jpg" alt="me"></img>
            <ul>
                <li><a target="_blank" href="mailto:vvoruganti@gatech.edu"><FontAwesomeIcon icon="envelope" /> vvoruganti@gatech.edu</a></li>
                <li><a target="_blank" href="https://www.github.com/VVoruganti"><FontAwesomeIcon icon={['fab', 'github']} /> @VVoruganti</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/vineethvoruganti/"><FontAwesomeIcon icon={['fab' ,'linkedin']} /> in/vineethvoruganti</a></li>
                <li><a target="_blank" href="https://twitter.com/vvoruganti42"><FontAwesomeIcon icon={['fab' ,'twitter']} /> @VVoruganti42</a></li>
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
            <li>Cosine</li>
            <li>Repo Link Tester </li>
            <li>Save States</li>
        </ul>
        <h2>Publications</h2>
        <ul>
            <li><a href="https://patents.google.com/patent/US10284752B1">Method for determining a start offset between a video recording device and an inertial measurement unit for use in synchronizing motion data of an object collected by the inertial measurement unit attached to the object with video frames captured by an image sensor of the video recording device of the object in motion</a></li>
            <li><a href="https://patents.google.com/patent/US10469750B1">Method for embedding motion data of an object into a video file to allow for synchronized visualization of the motion data upon playback of the video file</a></li>
        </ul>
    </div>
</div>
)
