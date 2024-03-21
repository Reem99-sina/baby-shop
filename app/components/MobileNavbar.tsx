"use client";
import { Box, IconButton, Typography, Theme } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useActiveCart, { ActiveCartStore } from "@/app/hooks/useCart";

function MobileNavbar() {
  const router = useRouter();
  const [Open, setOpen] = useState(false);
  const { carts, add, remove } = useActiveCart() as ActiveCartStore;

  return (
    <>
      <Box
        sx={{
          display: { lg: "none", md: "none", sm: "none", xs: "flex" },
          zIndex: 2000,
          position: "fixed",
          backgroundColor: "white",
          bottom: "0px",
          width: "100%",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,.1)",
          p: 2,
        }}
      >
        <IconButton
          sx={{ fontSize: "25px", flex: 1, borderRadius: "unset" }}
          onClick={() => router.push("/shop")}
        >
          <DashboardOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ fontSize: "25px", flex: 1, borderRadius: "unset" }}
          onClick={() => router.push("/login")}
        >
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            fontSize: "25px",
            position: "relative",
            flex: 1,
            borderRadius: "unset",
          }}
          onClick={() => setOpen(true)}
        >
          <ShoppingBasketIcon />
          <Typography
            component="span"
            sx={{
              backgroundColor: (theme: Theme) => theme.palette.primary.main,
              borderRadius: "50%",
              color: (theme: Theme) => theme.palette.text.primary,
              height: "20px",
              width: "20px",
              position: "absolute",
              top: "0",
              left: "52%",
            }}
          >
            {carts?.length}
          </Typography>
        </IconButton>
      </Box>
    </>
  );
}
export default MobileNavbar;
