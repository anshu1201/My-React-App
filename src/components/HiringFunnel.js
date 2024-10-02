// src/components/HiringFunnel.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

export const HiringFunnel = () => {
  const data = {
    labels: ['Candidates\nassigned', 'Candidates\nappeared', 'Exams\ncompleted', 'Candidate\nshortlisted'],
    datasets: [
      {
        label: 'Candidates',
        data: [100, 80, 50, 30],// Example data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'bottom', // Align numbers at the bottom of the bars
        formatter: (value, context) => {
          // Show the value above the bar
          return value;
        },
        color: '#000', // Color for the numbers above bars
        font: {
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Hiring Funnel</h2>
      <Bar data={data} options={options} />
    </div>
  );
};
