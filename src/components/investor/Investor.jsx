// css
import "./investor.css"
// images
import img from "../../assets/images/investor.png"

const Investor = () => {
  return (
    <div className="investor">
        <div className="container">
            <div className="investor_main">
                <p className="investor_main_title">Онлайн-заявка вкладчика</p>
                <div className="investor_main_box">
                    <div className="investor_main_box_left">
                        <div className="investor_main_box_left_top">
                            <div className="investor_main_box_left_contact">
                                <p className="investor_main_box_left_contact_title">Контактные данные</p>
                                <div className="investor_main_box_left_contact_col">
                                    <div className="investor_main_box_left_contact_col_row">
                                        <div className="investor_main_box_left_contact_col_input">
                                            <label>
                                                <p>Фамилия, Имя и Отчество</p>
                                                <input type="text" placeholder="Имя" />
                                            </label>
                                        </div>        
                                        <div className="investor_main_box_left_contact_col_input">
                                            <label>
                                                <p>Электронная почта</p>
                                                <input type="email" placeholder="Name@mail.com" />
                                            </label>
                                        </div>                                    
                                        <div className="investor_main_box_left_contact_col_input">
                                            <label>
                                                <p>Гражданство</p>
                                                <select>
                                                    <option value="">Имею гражданство РФ</option>
                                                    <option value="">Имею гражданство РФ</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="investor_main_box_left_contact_col_row">
                                        <div className="investor_main_box_left_contact_col_input">
                                            <label>
                                                <p>Мобильный телефон</p>
                                                <input type="text" placeholder="+7" />
                                            </label>
                                        </div>        
                                        <div className="investor_main_box_left_contact_col_input">
                                            <label>
                                                <p>Дата рождения</p>
                                                <input type="text" placeholder="26.01.1984" />
                                            </label>
                                        </div>                                    
                                        <div className="investor_main_box_left_contact_col_input">
                                            <label>
                                                <p>Город проживания</p>
                                                <input type="text" placeholder="Казань" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="investor_main_box_left_settings">
                                <p className="investor_main_box_left_contact_title">Параметры вклада</p>
                                <div className="investor_main_box_left_contact_col_row">
                                    <div className="investor_main_box_left_contact_col_input">
                                        <p>Сумма вклада</p>
                                        <p>1 000 000 ₽</p>
                                        <div className="investor_main_box_left_contact_col_dynemic">
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="investor_main_box_left_contact_col_input">
                                        <p>Срок инвестирования</p>
                                        <p>24 месяца</p>
                                        <div className="investor_main_box_left_contact_col_dynemic col_dynemic1">
                                            <div></div>
                                        </div>
                                    </div>                                    
                                    <div className="investor_main_box_left_contact_col_input">
                                        <p>Пополнение вклада</p>
                                        <p>10 000 ₽ /в месяц</p>
                                        <div className="investor_main_box_left_contact_col_dynemic col_dynemic2">
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="investor_main_box_left_bottom">
                            <button className="investor_main_box_left_bottom_btn">Оформить заявку</button>
                            <p className="investor_main_box_left_bottom_title">Заполняя форму, я принимаю <br /><span>условия передачи информации</span></p>
                        </div>
                    </div>
                    <div className="investor_main_box_img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investor