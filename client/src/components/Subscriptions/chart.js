import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


export default function SubBars({ subscriptions }) {
  
  const sortedSubs = subscriptions.sort((a, b) => b.amount - a.amount);

  const sortedSubsNames = sortedSubs.map((sub) => sub.subscription);

  const sortedSubs2 = sortedSubs.slice(0, 3);

  const sortedSubsNames2 = sortedSubs2.slice(0, 3).map((sub) => sub.subscription);

  const sortedSubsByAmount = sortedSubs2.map((sub) => sub.amount);

  const dataPoints = sortedSubsByAmount.map((amount) => [amount]);

  const dataPoints2 = sortedSubsNames2.map((name) => [name]);

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: dataPoints2 }]}
      series={[{ data: dataPoints }]}
      width={500}
      height={300}
    />
  );
}