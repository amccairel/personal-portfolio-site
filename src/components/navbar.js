import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = () => {

    const data = useStaticQuery(graphql`query {
        site {
          siteMetadata {
            title
          }
        }
      }`)

    return(
        <header>
            <nav>
            <ul>
                <li>
                    <Link to='/'>{data.site.siteMetadata.title}</Link>
                </li>
                <li>
                    <Link to='/about'>About Me</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <a href='https://github.com/amccairel'>
                        <StaticImage src='../images/github-mark.png' alt='Github Personal Profile Page'/>
                    </a>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default Navbar