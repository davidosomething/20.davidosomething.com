import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { PostItem } from '../components/PostItem';

const IndexPage = ({
  data: {
    site: { siteMetadata: { title } },
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout title={title}>
    <Seo title="All posts" />
    {posts.map(({ node }) =>
      <PostItem key={node.fields.slug} post={node} />
    )}
  </Layout>
);

export default IndexPage;

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
