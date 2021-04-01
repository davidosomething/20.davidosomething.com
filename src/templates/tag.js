import { rhythm } from '../utils/typography';
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { PostItem } from '../components/PostItem';

const TagTemplate = ({ data, location, pageContext }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  return (
    <Layout title={data.site.siteMetadata.title}>
      <Seo title={`Posts tagged "${tag}"`} />
      <header style={{ marginBottom: rhythm(2) }}>
        <Link to={location.pathname}>Posts tagged "{tag}"</Link> ({totalCount})
      </header>
      {edges.map(({ node }) =>
        <PostItem key={node.frontmatter.slug} post={node} />
      )}
    </Layout>
  )
};

export default TagTemplate;

export const pageQuery = graphql`
  query BlogPostsTags($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___datePublished]
        order: DESC
      }
      filter: {
        frontmatter: {
          tags: {
            in: [$tag]
          }
        }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            datePublished(formatString: "MMMM DD, YYYY")
            subheader
          }
        }
      }
    }
  }
`;
