import kebabCase from 'lodash/kebabCase';
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { tagsList } from './tags.module.scss';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group: tags },
    site: { siteMetadata: { title } },
  },
  location,
}) => (
  <Layout title={title}>
    <Seo title="Tags" />
    <h1 className="page--title">
      <Link to={location.pathname}>Tags</Link>
    </h1>
    <ul className={tagsList}>
      {tags.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
