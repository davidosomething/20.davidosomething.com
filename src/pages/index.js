import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styles from '../styles/variables.css';

export default ({ data, location }) => {
  return (
    <Layout
      location={location}
      siteMetadata={data.site.siteMetadata}
    >
      <SEO title="All posts" />
      {data.allMarkdownRemark.edges.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug} style={{ marginBottom: rhythm(1.5) }}>
            <header>
              <h2 style={{ marginBottom: rhythm(0.3) }}>
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <p
                style={{ marginBottom: 0 }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.subheader,
                }}
              />
              <small style={{
                ...scale(-1 / 2),
                color: styles.off1,
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
        author
        social {
          github
          linkedin
          twitter
        }
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
