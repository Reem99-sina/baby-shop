"use client";
import { Box, Typography, Theme } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardBlog from "@/app/components/card/CardBlog";
import { blogs } from "@/app/data/main";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
function Blog() {
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
          bottom: "2%",
          left: "83%",
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
  return (
    <Box
      sx={{
        backgroundColor: (theme: Theme) => theme.palette.primary.light,
        p: 5,
        position: "relative",
      }}
    >
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
        <Typography
          sx={{
            color: (theme: Theme) => theme.palette.grey[600],
            fontSize: "14px",
          }}
        >
          Great words, need some work
        </Typography>
        <Typography sx={{ color: "black", my: 3 }} variant="h5">
          Latest blog posts
        </Typography>
      </Box>
      <Box
        sx={{
          ".slick-slider": { overflowX: "hidden" },
          ".slick-dots li button:before ": { color: "black" },
          ".slick-dots li.slick-active button:before": { color: "black" },
          ".slick-dots li button:before": { fontSize: "16px" },
        }}
      >
        <Slider {...settings} arrows={false}>
          {blogs.map((blog) => (
            <CardBlog
            key={blog.href}
              title={blog.title}
              desc={blog.desc}
              image={blog.image}
              onClick={() => router.push(`/${blog.href}`)}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
export default Blog;
