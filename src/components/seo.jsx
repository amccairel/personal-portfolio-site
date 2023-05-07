import * as React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({title, description, pathname, children}) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl} = useSiteMetadata()

    return(
        <title>{title} | {defaultTitle}</title>
    )
}

export default Seo