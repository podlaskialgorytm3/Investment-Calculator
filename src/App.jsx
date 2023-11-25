import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"

function App() {
  const handleInput = (e,title) => {
    return {
        value: e.target.value,
        title: title
    }
  }
  return (
      <>
        <Header/>
        <UserInput handleInput={handleInput}/>
      </>
  )
}

export default App
