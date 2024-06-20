// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// css
import "./header.css"
// images
import symbol from "../../assets/images/symbol.png"
import symbol1 from "../../assets/images/symbol1.png"
import headerImg from "../../assets/images/header_img.png"
// react-router-dom
import { Link } from 'react-router-dom';
// icons
import { MdArrowBackIos } from 'react-icons/md';

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="header_main">
                <img src={symbol} alt="" className="symbol" />
                <img src={symbol1} alt="" className="symbol1" />
                <img src={symbol1} alt="" className="symbol2" />
                <div className="title">
                    <Link to={"/"}>главная</Link>
                    <div>
                        <span><MdArrowBackIos /></span>
                        <p>инвестиции</p>
                    </div>
                </div>
                <Swiper
                    navigation={true}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation, Pagination]} 
                    className="mySwiper header_swiper"
                >
                    <SwiperSlide>
                        <div className="header_swipe">
                            <div className="header_swipe_left">
                                <p className="header_title">Максимальная доля прибыли по вкладам <span>НурФинанс</span></p>
                                <p className="header_subtitle">Инвестор получает наибольший капитализированный доход</p>
                                <button className='header_btn'>Инвестиционные продукты</button>
                            </div>
                            <div className="header_swipe_right">
                                <img src={headerImg} alt={headerImg} />
                            </div>
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className="header_swipe">
                            <div className="header_swipe_left">
                                <p className="header_title">Максимальная доля прибыли по вкладам <span>НурФинанс</span></p>
                                <p className="header_subtitle">Инвестор получает наибольший капитализированный доход</p>
                                <button className='header_btn'>Инвестиционные продукты</button>
                            </div>
                            <div className="header_swipe_right">
                                <img src={headerImg} alt={headerImg} />
                            </div>
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className="header_swipe">
                            <div className="header_swipe_left">
                                <p className="header_title">Максимальная доля прибыли по вкладам <span>НурФинанс</span></p>
                                <p className="header_subtitle">Инвестор получает наибольший капитализированный доход</p>
                                <button className='header_btn'>Инвестиционные продукты</button>
                            </div>
                            <div className="header_swipe_right">
                                <img src={headerImg} alt={headerImg} />
                            </div>
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className="header_swipe">
                            <div className="header_swipe_left">
                                <p className="header_title">Максимальная доля прибыли по вкладам <span>НурФинанс</span></p>
                                <p className="header_subtitle">Инвестор получает наибольший капитализированный доход</p>
                                <button className='header_btn'>Инвестиционные продукты</button>
                            </div>
                            <div className="header_swipe_right">
                                <img src={headerImg} alt={headerImg} />
                            </div>
                        </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <div className="header_swipe">
                            <div className="header_swipe_left">
                                <p className="header_title">Максимальная доля прибыли по вкладам <span>НурФинанс</span></p>
                                <p className="header_subtitle">Инвестор получает наибольший капитализированный доход</p>
                                <button className='header_btn'>Инвестиционные продукты</button>
                            </div>
                            <div className="header_swipe_right">
                                <img src={headerImg} alt={headerImg} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <img src={symbol} alt="" className="symbol3" />
                <img src={symbol1} alt="" className="symbol4" />
                <img src={symbol1} alt="" className="symbol5" />
                <img src={symbol1} alt="" className="symbol6" />
            </div>
        </div>
    </div>
  )
}

export default Header