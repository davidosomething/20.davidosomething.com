const kebabCase = require('lodash/kebabCase');
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: {
            fields: [frontmatter___datePublished],
            order: DESC
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors;
  }

  // =========================================================================
  // Create blog posts pages
  // =========================================================================

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const blogPosts = result.data.postsRemark.edges;
  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });


  // =========================================================================
  // Create specific tag pages
  // =========================================================================

  const tagTemplate = path.resolve(`./src/templates/tag.js`)
  const tags = result.data.tagsGroup.group;
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}
