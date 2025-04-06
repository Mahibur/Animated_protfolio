import React from "react"
import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/min/RootLayout"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import ProjectDetails from "./components/pages/ProjectDetails"

const App = ()=>{
  return(
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projectdetails" element={<ProjectDetails/>}/>
      </Route>
    </Routes>
  
  )
}
export default App