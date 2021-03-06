import { scale } from '../utils/typography';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import avatar from '../../content/assets/avatar.png';
import github from 'super-tiny-icons/images/svg/github.svg';
import twitter from 'super-tiny-icons/images/svg/twitter.svg';
import rss from 'super-tiny-icons/images/svg/rss.svg';
import {
  footerWrapper,
  footer,
  avatar as avatarClassName
} from './footer.module.scss';

export const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
              twitter
            }
          }
        }
      }
    `
  );

  const { social } = site.siteMetadata;

  return (
    <footer className={footer} style={{
      ...scale(-1 / 4),
      lineHeight: '1.5rem',
    }}>
      <div className={footerWrapper}>
        <img className={avatarClassName} src={avatar} alt="Avatar" />
        <h2 style={{ ...scale(-1 / 4) }}>About me</h2>
        <p>
          I'm a plant-waterer, dad, husband, dog-owner, and Vim and Linux
          enthusiast in NYC.<br />
        </p>
        <p>
          Currently Senior Software Engineer at <a
          href="https://www.squarespace.com">Squarespace</a> (but this blog is
          my own pet project). Previously at Elite Daily/Bustle, Time Inc., and
          Arnold NYC/Worldwide.<br />
          I was also an Adjunct Instructor at Boston University CDIA, where
          I taught various web development and WordPress courses.
        </p>
        <ul>
          <li>
            <a href={`https://twitter.com/${social.twitter}`}>
              <img src={twitter} alt={`@${social.twitter} on Twitter`} />
            </a>
          </li>
          <li>
            <a href={`https://github.com/${social.github}`}>
              <img src={github} alt={`${social.github} on GitHub`} />
            </a>
          </li>
          <li>
            <a href="/rss.xml"><img src={rss} alt="RSS feed for this site" /></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
