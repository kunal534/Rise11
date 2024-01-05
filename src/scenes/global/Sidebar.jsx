import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{
        color: colors.grey[100],
        display: 'inline-block', // Display items inline
        marginRight: '10px', // Space between items
      }}
    >
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        '& .pro-menu-item': {
          display: 'inline-flex', // Inline display for menu items
          width: 'auto', // Auto width to fit content
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square" >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Skilify Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                 
                </IconButton>
              </Box>
            )}
          </MenuItem>

   

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
            
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            </Typography>
            <Item
              title="My Course"
              to="/"
              icon={<PlayCircleOutlineIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Item
              title="Calender"
              to="/"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Resources"
              to="/"
              icon={<ImportContactsSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Quiz"
              to="/"
              icon={<ExtensionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Message"
              to="/"
              icon={<ChatBubbleOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Status"
              to="/"
              icon={<TrendingUpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Wallet"
              to="/"
              icon={<AccountBalanceWalletOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Account"
              to="/"
              icon={<PersonAddAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
