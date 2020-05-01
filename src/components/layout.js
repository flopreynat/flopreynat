import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <hr />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout