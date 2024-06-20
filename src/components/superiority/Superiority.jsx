// css
import "./superiority.css"
// img
import coin from "../../assets/images/coin.png"
import wallet from "../../assets/images/wallet.png"
import chartBar from "../../assets/images/chartBar.png"
import privacy from "../../assets/images/privacy.png"
import symbol from "../../assets/images/symbol1.png"

const data = [
    {
        id: 1,
        title: "Накапливайте, принося пользу обществу",
        img: coin
    },    
    {
        id: 2,
        title: "Зарабатывайте честнои справедливо",
        img: wallet
    },    
    {
        id: 3,
        title: "Вкладывайте в реальные проверенные сделки",
        img: chartBar
    },    
    {
        id: 4,
        title: "Обеспечьте вложения надежными активами",
        img: privacy
    },
]

const Superiority = () => {
  return (
    <div className='superiority'>
        <div className="container">
            <div className="superiority_main">
                {
                    data.map(item => (
                        <div className="superiority_main_box" key={item.id}>
                            <div className="superiority_main_box_img">
                                <img src={symbol} alt="" className="img" />
                                <img src={item.img} alt="" />
                            </div>
                            <p className='superiority_main_box_title'>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Superiority