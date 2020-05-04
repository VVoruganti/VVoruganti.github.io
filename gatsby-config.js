/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// FIXME manifest plugin stuff

module.exports = {
    siteMetadata: {
        title: `Vineeth Voruganti`,
        description: `My personal site where I write down my thoughts`,
        author: `Vineeth Voruganti`
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Vineeth Voruganti`,
                short_name: `Vineeth Voruganti`,
                start_url: `/`,
                display: `standalone`,
            }
        },
        `gatsby-plugin-offline`,
    ],
}
