import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

export default ({ data, location, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.subheader || post.excerpt}
      />
      <article>
        <header style={{ marginBottom: rhythm(1) }}>
          <h1 style={{
            ...scale(5 / 4),
            marginBottom: rhythm(0.5),
          }}>{post.frontmatter.title}</h1>
          <p
            style={{ marginBottom: 0 }}
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.subheader,
            }}
          />
          <small style={{
            ...scale(-1 / 2),
            color: '#dcc',
          }}>
            Published on {post.frontmatter.datePublished}
          </small>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            marginLeft: 0,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        datePublished(formatString: "MMMM DD, YYYY")
        subheader
      }
    }
  }
`
