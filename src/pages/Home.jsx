// components
import Calculate from "../components/calculate/Calculate"
import Header from "../components/header/Header"
import Investment from "../components/investment/Investment"
import Investor from "../components/investor/Investor"
import Model from "../components/model/Model"
import Profit from "../components/profit/Profit"
import Request from "../components/request/Request"
import Resume from "../components/resume/Resume"
import Superiority from "../components/superiority/Superiority"

const Home = () => {
  return (
    <>
        <Header />
        <Superiority />
        <Calculate/>
        <Resume />
        <Profit />
        <Investment />
        <Request />
        <Model />
        <Investor />
    </>
  )
}

export default Home