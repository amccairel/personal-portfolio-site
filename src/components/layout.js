import * as React from 'react'
import '../styles/global.css'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({pageTitle, children}) => {
    
    return(
        <div className='layout'>
            <Navbar></Navbar>
            <main className="content">
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout