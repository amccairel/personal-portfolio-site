import * as  React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PortfolioPage = () => {
    return(
        <Layout pageTitle='Portfolio'>
            <p>Welcome to my works and accomplishments</p>
            <h2>Experience</h2>
            <ul>
                <li>
                    <h3>Software Engineer I - Employers Insurance Group</h3>
                    <h4>Remote</h4>
                    <p>Building modern web applications using Angular and Spring.</p>
                </li>
                <li>
                    <h3>Software Engineer Intern - Employers Insurance Group</h3>
                    <h4>Remote</h4>
                    <p>Getting my feet wet in web application development and the software world.</p>
                </li>
            </ul>
            <h2>Personal Projects</h2>
            <ul>
                <li>
                    <h3>Personal Website</h3>
                    <p>
                        This site, made with GatsbyJS, a React-based framework that makes generating a static-site such as this one simple
                        and easy.
                    </p>  
                </li>
                <li>
                    <h3>Mini Swamp Cooler</h3>
                    <p>
                        Using the Arduino, C/C++, a multitude of sensors, and flashing lights, a mini swamp cooler was a foray into embedded
                        systems.
                    </p>
                </li>
                <li>
                    <h3>.Wav Audio Converter</h3>
                    <p>
                        Making interesting changes to .Wav files, such as implementing noise gates, echo, and normalizing the audio files 
                        all with C/C++.
                    </p>
                </li>
            </ul>
        </Layout>
    )
}

export const Head = () => <Seo title="Portfolio"/>

export default PortfolioPage