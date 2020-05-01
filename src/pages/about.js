import React from 'react'
import { Link } from 'gatsby'
import Image from "../components/image"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <div className="mainSection">
                <h3>About Me</h3>
                <p>My name is flo.</p>
                <p>I work in Customer Success at <a href="https://www.odaseva.com/">Odaseva</a>, a young and brilliant company providing Enterprise-class Data Governance
                for Salesforce customers. If your company uses Salesforce, there's a strong chance you'll be needing a solution for Data Protection, Data Privacy, or DataOps at some point so do not hesitate and check us out.</p>
                <p>I have been building websites (on both private and professionnal fronts) for more than 15 years. And like most developers, I am keen to keep up with the latest development tools (such as <a href="https://www.gatsbyjs.org/">Gatsby</a> which was used to build this site).</p>
                <p>I am a strong believer in (our) <b>data privacy</b> so you'll often see me rant about it if you read my <Link to="/blog">blog</Link>.</p>
                <p>If you're a young developer and interested in mentorship, <Link to="/contact">contact me</Link>.</p>
                <Image />
            </div>
        </Layout>
    )
}

export default AboutPage