import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plantas from './components/Plantas.jsx';
import Banner from "./components/Banner.jsx";
import { DATABASE } from "./db/db.js";
import { useState } from "react";
import Info from "./components/info.jsx";
import Blog from "./components/Blog.jsx";
import { DATOS } from "./db/datos.js";
import Footer from "./components/Footer.jsx"
import Consejos from "./components/Consejos.jsx";



export default function App() {
  const [data] = useState(DATABASE);
  const [dataInfo] = useState(DATOS);

  return (
    <Router>  
      <div>
        <Banner />
        <Info />
        <Blog dataInfo={dataInfo} />
        <Consejos/>
        
        <Routes>  {/* Las rutas van dentro del Router */}
          <Route path="/" element={<Plantas data={data} />} /> 
          <Route path="/plantas" element={<Plantas data={data} />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/info" element={<Info />} />
          <Route path="/blog" element={<Blog dataInfo={dataInfo}/>} />
          <Route path="/consejos" element={<Consejos/>} />
          
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </div>
    </Router>
  );
}
