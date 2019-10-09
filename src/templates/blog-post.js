import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import classes from './blog-post.module.css';

export default ({ data, location, pageContext }) => {
  const post = data.markdownRemark;
  const { frontmatter } = post;
  const { previous, next } = pageContext;

  return (
    <Layout
      location={location}
      siteMetadata={data.site.siteMetadata}
    >
      <SEO
        title={frontmatter.title}
        description={frontmatter.subheader || post.excerpt}
      />
      <article>
        <header style={{ marginBottom: rhythm(1) }}>
          <h1 style={{
            ...scale(5 / 4),
            marginBottom: rhythm(0.2),
          }}>
            <Link to={location.pathname}>{frontmatter.title}</Link>
          </h1>
          <p className={classes.subheader}
            dangerouslySetInnerHTML={{
              __html: frontmatter.subheader,
            }}
          />
          <small
            className={classes.datePublished}
            style={{ ...scale(-1 / 2) }}
          >
            Published on {frontmatter.datePublished}
          </small>
        </header>
        <section
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr style={{ marginBottom: rhythm(1) }} />
      </article>
      <nav>
        <ul className={classes.postNavList}>
          <li>
            {previous && (
              <Link
                style={{ ...scale(-1 /2) }}
                to={previous.fields.slug}
                rel="prev"
              >
                <small>Older</small>
                <span>{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                style={{ ...scale(-1 /2) }}
                to={next.fields.slug}
                rel="next"
              >
                <small>Newer</small>
                <span>{next.frontmatter.title}</span>
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
        author
        social {
          github
          linkedin
          twitter
        }
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        slug
        datePublished(formatString: "MMMM DD, YYYY")
        subheader
      }
    }
  }
`
