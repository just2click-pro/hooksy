import React, { useState } from "react"

const UseStateBasics = () => {
  const [text, setText] = useState("Some other title")

  const handleClick = () => {
    if (text === "some other title".toLowerCase()) {
      setText("hello world")
    } else {
      setText("some other title")
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
