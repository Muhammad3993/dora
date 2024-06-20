// css
import "./profit.css"
// chart
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
  } from 'recharts';

  const data = [
    {
      name: 'Сентябрь 2020',
      uv: 4000,
      pv: 7000,
      amt: 2400,
    },
    {
      name: 'Октябрь 2020',
      uv: 3000,
      pv: 9000,
      amt: 2210,
    },
    {
      name: 'Ноябрь 2020',
      uv: 2000,
      pv: 7000,
      amt: 2290,
    },
    {
      name: 'Декабрь 2020',
      uv: 2780,
      pv: 6700,
      amt: 2000,
    },
    {
      name: 'Январь 2021',
      uv: 1890,
      pv: 7000,
      amt: 2181,
    },
    {
      name: 'Февраль 2021',
      uv: 2390,
      pv: 9000,
      amt: 2500,
    },
    {
      name: 'Март 2021',
      uv: 3490,
      pv: 7000,
      amt: 2100,
    },    
    {
      name: 'Апрель 2021',
      uv: 3490,
      pv: 9000,
      amt: 2100,
    },    
    {
      name: 'Май 2021',
      uv: 3490,
      pv: 7000,
      amt: 2100,
    },
    {
        name: 'Июнь 2021',
        uv: 3490,
        pv: 9000,
        amt: 2100,
      },
      {
        name: 'Июль 2021',
        uv: 3490,
        pv: 7000,
        amt: 2100,
      },
  ];

const Profit = () => {
  return (
    <div className="profit">
        <div className="container">
            <div className="profit_main">
                <p className="profit_main_title">Доходность</p>
                <div className="profit_main_texts">
                    <p className="profit_main_body">Доходность портфеля компании и инвестиционных вкладов «Нурфинанс» в % годовых за последние 11 месяцев</p>
                    <div className="profit_main_boxes">
                        <div className="profit_main_box">
                            <div>
                              <div className="profit_main_box_circle"></div>
                            </div>
                            <p className="profit_main_box_title">Общая доходность</p>
                        </div>
                        <div className="profit_main_box">
                            <div>
                              <div className="profit_main_box_circle"></div>
                            </div>
                            <p className="profit_main_box_title">Средняя доходность инвесторов</p>
                        </div>
                    </div>
                </div>
                <div className="profit_main_chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 50,
                            left: 70,
                            bottom: 20,
                        }}
                        >
                        <CartesianGrid strokeLinecap="3 3" vertical={true} horizontal={false}/>
                        <XAxis
                          dataKey="name"
                          tick={<CustomXAxisTick />}
                        />
                        <Tooltip />
                        <Line  dataKey="pv" stroke="#0000DE" strokeWidth={4} activeDot={{ r: 8 }} />
                        <Line  dataKey="uv" stroke="#355DFB" strokeWidth={4} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profit;

const CustomXAxisTick = ({ x, y, payload, active }) => {

    const [month, year] = payload.value.split(' ');

    const tickStyle = {
      fill: active ? '#0000DE' : '#6489A0',
      fontWeight: "400",
      fontSize: '16px',
      fontWeight: active ? 'bold' : 'normal',
    };
  
    return (
      <text
        x={x}
        y={y + 10}
        style={tickStyle}
        className="recharts-text recharts-cartesian-axis-tick-value"
      >
        <tspan x={x} dy="0.71em">{month}</tspan>
        <tspan x={x} dy="1em" style={{margin: "10px"}}>{year}</tspan>
      </text>
    );
  };