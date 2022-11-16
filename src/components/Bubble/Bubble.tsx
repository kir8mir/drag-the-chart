import useDemoConfig from "../useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export const Bubble = () => {
  const { data } = useDemoConfig({
    series: 4,
    dataType: "time",
    useR: true,
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
        elementType: "bubble",
      },
    ],
    []
  );

  return (
    <>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          interactionMode: "closest",
          getDatumStyle: (datum) =>
          ({
            circle: { r: datum.originalDatum.radius },
          } as any),
        }}
      />
    </>

  );
}
