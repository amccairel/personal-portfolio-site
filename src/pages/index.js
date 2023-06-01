import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home">
      <p>Welcome to my personal portfolio site. You can see projects I've completed and my personal interests.</p> 
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage
