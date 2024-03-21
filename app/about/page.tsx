"use client";
import { Box, Typography, Container, Divider, Theme } from "@mui/material";
// import ButtonCustom from "@/app/components/button/Button"
import Image from "next/image";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import GalleryImage from "../components/model/GalleryImage";
import { useState } from "react";
import ButtonCustom from "@/app/components/button/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Team from "./component/team";
function About() {
  let [appear, setAppear] = useState(false);
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("/images/babyshop2-section-bg2.webp")`,
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          color: "black",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <ButtonCustom
              variant="outlined"
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                p: 1,
                color: "black",
                backgroundColor: "#BEE0E9",
              }}
            >
              2023
            </ButtonCustom>
            <Typography sx={{ fontWeight: "700" }} variant="h3">
              Promotion on clothes from previous collections that are sold at
              reduced prices
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>
              Suspendisse consequat sed velit amet commodo commodo
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container sx={{ color: "black", my: 5 }}>
        <Typography sx={{ fontWeight: "700" }} variant="h4">
          Promotion on clothes from previous collections that are sold at
          reduced prices
        </Typography>
        <Typography sx={{ color: "gray", fontSize: "14px", my: 5 }}>
          In fusce a pellentesque neque urna consectetur consectetur odio.
          Dignissim congue massa arcu varius sapien integer gravida. Blandit
          amet etiam vel aenean eget.
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            my: 5,
            gap: 5,
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <ButtonCustom
              variant="outlined"
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                p: 1,
                color: "black",
                backgroundColor: "#F6DCB8",
              }}
            >
              1 200 000
            </ButtonCustom>
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              Promotion on clothes from previous
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px", my: 5 }}>
              Tortor etiam imperdiet aliquet senectus habitant pellentesque
              maximus neque quis fames egestas eleifend sem
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <ButtonCustom
              variant="outlined"
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                p: 1,
                color: "black",
                backgroundColor: "#F6DCB8",
              }}
            >
              97
            </ButtonCustom>
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              Dui dignissim aliquam scelerisque
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px", my: 5 }}>
              Pretium sed diam eleifend volutpat sociosqu faucibus accumsan
              ipsum curabitur ornare imperdiet arcu urna dapibus
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <ButtonCustom
              variant="outlined"
              sx={{
                border: "1px solid black",
                borderRadius: "8px",
                p: 1,
                color: "black",
                backgroundColor: "#F6DCB8",
              }}
            >
              250 000
            </ButtonCustom>
            <Typography sx={{ fontWeight: "700" }} variant="h5">
              Nascetur commodo at et parturient fermentum
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px", my: 5 }}>
              Consectetur tristique quis platea nisl ridiculus sodales torquent
              lacinia erat sit fusce porta sagittis Integer fringilla pretium
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",

            position: "relative",
          }}
        >
          <Image
            src="/images/babyshop2-home-pic4.svg"
            alt=""
            width="100"
            height="50"
          />
          <Typography sx={{ color: "gray" }}>Kids love this stuff</Typography>
          <Typography
            sx={{ color: "black", my: 3, fontWeight: "700" }}
            variant="h5"
          >
            Related Posts
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: "url(/images/babyshop2-section-bg3.svg)",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              backgroundImage: `url(/images/babyshop2-videobg.webp)`,
              height: "600px",
              width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => setAppear(true)}
          >
            <Box
              sx={{
                backgroundColor: (theme: Theme) => theme.palette.primary.main,
                p: 4,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRightIcon sx={{ color: "white", fontSize: "30px" }} />
            </Box>
          </Box>
        </Box>
      </Container>
      {appear && (
        <GalleryImage type="video" onClose={() => setAppear(false)}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1ZmmlMFj74k?si=HMLfqGJaWafaB6U4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </GalleryImage>
      )}
      <Box sx={{ backgroundColor: "#F6DCB8" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",

              position: "relative",
            }}
          >
            <Image
              src="/images/babyshop2-home-pic4.svg"
              alt=""
              width="100"
              height="50"
            />
            <Typography sx={{ color: "gray" }}>
              We love making kids smile
            </Typography>
            <Typography
              sx={{ color: "black", my: 3, fontWeight: "700" }}
              variant="h5"
            >
              Our Team Members
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              alignItems: "center",
              height: { lg: "600px", md: "600px", sm: "unset", xs: "unset" },
            }}
          >
            {[
              {
                image: "/images/babyshop2-team-pic3.webp",
                name: "Joanna Haze",
                career: "Sales manager",
              },
              {
                image: "/images/babyshop2-team-pic1.webp",
                name: "Veronika Loop",
                career: "CEO",
              },
              {
                image: "/images/babyshop2-team-pic2.webp",
                name: "Monique Beaulieu",
                career: "Sales manager",
              },
            ].map((ele, index) => (
              <Team
                image={ele.image}
                name={ele.name}
                career={ele.career}
                index={index}
                key={index}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "black", my: 3, fontWeight: "700" }}
              variant="h5"
            >
              Promotion on clothes from previous collections
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Suspendisse consequat sed velit amet commodo commodo
            </Typography>
            <ButtonCustom
              sx={{
                color: "black",
                my: 5,
                fontWeight: "700",
                border: "1px solid",
                borderRadius: "10px",
                p: 2,
                backgroundColor: "white",
              }}
              // onClick={onClick}
            >
              Contact Us <KeyboardArrowRightIcon />
            </ButtonCustom>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default About;
