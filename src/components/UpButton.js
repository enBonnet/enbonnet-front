import React from "react"
import { Icons } from "./icons"

const moveScrollTop = () => {
  window.scrollTo(0, 0)
}

export const UpButton = () => {
  return (
    <span onClick={() => moveScrollTop()} className="up align-button">
      <Icons name="arrow-up" /> Arriba
    </span>
  )
}
