// components/Navigation.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Hook điều hướng
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

// 1. Định nghĩa kiểu dữ liệu cho Item trong Menu
interface NavItem {
  label: string;
  target: string;
  type: "scroll" | "link"; // Chỉ cho phép 2 giá trị này
}

// 2. Định nghĩa Props cho component Navigation
interface NavigationProps {
  parentToChild: {
    mode: string;
  };
  modeChange: () => void;
}

// Cấu trúc dữ liệu mới: rõ ràng hơn mảng lồng nhau
const navItems: NavItem[] = [
  { label: "Expertise", target: "expertise", type: "scroll" },
  { label: "History", target: "history", type: "scroll" },
  { label: "Projects", target: "projects", type: "scroll" },
  { label: "Contact", target: "contact", type: "scroll" },
  // { label: "Privacy Policy", target: "/privacy-policy", type: "link" },
  // { label: "Term of use", target: "/term-of-use", type: "link" },
];

const Navigation: React.FC<NavigationProps> = ({
  parentToChild,
  modeChange,
}) => {
  const { mode } = parentToChild;
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hàm xử lý Click đã được Typed
  const handleItemClick = (item: NavItem) => {
    if (item.type === "link") {
      // Logic chuyển trang
      navigate(item.target);
      window.scrollTo(0, 0);
    } else {
      // Logic cuộn trang
      if (location.pathname !== "/") {
        navigate("/");
        // Đợi 1 chút để trang Home render xong mới cuộn
        setTimeout(() => {
          const element = document.getElementById(item.target);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    if (mobileOpen) setMobileOpen(false);
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleItemClick(item)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {mode === "dark" ? (
            <DarkModeIcon onClick={modeChange} />
          ) : (
            <LightModeIcon onClick={modeChange} />
          )}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleItemClick(item)}
                sx={{ color: "#fff" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navigation;
