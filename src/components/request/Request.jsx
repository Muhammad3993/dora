// css
import "./request.css"
// img
import img from "../../assets/images/bro.png"
import symbol from "../../assets/images/symbol2.png"

const Request = () => {
  return (
    <div className='request'>
        <div className="container">
            <div className="request_main">
                <div className="request_main_text">
                    <p className="request_title">У вас остались вопросы?</p>
                    <p className="request_title_fill">Закажите консультацию специалиста</p>
                    <p className="request_subtitle">Мы подробно ответим на все ваши вопросы и подберем наиболее удобный вариант вклада</p>
                    <div className="request_main_text_buttons">
                        <button className="request_main_text_button">Заказать консультацию</button>
                        <button className="request_main_text_button">Онлайн чат</button>
                    </div>
                </div>
                <div className="request_main_img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Request