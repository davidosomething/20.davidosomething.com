import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import classes from './layout.module.css';

export default ({ location, title, children }) => (
  <div className={classes.wrapper}>
    <header>
      <h1 style={{
        ...scale(1 / 3),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}>
        <Link to={`/`} className={classes.homeLink}>{title}</Link>
      </h1>
    </header>
    <main>{children}</main>
  </div>
);
