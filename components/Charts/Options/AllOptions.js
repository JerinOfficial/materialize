export const growthOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 10,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
export const nameGraphOption = {
  dataset: {
    source: [
      ["score", "amount", "product"],
      [89.3, 58212, "Matcha Latte"],
      [57.1, 78254, "Milk Tea"],
      [74.4, 41032, "Cheese Cocoa"],
      [50.1, 12755, "Cheese Brownie"],
      [89.7, 20145, "Matcha Cocoa"],
      [68.1, 79146, "Tea"],
      [19.6, 91852, "Orange Juice"],
      [10.6, 101852, "Lemon Juice"],
      [32.7, 20112, "Walnut Brownie"],
    ],
  },
  grid: { containLabel: true },
  xAxis: { name: "amount" },
  yAxis: { type: "category" },
  visualMap: {
    orient: "horizontal",
    left: "center",
    min: 10,
    max: 100,
    text: ["High Score", "Low Score"],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ["#65B581", "#FFCE34", "#FD665F"],
    },
  },
  series: [
    {
      type: "bar",
      encode: {
        // Map the "amount" column to X axis.
        x: "amount",
        // Map the "product" column to Y axis
        y: "product",
      },
    },
  ],
};
export const totalProfitOption = {
  graphic: {
    elements: [
      {
        type: "group",
        left: "center",
        top: "center",
        children: new Array(7).fill(0).map((val, i) => ({
          type: "rect",
          x: i * 20,
          shape: {
            x: 0,
            y: -40,
            width: 10,
            height: 80,
          },
          style: {
            fill: "#5470c6",
          },
          keyframeAnimation: {
            duration: 1000,
            delay: i * 200,
            loop: true,
            keyframes: [
              {
                percent: 0.5,
                scaleY: 0.3,
                easing: "cubicIn",
              },
              {
                percent: 1,
                scaleY: 1,
                easing: "cubicOut",
              },
            ],
          },
        })),
      },
    ],
  },
};
export const organicOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: true,
    bottom: "40px",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["60%", "70%"],
      center: ["50%", "50%"],
      // adjust the start angle
      startAngle: 180,
      label: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
        {
          // make an record to fill the bottom 50%
          value: 1048 + 735 + 580 + 484 + 300,
          itemStyle: {
            // stop the chart from rendering this piece
            color: "none",
            decal: {
              symbol: "none",
            },
          },
          label: {
            show: false,
          },
        },
      ],
    },
  ],
};
export const monthlyBudgetOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    },
  ],
};
export const externalLinksOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    show: false,
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Email",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Search Engine",
      type: "bar",
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: "series",
      },
      markLine: {
        lineStyle: {
          type: "dashed",
        },
        data: [[{ type: "min" }, { type: "max" }]],
      },
    },
    {
      name: "Baidu",
      type: "bar",
      barWidth: 5,
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: "Google",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: "Bing",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: "Others",
      type: "bar",
      stack: "Search Engine",
      emphasis: {
        focus: "series",
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
};
export const socialOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    show: false,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Precipitation",
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: "{value} ml",
      },
    },
    {
      type: "value",
      name: "Temperature",
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: "{value} °C",
      },
    },
  ],
  series: [
    {
      name: "Evaporation",
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value + " ml";
        },
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
    },
    {
      name: "Precipitation",
      type: "bar",
      tooltip: {
        valueFormatter: function (value) {
          return value + " ml";
        },
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
    },
    {
      name: "Temperature",
      type: "line",
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + " °C";
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
};
export const lineOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    height: "100%",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};
const labelRight = {
  position: "right",
};
export const transactionOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    top: 80,
    bottom: 30,
  },
  xAxis: {
    type: "value",
    position: "top",
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "category",
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      "ten",
      "nine",
      "eight",
      "seven",
      "six",
      "five",
      "four",
      "three",
      "two",
      "one",
    ],
  },
  series: [
    {
      name: "Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        formatter: "{b}",
      },
      data: [
        { value: -0.07, label: labelRight },
        { value: -0.09, label: labelRight },
        0.2,
        0.44,
        { value: -0.23, label: labelRight },
        0.08,
        { value: -0.17, label: labelRight },
        0.47,
        { value: -0.36, label: labelRight },
        0.18,
      ],
    },
  ],
};
export const performanceOption = {
  legend: {
    show: false,
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "Sales", max: 6500 },
      { name: "Administration", max: 16000 },
      { name: "Information Technology", max: 30000 },
      { name: "Customer Support", max: 38000 },
      { name: "Development", max: 52000 },
      { name: "Marketing", max: 25000 },
    ],
  },
  series: [
    {
      name: "Budget vs spending",
      type: "radar",
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: "Allocated Budget",
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: "Actual Spending",
        },
      ],
    },
  ],
};
export const visitByDayOption = {
  dataset: [
    {
      dimensions: ["name", "age", "profession", "score", "date"],
      source: [
        ["1", 41, "Engineer", 314, "2011-02-12"],
        ["2", 20, "Teacher", 351, "2011-03-01"],
        ["3 ", 52, "Musician", 287, "2011-02-14"],
        ["4", 37, "Teacher", 219, "2011-02-18"],
        ["5", 25, "Engineer", 253, "2011-04-02"],
        ["6", 19, "Teacher", "-", "2011-01-16"],
        ["7", 71, "Engineer", 165, "2011-03-19"],
        ["8", 36, "Musician", 318, "2011-02-24"],
        ["9", 67, "Engineer", 366, "2011-03-12"],
      ],
    },
    {
      transform: {
        type: "sort",
        config: { dimension: "score", order: "desc" },
      },
    },
  ],
  xAxis: {
    type: "category",
    axisLabel: { interval: 0, rotate: 30 },
  },
  yAxis: {},
  series: {
    type: "bar",
    encode: { x: "", y: "score" },
    datasetIndex: 1,
  },
};
