import React from 'react';
import { scale } from '../utils/typography';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import avatar from '../../content/assets/avatar.png';
import github from 'super-tiny-icons/images/svg/github.svg';
import linkedin from 'super-tiny-icons/images/svg/linkedin.svg';
import twitter from 'super-tiny-icons/images/svg/twitter.svg';
import rss from 'super-tiny-icons/images/svg/rss.svg';
import classes from './layout.module.css';

const year = (new Date()).getFullYear();

export default ({ location, title, children }) => [
  <Headroom key="header">
    <header className={classes.mainHeader}>
      <h1 className={classes.title} style={{ ...scale(1 / 3) }}>
        <Link to={`/`} className={classes.homeLink}>{title}</Link>
      </h1>
    </header>
  </Headroom>,
  <div key="main" className={classes.mainWrapper}>
    <main className={classes.main}>{children}</main>
  </div>,
  <footer
    key="footer"
    className={classes.footer}
    style={{
      ...scale(-1 / 2),
      lineHeight: '1.4rem',
    }}
  >
    <div className={classes.footerWrapper}>
      <img className={classes.avatar} src={avatar} alt="" />
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
      <aside>
        <ul>
          <li><a href="https://twitter.com/davidosomething"><img src={twitter} alt="@davidosomething on Twitter" /></a></li>
          <li><a href="https://github.com/davidosomething"><img src={github} alt="davidosomething on GitHub" /></a></li>
          <li><a href="https://www.linkedin.com/in/davidosomething/"><img src={linkedin} alt="LinkedIn" /></a></li>
          <li><a href="/rss.xml"><img src={rss} alt="RSS feed for this site" /></a></li>
        </ul>
      </aside>
      <small>Copyright &copy; {year} David O'Trakoun</small>
    </div>
  </footer>,
];
