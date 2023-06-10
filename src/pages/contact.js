import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
    return(
        <Layout pageTitle="Contact Me">
            <p>For questions, conversations, or inquiries, feel free to&nbsp;
                <a href="mailto:mccairelaw@gmail.com"><b>email</b></a> me.
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact"/>

export default ContactPage