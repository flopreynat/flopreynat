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
                <Image />
                <p>My name is flo.</p>
            </div>
        </Layout>
    )
}

export default AboutPage