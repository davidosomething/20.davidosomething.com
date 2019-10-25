import { scale } from '../utils/typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import { Footer } from './Footer';
import classes from './layout.module.css';

export const Layout = ({ title, children }) => (
  <div className="everything">
    <Headroom>
      <header className={classes.mainHeader}>
        <h1 className={classes.title} style={{ ...scale(1 / 3) }}>
          <Link to={`/`} className={classes.homeLink}>{title}</Link>
        </h1>
      </header>
    </Headroom>
    <div className={classes.mainWrapper}>
      <main className={classes.main}>{children}</main>
    </div>
    <Footer />
  </div>
);
Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Layout;
