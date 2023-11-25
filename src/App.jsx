import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"
import { useState } from "react"
import { Result } from "./components/Result"

function App() {
  const [values,setValues] = useState([
    {
      value: 0,
      title: "Initial Investment"
    },
    {
      value: 0,
      title: "Annual Investment"
    },
    {
      value: 0,
      title: "Expencted Return"
    },
    {
      value: 0,
      title: "Duration"
    },
  ])
  const handleInput = (e, title) => {
    const updated = () => {
      return values.map((value) => {
        if (value.title === title) {
          return {
            ...value,
            value: parseFloat(e.target.value)
          };
        } else {
          return value;
        }
      });
    };
    setValues(updated);
  }
  return (
      <>
        <Header/>
        <UserInput handleInput={handleInput}/>
        <Result result={values}/>
      </>
  )
}

export default App
