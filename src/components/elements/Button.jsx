import React from "react"
import styled from "styled-components"

const Button = ({ type, className, hidden, onClick, children }) => {
  return (
    <ElButton
      type={type}
      className={className}
      hidden={hidden}
      onClick={onClick}
    >
      {children}
    </ElButton>
  )
}

Button.defaultProps = () => {
  return <button>임시버튼</button>
}

export default Button

const ElButton = styled.button`
  border: 2px solid var(--color-deepblue);
  border-radius: 0.5rem;
  background-color: white;
  color: var(--color-deepblue);
  :hover {
    background-color: var(--color-deepblue);
    color: white;
  }
  cursor: pointer;
`
