import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString:"MMMM Do, YYYY")
        category
      }
      timeToRead
      html
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <div className="mainSection">
              <h4>{props.data.markdownRemark.frontmatter.title}</h4>
              <div className="postMetadata">
                  <span>{props.data.markdownRemark.frontmatter.date} - {props.data.markdownRemark.timeToRead} minute read - {props.data.markdownRemark.frontmatter.category}</span>
              </div>
              <p></p>
              <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} className="postContent"></div>
            </div>
        </Layout>
    )
}

export default Blog