import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './PieChartComponent.css';

interface DataProps {
  name: string;
  value: number;
  color: string;
}

const data: DataProps[] = [
  { name: 'Completed',
    value: 40,
    color: '#4CAF50'
  },
  { name: 'On Hold',
    value: 20,
    color: '#FF9800'
  },
  { name: 'In Progress',
    value: 25,
    color: '#2196F3'
  },
  { name: 'Pending',
    value: 15,
    color:'#F44336'
  },
];

const PieChartComponent: React.FC = () => {
  return (
    <div className="pie-chart-container">
      <PieChart width={250} height={250} >
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
      </PieChart>
      <div className="legend">
        {data.map((entry) => (
          <div key={entry.name} className="legend-item">
            <span className="color-box" style={{ backgroundColor: entry.color }} />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
