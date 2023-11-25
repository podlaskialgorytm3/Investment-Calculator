import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"
import { useState } from "react"

function App() {
  const [value,setValue] = useState({
    value: "",
    title: ""
  })
  const handleInput = (e,title) => {
    setValue({
      value: e.target.value,
      title: title
    })
  }
  console.log(value)
  return (
      <>
        <Header/>
        <UserInput handleInput={handleInput}/>
      </>
  )
}

export default App
