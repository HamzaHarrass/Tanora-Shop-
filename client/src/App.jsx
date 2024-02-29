import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Index from "./components/index/index"
import Auth from "./components/Auth/auth"
import Produit from "./components/Produit/Produit"



function App() {
  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        hello
        <Route path="/" element={<Index/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/produit" element={<Produit/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App