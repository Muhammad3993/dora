// css
import "./resume.css"
// img
import resume from "../../assets/images/resume.png"
import symbol from "../../assets/images/symbol1.png"
// icons
import { GoPlay } from "react-icons/go"

const Resume = () => {
  return (
    <div className='resume'>
        <div className="container">
            <div className="resume_main">
                <div className="resume_main_left">
                    <div className="resume_main_left_img">
                        <img src={resume} alt="" />
                        <img src={symbol} alt="" className="resume_main_left_image" />
                    </div>
                    <button className="resume_main_left_btn">
                        <p>Видео о работе компании</p>
                        <span><GoPlay /></span>
                    </button>
                </div>
                <div className="resume_main_right">
                    <p className="resume_main_right_title">Разумные инвестиции</p>
                    <p className="resume_main_right_subtitle">Вкладывая свои деньги в ИФК «Нур Финанс», инвестор получает:</p>
                    <div className="resume_main_right_first">
                        <div>
                            <div className="resume_main_right_num">1</div>
                        </div>
                        <p className="resume_main_right_first_title">Долю в имуществе и активах компании</p>
                    </div>
                    <div className="resume_main_right_first">
                        <div>
                            <div className="resume_main_right_num">2</div>
                        </div>
                        <div className="resume_main_right_first_box">
                            <p className="resume_main_right_first_title">Долю в прибыли компании</p>
                            <p className="resume_main_right_first_body">От торговых операций, обеспеченных реальными активами. Доля в прибыли инвестора закрепляется в договоре в соответствии с условиями, которые зависят от суммы и срока инвестиционного вклада. В случае отрицательного финансового результата, убытки распределяются между инвесторами пропорционально доле каждого инвестора (вкладчика) в общем капитале компании.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume