import "./single.scss"
import SideBar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/List"

const Single = () => {
  return (
    <div className="single">
      <SideBar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Düzenle</div>
            <h1 className="title">Bilgi</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Ayşe Avcı</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">ayseavci@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefon:</span>
                  <span className="itemValue">+90 555 555 55 55</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adres:</span>
                  <span className="itemValue">Kıbrıs Caddesi</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ülke:</span>
                  <span className="itemValue">Türkiye</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title= "Kullanıcı Harcaması (Son 6 Ay)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Son İşlemler</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single