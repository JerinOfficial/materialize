import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import Logo from "../assets/Logo";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import AllMenus from "./Drawer/AllMenus";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AodOutlinedIcon from "@mui/icons-material/AodOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import Style from "../Layout/dashboard.module.css";
import { useUserContext } from "@/pages/_app";
import { Close } from "@mui/icons-material";

const drawerWidth = 240;

const drawerArray = [
  {
    title: "",
    items: [
      {
        name: "Home",
        to: "Home",
        icon: <HomeOutlined />,
        isSelected: false,
        content: [
          {
            name: "CRM",
            to: "/dashBoard",
          },
          {
            name: "Analytics",
            to: "/dashboards/analytics",
          },
          {
            name: "eCommerce",
            to: "/dashboards/ecommerce",
          },
        ],
      },
    ],
  },
  {
    title: "Apps and Pages",
    items: [
      {
        name: "Email",
        to: "#",
        icon: <EmailOutlined />,
        content: null,
        isSelected: false,
      },
      {
        name: "Chat",
        to: "#",
        icon: <ChatBubbleOutlineOutlinedIcon />,
        content: null,
        isSelected: false,
      },
      {
        name: "Calender",
        to: "#",
        icon: <CalendarTodayOutlinedIcon />,
        content: null,
        isSelected: false,
      },
      {
        name: "Invoice",
        to: "Invoice",
        icon: <DescriptionOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List",
            to: "/invoice/list",
          },
          {
            name: "Preview",
            to: "/invoice/preview",
          },
          {
            name: "Edit",
            to: "/invoice/edit",
          },
          {
            name: "Add",
            to: "#",
          },
        ],
      },
      {
        name: "User",
        to: "#",
        icon: <PermIdentityOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List",
            to: "",
          },
          {
            name: "Preview",
            to: "",
          },
        ],
      },
      {
        name: "Roles & Permissions",
        to: "",
        icon: <ShieldOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List1",
            to: "",
          },
          {
            name: "List2",
            to: "",
          },
        ],
      },
      {
        name: "Pages",
        to: "",
        icon: <DescriptionOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List1",
            to: "",
          },
          {
            name: "List2",
            to: "",
          },
        ],
      },
      {
        name: "Auth Pages",
        to: "",
        icon: <LockOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "Login",
            to: "",
          },
          {
            name: "Register",
            to: "",
          },
          {
            name: "Verify Email",
            to: "",
          },
        ],
      },
      {
        name: "Wizard Examples",
        to: "",
        icon: <MoreHorizOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "Checkout",
            to: "",
          },
          {
            name: "Property Listening",
            to: "",
          },
          {
            name: "Create Deals",
            to: "",
          },
        ],
      },
      {
        name: "Dialog Examples",
        to: "",
        icon: <ContentCopyOutlinedIcon />,
        content: null,
        isSelected: false,
      },
    ],
  },
  {
    title: "User Interface",
    items: [
      {
        name: "Typography",
        to: "",
        icon: <TextFieldsOutlinedIcon />,
        isSelected: false,
        content: null,
      },
      {
        name: "Icons",
        to: "",
        icon: <WorkspacesOutlinedIcon />,
        isSelected: false,
        content: null,
      },
      {
        name: "Cards",
        to: "",
        icon: <CreditCardOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List1",
            to: "",
          },
          {
            name: "List2",
            to: "",
          },
        ],
      },
      {
        name: "Components",
        to: "",
        icon: <Inventory2OutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "Checkout",
            to: "",
          },
          {
            name: "Property Listening",
            to: "",
          },
          {
            name: "Create Deals",
            to: "",
          },
        ],
      },
    ],
  },
  {
    title: "Forms and Tables",
    items: [
      {
        name: "Form Elements",
        to: "",
        icon: <AodOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List1",
            to: "",
          },
          {
            name: "List2",
            to: "",
          },
        ],
      },
      {
        name: "Form Layouts",
        to: "",
        icon: <ViewInArOutlinedIcon />,
        isSelected: false,
        content: null,
      },
      {
        name: "Form Validation",
        to: "",
        icon: <TaskAltOutlinedIcon />,
        isSelected: false,
        content: null,
      },
      {
        name: "Form Wizard",
        to: "",
        icon: <ViewInArOutlinedIcon />,
        isSelected: false,
        content: null,
      },

      {
        name: "Table",
        to: "",
        icon: <WindowOutlinedIcon />,
        isSelected: false,
        content: null,
      },
      {
        name: "Mui DataGrid",
        to: "",
        icon: <GridOnOutlinedIcon />,
        isSelected: false,
        content: null,
      },
    ],
  },
  {
    title: "Charts and Misc",
    items: [
      {
        name: "Charts",
        to: "",
        icon: <ViewInArOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List1",
            to: "",
          },
          {
            name: "List2",
            to: "",
          },
        ],
      },

      {
        name: "Access Control",
        to: "",
        icon: <ShieldOutlinedIcon />,
        isSelected: false,
        content: null,
      },
      {
        name: "Others",
        to: "",
        icon: <MoreHorizOutlinedIcon />,
        isSelected: false,
        content: [
          {
            name: "List1",
            to: "",
          },
          {
            name: "List2",
            to: "",
          },
        ],
      },
    ],
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function DrawerComponent({ positionChange, setpositionChange }) {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setselectedMenu] = useState("Home");
  const [isSelected, setisSelected] = useState(false);
  const { isOpen, setisOpen } = useUserContext();

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": isOpen ? openedMixin(theme) : closedMixin(theme),
    }),
  }));
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    isOpen ? setOpen(true) : !positionChange && setOpen(false);
  };

  return (
    <Box className={Style.drawer}>
      <CssBaseline />
      <Drawer
        onMouseLeave={handleDrawerClose}
        onMouseEnter={handleDrawerOpen}
        variant="permanent"
        open={open}
        sx={{
          position: { xs: isOpen ? "absolute" : "static", lg: "static" },
          display: { xs: isOpen ? "block" : "none", lg: "block" },
          "& .MuiPaper-root": {
            overflow: { xs: "scroll", sm: "scroll", md: "hidden" },
            background: "#f7f7f9",
            border: "none",
          },
          "& .MuiPaper-root:hover": {
            overflow: "scroll",
          },
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: { xs: "sticky", md: "static" },
            backgroundColor: { xs: "#f5f5f7" },
            top: 0,
            zIndex: { xs: 1 },
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo customWidth={"40"} />
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgba(76, 78, 100, 0.87)",
                letterSpacing: "0.18px",
                opacity: open ? 1 : 0,
              }}
            >
              Materialize
            </Typography>
          </div>
          <IconButton
            onClick={() => {
              isOpen ? setisOpen(false) : setpositionChange((p) => !p);
            }}
          >
            <Close sx={{ display: { lg: "none", md: "block" } }} />
            {!positionChange ? (
              <KeyboardDoubleArrowRightRoundedIcon
                sx={{ display: { xs: isOpen && "none", lg: "block" } }}
              />
            ) : (
              <KeyboardDoubleArrowLeftIcon
                sx={{ display: { xs: isOpen && "none", lg: "block" } }}
              />
            )}
          </IconButton>
        </DrawerHeader>

        <AllMenus
          selectedMenu={selectedMenu}
          setselectedMenu={setselectedMenu}
          open={open}
          isSelected={isSelected}
          setisSelected={setisSelected}
          drawerArray={drawerArray}
        />
      </Drawer>
    </Box>
  );
}
