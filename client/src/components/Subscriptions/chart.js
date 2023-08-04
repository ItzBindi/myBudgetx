import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Typography from '@mui/material/Typography';


export default function SubBars({ subscriptions }) {
  
  const sortedSubs = subscriptions.sort((a, b) => b.amount - a.amount);

  const sortedSubsNames = sortedSubs.map((sub) => sub.subscription);

  const sortedSubs2 = sortedSubs.slice(0, 3);

  const sortedSubsNames2 = sortedSubs2.slice(0, 3).map((sub) => sub.subscription);

  const sortedSubsByAmount = sortedSubs2.map((sub) => sub.amount);

  const dataPoints = sortedSubsByAmount.map((amount) => [amount]);

  const dataPoints2 = sortedSubsNames2.map((name) => [name]);

  return (
    <div>
      <Typography className="top3" variant="h6" gutterBottom>
        Top 3 Subscriptions
      </Typography>
      <BarChart
        xAxis={[{ scaleType: 'band', data: dataPoints2 }]}
        series={[{ data: dataPoints }]}
        width={500}
        height={300}
      />
    </div>
  );
}