// css
import "./model.css"
// img
import arrow from "../../assets/images/arrow.png"
import arrow1 from "../../assets/images/arrow1.png"
import img from "../../assets/images/img.png"
import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
// icons
import { IoIosArrowBack } from "react-icons/io"

const Model = () => {
  return (
    <div className="model">
        <div className="container">
            <div className="model_main">
                <p className="model_main_title">Модель работы</p>
                <div className="model_main_nav">
                    <p className="model_main_nav_title">Ваш инвестиционный вклад </p>
                    <img src={arrow} alt="" />
                    <div className="model_main_nav_img">
                        <img src={img} alt="" />
                    </div>
                    <img src={arrow} alt="" />
                    <p className="model_main_nav_title model_main_nav_title1">Финансирование</p>
                </div>
                <div className="model_main_body">
                    <div className="model_main_body_box">
                        <div className="model_main_body_box_img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="model_main_body_box_txt">
                            <p className="model_main_body_box_title">Инвестор
                            фонда</p>
                            <p className="model_main_body_box_subtitle">Доход инвестора
                            по вкладу</p>
                        </div>
                    </div>
                    <img src={arrow1} alt="" className="model_main_body_image" />
                    <div className="model_main_nav_img model_img">
                        <img src={img} alt="" />
                    </div>
                    <img src={arrow1} alt="" className="model_main_body_image1" />
                    <div className="model_main_body_box model_main_body_box1">
                        <div className="model_main_body_box_img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="model_main_body_box_txt">
                            <p className="model_main_body_box_title">Получатель
                            финансирования</p>
                            <p className="model_main_body_box_subtitle">Возврат
                            финансирования</p>
                        </div>
                    </div>
                </div>
                <div className="model_main_bottom">
                    <p className="model_main_bottom_subtitle">Обеспечение реальными активами гарантирует полный возврат инвестиций.</p>
                    <div className="model_main_bottom_title">
                        <span><IoIosArrowBack /></span>
                        <p>Возможный отрицательный результат</p>
                        <span><IoIosArrowBack /></span>
                    </div>
                </div>
            </div>
            <div className="model_media">
                <p className="model_main_title">Модель работы</p>
                <div className="model_media_box">
                    <img src={arrow1} alt="" className="model_media_box_image" />
                    <p className="model_main_nav_title">Ваш инвестиционный вклад </p>
                </div>    
                <div className="model_media_line"></div>            
                <div className="model_media_box">
                    <img src={img} alt="" className="model_media_box_imag" />
                    <p className="model_media_box_title">Инвестиционно-финансовая компания  «НурФинанс»</p>
                </div>
                <div className="model_media_line1"></div>
                <div className="model_media_box">
                    <img src={arrow1} alt="" className="model_media_box_image" />
                    <p className="model_main_nav_title">Финансирование бизнеса</p>
                </div> 
                <div className="model_media_line2"></div>
                <div className="model_media_line3"></div>
                <div className="model_main_body_box_img">
                    <img src={img2} alt="" />
                </div>
                <div className="model_media_box">
                    <img src={arrow1} alt="" className="model_media_box_image" />
                    <p className="model_media_box_title model_media_box_title1">Возврат финансирования</p>
                </div>    
                <div className="model_media_line4"></div>
                <div className="model_media_box">
                    <img src={arrow1} alt="" className="model_media_box_image" />
                    <p className="model_main_nav_title">Доход инвестора по вкладу</p>
                </div>  

                <div className="model_media_bottom">
                    <p className="model_media_bottom_title">Возможный отрицательный результат</p>
                    <p className="model_media_bottom_subtitle">Обеспечение реальными активами гарантирует полный возврат инвестиций.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Model