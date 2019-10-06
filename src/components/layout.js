import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import { scale } from '../utils/typography';
import classes from './layout.module.css';

export default ({ location, title, children }) => [
  <Headroom key="header">
    <header className={classes.mainHeader}>
      <h1 className={classes.title} style={{ ...scale(1 / 3) }}>
        <Link to={`/`} className={classes.homeLink}>{title}</Link>
      </h1>
    </header>
  </Headroom>,
  <main key="main" className={classes.mainWrapper}>{children}</main>
];
