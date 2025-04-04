import React from "react"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import ProjectDetails from "./components/pages/ProjectDetails"
import Navbar from "./components/medium/Navbar"

const App = ()=>{
  return(
    <div className="w-full h-dvh bg-[#020202] px-1.5 md:px-0">
    <Navbar/>
    <Home/>
    </div>
  )
}
export default App