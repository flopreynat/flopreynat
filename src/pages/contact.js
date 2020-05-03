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
                <p>Ping me on Twitter via <a href="https://twitter.com/@flopreynat" target="_blank">@flopreynat</a> or use the below contact form:</p>
                <form action="https://formspree.io/xknqngdz" method="POST">
                    <input type="text" name="name" placeholder="Your Name" />
                    <br />
                    <input type="email" name="_replyto" placeholder="Your Email" />
                    <br />                    
                    <textarea rows="5" type="text" name="message" placeholder="Message..." />
                    <br />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </Layout>
    )
}

export default ContactPage