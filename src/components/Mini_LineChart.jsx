import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const Mini_LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const chartTheme = {
    axis: {
      domain: { line: { stroke:"transparent" } },
      legend: { text: { fill: "transparent" } },
      ticks: {
        line: { stroke: "transparent" }, // Hide ticks
        text: { fill: "transparent",fontSize:0 }, // Hide text labels
      },
    },
    legends: { text: { fill:"transparent" } },
    tooltip: { container: { color: "transparent"} },
  };
  
  return (
    <ResponsiveLine
      data={data}
      theme={chartTheme}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
      yFormat=" >-.2f"
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 0, // Hide ticks
        tickPadding: 0, // Hide tick padding
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false} // Remove points from the lines
      enableArea={true}
      useMesh={true}
      // legends={[
      //   {
      //     anchor: "bottom-right",
      //     direction: "column",
      //     justify: true,
      //     translateX: 100,
      //     translateY: 0,
      //     itemsSpacing: 0,
      //     itemDirection: "left-to-right",
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemOpacity: 0.75,
      //     symbolSize: 12,
      //     symbolShape: "circle",
      //     symbolBorderColor: "rgba(0, 0, 0, .5)",
      //     // effects: [{ on: "hover", style: { itemBackground: "rgba(0, 0, 0, .03)", itemOpacity: 1 } }],
      //   },
      // ]}
    />
  );
};

export default Mini_LineChart;
