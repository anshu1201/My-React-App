// src/components/AssessmentPerformance.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

export const AssessmentPerformance = () => {
  const data = {
    labels: ['Average Time Taken', 'Average Score', 'Pass Rate'],
    datasets: [
      {
        label: 'Performance Metrics',
        data: [30, 75, 85], // Example data (time in minutes, score out of 100, pass rate percentage)
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
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
        anchor: 'end', // Position the label at the end of the bar
        align: 'bottom', // Align the label below the bar
        formatter: (value) => value, // Show value as label
        color: '#000', // Color for the numbers above bars
        font: {
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        display: true, // Show x-axis with labels
        ticks: {
          autoSkip: false, // Show all x-axis labels
          maxRotation: 0, // Set maximum rotation to 0 for horizontal labels
          minRotation: 0, // Set minimum rotation to 0 for horizontal labels
          font: {
            weight: 'bold', // Set x-axis labels to bold
          },
        },
      },
      y: {
        display: false, // Hide y-axis
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Assessment Performance</h2>
      <Bar data={data} options={options} />
    </div>
  );
};
