import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return(
    <Layout pageTitle="Welcome!">
      <h1>My name is Alex.</h1>
      <h3>I am a Software Engineer who has full stack experience.</h3> 
      <h4>Welcome to my portfolio site! Here you can see some of my work as well as my personal interests.</h4>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage
