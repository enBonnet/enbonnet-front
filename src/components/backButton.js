import React from "react"
import { Link } from "gatsby"
import { Icons } from "./icons"

export const BackButton = ({ to = "/" }) => {
  return (
    <Link to={to} className="back align-button">
      <Icons name="arrow-left" />
      <span className="back-text">Volver</span>
    </Link>
  )
}
