import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"
import countLines from "../utils/countLines"

const CodeBlock = ({ value, language = null }) => {
  const lines = countLines(value)
  return (
    <SyntaxHighlighter
      language={language}
      style={okaidia}
      showLineNumbers={lines >= 3}
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
