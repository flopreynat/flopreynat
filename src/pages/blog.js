import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark ( sort: { fields: [frontmatter___date], order: DESC } ) {
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
            <Head title="Blog"/>
            <div className="mainSection">
                <ol class="posts">
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h5>{edge.node.frontmatter.title}</h5>
                                </Link>
                                <p>{edge.node.excerpt}</p>
                                <div className="postMetadata">
                                    <span>{edge.node.frontmatter.date} - {edge.node.timeToRead} minute read - {edge.node.frontmatter.category}</span>
                                </div>
                                <hr />
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Layout>
    )
}

export default BlogPage