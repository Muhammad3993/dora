import { useState } from "react"
// css
import "./investment.css"
// images
import img from "../../assets/images/nako.png"
import img1 from "../../assets/images/active.png"
import img2 from "../../assets/images/comfort.png"

const Investment = () => {
    const [isOpenText, setIsOpenText] = useState()
  return (
    <div className='invest'>
        <div className="container">
            <div className="invest_main">
                <div className="invest_main_top">
                    <div className="invest_main_top_right">
                        <p className="invest_title">Инвестиционные продукты</p>
                        <p className="invest_subtitle">ИФК «Нурфинанс» готов принимать инвестиции в сумме от 100 000 рублей сроком от 3-х месяцев до 3-х лет на следующих условиях:</p>
                    </div>
                    <div className="invest_main_top_left">
                        <p className={isOpenText ? "invest_text invest_text_full" : "invest_text"}>Вкладчик (инвестор) вносит денежные средства в капитал Товарищества на вере «Нурфинанс», становясь участником Товарищества на вере, неся риск убытков, связанных с деятельностью Товарищества, в пределах внесенного вклада, но при этом не принимает участие в осуществлении Товариществом предпринимательской деятельности. Такая форма участия инвестора основана на Шариатском стандарте «Мудараба». По договору, клиент-инвестор передает в управление свой капитал компании «Нур Финанс». Далее капитал направляются на финансирование торговых операций и бизнес-проектов. Начисление дохода, причитающегося к выплате Вкладчику (инвестору), осуществляется Товариществом ежемесячно.</p>
                        <button className="invest_btn" onClick={() => setIsOpenText(!isOpenText)}>Чистать полностью</button>
                    </div>
                </div>

                <div className="invest_main_body">
                    <div className="invest_main_box">
                        <div className="invest_main_box_img">
                            <img src={img} alt="" />
                        </div>
                        <div className="invest_main_box_text">
                            <p className="invest_box_tag">Инвестиции</p>
                            <p className="invest_box_title">Вклад Накопительный</p>
                            <div className="invest_main_box_statistics">
                                <div className="invest_main_box_statistic">
                                    <p className="invest_main_box_statistic_text">17,5%</p>
                                    <p className="invest_main_box_statistic_body">Доходность, до</p>
                                </div>
                                <div className="invest_main_box_statistic">
                                    <p className="invest_main_box_statistic_text">90 дней</p>
                                    <p className="invest_main_box_statistic_body">Срок вклада, от</p>
                                </div>
                            </div>
                            <p className="invest_box_body">Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>
                            <div className="invest_main_box_buttons">
                                <button className="invest_main_box_button">Инвестировать</button>
                                <button className="invest_main_box_button">Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="invest_main_box">
                        <div className="invest_main_box_img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="invest_main_box_text">
                            <p className="invest_box_tag">Инвестиции</p>
                            <p className="invest_box_title">Вклад Накопительный</p>
                            <div className="invest_main_box_statistics">
                                <div className="invest_main_box_statistic">
                                    <p className="invest_main_box_statistic_text">16,5%</p>
                                    <p className="invest_main_box_statistic_body">Доходность, до</p>
                                </div>
                                <div className="invest_main_box_statistic">
                                    <p className="invest_main_box_statistic_text">90 дней</p>
                                    <p className="invest_main_box_statistic_body">Срок вклада, от</p>
                                </div>
                            </div>
                            <p className="invest_box_body">Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>
                            <div className="invest_main_box_buttons">
                                <button className="invest_main_box_button">Инвестировать</button>
                                <button className="invest_main_box_button">Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="invest_main_box">
                        <div className="invest_main_box_img invest_main_box_img1">
                            <img src={img2} alt="" />
                        </div>
                        <div className="invest_main_box_text">
                            <p className="invest_box_tag">Инвестиции</p>
                            <p className="invest_box_title">Вклад Накопительный</p>
                            <div className="invest_main_box_statistics">
                                <div className="invest_main_box_statistic">
                                    <p className="invest_main_box_statistic_text">17,5%</p>
                                    <p className="invest_main_box_statistic_body">Доходность, до</p>
                                </div>
                                <div className="invest_main_box_statistic">
                                    <p className="invest_main_box_statistic_text">90 дней</p>
                                    <p className="invest_main_box_statistic_body">Срок вклада, от</p>
                                </div>
                            </div>
                            <p className="invest_box_body">Доход выплачивается по окончании срока договора, возможно досрочное расторжение</p>
                            <div className="invest_main_box_buttons">
                                <button className="invest_main_box_button">Инвестировать</button>
                                <button className="invest_main_box_button">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Investment