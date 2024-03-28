import React from "react"
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom"
import Index from "./components/index/index"
import AllProduit from "./components/AllProduit/AllProduit"
import Dashboard from "./components/Dashboard/Dashboard"
import Order from "./components/Order/Order"
import Design from "./components/Design/design"
import AllOrder from "./components/AllOrder/AllOrder"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Auth from "./components/Auth"
import AuthRoute from "./components/AuthRoute/AuthRoute"
import logo from './assets/image/logo.png'; 
import user from './assets/image/LA CASA DEL JS.png'; 



const DashboardLayout = ()=>{
  const currentUser = JSON.parse(localStorage.getItem('user'))
  return <main className='flex'>
  <aside className='p-8 shadow-sm  border-r flex flex-col' style={{width:'240px', minHeight: '100vh'}}>
      <a href="#" className="flex items-center w-full flex justify-center">
        <img src={logo} className="h-22 mr-3 w-22 " alt="Tanora Logo"/>
      </a>
      <ul className='py-12 flex flex-col gap-2'>
        <Link to={'/dashboard'} className='py-2 px-12 w-full bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transition-all'>
          Dashboard
        </Link>
        <Link to={'/dashboard/allorder'} className='py-2 px-12 w-full bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transition-all'>
          All orders
        </Link>
      </ul>
  </aside>
  <div className='flex-1 flex flex-col'>
  <nav className="bg-white-100 border-gray-200 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-end max-w-screen-xl px-4 mx-auto">
      <div
      className='flex items-center gap-3'
    >
      {currentUser && <div >
        <p className='font-bold'>{currentUser.nom+" "+currentUser.prenom}</p>
        <p className='text-xs '>{currentUser.email}</p>
      </div>}
      <div>
        <img src={user} alt="" srcset="" className='h-16 w-16 bg-blue-500 rounded-full' />
      </div>
    </div>
    </div>
  </nav>
  <Outlet/>
  </div></main>
}


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index element={<Index />} roles={["user"]}/>} />
          <Route path="/produit" element={<AllProduit element={<AllProduit />} roles={["user"]}/>} />
          <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route path="/dashboard" element={<AuthRoute element={<Dashboard />} roles={["admin"]} />}/>
            <Route path="/dashboard/allorder" element={<AuthRoute element={<AllOrder />} roles={["admin"]} />} />
          </Route>
          <Route path="/order" element={<AuthRoute element={<Order />} roles={["user"]} />} />
          <Route path="/design" element={<Design element={<Design />} roles={["user"]} />} />
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
