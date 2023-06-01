import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/global.css'

const Footer = () => {
    return(
        <footer>
                <span>Copyright 2023 Alex McCairel</span>
                <div className="social-media-accounts">
                    <a className="social-link" href='https://github.com/amccairel'>
                        <StaticImage src='../images/GitHub_Logo_White.png' alt='Github Logo'/>
                    </a>
                    <a className="social-link" href="https://www.linkedin.com/in/alex-mccairel-b0b2b463/">
                        <StaticImage src="../images/LI-Logo.png" alt="LinkedIn Logo"/>
                    </a>
                </div>
        </footer>
    )
}

export default Footer