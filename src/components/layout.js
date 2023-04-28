import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
 } from '../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`query {
        site {
          siteMetadata {
            title
          }
        }
      }`)

    return(
        <div className={container}>
            <header>
                <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/' className={siteTitle}>{data.site.siteMetadata.title}</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/about' className={navLinkText}>About Me</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to='/blog' className={navLinkText}>Blog</Link>
                    </li>
                    <li>
                        <a href='https://github.com/amccairel' target='_blank'>
                            <StaticImage src='../images/github-mark.png' alt='Github Personal Profile Page'/>
                        </a>
                    </li>
                </ul>
            </nav>
            </header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout