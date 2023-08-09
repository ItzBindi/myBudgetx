import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Typography from '@mui/material/Typography';

export default function UtilBars({ utilities}) {

  const sortedUtilities = utilities.sort((a, b) => b.amount - a.amount);

  const sortedAmounts = sortedUtilities.map((utility) => utility.amount);

  const sortedUtilitiesNames = sortedUtilities.map((utility) => utility.utility);

  const sortedUtilities2 = sortedUtilities.slice(0, 3);

  const sortedUtilitiesNames2 = sortedUtilities2.slice(0, 3).map((utility) => utility.utility);

  const sortedUtilitiesByAmount = sortedUtilities2.map((utility) => utility.amount);

  const dataPoints = sortedUtilitiesByAmount.map((amount) => [amount]);

  const dataPoints2 = sortedUtilitiesNames2.map((name) => [name]);
  
  return (
    <div>
      <Typography className="top3" variant="h6" gutterBottom>
        All Utilities
      </Typography>
    <BarChart
      xAxis={[{ scaleType: 'band', data: sortedUtilitiesNames }]}
      series={[{ data: sortedAmounts }]}
      width={500}
      height={300}
    />
    </div>
  );
}