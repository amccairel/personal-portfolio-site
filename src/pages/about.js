import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

/*
* TODO: Link to Steve Ricks
* spice up bio
* add location
*/

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <p>
                Hi there! My name is Alex and I'm a software engineer who has production experience using Java
                and Javascript to build modern web applications. I have a passion for elegant designs and seamless
                user experiences. My curiosity for technology continues to expand and I find myself drawn to 
                learning more about AI and wearables as I continue my journey.    
            </p>
            
            <p>
                When I am not working, I love to go on adventures with my German Shorthaired Pointer named 
                Juno, chase after powder skiing in the winter, fly fish year round, and trail run in the 
                summer. I also enjoy a good book, learning to cook new meals, and traveling through the United
                States as well as abroad.
            </p>
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
