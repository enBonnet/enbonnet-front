const countLines = content => {
  let lines = content.split("}")
  return lines.length
}

export default countLines
