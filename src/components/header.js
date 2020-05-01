import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <div>
        <h1>
          <Link className="siteLogo" to="/">
            <span class="logoText">> {data.site.siteMetadata.title}</span><span className="logoCursor"></span>
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="siteNav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
