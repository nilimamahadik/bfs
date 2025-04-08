import React from 'react';
import { Bar } from "@ant-design/plots";

const Graph  = () => {
  const data = [
   
    { category: 'B', value: 5 },
    { category: 'C', value: 10 },
    // Add more data as needed
  ];

  const config = {
    data,
    xField: 'category',
    yField: 'value',
    // Additional configuration options can be specified here
  };

  return <Bar {...config} />;
};

export default Graph;
