import { Box, Typography, useTheme } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart"; // Import the graph icon
import { tokens } from "../theme";
import Mini_LineChart from "./Mini_LineChart";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          {/* Display the passed icon, or default to ShowChartIcon if no icon is passed */}
          {/* {icon ? icon : <ShowChartIcon sx={{ color: colors.greenAccent[500], fontSize: "26px" }} />} */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }} // Added margin left for spacing
          >
            {title}
          </Typography>
        </Box>
        <Box height="200px" width="50px" ml="-100px">
          <Mini_LineChart />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        {increase && (
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default StatBox;
