import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './Compounts/About.jsx'
import Class from './Compounts/Class.jsx'
import Team from './Compounts/Team.jsx'
import Price from './Compounts/Price.jsx'
import Text from './Compounts/Text.jsx'
import Blog from './Compounts/Blog.jsx'
import Conduct from './Compounts/Conduct.jsx'

import Login from './Compounts/Login.jsx'
import {BrowserRouter,Route, Routes} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>} /> 
  <Route path="/About.jsx" element={<About/>} />
  <Route path="/Class.jsx" element={<Class/>} />
  <Route path="/Team.jsx" element={<Team/>} />
  <Route path="/Price.jsx" element={<Price/>} />
  <Route path="/Text.jsx" element={<Text/>} />
  <Route path="/Blog.jsx" element={<Blog/>} />
  <Route path="/Conduct.jsx" element={<Conduct/>} />
  <Route path="/Login.jsx" element={<Login/>} /> 
  </Routes>
  </BrowserRouter>
//  <BrowserRouter> 
// <Routes>
//   <App/> 
   

// </Routes>
// </BrowserRouter> 

  // <React.StrictMode>
  //    <App />
  // </React.StrictMode>,
)
