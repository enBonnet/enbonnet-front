import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Icons } from "./icons"

const Header = ({ siteTitle }) => (
  <header>
    <div className="social">
      <a href="https://twitter.com/enbonnet">
        <Icons name="twitter" />
      </a>
      <a href="https://www.linkedin.com/in/ender-bonnet-b47b25144/">
        <Icons name="linkedin" />
      </a>
      <a href="https://instagram.com/enbonnet">
        <Icons name="instagram" />
      </a>
      <a href="https://t.me/enbonnet">
        <Icons name="instagram" name="sign" />
      </a>
    </div>
    <h1 className="title">
      <Link className="site-title" to="/">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
