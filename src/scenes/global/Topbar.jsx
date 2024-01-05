import { Box, IconButton, Button, useTheme, Icon } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton>
      <MenuOutlinedIcon />
      </IconButton>
      <Box sx={{ ml: 2 }} >
        Hello Mad ✋
      </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        borderRadius="3px"
        backgroundColor={theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[300]}
      >     
        <IconButton type="button" sx={{ p: '10px' }}>
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      </Box>
      
      {/* ICONS AND NEW UPLOAD BUTTON */}
      <Box display="flex" alignItems="center">
        {/* New Upload Button */}
        <Button
          variant="contained"
          sx={{
            mr: 2,
            backgroundColor: 'orange', // This sets the background color to orange
            '&:hover': {
              backgroundColor: 'darkorange', // Optional: change color on hover
            },
          }}
          startIcon={<FileUploadOutlinedIcon/>}
        >

          New Upload
        </Button>
        
        {/* Icons */}
        {/* <IconButton onClick={colorMode.toggleColorMode}> */}
          {/* {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )} */}
        {/* </IconButton> */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
        <TextsmsIcon/>
        </IconButton>
       <IconButton>
        <ShowChartIcon/>
       </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
