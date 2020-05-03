import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaRss, FaTwitter, FaGithub, FaCodepen, FaDribbble } from "react-icons/fa";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer>
            <div>
                <p>© 2020 {data.site.siteMetadata.author}</p>
                <ol className="mySocial">
                    <li><a href="https://flopreynat.com/rss.xml"><FaRss /></a></li>
                    <li><a href="https://twitter.com/flopreynat"><FaTwitter /></a></li>
                    <li><a href="https://github.com/flopreynat"><FaGithub /></a></li>
                    <li><a href="https://codepen.io/flopreynat/"><FaCodepen /></a></li>
                    <li><a href="https://dribbble.com/flopreynat"><FaDribbble /></a></li>
                </ol>
            </div>
            <div>
                <span className="poweredBy">Powered by Gatsby / Hosted on Github</span>
            </div>
        </footer>
    )
}

export default Footer