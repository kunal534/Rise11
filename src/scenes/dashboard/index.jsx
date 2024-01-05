import {   Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,} from "@mui/material";
import { tokens } from "../../theme";
import Mini_LineChart from "../../components/Mini_LineChart"
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">

     
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
       <Box
  gridColumn="span 12"
  display="flex"
  justifyContent="space-evenly"
  alignItems="center"
  backgroundColor={colors.primary[400]}
  p={2}
>
  <Box width="2px" height="100%" bgcolor={colors.grey[300]} />
  <StatBox
    title="Impression"
    subtitle="832"
  />
  <Box width="2px" height="100%" bgcolor={colors.grey[300]} />
  <StatBox
    title="Total audience"
    subtitle="832"
  />

  <Box width="2px" height="100%" bgcolor={colors.grey[300]} />

  <StatBox
    title="Engagements"
    subtitle="832"
  />

  <Box width="2px" height="100%" bgcolor={colors.grey[300]} />

  <StatBox
    title="Engaged audience"
    subtitle="832"
  />
</Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
             >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue +0.3%
              </Typography>
            </Box>
             <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            onClick={handleMenuOpen}
            endIcon={<ArrowDropDownIcon />}
            variant="contained"
            color="primary"
          >
            This Month
          </Button>
          <Menu
            id="this-month-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>January</MenuItem>
            <MenuItem onClick={handleMenuClose}>February</MenuItem>
            <MenuItem onClick={handleMenuClose}>March</MenuItem>
          </Menu>
          </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >  
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Visitors
          </Typography>
                  </Box>
         
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="250px" mt="-20px" mr="-100px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Sales
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
          </Box>
        
          <Box display="flex" justifyContent="center" alignItems="center">
          <table style={{textAlign:'center'}}>
        <thead>
          <tr>
            <td>Current Week</td>
            {/* <td> </td> */}
            <td style={{ paddingLeft: '30px', paddingRight: '20px' }}>$2000</td>
            <td style={{ paddingLeft: '30px', paddingRight: '20px', color:'green'}}>0.3%</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign:'left'}}>Last Week</td>
            <td style={{ paddingLeft: '30px', paddingRight: '20px' }}>$1500</td>
            <td style={{ paddingLeft: '30px', paddingRight: '20px', color:'red' }}>-0.3%</td>
          </tr>
        </tbody>
      </table>
    </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "3px 3px 0 3px" }}
          >
            Weekly Status
          </Typography>
          
          <Box height="200px" mt="-20px" ml="-50px" mr="-100px">
            <Mini_LineChart isDashboard={true} />
          </Box>

          <Box height="50%"  justifyContent="center" ml="20px" mr="40px" mt="-10px">
          <table style={{ marginTop:'-50px'}}>
  <tbody>
    <tr >
      <td><PeopleAltIcon /></td>
      <td>
        <div>
          <p style={{ marginBottom:'-5px'}}>Adobe XD Part 01</p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '-5px', marginBottom:'-5px' }}>UIUX Design</p>
        </div>
      </td>
      <td><div style={{ backgroundColor: 'green', color: 'white', padding: '3px', fontSize:'10px'  }}>$20</div></td>
    </tr>
    <tr>
      <td><PeopleAltIcon /></td>
      <td>
        <div>
        <p style={{ marginBottom:'-5px'}}>Adobe XD Part 01</p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '-5px' , marginBottom:'-5px'}}>UIUX Design</p>
        </div>
      </td>
      <td><div style={{ backgroundColor: 'blue', color: 'white', padding: '3px' , fontSize:'10px' }}>$20</div></td>
    </tr>
    <tr>
      <td><PeopleAltIcon /></td>
      <td>
        <div>
        <p style={{ marginBottom:'-5px'}}>Adobe XD Part 01</p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '-5px' , marginBottom:'-5px'}}>UIUX Design</p>
        </div>
      </td>
      <td><div style={{ backgroundColor: 'red', color: 'white', padding: '3px' , fontSize:'10px' }}>$20</div></td>
    </tr>
  </tbody>
</table>
          </Box>
          
    </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Student Queries
          </Typography>
          <table>
  <tbody>
    <tr>
      <td><PeopleAltIcon /></td>
      <td>
        <div>
          <p style={{ marginBottom:'-5px'}}>Machine Learning BootCamp</p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '-5px', marginBottom:'-5px' }}>By James Board</p>
        </div>
      </td>
      <td><div style={{ backgroundColor: 'green', color: 'white', padding: '3px', fontSize:'10px'  }}>View</div></td>
      <td><div style={{ backgroundColor: 'blue', color: 'white', padding: '3px', fontSize:'10px'  }}>Decline</div></td>
    </tr>
    <tr>
      <td><PeopleAltIcon /></td>
      <td>
        <div>
        <p style={{ marginBottom:'-5px'}}>Python & R In Data Science</p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '-5px' , marginBottom:'-5px'}}>Data Science</p>
        </div>
      </td>
      <td><div style={{ backgroundColor: 'green', color: 'white', padding: '3px' , fontSize:'10px' }}>Appoval</div></td>
      <td><div style={{ backgroundColor: 'blue', color: 'white', padding: '3px' , fontSize:'10px' }}>Decline</div></td>
    </tr>
    <tr>
      <td><PeopleAltIcon /></td>
      <td>
        <div>
        <p style={{ marginBottom:'-5px'}}>SuperDataScience Support</p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '-5px' , marginBottom:'-5px'}}>Data Science</p>
        </div>
      </td>
      <td><div style={{ backgroundColor: 'green', color: 'white', padding: '3px' , fontSize:'10px' }}>Appoval</div></td>
      <td><div style={{ backgroundColor: 'blue', color: 'white', padding: '3px' , fontSize:'10px' }}>Decline</div></td>
    </tr>
    <tr>
      <td><PeopleAltIcon /></td>
      <td>
        <div>
        <p style={{ marginBottom:'-5px'}}>Analyst Bootcamp 2020</p>
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '-5px' , marginBottom:'-5px'}}>Data Science</p>
        </div>
      </td>
      <td><div style={{ backgroundColor: 'green', color: 'white', padding: '3px', fontSize:'10px' }}>Appoval</div></td>
      <td><div style={{ backgroundColor: 'blue', color: 'white', padding: '3px' , fontSize:'10px' }}>Decline</div></td>
    </tr>
  </tbody>
</table>

        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
