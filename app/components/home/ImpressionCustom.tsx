"use client";
import { Box, Typography, Theme } from "@mui/material";
import Image from "next/image";
import CardImpression from "@/app/components/card/CardImpression";
function ImpressionCustom() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        mt: 5,
        position: "relative",
      }}
    >
      <Image
        src="/images/babyshop2-home-pic4.svg"
        alt=""
        width="100"
        height="50"
      />
      <Typography
        sx={{
          color: (theme: Theme) => theme.palette.grey[600],
          fontSize: "14px",
        }}
      >
        It suits to your child
      </Typography>
      <Typography
        sx={{
          color: "black",
          my: 3,
          position: {
            lg: "absolute",
            md: "absolute",
            sm: "relative",
            xs: "relative",
          },
          top: "14%",
        }}
        variant="h5"
      >
        Impressions of our customers shopping for children!
      </Typography>
      <Box
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.primary.light,
          mt: 3,
          display: "flex",
          p: 5,
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
        className="container"
      >
        <CardImpression
          title="Amazing collection!"
          desc={`Et fames vulputate leo condimentum
    in lacus morbi orci congue aliquam feugiat laoreet finibus pede litora 
    torquent quam diam sed bibendum mauris interdum faucibus phasellus mattis per tellus nec massa letius vivamus`}
          image="/images/babyshop2-home-pic7.svg"
          logo="/images/babyshop2-testimonials-pic1.webp"
          name="Amoureth Johnson"
          career="CTO, Incognito"
        />
        <CardImpression
          title="Amazing collection!"
          desc={`Et fames vulputate leo condimentum
    in lacus morbi orci congue aliquam feugiat laoreet finibus pede litora 
    torquent quam diam sed bibendum mauris interdum faucibus phasellus mattis per tellus nec massa letius vivamus`}
          image="/images/babyshop2-home-pic7.svg"
          logo="/images/babyshop2-testimonials-pic2.webp"
          name="Adeleide Kennington"
          career="CEO, RedBook"
        />
        <CardImpression
          title="Amazing collection!"
          desc={`Et fames vulputate leo condimentum
    in lacus morbi orci congue aliquam feugiat laoreet finibus pede litora 
    torquent quam diam sed bibendum mauris interdum faucibus phasellus mattis per tellus nec massa letius vivamus`}
          image="/images/babyshop2-home-pic7.svg"
          logo="/images/babyshop2-testimonials-pic3.webp"
          name="Monique Chamberlain"
          career="Old, Ghost"
        />
      </Box>
    </Box>
  );
}
export default ImpressionCustom;
