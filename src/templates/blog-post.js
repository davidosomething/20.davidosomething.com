import { rhythm, scale } from '../utils/typography';
import React from 'react';
import { Link, graphql } from 'gatsby';
import withUtterances from 'with-utterances';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import classes from './blog-post.module.scss';

const Article = withUtterances(
  ({ location, frontmatter, post }) => (
    <article>
      <header style={{ marginBottom: rhythm(1) }}>
        <h1 className="page--title">
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
    </article>
  ),
  'davidosomething/utterances-davidosomething.com', // repo
  'github-light', // theme
  'og:title', // term
);

export default ({ data, location, pageContext }) => {
  const { site, markdownRemark: post } = data;
  const { siteMetadata } = site;
  const { frontmatter } = post;
  const { previous, next } = pageContext;

  return (
    <Layout title={siteMetadata.title}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.subheader || post.excerpt}
      />
      <Article location={location} frontmatter={frontmatter} post={post} />
      <hr style={{ marginBottom: rhythm(1) }} />
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
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
