import { scale } from '../utils/typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import { Footer } from './Footer';

import {
  everything,
  mainHeader,
  title as titleClassName,
  homeLink,
  main,
  mainWrapper,
} from './layout.module.scss';

export const Layout = ({ title, children }) => (
  <div className={everything}>
    <Headroom>
      <header className={mainHeader}>
        <h1 className={titleClassName} style={{ ...scale(1 / 3) }}>
          <Link to={`/`} className={homeLink}>{title}</Link>
        </h1>
      </header>
    </Headroom>
    <div className={mainWrapper}>
      <main className={main}>{children}</main>
    </div>
    <Footer />
  </div>
);
Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Layout;
