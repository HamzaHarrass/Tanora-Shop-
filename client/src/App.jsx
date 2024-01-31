import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import AuthForm from "./components/Auth"


// import './App.css'

function App() {
  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        hello
        <Route path="/" element={<AuthForm/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App