import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Index from "./components/index/index"
import Auth from "./components/Auth/auth"


// import './App.css'

function App() {
  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        hello
        <Route path="/" element={<Index/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App