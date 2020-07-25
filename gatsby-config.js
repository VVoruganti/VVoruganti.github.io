/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// FIXME manifest plugin stuff

module.exports = {
  siteMetadata: {
    title: "Vineeth Voruganti",
    description: "My personal site where I write down my thoughts",
    author: "Vineeth Voruganti",
    siteUrl: "https://www.vineeth.io",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
            },
          },
          {
            resolve: "gatsby-remark-vscode",
            options: {
              theme: 'Default Dark+',
              dark: 'Default Dark+',
              inlineCode: {
                marker: "•",
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Vineeth Voruganti",
        short_name: "Vineeth Voruganti",
        start_url: "/",
        display: "standalone",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-feed",
    "gatsby-plugin-sitemap",
  ],
}
