import React from "react"
import styled from "styled-components"

const Textarea = (props) => {
  const { hidden, children, width, margin, padding } = props
  const styles = { width: width, margin: margin, padding: padding }
  return <textarea {...styles} hidden={hidden} />
}

Textarea.defaultProps = {
  hidden: false,
}

export default Textarea

// 스타일을 적용하면 hidden이 안 먹힌다
const ElTextarea = styled.textarea`
  display: flex;
  border: 2px solid var(--color-midblue);
  border-radius: 0.5rem;
`
