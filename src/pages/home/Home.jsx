import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import "./home.scss"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/List"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart aspect={2 / 1} title="Son 6 Ay (Hasılat)"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Son İşlemler</div>
            <Table/>
          </div>
        </div>
    </div>
  )
}

export default Home