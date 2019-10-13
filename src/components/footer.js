import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="footer-build">
        © {new Date().getFullYear()}, Construido con
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}y <a href="https://strapi.io/">Strapi</a>
      </div>
    </footer>
  )
}

export default Footer
