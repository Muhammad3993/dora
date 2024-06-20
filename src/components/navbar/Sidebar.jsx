// icons
import { TfiLocationArrow } from "react-icons/tfi"
// css
import "./navbar.css"
// react-router-dom
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"

const Sidebar = ({isOpenBar, setIsOpenBar}) => {
  return (
    <div className={!isOpenBar ? "sidebar_all sidebar_all_none" : "sidebar_all"}>
        <div className={!isOpenBar ? 'sidebar sidebar_none' : "sidebar"}>
            <div className="container">
                <div className="sidebar_main">
                    <div className="sidebar_main_nav">
                        <button className="navbar_btn" onClick={() => setIsOpenBar(false)}>
                            <span><AiOutlineClose /></span>
                        </button>
                        <a href="https://maps.app.goo.gl/jtzu9nfarayVVvb18" target="_blank" className="company_location">
                            <span><TfiLocationArrow /></span>
                            <p>Город Казань</p>
                        </a>
                        <select className="select_language">
                            <option value="" className="select_lang">Ru</option>
                            <option value="" className="select_lang">En</option>
                        </select>
                    </div>
                    <div className="sidebar_main_body">
                        <div className="topPlague_main_links">
                            <Link to={"/"} className="topPlague_main_link">О компании</Link>
                            <Link to={"/"} className="topPlague_main_link">Отзывы</Link>
                            <Link to={"/"} className="topPlague_main_link">Халяль подробно</Link>
                            <Link to={"/"} className="topPlague_main_link">Отчетность</Link>
                            <Link to={"/"} className="topPlague_main_link">Наши партнеры</Link>
                            <Link to={"/"} className="topPlague_main_link">Сотрудничество</Link>
                            <Link to={"/"} className="topPlague_main_link">Контакты</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={!isOpenBar ? "sidebar_overlay_none" : "sidebar_overlay"} onClick={() => setIsOpenBar(false)}></div>
    </div>
  )
}

export default Sidebar