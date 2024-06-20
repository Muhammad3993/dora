// react-roter-dom
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Pages
import Home from "./pages/Home"
// components
import TopPlague from "./components/topPlague/TopPlague"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <BrowserRouter>
      <TopPlague/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
