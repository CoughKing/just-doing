import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import './App.css'


function App() {
  
  
  return (
    <div className="flex flex-col min-h-screen">
     <Header/>
     <main className="flex-grow">
     <Outlet/>
     </main>
     <Footer/>
    </div>
  )
}

export default App
