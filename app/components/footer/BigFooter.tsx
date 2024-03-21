"use client";
import {
  Box,
  Dialog,
  Typography,
  IconButton,
  Theme,
  Divider,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AnotherRecieve from "@/app/components/footer/AnotherRecieve";
import {useRef} from "react"
function BigFooter() {
  const clickPhoneIcon=useRef()

  return (
    <>
      <AnotherRecieve />
      <Box
        sx={{
          display: "flex",
          m: 3,
          color: "black",
          flexDirection: {
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HeadsetMicIcon sx={{ color: "black", fontSize: "40px" }} />
            <Divider orientation="vertical" flexItem sx={{ m: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
              //  ref={clickPhoneIcon}
                sx={{
                  color: (theme: Theme) => theme.palette.grey[300],
                  ":hover": {
                    color: (theme: Theme) => theme.palette.primary.light,
                  },
                }}
                component="a"
                href={`tel:+61 (0) 3 8376 6284`}
              >
                Got a questions? Call us 24/7!
              </Typography>
              <Typography sx={{ fontWeight: "700", color: "black" }}>
                +61 (0) 383 766 284
              </Typography>
            </Box>
          </Box>
          <Box>
            Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: (theme: Theme) =>
                  `2px solid ${theme.palette.grey[500]}`,
                borderRadius: "50%",
                p: 0.5,
                ":hover": {
                  border: (theme: Theme) =>
                    `2px solid ${theme.palette.primary.light}`,
                },
              }}
            >
              <FacebookIcon />
            </Box>
            <Box
              sx={{
                border: (theme: Theme) =>
                  `2px solid ${theme.palette.grey[500]}`,
                borderRadius: "50%",
                p: 0.5,
                ":hover": {
                  border: (theme: Theme) =>
                    `2px solid ${theme.palette.primary.light}`,
                },
                m: 2,
              }}
            >
              <InstagramIcon />
            </Box>
            <Box
              sx={{
                border: (theme: Theme) =>
                  `2px solid ${theme.palette.grey[500]}`,
                borderRadius: "50%",
                p: 0.5,
                ":hover": {
                  border: (theme: Theme) =>
                    `2px solid ${theme.palette.primary.light}`,
                },
              }}
            >
              <PinterestIcon />
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <List
              sx={{ color: "black" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Customer service
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="Orders" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Downloads" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Addresses" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Account details" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="lost password" />
              </ListItemButton>
            </List>
          </Box>
          <Box sx={{ flex: 1 }}>
            <List
              sx={{ color: "black" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Useful links
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="Contact us" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="About us" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Shipping & Returns" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Refund policy" />
              </ListItemButton>
            </List>
          </Box>
          <Box sx={{ flex: 1 }}>
            <List
              sx={{ color: "black" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Delivery
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="How it works" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Free Delivery" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="FAQ" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "black",
          alignItems: "center",
          m: 3,
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Typography>
          © 2024 Betheme by Muffin group | All Rights Reserved | Powered by
          WordPress
        </Typography>
        <Box>
          <Image src={"/images/Visa.svg"} alt="" width="50" height="50" />
          <Image src={"/images/DinersClub.svg"} alt="" width="50" height="50" />
          <Image src={"/images/Amex.svg"} alt="" width="50" height="50" />
          <Image src={"/images/Discover.svg"} alt="" width="50" height="50" />
          <Image src={"/images/Mastercard.svg"} alt="" width="50" height="50" />
          <Image src={"/images/Maestro.svg"} alt="" width="50" height="50" />
          <Image src={"/images/Stripe.svg"} alt="" width="50" height="50" />
          <Image src={"/images/PayPal.svg"} alt="" width="50" height="50" />
        </Box>
      </Box>
    </>
  );
}
export default BigFooter;
