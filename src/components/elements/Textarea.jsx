import React from "react"

const Textarea = (props) => {
  const {
    name,
    hidden,
    children,
    className,
    onChange,
    defaultValue,
    width,
    margin,
    padding,
    // gridArea,
  } = props
  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    // gridArea: gridArea,
  }

  return (
    <textarea
      {...styles}
      name={name}
      className={className}
      hidden={hidden}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}

Textarea.defaultProps = {
  name: "",
  hidden: false,
  className: "",
  defaultValue: "",
  onChange: () => {},
}

export default Textarea

// 스타일을 적용하면 hidden이 안 먹힌다
