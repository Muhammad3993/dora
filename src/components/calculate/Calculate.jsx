import { useState } from "react"
// css
import "./calculate.css"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    AreaChart,
    Area,
  } from 'recharts';
// chart
const data = [
    {
      name: 'Page A',
      uv: 0,
      pv: 0,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 50,
      pv: 200,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 200,
      pv: 500,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 500,
      pv: 1000,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 800,
      pv: 1700,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 1200,
      pv: 2500,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 2000,
      pv: 4000,
      amt: 2100,
    },
  ];

const Calculate = () => {
    const [isClick, setIsClick] = useState(true)
    const [isClick1, setIsClick1] = useState(false)
  return (
    <div className="calculate">
        <div className="container">
            <div className="calculate_main">
                <p className="calculate_main_title">Рассчитай свои накопления и доход</p>
                <div className="calculate_main_boxes">
                    <div className="calculate_main_boxes_col">
                        <div className="calculate_main_box">
                            <div className="calculate_main_boox">
                                <div className="calculate_main_boox_nav">
                                    <p className="calculate_main_boox_nav_title">Сумма вклада</p>
                                    <p className="calculate_main_boox_nav_subtitle">1 000 000 ₽</p>
                                </div>
                                <div className="calculate_main_boox_dynemic">
                                    <div></div>
                                </div>
                            </div>                        
                            <div className="calculate_main_boox">
                                <div className="calculate_main_boox_nav">
                                    <p className="calculate_main_boox_nav_title">Сумма вклада</p>
                                    <p className="calculate_main_boox_nav_subtitle">1 000 000 ₽</p>
                                </div>
                                <div className="calculate_main_boox_dynemic1">
                                    <div></div>
                                </div>
                            </div>               
                            <div className="calculate_main_boox">
                                <p className="calculate_main_boox_nav_title">Порядок выплаты дохода</p>
                                <div className="calculate_main_boox_form">
                                    <label className={!isClick ? "label" : ""}
                                 
                                    >
                                        <input type="checkbox"
                                            onChange={(e) => {
                                                if (e.target.checked === true) {
                                                    setIsClick(true)
                                                    setIsClick1(false)
                                                }
                                            }}
                                        />
                                        <p>Ежемесячно</p>
                                    </label>                                
                                    <label 
                                        className={!isClick1 ? "label" : ""}
                                        onClick={() => {
                                            setIsClick(false)
                                            setIsClick1(true)
                                        }}
                                    >
                                        <input type="checkbox" onChange={(e) => {
                                            if (e.target.checked === true) {
                                                setIsClick1(true)
                                                setIsClick(false)
                                            }
                                        }} />
                                        <p>В конце срока</p>
                                    </label>
                                </div>
                            </div>                        
                            <div className="calculate_main_boox">
                                <div className="calculate_main_boox_nav">
                                    <p className="calculate_main_boox_nav_title">Сумма вклада</p>
                                    <p className="calculate_main_boox_nav_subtitle">1 000 000 ₽</p>
                                </div>
                                <div className="calculate_main_boox_dynemic2">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="calculate_main_boxes_chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart width={500} height={300} data={data}>
                            <CartesianGrid strokeOpacity="3 3" vertical={true} horizontal={false} />
                            <Tooltip />
                            <Line type="monotone" dataKey="uv" strokeWidth={3} stroke="#355dfb" />
                            <Area type="monotone" dataKey="pv" stroke="#0000DE" strokeWidth={3}/>
                            <Area type="monotone" dataKey="uv" stroke="#355dfb" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="calculate_main_boxes_col1">
                        <div className="calculate_main_boxes_col1_row">
                            <p className="calculate_main_boxes_col1_row_num">12,5%</p>
                            <p className="calculate_main_boxes_col1_row_subtitle">Доходность</p>
                        </div>                        
                        <div className="calculate_main_boxes_col1_row">
                            <p className="calculate_main_boxes_col1_row_num">282 366 ₽</p>
                            <p>Сумма доходности</p>
                        </div>                        
                        <div className="calculate_main_boxes_col1_row">
                            <p className="calculate_main_boxes_col1_row_num">1 282 366 ₽</p>
                            <p>Итоговая сумма</p>
                        </div>
                        <button className="calculate_main_boxes_col1_btn">Инвестировать</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculate