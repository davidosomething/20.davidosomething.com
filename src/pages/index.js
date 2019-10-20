import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { SEO } from '../components/SEO'
import { rhythm, scale } from '../utils/typography'
import styles from '../styles/variables.css';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="All posts" />
      {posts.map(({ node: post }) => {
        const title = post.frontmatter.title || post.fields.slug;
        return (
          <article key={post.fields.slug} style={{ marginBottom: rhythm(1.5) }}>
            <header>
              <h2 style={{ marginBottom: rhythm(0.3) }}>
                <Link to={post.fields.slug}>{title}</Link>
              </h2>
              <p
                style={{ marginBottom: 0 }}
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.subheader,
                }}
              />
              <small style={{
                ...scale(-1 / 2),
                color: styles.off1,
              }}>
                Published on {post.frontmatter.datePublished}
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
