import React from 'react'

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <div className="mainSection">
                <h3>Contact</h3>
                <p>Want to talk about code, mentorship, and more?</p>
                <p>Ping me on Twitter via <a href="https://twitter.com/@flopreynat" target="_blank">@flopreynat</a>.</p>
            </div>
        </Layout>
    )
}

export default ContactPage