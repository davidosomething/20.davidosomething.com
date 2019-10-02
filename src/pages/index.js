import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} style={{ marginBottom: rhythm(1.5) }}>
            <header>
              <h3 style={{ marginBottom: rhythm(0.3) }}>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <p
                style={{ marginBottom: 0 }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.subheader,
                }}
              />
              <small style={{
                ...scale(-1 / 2),
                color: '#dcc',
              }}>
                Published on {node.frontmatter.datePublished}
              </small>
            </header>
          </article>
        )
      })}
    </Layout>
  )
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___datePublished], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            datePublished(formatString: "MMMM DD, YYYY")
            title
            subheader
          }
        }
      }
    }
  }
`
