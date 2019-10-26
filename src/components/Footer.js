import { scale } from '../utils/typography';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-gtag';
import avatar from '../../content/assets/avatar.png';
import github from 'super-tiny-icons/images/svg/github.svg';
import linkedin from 'super-tiny-icons/images/svg/linkedin.svg';
import twitter from 'super-tiny-icons/images/svg/twitter.svg';
import rss from 'super-tiny-icons/images/svg/rss.svg';
import classes from './footer.module.scss';

const year = (new Date()).getFullYear();

export const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            social {
              github
              linkedin
              twitter
            }
          }
        }
      }
    `
  );

  const { author, social } = site.siteMetadata;

  return (
    <footer className={classes.footer} style={{
      ...scale(-1 / 4),
      lineHeight: '1.5rem',
    }}>
      <div className={classes.footerWrapper}>
        <img className={classes.avatar} src={avatar} alt="Avatar" />
        <h2 style={{ ...scale(-1 / 4) }}>About me</h2>
        <p>
          I'm a combination husband, father, and programmer in New York City.
          I primarily work in JavaScript (node and React); sometimes I dive into
          Java, PHP, Python, Bash, and Lua. I'm a Vim and GNU/Linux user and
          enthusiast.
        </p>
        <p>
          I am currently, a Senior Software Engineer at <a
          href="https://www.squarespace.com">Squarespace</a> (but this blog is
          my own pet project). I worked at Elite Daily/Bustle, Time Inc., and
          Arnold NYC/Worldwide in the past years.<br />
          I also held a brief stint as an Adjunct Instructor at Boston
          University CDIA, where I taught various web development and WordPress
          courses.
        </p>
        <ul>
          <li>
            <OutboundLink href={`https://twitter.com/${social.twitter}`}>
              <img src={twitter} alt={`@${social.twitter} on Twitter`} />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href={`https://github.com/${social.github}`}>
              <img src={github} alt={`${social.github} on GitHub`} />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href={`https://www.linkedin.com/in/${social.linkedin}`}>
              <img src={linkedin} alt="LinkedIn" />
            </OutboundLink>
          </li>
          <li>
            <a href="/rss.xml"><img src={rss} alt="RSS feed for this site" /></a>
          </li>
        </ul>
        <small>Copyright &copy; {year} {author}</small>
      </div>
    </footer>
  );
};
