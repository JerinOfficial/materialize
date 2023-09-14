import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { Box } from "@mui/material";
import {
  useTooltip,
  useTooltipInPortal,
  TooltipWithBounds,
} from "@visx/tooltip";
import { localPoint } from "@visx/event";

const data = [
  { year: 2021, amount: 23, color: "#4c4e64de" },
  { year: 2022, amount: 35, color: "#666cff" },
  { year: 2023, amount: 30, color: "#72e128" },
];
export default function CircleChart() {
  //
  const { tooltipLeft, tooltipTop, tooltipOpen, showTooltip, hideTooltip } =
    useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    // use TooltipWithBounds
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true,
  });
  const handleMouseOver = (event, data) => {
    const coords = localPoint(event.target.ownerSVGElement, event);
    showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: data,
    });
  };

  //
  const [active, setActive] = useState(null);
  const width = 90;
  const half = width / 2;
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <svg width={width} height={width} ref={containerRef}>
        <Group
          top={half}
          left={half}
          onMouseOver={handleMouseOver}
          onMouseOut={hideTooltip}
        >
          <Pie
            data={data}
            pieValue={(data) => data.amount}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.color === data.color ? 8 : 6;
              return half - size;
            }}
            padAngle={0.1}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                return (
                  <g
                    key={index}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path
                      className="polymorph"
                      id={"id" + index}
                      d={pie.path(arc)}
                      fill={arc.data.color}
                    />
                  </g>
                );
              });
            }}
          </Pie>
          <Text
            textAnchor="middle"
            fill="rgba(76, 78, 100, 0.6)"
            fontWeight="600"
            fontSize="1rem"
          >
            {active
              ? data
                  .filter((amd) => {
                    return active?.amount === amd.amount;
                  })
                  .map((amount) => {
                    return amount.amount + "%";
                  })
              : data[0].amount + "%"}
          </Text>
        </Group>
        {tooltipOpen && (
          <TooltipInPortal top={tooltipTop} left={tooltipLeft}>
            {data
              .filter((amd) => {
                return active?.amount === amd.amount;
              })
              .map((value) => {
                return value.year + ": " + value.amount + "%";
              })}
          </TooltipInPortal>
        )}
      </svg>
    </Box>
  );
}
