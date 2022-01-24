import React from "react"

const ErrorExample = () => {
  let title = "Some title"
  const handleClick = () => {
    title = "hello world!"
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
