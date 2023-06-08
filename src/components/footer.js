import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/global.css'

const Footer = () => {
    return(
        <footer>
                <span>&copy; Alex McCairel 2023</span>
                <div className="social-media-accounts">
                    <a className="social-link" href='https://github.com/amccairel'>
                        <StaticImage className="github-logo" src='../images/GitHub_Logo_White.png' alt='Github Logo'/>
                    </a>
                    <a className="social-link" href="https://www.linkedin.com/in/alex-mccairel-b0b2b463/">
                        <StaticImage className="linkedin-logo" src="../images/LI-Logo.png" alt="LinkedIn Logo"/>
                    </a>
                </div>
        </footer>
    )
}

export default Footer