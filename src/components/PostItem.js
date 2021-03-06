import { rhythm, scale } from '../utils/typography';
import React from 'react';
import { Link } from 'gatsby';
import { off1 } from '../styles/variables.scss';

export const PostItem = ({
  post: {
    fields: {
      slug
    },
    frontmatter: {
      title,
      datePublished,
      subheader
    }
  }
}) => (
  <article style={{ marginBottom: rhythm(1.5) }}>
    <header>
      <h2 style={{ marginBottom: rhythm(0.3) }}>
        <Link to={slug}>{title}</Link>
      </h2>
      <p
        style={{ marginBottom: 0 }}
        dangerouslySetInnerHTML={{
          __html: subheader,
        }}
      />
      <small style={{
        ...scale(-1 / 2),
        color: off1,
      }}>
        Published on {datePublished}
      </small>
    </header>
  </article>
);
