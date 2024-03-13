import React from "react"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Index from "./components/index/index"
import Auth from "./components/Auth/auth"
import Produit from "./components/Produit/Produit"
import AllProduit from "./components/AllProduit/AllProduit"
import Order from "./components/Order/Order"
import AllOrder from "./components/AllOrder/AllOrder"


function App() {
  return (
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/dashboard" element={<Produit/>} />
        <Route path="/produit" element={<AllProduit/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/allorder" element={<AllOrder/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  )
}

export default App