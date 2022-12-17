import React from "react"
import styled from "styled-components"

const Button = (props) => {
  const {
    type,
    className,
    hidden,
    onClick,
    text,
    width,
    margin,
    padding,
    children,
  } = props

  const styles = { margin: margin, width: width, padding: padding }

  return (
    <>
      <ElButton
        {...styles}
        type={type}
        className={className}
        hidden={hidden}
        onClick={onClick}
      >
        {text ? text : children}
      </ElButton>
    </>
  )
}

Button.defaultProps = {
  type: "button",
  className: "",
  hidden: false,
  onClick: () => {},
  // onClick: null,
  text: false,
  width: "100%",
  margin: false,
  padding: "10px",
  children: null,
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
