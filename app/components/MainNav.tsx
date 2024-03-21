"use client";

import useRoutes from "../hooks/useRoutes";
import ButtonCustom from "./button/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import {
  Box,
  AppBar,
  Menu,
  Theme,
  Typography,
  Toolbar,
  Drawer,
  Divider,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import * as React from "react";
import { useRouter } from "next/navigation";
import CategoryModel from "./model/CategoryModel";
function MainNav() {
  const routes = useRoutes();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [Open, setOpen] = React.useState(false);

  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {routes.map((item) => (
          <ListItem key={item.href} disablePadding  onClick={() => router.push(item.href)}>
            <ListItemButton
              sx={{ textAlign: "center" }}
             
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =!Boolean(window) ? () => window.document.body : undefined;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "-webkit-sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <ButtonCustom
          variant="contained"
          sx={{
            backgroundColor: (theme: Theme) => theme.palette.primary.main,
            color: (theme: Theme) => theme.palette.text.primary,
            py: 2,
            px: 3,
            mx: 1,
            flex: 1,
          }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
          <Typography sx={{ mx: 2, fontSize: "14px" }}>
            All categories
          </Typography>
        </ButtonCustom>

        <AppBar
          component="nav"
          sx={{
            flex: 4,
            backgroundColor: "white",
            border: "0px",
            boxShadow: "unset",
            position: "unset",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: {
                lg: "space-between",
                md: "space-between",
                sm: "space-between",
                xs: "flex-end",
              },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "flex", lg: "flex" },
              }}
            >
              {routes.map((item) => (
                <ButtonCustom
                  key={item.href}
                  sx={{
                    color: (theme: Theme) => theme.palette.text.primary,
                    "&.MuiButton-root:hover": {
                      color: (theme: Theme) => theme.palette.primary.main,
                    },
                  }}
                  onClick={() => router.push(item.href)}
                >
                  {item.label}
                </ButtonCustom>
              ))}
            </Box>

            <ButtonCustom
              variant="outlined"
              sx={{
                display: { sm: "block", xs: "none", md: "block", lg: "block" },
                color: (theme: Theme) => theme.palette.text.primary,
                borderColor: (theme: Theme) => theme.palette.secondary.main,
              }}
            >
              Outlet
            </ButtonCustom>
          </Toolbar>
        </AppBar>
        <nav>
          <Menu
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box" },
              "& .MuiPaper-root": { width: "100%" },
            }}
          >
            {drawer}
          </Menu>
        </nav>
      </Box>
      <CategoryModel isOpen={Open} onClose={() => setOpen(false)} />
    </>
  );
}
export default MainNav;
