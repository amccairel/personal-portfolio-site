import * as React from 'react'
import Layout from '../components/layout'

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
        <title>About Me</title>
    )
}

export default AboutPage
