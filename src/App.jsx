import React from "react"
import { Route, Routes } from "react-router-dom"
import RootLayout from "./components/min/RootLayout"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import ProjectDetails from "./components/pages/ProjectDetails"
import Portfolio from "./components/pages/Portfolio"
import Services from "./components/pages/Services"
import Blog from "./components/pages/Blog"
import Contact from "./components/pages/Contact"

const App = ()=>{
  return(
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projectdetails" element={<ProjectDetails/>}/>
      </Route>
    </Routes>
  
  )
}
export default App