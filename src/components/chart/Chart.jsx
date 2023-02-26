import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {name: "Ocak" , Total: 1200},
  {name: "Şubat" , Total: 2100},
  {name: "Mart" , Total: 800},
  {name: "Nisan" , Total: 1600},
  {name: "Mayıs" , Total: 900},
  {name: "Haziran" , Total: 1700},
];

const Chart = ({aspect, title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00b4d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00b4d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray"/>
          <CartesianGrid strokeDasharray="3 3" className="charGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#00b4d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
