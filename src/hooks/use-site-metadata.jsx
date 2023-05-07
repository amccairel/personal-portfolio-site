import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    description
                    title
                    siteUrl
                    charset
                    author
                }
            }
        }
    `)

    return data.site.siteMetadata
}