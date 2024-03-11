import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Index from "./components/index/index"
import Auth from "./components/Auth/auth"
import Produit from "./components/Produit/Produit"
import AllProduit from "./components/AllProduit/AllProduit"


function App() {
  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/dashboard" element={<Produit/>} />
        <Route path="/produit" element={<AllProduit/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App