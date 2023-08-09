

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Typography from '@mui/material/Typography';

export default function LeisureBars2({leisures}) {

  const sortedLeisures = leisures.sort((a, b) => b.amount - a.amount);

  const sortedLeisuresNames = sortedLeisures.map((leisure) => leisure.leisure);

  const sortedLeisures2 = sortedLeisures.slice(0, 3);

  const sortedLeisuresNames2 = sortedLeisures2.slice(0, 3).map((leisure) => leisure.leisure);

  const sortedLeisuresByAmount = sortedLeisures2.map((leisure) => leisure.amount);

  const dataPoints = sortedLeisuresByAmount.map((amount) => [amount]);

  const dataPoints2 = sortedLeisuresNames2.map((name) => [name]);

  return (
    <div>
      <Typography className="top3" variant="h6" gutterBottom>
        Top 3 Leisures
      </Typography>
    <BarChart
      xAxis={[{ scaleType: 'band', data: dataPoints2}]}
      series={[{ data: dataPoints}]}
      width={500}
      height={300}
    />
    </div>
  );
}