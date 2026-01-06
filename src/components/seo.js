import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

export const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const { siteMetadata } = site;
  const metaDescription = description || siteMetadata.description;

  const allMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta);

  return null; // SEO data is now handled by the Head export
};

// Export the Head function for Gatsby to use
export const Head = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const { siteMetadata } = site;
  const metaDescription = description || siteMetadata.description;
  const defaultTitle = siteMetadata.title;

  const allMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title ? `${title} | ${defaultTitle}` : defaultTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title ? `${title} | ${defaultTitle}` : defaultTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta);

  return (
    <>
      {lang && <html lang={lang || 'en'} />}
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      {allMeta.map((metaItem, index) => (
        <meta key={index} {...metaItem} />
      ))}
    </>
  );
};
Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};
Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default Seo;
