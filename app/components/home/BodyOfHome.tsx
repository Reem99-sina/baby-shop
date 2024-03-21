"use client";
import { Box, Dialog, Typography, IconButton, Theme } from "@mui/material";
import ButtonCustom from "../button/Button";
import Slider from "react-slick";
import Image from "next/image";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useRouter } from "next/navigation";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
function BodyOfHome() {
  const router = useRouter();
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined) => (
      <div
        style={{
          bottom: "19%",
          left: "90%",
          transform: "translateX(-50%)",
          position: "absolute",
        }}
      >
        <ul
          style={{
            margin: "0",
            padding: "0",
            listStyle: "none",
            display: "inline-block",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };
  const BodyProducts = [
    {
      image: "/images/babyshop2-home-pic1.webp",
      h2: "Our orange Collection",
      p: "Montes orci platea inceptos conubia mauris lacus facilisi tincidunt cras rutrum",
    },
    {
      image: "/images/babyshop2-home-pic3.webp",
      h2: "Our casual Collection",
      p: "Pellentesque netus aliquet dictum curae praesent",
    },
    {
      image: "/images/babyshop2-home-pic2.webp",
      h2: "Our yellow Collection",
      p: "Finibus sagittis felis semper gravida euismo",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
        m: 2,
        height: { lg: "600px", md: "unset", sm: "unset", xs: "unset" },
        gap: { sm: "10px", xs: "10px", md: "10px" },
        justifyContent: "flex-start",
        ".slick-slider": { overflow: "hidden", position: "relative" },
        ".slick-dots li button:before ": { color: "#fff" },
        ".slick-dots li.slick-active button:before": { color: "white" },
        ".slick-dots li button:before": { fontSize: "16px" },
      }}
    >
      <Slider {...settings} arrows={false}>
        {BodyProducts.map((product) => (
          <Box
          key={product.image}
            sx={{
              backgroundImage: `url(${product.image})`,
              p: 2,
              borderRadius: "10px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // height:"100%",
              minHeight: "600px",
              display: "flex !important",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography variant={"h2"} sx={{ color: "black" }}>
              {product.h2}
            </Typography>
            <Typography component={"p"} sx={{ color: "black", my: 2 }}>
              {product.p}
            </Typography>
            <ButtonCustom
              variant="outlined"
              sx={{
                border: "2px solid black",
                borderRadius: "10px",
                color: "black",
                backgroundColor: "white",
              }}
            >
              <Typography component={"p"} sx={{ fontSize: "14px" }}>
                Buy Now
              </Typography>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
            </ButtonCustom>
          </Box>
        ))}
      </Slider>

      <Box
        sx={{
          flex: 3,
          backgroundColor: "#CADEE5",
          display: "flex",
          borderRadius: "10px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "30%",
          color: "black",
          p: 2,
        }}
      >
        <Typography variant={"h2"}>Special offer</Typography>
        <Typography component={"p"} sx={{ fontSize: "14px" }}>
          Baby slippers
        </Typography>

        <Image
          src={"/images/babyshop2-product-pic8.webp"}
          alt={"logo"}
          width={"170"}
          height={"170"}
        />
        <Box sx={{ display: "flex", width: "100%", m: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              00
            </Typography>
            <Typography>days</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              00
            </Typography>
            <Typography>hours</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              00
            </Typography>
            <Typography>minutes</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              00
            </Typography>
            <Typography>seconds</Typography>
          </Box>
        </Box>
        <ButtonCustom
          variant="outlined"
          sx={{
            border: "2px solid black",
            borderRadius: "10px",
            color: "black",
            backgroundColor: "white",
          }}
          onClick={() => router.push("/product/baby-slippers")}
        >
          <Typography component={"p"} sx={{ fontSize: "14px" }}>
            Buy Now
          </Typography>
          <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
        </ButtonCustom>
      </Box>
    </Box>
  );
}
export default BodyOfHome;
