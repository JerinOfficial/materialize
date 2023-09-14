import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function CircleEchart({ options }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    chart?.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [options]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>;
}

export default CircleEchart;
