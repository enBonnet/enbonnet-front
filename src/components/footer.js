import React from "react"
import { Icons } from "./icons"

const Footer = () => {
  return (
    <footer>
      <div className="footer-build">
        © {new Date().getFullYear()}, Construido con
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}y <a href="https://strapi.io/">Strapi</a>
      </div>
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
          <Icons name="sign" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
