import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import { DailyStars, data } from '../Chart/chartData';
import useDemoConfig from "../useDemoConfig";

export const Line = () => {
  const { data } = useDemoConfig({
    series: 2,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
      <Chart options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
      />
  )
}