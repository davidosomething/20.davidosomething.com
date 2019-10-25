import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { SEO } from '../components/SEO'
import { PostItem } from '../components/PostItem';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout title={data.site.siteMetadata.title}>
      <SEO title="All posts" />
      {posts.map(({ node }) =>
        <PostItem key={node.frontmatter.slug} post={node} />
      )}
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
