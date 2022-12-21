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
    height,
    margin,
    padding,
    borderRadius,
    children,
  } = props

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    borderRadius: borderRadius,
  }

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
  height: "",
  margin: "",
  padding: "10px",
  borderRadius: "",
  children: null,
}

export default Button

const ElButton = styled.button`
  margin-bottom: 4px;
  border: 1px solid var(--color-deepblue);
  border-radius: 0.5rem;
  background-color: white;
  color: var(--color-deepblue);
  transition: 0.3s;
  :hover {
    background-color: var(--color-deepblue);
    color: white;
    opacity: 1;
  }
  cursor: pointer;
`
