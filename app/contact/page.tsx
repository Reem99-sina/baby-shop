"use client";
import {
  Box,
  Typography,
  Container,
  Theme,
  Divider,
  FilledInput,
} from "@mui/material";
import ButtonCustom from "../components/button/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import Head from "next/head";
import EmailIcon from "@mui/icons-material/Email";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ReactMapGl,{Marker,Layer} from 'react-map-gl';
// import type {FillLayer} from 'react-map-gl';
function Contact() {
  return (
    <Box sx={{ color: "black", my: 5 }}>
      <Container>
        <ButtonCustom
          variant="outlined"
          sx={{
            border: "1px solid black",
            borderRadius: "8px",
            p: 1,
            color: "black",
            backgroundColor: "#f6dcb8",
          }}
        >
          Contact
        </ButtonCustom>
        <Typography sx={{ fontWeight: "700", my: 3 }} variant="h2">
          Contact with us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "700", my: 3 }} variant="h4">
              Our Headquarters
            </Typography>
            <Typography sx={{ my: 3 }}>
              Level 13, 2 Elizabeth St, Melbourne, Victoria 3000, Australia
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                display: "flex",
                my: 3,
                fontSize: "18px",
              }}
              component="a"
              href="tel:+61 (0) 3 8376 6284"
            >
              <PhoneIcon sx={{ mx: 2 }} />
              +61 (0) 3 8376 6284
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                display: "flex",
                my: 3,
                fontSize: "18px",
              }}
              component="a"
              href="mailto:no-reply@example.com"
            >
              <EmailIcon sx={{ mx: 2 }} />
              noreply@envato.com
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: "3px",
                  height: "100px",
                  backgroundColor: (theme: Theme) =>
                    theme.palette.primary.light,
                }}
              />
              <AccessTimeIcon sx={{ mx: 4 }} />
              <Box sx={{}}>
                <Typography sx={{ my: 3 }}>Monday - Sunday:</Typography>
                <Typography sx={{ my: 3 }}>06:00 AM - 10:00 PM</Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ borderWidth: "1px", mx: 3 }} />
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "8px",
              p: 5,
              display: "flex",
              flexDirection: "column",
              flex: 3,
            }}
          >
            <Typography sx={{ fontWeight: "700", my: 3 }} variant="h4">
              Have a question? Write to us!
            </Typography>
            <FilledInput
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder="Full name*"
            />
            <FilledInput
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder="Phone*"
            />
            <FilledInput
              sx={{ backgroundColor: "#f0f5f7", mb: 3 }}
              placeholder="E-mail address*"
            />
            <FilledInput
              sx={{
                backgroundColor: "#f0f5f7",
                ".MuiInputBase-root": { height: "200px" },
              }}
              placeholder="Your message*"
            />
            <ButtonCustom
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                backgroundColor: "white",
                p: 2,
                color: "black",
                my: 3,
              }}
            >
              Send a Message
            </ButtonCustom>
          </Box>
        </Box>
        {/* <Box sx={{ width: "100%", height: "100vw" }}>
        <iframe aria-hidden="true" frameborder="0" tabindex="-1" style={{zIndex: -1, position: "absolute",
           width: "100%", height: "100%", top: "0px", left: "0px", border: "none", opacity: 0}}></iframe>
        </Box> */}
      </Container>
    </Box>
  );
}
export default Contact;
