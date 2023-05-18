import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import reactLogo from './assets/react.svg'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Blog1 from "./pages/Blog1" ;
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import NotFound from "./pages/NotFound";
import "./app.css"


function App() {
  

  return (
    <div className="container" >

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/"       element={<Blog1/>}/>
        <Route path="/blog2"  element={<Blog2/>} />
        <Route path="/blog3"  element={<Blog3/>} />
        <Route path="/blog4" element={<Blog4/>}/>
        <Route path="/blog5" element={<Blog5/>}/>
        <Route path="*"       element={< NotFound />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
