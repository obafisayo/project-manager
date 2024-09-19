import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  name: string;
  Achieved: number;
  Target: number;
}

const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

const data: DataPoint[] = [
  { name: 'Jan ' + String(getCurrentYear()), Achieved: 4.000 , Target: 8.000},
  { name: 'Feb ' + String(getCurrentYear()), Achieved: 1.20 , Target: 4.000},
  { name: 'Mar ' + String(getCurrentYear()), Achieved: 6.000 , Target: 7.200},
  { name: 'Apr ' + String(getCurrentYear()), Achieved: 2.780 , Target: 3.000},
  { name: 'May ' + String(getCurrentYear()), Achieved: 7.90 , Target: 8.500},
  { name: 'Jun ' + String(getCurrentYear()), Achieved: 2.390 , Target: 3.390},
  { name: 'Jul ' + String(getCurrentYear()), Achieved: 3.490 , Target: 4.000},
];

const LineChartComponent: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 250, fontSize: '12px', marginTop: "40px",}}>
      <ResponsiveContainer>
        <LineChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Achieved"
            stroke="#8884d8"
            strokeWidth={4}
            activeDot={{ r: 8 }}
            dot={{ fill: '#8884d8', stroke: '#fff', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="Target"
            stroke="#d89584"
            strokeWidth={4}
            activeDot={{ r: 8 }}
            dot={{ fill: '#d89584', stroke: '#fff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
