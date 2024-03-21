"use client";
import {
  Container,
  Box,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import InputCustom from "../input/Input";
import ButtonCustom from "../button/Button";
import { useState, useMemo } from "react";
function AnotherRecieve() {
  let [loading, setLoading] = useState(false);
  let [show, setShow] = useState(false);

  const handleSubmit = () => {
    setTimeout(function () {
      // code to be executed repeatedly
      setLoading(true);
      setShow(false);
    }, 500);
  };
  useMemo(() => {
    setTimeout(function () {
      // code to be executed repeatedly
      setLoading(false);
      setShow(true);
    }, 500);
  }, []);
  useMemo(() => {
    setTimeout(function () {
      setShow(false);
    }, 500);
  }, []);
  return (
    <Container sx={{ color: "black", my: 5 }}>
      <Box
        sx={{
          border: "2px dashed black",
          p: 2,
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Image
            src={"/images/babyshop2-newsletter-pic1.svg"}
            alt=""
            width="100"
            height="100"
          />
        </Box>
        <Box sx={{ width: "40%" }}>
          <Typography component="span" sx={{ fontSize: "14px" }}>
            Sign up for the newsletter
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Receive a{" "}
            <Typography
              component="span"
              sx={{
                backgroundColor: "#F6DCB8",
                border: "1px solid black",
                borderRadius: "8px",
              }}
            >
              10%
            </Typography>{" "}
            discount on your purchases
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ m: 2, backgroundColor: "gray" }}
        />
        <Box sx={{ flex: 3 }}>
          <Typography component="h4" sx={{ fontSize: "16px" }}>
            Join our newsletter.
          </Typography>

          <InputCustom
            sx={{ backgroundColor: "rgba(240,245,247,1)", color: "gray" }}
            placeholder="E-mail address*"
            id="email"
          />
          <ButtonCustom
            variant="outlined"
            sx={{
              border: "2px solid black",
              borderRadius: "10px",
              color: "black",
              backgroundColor: "white",
              display: "flex",
              my: 2,
            }}
            onClick={handleSubmit}
          >
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              Subscribe Now
            </Typography>
          </ButtonCustom>
          {loading && <CircularProgress disableShrink />}
          {show && (
            <Typography component={"p"} sx={{ fontSize: "14px" }}>
              One or more fields have an error. Please check and try again.
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
export default AnotherRecieve;
