import  "./sidebar.scss"
import Logo from "../../images/logo.png"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/">
          <span className="logo">
            <img src={Logo} alt="logo" style={{height: 100}} />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <DashboardIcon className="icon"/>
              <span>Panel</span>
            </li>
          </Link>
          <p className="title">LİSTELER</p>
          <Link to="/users" style={{textDecoration:"none"}}>
            <li>
              <PersonOutlineIcon className="icon"/>
              <span>Kullanıcılar</span>
            </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
            <li>
              <StoreIcon className="icon"/>
              <span>Ürünler</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon"/>
            <span>Siparişler</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Teslimat</span>
          </li>
          <p className="title">VERİ</p>
          <li>
            <InsertChartIcon className="icon"/>
            <span>İstatistikler</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Bildirimler</span>
          </li>
          <p className="title">SERVİS</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon"/>
            <span>Sistem Sağlığı</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon"/>
            <span>Ayarlar</span>
          </li>
          <p className="title">KULLANICI</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profil</span>
          </li>
          <li>
            <ExitToAppIcon className="icon"/>
            <span>Çıkış Yap</span>
          </li>
        </ul> 
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar