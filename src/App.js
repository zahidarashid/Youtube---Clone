import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Addvideo from "./components/addvideo";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* common components */}
        < Navbar />
        <Routes>
          {/* home page */}
          <Route path='/' element={
            <div className="homepage">
              <Sidebar />
              <Home />
            </div>
          } />
          <Route path='/about' element={<About/>}/>
          <Route path='/Addvideo' element={<Addvideo/>}/>
          

          
        </Routes>

      </BrowserRouter>
    </div>
  )

}
export default App;