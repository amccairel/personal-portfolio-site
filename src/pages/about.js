import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <p>Hi there! My name is Alex and I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

/*
const Head = () => <title>About Me</title>
*/

export function Head() {
    return(
        <Seo title={"About Me"}/>
    )
}

export default AboutPage
