import * as React from 'react'
import '../styles/global.css'
import Navbar from './navbar'

const Layout = ({pageTitle, children}) => {
    
    return(
        <div className='layout'>
            <Navbar></Navbar>
            <main className="content">
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <footer>
                Copyright 2023 Alex McCairel
            </footer>
        </div>
    )
}

export default Layout