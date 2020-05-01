import React from 'react'
import { Link,graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark ( 
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1 ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString:"MMMM Do, YYYY")
                            category
                        }
                        excerpt
                        timeToRead
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Head title="Home"/>
            <div className="mainSection">
                <div className="moto"> 
                    <h1>Code like nobody's watching</h1>
                    <h2>... and rolling their eyes thinking WTF</h2>
                    <span>No kidding...</span>
                </div>
                <div className="latestArticleSection">
                    <h4>Latest blog post</h4>
                    <hr />
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <div class="latestArticle">
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h5>{edge.node.frontmatter.title}</h5>
                                </Link>
                                <p>{edge.node.excerpt}</p>
                                <div className="postMetadata">
                                    <span>{edge.node.frontmatter.date} - {edge.node.timeToRead} minute read - {edge.node.frontmatter.category}</span>
                                </div>
                            </div>
                        )
                    })}
                    <div className="textCenter">
                        <a href="/blog" className="button">
                        Read full Blog
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage