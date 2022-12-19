import React from "react"
import styled from "styled-components"

const Input = (props) => {
  const {
    type,
    minLength,
    maxLength,
    name,
    value,
    placeholder,
    size,
    pattern,
    title,
    required,
    onChange,
    width,
    margin,
    padding,
  } = props
  const styles = { width: width, margin: margin, padding: padding }
  return (
    <ElInput
      {...styles}
      required={required}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      name={name}
      value={value}
      placeholder={placeholder}
      size={size}
      pattern={pattern}
      title={title}
      onChange={onChange}
    />
  )
}

Input.defaultProps = {
  required: false,
  type: "text",
  minLength: "",
  maxLength: "",
  name: undefined,
  value: undefined,
  placeholder: "",
  size: "",
  pattern: null,
  title: null,
  children: null,
  width: "100%",
  margin: "",
  padding: "",
  onChange: () => {},
}

export default Input

const ElInput = styled.input`
  border: 2px solid var(--color-deepblue);
  border-radius: 0.5rem;
  margin-bottom: 4px;
`
