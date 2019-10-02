import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: rhythm(1),
      }}
    >
      <header>
        <h1 style={{
          ...scale(1 / 3),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}>
          <Link to={`/`} style={{ color: `inherit` }}>{title}</Link>
        </h1>
      </header>
      <main>{children}</main>
    </div>
  )
};
