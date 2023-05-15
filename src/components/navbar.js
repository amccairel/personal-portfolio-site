import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/global.css'

const Navbar = () => {
    return(
        <header>
            <nav>
                <div className='logo-container'>
                    <Link to='/'>
                        <StaticImage className='logo-img' src='../images/logo.svg' alt='Personal logo for Alex McCairel'/>
                    </Link>
                </div>
                <ul>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link' activeClassName='active-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-link' activeClassName='active-link' partiallyActive={true}>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-link' activeClassName='active-link'>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='https://github.com/amccairel'>
                            <StaticImage className='github-img' src='../images/github-mark-white.svg' alt='Github Personal Profile Page'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar