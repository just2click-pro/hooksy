import React, { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Mai",
    age: 29,
    message: "A true princes",
  })

  const [name, setName] = useState("Mai")
  const [age, setAge] = useState(29)
  const [message, setMessage] = useState("A true princess")

  const changeMessage = () => {
    // const { message } = person
    if (message.toLowerCase() === "a true princess") {
      // setPerson({ ...person, message: "A street cat" })
      setMessage("a street cat")
    } else {
      // setPerson({ ...person, message: "A true princess" })
      setMessage("a true princess")
    }
  }

  return (
    <>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{message}</h4>

      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
