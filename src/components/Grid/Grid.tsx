import { Responsive, WidthProvider } from 'react-grid-layout';
import '../../../node_modules/react-resizable/css/styles.css';
import '../../../node_modules/react-grid-layout/css/styles.css';
import React from 'react';
import { Line } from '../Line/Line';
import { Bar } from '../Bar/Bar';
import { Bubble } from '../Bubble/Bubble';
import { Area } from '../Area/Area';


const ResponsiveGridLayout = WidthProvider(Responsive);

export const Grid = () => {
  const layout1 = [
    { i: "a", x: 1, y: 3, w: 10, h: 3 },
    { i: "b", x: 0, y: 1, w: 4, h: 3, minW: 2, maxW: 7 },
    { i: "c", x: 0, y: 0, w: 10, h: 2, maxW: 16 },
    { i: "d", x: 4, y: 1, w: 6, h: 4, maxW: 16 },
  ];

  const layout2 = [
    { i: "a", x: 0, y: 3, w: 10, h: 4 },
    { i: "b", x: 0, y: 1, w: 2, h: 2, minW: 2, maxW: 7 },
    { i: "c", x: 0, y: 0, w: 10, h: 1, maxW: 16 },
    { i: "d", x: 4, y: 0, w: 2, h: 2, maxW: 16 },
  ];

  var layouts = { lg: layout1, sm: layout2 }

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      cols={{ lg: 10, md: 10, sm: 6, xs: 4, xxs: 2 }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
    >
      <div key="a">
        <h3 className="chart-item-title">Academic Performance</h3>
        <Bar />
      </div>
      <div key="b">
        <h3 className="chart-item-title">Todos</h3>
        <Bubble />
      </div>
      <div key="c">
        <h3 className="chart-item-title">Ukranian Electricity Stability</h3>
        <Line />
      </div>
      <div key="d">
        <h3 className="chart-item-title">Temperature</h3>
        <Area />
      </div>
    </ResponsiveGridLayout>
  );
}