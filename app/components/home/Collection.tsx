"use client";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ButtonCustom from "../button/Button";
import ButtonCustom from "@/app/components/button/Button";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function Collection() {
  let settings = {
    dots: false,
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
        // className={className}
        sx={{
          ...style,
          display: "block",
          color: "black",
          position: "absolute",
          right: "5%",
          top:"50%",
          fontSize: "54px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosIcon
        // className={className}
        sx={{
          ...style,
          display: "block",
          color: "black",
          position: "absolute",
          left: "5%",
          top:"50%",
          fontSize: "54px",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Slider {...settings}>
        <Box
          sx={{
            backgroundImage: `url(/images/babyshop2-offerslider-pic2.webp)`,
            maxWidth: "100%",
            height: "500px",
            backgroundPosition:"68% center",
            backgroundSize:"cover",
            color: "black",
            display: "flex !important",
            alignItems: "center",
            justifyContent: "center",
            py:1
          }}
        >
          <Container fixed>
            <ButtonCustom
              variant="outlined"
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                p: 1,
                color: "black",
              }}
            >
              2023
            </ButtonCustom>
            <Typography variant="h4" sx={{ my: 2, width: "55%" }}>
              New Autumn 2023 Collection
            </Typography>
            <Typography
              
              sx={{ my: 2, width: "55%", display: "block" }}
            >
              Pede tellus lacinia ultrices faucibus dapibus ex pulvinar semper
              lobortis
            </Typography>
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
            >
              <Typography component={"p"} sx={{ fontSize: "14px" }}>
                Products
              </Typography>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
            </ButtonCustom>
          </Container>
        </Box>

        <Box
          sx={{
            backgroundImage: `url(/images/babyshop2-offerslider-pic1.webp)`,
            maxWidth: "100%",
            height: "500px",
            backgroundPosition:" 68% center",
            backgroundSize:"cover",
            color: "black",
            display: "flex !important",
            alignItems: "center",
            justifyContent: "center",
            py:1
          }}
        >
          <Container fixed>
            <ButtonCustom
              variant="outlined"
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                p: 1,
                color: "black",
              }}
            >
              2023
            </ButtonCustom>
            <Typography variant="h4" sx={{ my: 2, width: "55%" }}>
              Get ready to winter with our TOP class clothes
            </Typography>
            <Typography
              
              sx={{ my: 2, width: "55%", display: "block" }}
            >
              Quis ipsum convallis vivamus augue mattis faucibus nec habitasse
              orci curabitur condimentum maximus himenaeos odio
            </Typography>
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
            >
              <Typography component={"p"} sx={{ fontSize: "14px" }}>
                Products
              </Typography>
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: "12px" }} />
            </ButtonCustom>
          </Container>
        </Box>
      </Slider>
    </Box>
  );
}
export default Collection;
