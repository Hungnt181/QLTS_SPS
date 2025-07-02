import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { name: "T1", value: 20 },
  { name: "T2", value: 25 },
  { name: "T3", value: 18 },
  { name: "T4", value: 21 },
  { name: "T5", value: 19 },
  { name: "T6", value: 30 },
  { name: "T7", value: 40 },
  { name: "T8", value: 42 },
  { name: "T9", value: 44 },
  { name: "T10", value: 50 },
  { name: "T11", value: 21 },
  { name: "T12", value: 22 },
];

const FlucChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Tổng giá trị (tỷ)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#5b60e4" barSize={40} />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlucChart;
