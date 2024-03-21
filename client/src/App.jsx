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
          <Route path="/" element= {<AuthRoute element={<Index />} roles={["admin" , "user"]} />} />
          <Route path="/produit" element={<AuthRoute element={<AllProduit />} roles={["admin" , "user"]} />} />
          <Route path="/dashboard" element={<AuthRoute element={<Produit />} roles={["admin"]} />} />
          <Route path="/order" element={<AuthRoute element={<Order />} roles={["user"]} />} />
          <Route path="/allorder" element={<AuthRoute element={<AllOrder />} roles={["admin"]} />}/>
          <Route path="/design" element= {<AuthRoute element={<Design />}  roles={["admin" , "user"]} />}/>
          <Route path="/auth" element={<AuthRoute element={<Auth />}  roles={["admin" , "user"]} />}>
           <Route path="/auth/register" element={<AuthRoute element={<Register />}  roles={["admin" , "user"]} />} />
           <Route path="/auth/login" element={<AuthRoute element={<Login />}  roles={["admin" , "user"]} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}


export default App
