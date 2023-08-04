import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function UtilBars({ utilities}) {

  const sortedUtilities = utilities.sort((a, b) => b.amount - a.amount);

  const sortedUtilitiesNames = sortedUtilities.map((utility) => utility.utility);

  const sortedUtilities2 = sortedUtilities.slice(0, 3);

  const sortedUtilitiesNames2 = sortedUtilities2.slice(0, 3).map((utility) => utility.utility);

  const sortedUtilitiesByAmount = sortedUtilities2.map((utility) => utility.amount);

  const dataPoints = sortedUtilitiesByAmount.map((amount) => [amount]);

  const dataPoints2 = sortedUtilitiesNames2.map((name) => [name]);
  
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: dataPoints2 }]}
      series={[{ data: dataPoints }]}
      width={500}
      height={300}
    />
  );
}