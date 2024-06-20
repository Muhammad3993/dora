// css
import "./navbar.css"
// react-router-dom
import { Link } from "react-router-dom"
// img
import logo from "../../assets/images/logo.png"
// icons
import { AiOutlineMenu } from "react-icons/ai"
import { FaPhone } from "react-icons/fa6"
import { LuSearch } from "react-icons/lu"
// components
import Sidebar from "./Sidebar"
import { useState } from "react"

const Navbar = () => {
    const [isOpenBar, setIsOpenBar] = useState(false);
  return (
    <nav>
        <Sidebar isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar}/>
        <div className="container">
            <div className="navbar">
                <button className="navbar_btn" onClick={() => setIsOpenBar(true)}>
                    <span><AiOutlineMenu /></span>
                </button>
                <Link className="nav_logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="nav_links nav_links_none">
                    <Link to={"/"} className="nav_link">Инвестиции</Link>
                    <Link to={"/"} className="nav_link">Рассрочка</Link>
                    <Link to={"/"} className="nav_link">Калькулятор</Link>
                </div>
                <div className="nav_left">
                    <a href="tel:998976611688" className="nav_number">
                        <span><FaPhone /></span>
                        <p>998 97 661 16 88</p>
                    </a>
                    <button className="nav_btn nav_btn_none">
                        <span><LuSearch /></span>
                    </button>
                    <Link to={"/"} className="nav_left_btn">Личный Кабинет</Link>
                    <Link to={"/"} className="nav_left_btn nav_left_btn_wht">Онлайн-заявка</Link>
                </div>
            </div>
            <div className="navbar_bottom">
                <div className="nav_links">
                    <Link to={"/"} className="nav_link">Инвестиции</Link>
                    <Link to={"/"} className="nav_link">Рассрочка</Link>
                    <Link to={"/"} className="nav_link">Калькулятор</Link>
                </div>
                <button className="nav_btn">
                    <span><LuSearch /></span>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar