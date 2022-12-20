import React from "react"
import styled from "styled-components"

const Input = (props) => {
  const {
    className,
    type,
    minLength,
    maxLength,
    name,
    value,
    placeholder,
    size,
    pattern,
    title,
    defaultValue,
    required,
    onChange,
    width,
    margin,
    padding,
    gridArea,
  } = props
  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    // gridArea: gridArea,
  }
  return (
    <ElInput
      {...styles}
      className={className}
      required={required}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      name={name}
      value={value}
      placeholder={placeholder}
      size={size}
      defaultValue={defaultValue}
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
  defaultValue: "",
  children: null,
  width: "100%",
  margin: "",
  padding: "",
  // gridArea: "",
  onChange: () => {},
}

export default Input

const ElInput = styled.input`
  border: 1px solid var(--color-deepblue);
  border-radius: 0.5rem;
  margin-bottom: 4px;
`
