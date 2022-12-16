import React from "react"
import styled from "styled-components"

const Textarea = ({ children, hidden }) => {
  return <StTextarea hidden={hidden}>{children}</StTextarea>
}

export default Textarea

const StTextarea = styled.textarea`
  display: flex;
  border: 2px solid var(--color-midblue);
  border-radius: 0.5rem;
`
