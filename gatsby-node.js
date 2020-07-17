const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

// Used to create an object for each markdown page.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" }) // looks at the path from the pages directory
    // Takes the nodes and adds a field for the url slug
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Creates all of the different blog post pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions // Get function pointer to the createPage Function
  // Run a query to get the link (url slug) to use for the page.
  // Each node corresponds to a markdown page
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/components/BlogPost.jsx"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
