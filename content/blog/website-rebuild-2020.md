---
slug:           website-rebuild-2020
title:          "Website Rebuild for 2020"
subheader:      "Testing the waters with GatsbyJS"
datePublished:  2019-10-07
tags:
  - gatsbyjs
  - cssmodules
---

The 2020 version of davidosomething.com is built on [GatsbyJS]. At the time of
this writing I am working for [Squarespace], a company that provides a website
builder and CMS as one of its services, so you might wonder why I am not
hosting my blog on that platform. The reason is to branch out my knowledge of
the website creation field, both for work research and as an exercise.

## Changes since the site's last iteration

Since the 2016 version, I've removed commenting from this site. There's other
ways to share a post and leave notes (including just tweeting me), so I've
opted not to include it.

The changelog output has not made its way back in, but I will probably
re-introduce it later.

## Thoughts on the tech stack

The tech stack I'm using is the [GatsbyJS] build system and framework, React,
[CSS Modules], [typography.js], and GraphQL.

Of those, the one I'd previously never used and I've have come to like is CSS
Modules. There are some flaws with the `@values` system, but it's a nice break
from using SASS in personal projects and LESS at work.

I was introduced to typography.js since I started this blog using
[gatsby-starter-blog]. It provides some nice handling of defaults, but it is
not possible to combine with other frameworks (i.e., you can't really import
`rhythym` and `scale` into your CSS Modules are functions AFAIK).

The GraphQL integration into the GatsbyJS framework has been amazing. I'm
using it to query static JSON and all my old markdown files from this blog.
It's so much nicer than the configuration based system that [Metalsmith] had.

GatsbyJS itself has been very nice. I think the biggest barrier to entry
(provided you already know the other parts of the stack) is figuring out which
`gatsby-*.js` file to edit and what they do. I've also run into some caching
issues during hot reload development, so I typically start with a `gatsby
clean` every time I start a coding session.

[GatsbyJS]: https://www.gatsbyjs.org
[Squarespace]: https://www.squarespace.com
[CSS Modules]: https://github.com/css-modules/css-modules
[typography.js]: https://kyleamathews.github.io/typography.js
[gatsby-starter-blog]: https://github.com/gatsbyjs/gatsby-starter-blog
[Metalsmith]: https://metalsmith.io/
