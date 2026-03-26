import { CardDemo } from "./Login"
import logo from "./assets/logo.png"

import './App.css'

function App() {
  

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={logo} alt="logo" className="size-48"/>
        <h1 className="text-3xl font-bold py-4 text-primary font-inter">Sign in</h1>
        <CardDemo />
      </div>
    </>
  )
}

export default App
