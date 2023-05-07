import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/global.css'

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
                <h1 className='logo'>
                    <Link to='/' className='nav-link'>{data.site.siteMetadata.title}</Link>
                </h1>
                <ul>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>About Me</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-link'>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='https://github.com/amccairel'>
                            <StaticImage src='../images/github-mark.png' alt='Github Personal Profile Page'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar