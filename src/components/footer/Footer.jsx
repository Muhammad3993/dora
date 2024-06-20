import { useState } from "react"
// css
import "./footer.css"
// img
import logo from "../../assets/images/logo.png"
// icons
import { AiOutlineYoutube } from "react-icons/ai"
import { CiFacebook } from "react-icons/ci"
import { LuSearch } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { PiTelegramLogoLight } from "react-icons/pi"
import { TfiTwitter } from "react-icons/tfi"
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"

const Footer = () => {
    const [isOpenTarget, setIsOpenTarget] = useState(false);
    const [isOpenTarget1, setIsOpenTarget1] = useState(true);
    const [isOpenTarget2, setIsOpenTarget2] = useState(false);
    const [isOpenTarget3, setIsOpenTarget3] = useState(false);
  return (
    <footer>
        <div className="container">
            <div className="footer">
                <div className="footer_nav">
                    <div className="foot_logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="foot_search">
                        <span><LuSearch /></span>
                        <input type="text" placeholder="Поиск по услугам" />
                    </div>
                </div>
                <div className="footer_body">
                    <div className="footer_body_col">
                        <div className="footer_body_row">
                            <p className="footer_body_row_title">8 800 2700 700</p>
                            <a href="mailto:support@nur.finance" className="footer_body_row_subtitle">support@nur.finance</a>
                        </div>
                        <div className="footer_body_secondrow">
                            <p className="footer_body_secondrow_title">Казань, ул. Мавлютова, дом 31</p>
                            <p className="footer_body_row_subtitle">Мы работаем с 08:00 до 20:00</p>
                        </div>
                        <div className="footer_body_row_socials">
                            <a href="https://www.facebook.com/" className="footer_body_row_social">
                                <span><CiFacebook /></span>
                            </a>                            
                            <a href="https://www.whatsapp.com/" className="footer_body_row_social">
                                <span><FaWhatsapp /></span>
                            </a>                            
                            <a href="https://t.me/my_experiencees" className="footer_body_row_social">
                                <span><PiTelegramLogoLight /></span>
                            </a>                  
                            <a href="https://www.youtube.com/" className="footer_body_row_social">
                                <span><AiOutlineYoutube /></span>
                            </a>                            
                            <a href="https://x.com/" className="footer_body_row_social">
                                <span><TfiTwitter /></span>
                            </a>
                        </div>
                    </div>
                    <div className="footer_body_col">
                        <p 
                            className={isOpenTarget ? "footer_body_col_title footer_body_col_title_black" : "footer_body_col_title"} 
                            onClick={() => {
                                setIsOpenTarget(true)
                                setIsOpenTarget1(false)
                                setIsOpenTarget2(false)
                                setIsOpenTarget3(false)
                            }}
                        >
                            Инвестиции 
                            <span><IoIosArrowDown /></span>
                        </p>
                        <div className={isOpenTarget ? "footer_body_col_links footer_body_col_links_open" : "footer_body_col_links"}>
                            <Link to={"/"} className="footer_body_col_link">Вклад Накопительный</Link>
                            <Link to={"/"} className="footer_body_col_link">Вклад Активный</Link>
                            <Link to={"/"} className="footer_body_col_link">Вклад Комфорт</Link>
                            <Link to={"/"} className="footer_body_col_link">Калькулятор</Link>
                            <Link to={"/"} className="footer_body_col_link">Отзывы по инвестициям</Link>
                        </div>
                    </div>
                    <div className="footer_body_col">
                        <p 
                            className={isOpenTarget1 ? "footer_body_col_title footer_body_col_title_black" : "footer_body_col_title"} 
                            onClick={() => {
                                setIsOpenTarget1(true)
                                setIsOpenTarget(false)
                                setIsOpenTarget2(false)
                                setIsOpenTarget3(false)
                            }}
                        >
                            Рассрочка 
                            <span><IoIosArrowDown /></span>
                        </p>
                        <div className={isOpenTarget1 ? "footer_body_col_links footer_body_col_links_open" : "footer_body_col_links"}>
                            <Link to={"/"} className="footer_body_col_link">АвтоРассрочка</Link>
                            <Link to={"/"} className="footer_body_col_link">Долевое финансирование</Link>
                            <Link to={"/"} className="footer_body_col_link">Долговое финансирование</Link>
                            <Link to={"/"} className="footer_body_col_link">Калькулятор</Link>
                            <Link to={"/"} className="footer_body_col_link">Отзывы по займам</Link>
                        </div>
                    </div>
                    <div className="footer_body_col">
                        <p  
                            className={isOpenTarget2 ? "footer_body_col_title footer_body_col_title_black" : "footer_body_col_title"} 
                            onClick={() => {
                                setIsOpenTarget2(true)
                                setIsOpenTarget(false)
                                setIsOpenTarget1(false)
                                setIsOpenTarget3(false)
                            }}
                        >
                            Компания 
                            <span><IoIosArrowDown /></span>
                        </p>
                        <div className={isOpenTarget2 ? "footer_body_col_links footer_body_col_links_open" : "footer_body_col_links"}>
                            <Link to={"/"} className="footer_body_col_link">О компании</Link>
                            <Link to={"/"} className="footer_body_col_link">Новости</Link>
                            <Link to={"/"} className="footer_body_col_link">Отчетность</Link>
                            <Link to={"/"} className="footer_body_col_link">Сотрудничество</Link>
                            <Link to={"/"} className="footer_body_col_link">Реквизиты</Link>
                        </div>
                    </div>
                    <div className="footer_body_col">
                        <p                             
                            className={isOpenTarget3 ? "footer_body_col_title footer_body_col_title_black" : "footer_body_col_title"} 
                            onClick={() => {
                                setIsOpenTarget3(true)
                                setIsOpenTarget(false)
                                setIsOpenTarget1(false)
                                setIsOpenTarget2(false)
                            }}
                        >
                            Информация 
                            <span><IoIosArrowDown /></span>
                        </p>
                        <div className={isOpenTarget3 ? "footer_body_col_links footer_body_col_links_open" : "footer_body_col_links"}>
                            <Link to={"/"} className="footer_body_col_link">Халяль подробно</Link>
                            <Link to={"/"} className="footer_body_col_link">Наши партнеры</Link>
                            <Link to={"/"} className="footer_body_col_link">Частые вопросы</Link>
                            <Link to={"/"} className="footer_body_col_link">Личный кабинет</Link>
                            <Link to={"/"} className="footer_body_col_link">Контакты</Link>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p className="footer_bottom_title">Заголовок о дом моментах</p>
                    <p className="footer_bottom_description">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. </p>
                </div>
                <div className="footer_bottom_copyright">
                    <p className="footer_bottom_copyright_title">© 2021 АО «НурФинанс»</p>
                    <p className="footer_bottom_copyright_title">Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer