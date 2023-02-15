import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage 
      alt="Two German Shorthair Pointers, Juno and Kiva, on a couch."
      src="../images/j&k_on_couch.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
