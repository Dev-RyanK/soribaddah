import React from "react"
import styled from "styled-components"

const Textarea = ({ hidden }) => {
  return <textarea hidden={hidden} />
}

export default Textarea

// 스타일을 적용하면 hidden이 안 먹힌다
const StTextarea = styled.textarea`
  display: flex;
  border: 2px solid var(--color-midblue);
  border-radius: 0.5rem;
`
