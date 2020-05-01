import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <div className="mainSection">
                <h3>About Me</h3>
                <p><img src="./flo_avatar.png" alt="flo preynat" width="120px" className="avatar" /></p>
                <p>My name is flo.</p>
            </div>
        </Layout>
    )
}

export default AboutPage