import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./components/index/index"
import AllProduit from "./components/AllProduit/AllProduit"
import Produit from "./components/Produit/Produit"
import Order from "./components/Order/Order"
import Design from "./components/Design/design"
import AllOrder from "./components/AllOrder/AllOrder"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Auth from "./components/Auth"
import AuthRoute from "./components/AuthRoute/AuthRoute"

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produit" element={<AllProduit />} />
          <Route path="/dashboard" element={<AuthRoute element={<Produit />} roles={["admin"]} />} />
          <Route path="/order" element={<AuthRoute element={<Order />} roles={["user"]} />} />
          <Route path="/allorder" element={<AuthRoute element={<AllOrder />} roles={["admin"]} />} />
          <Route path="/design" element={<Design />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
