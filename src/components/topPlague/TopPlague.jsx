// css
import "./topPlague.css"
// icons
import { PiMapTrifoldThin } from "react-icons/pi"
import { TfiLocationArrow } from "react-icons/tfi"
// react-router-dom
import { Link } from "react-router-dom"

const TopPlague = () => {
  return (
    <div className="topPlague">
        <div className="container">
            <div className="topPlague_main">
                <p className="company_name">Инвестиционно-финансовая компания</p>
                <a href="https://maps.app.goo.gl/jtzu9nfarayVVvb18" target="_blank" className="company_location">
                    <span><TfiLocationArrow /></span>
                    <p>Город Казань</p>
                </a>
                <div className="topPlague_main_links">
                    <Link to={"/"} className="topPlague_main_link">О компании</Link>
                    <Link to={"/"} className="topPlague_main_link">Отзывы</Link>
                    <Link to={"/"} className="topPlague_main_link">Халяль подробно</Link>
                    <Link to={"/"} className="topPlague_main_link">Отчетность</Link>
                    <Link to={"/"} className="topPlague_main_link">Наши партнеры</Link>
                    <Link to={"/"} className="topPlague_main_link">Сотрудничество</Link>
                    <Link to={"/"} className="topPlague_main_link">
                        <p>Контакты</p>
                        <span><PiMapTrifoldThin /></span>
                    </Link>
                </div>
                <select className="select_language">
                    <option value="" className="select_lang">Ru</option>
                    <option value="" className="select_lang">En</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default TopPlague