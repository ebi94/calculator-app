/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 360,
          padding: `0 1.0875rem 1.45rem`,
          border: `1px solid #ebebeb`,
          borderRadius: 10,
          marginTop: 20
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
