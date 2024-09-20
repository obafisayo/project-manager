import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data: ChartData<'doughnut', number[], string> = {
    labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 10],
        backgroundColor: ['red', 'blue', 'green', 'orange'],
        hoverOffset: 6,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        position: 'right' as const, // Explicitly cast to const for type safety
        align: 'center',
      },
    },
  };

  return (
    <div className='doughnut'>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
