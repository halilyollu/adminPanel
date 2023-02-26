import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Toplam Hasılat</h1>
        <MoreVertIcon fontSize="small" className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar strokeWidth={2} value={70} text={"70%"}/>
        </div>
        <p className="title">Bugün yapılan toplam satışlar</p>
        <p className="amount">$420</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, quidem!</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Hedef</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Geçen Hafta</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Geçen Ay</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured