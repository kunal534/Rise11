import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const RoundedBarLayer = ({ bars }) => {
  return bars.map((bar, index) => {
    const { x, y, width, height } = bar;
    return (
      <g key={index} transform={`translate(${x}, ${y})`}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          rx={5} // Set border radius for the bars
          fill="#0074D9" // Bar color
        />
      </g>
    );
  });
};

const BarChart = ({ isDashboard }) => {
  const data = [
    { month: 'Mon', value: 30 },
    { month: 'Tues', value: 50 },
    { month: 'Wed', value: 70 },
    { month: 'Thu', value: 80 },
    { month: 'Fri', value: 100 },
    { month: 'Sat', value: 20 },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={['value']}
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      borderRadius={5}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Month',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Value',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={8}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      layers={['grid', 'axes', 'bars', RoundedBarLayer]} // Include the custom bar layer
      theme={{
        tooltip: {
          container: {
            fontSize: '13px',
          },
        },
        axis: {
          ticks: {
            line: {
              strokeWidth: 1, // Adjust the thickness here
              stroke: '#0074D9', // Change line color to blue (#0074D9)
            },
            text: {
              fontSize: '10px', // You can also adjust the font size here
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
