import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Box } from "@mui/material";

function SmallCharts({ options }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    chart?.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [options]);

  return <Box ref={chartRef} style={{ width: "100%", height: "90%" }}></Box>;
}

export default SmallCharts;
